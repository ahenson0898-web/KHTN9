let data = JSON.parse(localStorage.getItem('khtnData')) || {
    users: [], // { username, pwHash }
    loggedInUser: null,
    progress: {
        ly: { percent: 0, score: 0, done: 0 },
        hoa: { percent: 0, score: 0, done: 0 },
        sinh: { percent: 0, score: 0, done: 0 },
        total: { percent: 0, bestScore: 0 }
    },
    achievements: [],
    leaderboard: []
};

// Normalize old stored data that may not have `users` or `loggedInUser`
if (!Array.isArray(data.users)) data.users = [];
if (!('loggedInUser' in data)) data.loggedInUser = null;
// Remove old leaderboard entries per user's request (clear legacy leaderboard)
data.leaderboard = [];
persistData();

// Ensure each user has progress and achievements fields
data.users.forEach(u => {
    if (!u.progress) u.progress = { ly: { percent:0, score:0, done:0 }, hoa: { percent:0, score:0, done:0 }, sinh: { percent:0, score:0, done:0 }, total: { percent:0, bestScore:0 } };
    if (!Array.isArray(u.achievements)) u.achievements = [];
});

// Helper: save data
function persistData() { localStorage.setItem('khtnData', JSON.stringify(data)); }

// Update small sync-status UI element in header
function updateSyncStatus(state) {
    try {
        const el = document.getElementById('syncStatus');
        if (!el) return;
        const labels = {
            local: 'Đồng bộ: Cục bộ',
            remote: 'Đồng bộ: Từ xa (online)',
            connecting: 'Đang kết nối...',
            error: 'Lỗi đồng bộ'
        };
        el.textContent = labels[state] || state;
        el.className = 'ms-3 sync-status small text-muted ' + (state || '');
    } catch (e) { /* ignore */ }
}

// Utility: SHA-256 hash (returns hex)
async function hashPassword(password) {
    try {
        if (window.crypto && crypto.subtle && typeof crypto.subtle.digest === 'function') {
            const enc = new TextEncoder();
            const buf = enc.encode(password);
            const hashBuf = await crypto.subtle.digest('SHA-256', buf);
            const hashArr = Array.from(new Uint8Array(hashBuf));
            return hashArr.map(b => b.toString(16).padStart(2, '0')).join('');
        }
    } catch (e) {
        console.warn('WebCrypto SHA-256 failed:', e);
    }
    // Fallback (less secure) for environments without WebCrypto (e.g., file:// in some browsers)
    try {
        // base64 of UTF-8 as a fallback unique fingerprint
        return btoa(unescape(encodeURIComponent(password)));
    } catch (e) {
        // last resort: return plain (not recommended)
        return password;
    }
}

// Update header user area
function renderUserArea() {
    const userArea = document.getElementById('userArea');
    if (!userArea) return;
    userArea.innerHTML = '';
    if (data.loggedInUser) {
        const span = document.createElement('div'); span.className = 'user-badge';
        span.innerHTML = `<span class="user-name">${data.loggedInUser}</span> <button class="btn btn-sm btn-outline-dark" onclick="logoutUser()">Đăng xuất</button>`;
        userArea.appendChild(span);
    } else {
        const loginBtn = document.createElement('button'); loginBtn.className = 'btn btn-sm btn-light'; loginBtn.textContent = 'Đăng nhập'; loginBtn.onclick = () => openAuthModal('login');
        const regBtn = document.createElement('button'); regBtn.className = 'btn btn-sm btn-primary ms-2'; regBtn.textContent = 'Đăng ký'; regBtn.onclick = () => openAuthModal('register');
        userArea.appendChild(loginBtn); userArea.appendChild(regBtn);
    }
    // Refresh sidebar to show personal progress immediately
    try { updateProgressSidebar(); } catch (e) { /* ignore if not ready */ }
}

// Cập nhật sidebar phải
function updateProgressSidebar() {
    // If a user is logged in, show their personal progress; otherwise show global progress
    let p = data.progress;
    let achievements = data.achievements || [];
    if (data.loggedInUser) {
        const u = (data.users || []).find(x => x.username === data.loggedInUser);
        if (u && u.progress) {
            p = u.progress;
            achievements = u.achievements || [];
        }
    }
    const totalLy = (questions_ly || []).length;
    const totalHoa = (questions_hoa || []).length;
    const totalSinh = (questions_sinh || []).length;

    // Show actual percent (can exceed 100 if user repeated many times),
    // but cap the visual bar width at 100%.
    const lyPct = p.ly.percent || 0;
    document.getElementById('lyPercent').textContent = `${lyPct}% (${p.ly.done}/${totalLy})`;
    document.getElementById('lyBar').style.width = `${Math.min(lyPct, 100)}%`;
    document.getElementById('lyBar').textContent = `${lyPct}%`;

    const hoaPct = p.hoa.percent || 0;
    document.getElementById('hoaPercent').textContent = `${hoaPct}% (${p.hoa.done}/${totalHoa})`;
    document.getElementById('hoaBar').style.width = `${Math.min(hoaPct, 100)}%`;
    document.getElementById('hoaBar').textContent = `${hoaPct}%`;

    const sinhPct = p.sinh.percent || 0;
    document.getElementById('sinhPercent').textContent = `${sinhPct}% (${p.sinh.done}/${totalSinh})`;
    document.getElementById('sinhBar').style.width = `${Math.min(sinhPct, 100)}%`;
    document.getElementById('sinhBar').textContent = `${sinhPct}%`;

    document.getElementById('totalProgress').textContent = `Tổng tiến độ: ${p.total.percent}%`;
    document.getElementById('bestScore').textContent = `Điểm cao nhất: ${p.total.bestScore}`;

    if (achievements.length > 0) {
        document.getElementById('achievements').innerHTML = `
            <strong>Huy hiệu:</strong>
            ${achievements.map(a => `<span class="badge bg-warning text-dark ms-2">${a} 🏅</span>`).join('')}
        `;
    } else {
        document.getElementById('achievements').innerHTML = '<strong>Huy hiệu:</strong> Chưa có';
    }

    // Bảng đua top: show all registered users (their best score if exists), plus any standalone leaderboard entries
    const usersList = (data.users || []).map(u => {
        const entry = (data.leaderboard || []).find(e => e.name === u.username);
        return { name: u.username, score: entry ? entry.score : 0, date: entry ? entry.date : null };
    });
    const otherEntries = (data.leaderboard || []).filter(e => !(data.users || []).some(u => u.username === e.name));
    const combined = [...usersList, ...otherEntries];
    const sorted = combined.sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 5);
    const lbEl = document.getElementById('leaderboard');
    if (sorted.length === 0) {
        lbEl.innerHTML = '<li class="list-group-item text-center text-muted fst-italic">Chưa có kỷ lục nào</li>';
    } else {
        lbEl.innerHTML = sorted.map((entry, index) => {
            const isSelf = data.loggedInUser && entry.name === data.loggedInUser;
            const display = (entry && entry.name) ? (entry.name.includes('@') ? entry.name.split('@')[0] : entry.name) : 'Người chơi';
            const initials = display.split(/\s+/).map(s => s[0]).slice(0,2).join('').toUpperCase();
            const medalClass = index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : '';
            const avatarSizeClass = index < 3 ? 'large' : 'small';
            return `
            <li class="list-group-item lb-item ${isSelf ? 'lb-highlight' : ''}">
                <div class="d-flex align-items-center">
                    <div class="lb-rank-medal ${medalClass}">${index + 1}</div>
                    <div class="lb-avatar ${avatarSizeClass}">${initials}</div>
                    <div>
                        <div class="lb-name">${display}${isSelf ? ' • Bạn' : ''}</div>
                        <div class="lb-sub">${entry.date || ''}</div>
                    </div>
                </div>
                <div class="text-end">
                    <div class="lb-score">${entry.score || 0}</div>
                </div>
            </li>`;
        }).join('');
    }
    // (no hint shown)
}

// Hàm lưu điểm và cập nhật tiến độ (gọi từ quiz.js và full-exam.js)
function saveScore(score, subject = null) {
    const today = new Date().toISOString().split('T')[0];
    // If subject is null => full exam. Only record full exams for logged-in users and keep each user's best score.
    if (!subject) {
        if (!data.loggedInUser) {
            notify('Bạn chưa đăng nhập — điểm thi thử không được lưu vào bảng đua. Vui lòng đăng nhập.', 'error');
            return;
        }
        const username = data.loggedInUser;
        // Find existing entry for this user
        let existing = (data.leaderboard || []).find(e => e.name === username);
        if (!existing) {
            data.leaderboard.push({ name: username, score, date: today });
        } else if (score > existing.score) {
            existing.score = score;
            existing.date = today;
        }
        // Sort leaderboard by score desc
        data.leaderboard.sort((a, b) => b.score - a.score);
        // Keep top 50
        data.leaderboard = data.leaderboard.slice(0, 50);

        if (score > data.progress.total.bestScore) {
            data.progress.total.bestScore = score;
        }

        const avg = Math.round((data.progress.ly.percent + data.progress.hoa.percent + data.progress.sinh.percent) / 3);
        data.progress.total.percent = avg;

        // Persist and refresh
        persistData();
        updateProgressSidebar();
        // Try save to remote leaderboard if available
        if (typeof saveScoreRemote === 'function') {
            saveScoreRemote(username, score).catch(err => console.warn('Remote save failed', err));
        }
        return;
    }

    // Non-full-subject quizzes: update current user's personal progress if logged in,
    // otherwise update global progress as before.
    const who = data.loggedInUser || 'Khách';
    if (data.loggedInUser) {
        const u = (data.users || []).find(x => x.username === data.loggedInUser);
        if (u) {
            // update per-user subject progress
            const totalQ = subject === 'ly' ? (questions_ly || []).length :
                       subject === 'hoa' ? (questions_hoa || []).length : (questions_sinh || []).length;
            u.progress[subject].done += score;
            u.progress[subject].score += score;
            u.progress[subject].percent = totalQ > 0 ? Math.min(100, Math.round((u.progress[subject].done / totalQ) * 100)) : u.progress[subject].percent;
            if (score === totalQ && !u.achievements.includes("Hoàn Hảo")) u.achievements.push("Hoàn Hảo");
            if (score > u.progress.total.bestScore) u.progress.total.bestScore = score;
            // recompute user's total percent
            u.progress.total.percent = Math.round((u.progress.ly.percent + u.progress.hoa.percent + u.progress.sinh.percent)/3);
        }
    } else {
        // no user: update global data.progress
        data.leaderboard.push({ name: who, score, date: today });
        if (score > data.progress.total.bestScore) data.progress.total.bestScore = score;
        if (subject) {
            const totalQ = subject === 'ly' ? (questions_ly || []).length :
                       subject === 'hoa' ? (questions_hoa || []).length : (questions_sinh || []).length;
            data.progress[subject].done += score;
            data.progress[subject].score += score;
            data.progress[subject].percent = totalQ > 0 ? Math.min(100, Math.round((data.progress[subject].done / totalQ) * 100)) : data.progress[subject].percent;
            if (score === totalQ && !data.achievements.includes("Hoàn Hảo")) data.achievements.push("Hoàn Hảo");
        }
        data.progress.total.percent = Math.round((data.progress.ly.percent + data.progress.hoa.percent + data.progress.sinh.percent)/3);
    }

    // Achievements: for global we keep previous logic; for per-user achievements they are stored per user
    if (!data.loggedInUser) {
        if (data.progress.total.percent >= 80 && !data.achievements.includes("Chuyên Cần")) data.achievements.push("Chuyên Cần");
        if (data.leaderboard.length >= 5 && !data.achievements.includes("Thần Tốc")) data.achievements.push("Thần Tốc");
    }

    persistData();
    updateProgressSidebar();
    // Thông báo ngắn cho người dùng (dùng notify nếu có, fallback console)
    try {
        if (typeof notify === 'function') notify(`Tiến độ đã được cập nhật. Điểm: ${score}`);
        else if (typeof showNotification === 'function') showNotification(`Tiến độ đã được cập nhật. Điểm: ${score}`);
        else console.log('Tiến độ:', score);
    } catch (e) { console.log('Tiến độ:', score); }
}

// --- Authentication modal & handlers ---
function openAuthModal(mode = 'login') {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    switchAuthMode(mode);
    modal.style.display = 'flex';
}

function closeAuthModal() { const modal = document.getElementById('authModal'); if (modal) modal.style.display = 'none'; }

function switchAuthMode(mode) {
    const loginForm = document.getElementById('loginForm');
    const regForm = document.getElementById('registerForm');
    const title = document.getElementById('authModalTitle');
    const primary = document.getElementById('authPrimaryBtn');
    const switchBtn = document.getElementById('switchToRegister');
    // If Firebase Auth available, use Email labels to avoid confusion
    try {
        if (window._khtn_fb_auth) {
            const lUserLabel = loginForm.querySelector('label');
            const rUserLabel = regForm.querySelectorAll('label')[0];
            if (lUserLabel) lUserLabel.textContent = 'Email';
            if (rUserLabel) rUserLabel.textContent = 'Email';
            const lInput = document.getElementById('loginUsername');
            const rInput = document.getElementById('regUsername');
            if (lInput) lInput.placeholder = 'you@example.com';
            if (rInput) rInput.placeholder = 'you@example.com';
        }
    } catch (e) { /* ignore */ }
    if (mode === 'register') {
        loginForm.style.display = 'none'; regForm.style.display = 'block'; title.textContent = 'Đăng ký tài khoản'; primary.textContent = 'Đăng ký'; switchBtn.textContent = 'Đã có tài khoản? Đăng nhập';
        switchBtn.onclick = () => switchAuthMode('login');
    } else {
        loginForm.style.display = 'block'; regForm.style.display = 'none'; title.textContent = 'Đăng nhập'; primary.textContent = 'Đăng nhập'; switchBtn.textContent = 'Đăng ký';
        switchBtn.onclick = () => switchAuthMode('register');
    }
}

async function handleAuthPrimary() {
    const primary = document.getElementById('authPrimaryBtn');
    if (!primary) return;
    if (primary.textContent.includes('Đăng ký')) return registerUser();
    return loginUser();
}

async function registerUser() {
    try {
        const u = (document.getElementById('regUsername') || {}).value || '';
        const p = (document.getElementById('regPassword') || {}).value || '';
        const p2 = (document.getElementById('regPassword2') || {}).value || '';
        if (!u.trim() || !p) return notify('Vui lòng nhập tên và mật khẩu', 'error');
        if (p !== p2) return notify('Mật khẩu nhập lại không khớp', 'error');
        // If Firebase Auth is initialized, use remote signup
        if (window._khtn_fb_auth && typeof signupRemote === 'function') {
            try {
                const cred = await signupRemote(u, p);
                const email = (cred && cred.user && (cred.user.email || cred.user.uid)) || u;
                // ensure local record exists for profile display
                if (!data.users.find(x => x.username === email)) {
                    data.users.push({ username: email, pwHash: null,
                        progress: { ly: { percent:0,score:0,done:0 }, hoa: { percent:0,score:0,done:0 }, sinh: { percent:0,score:0,done:0 }, total: { percent:0,bestScore:0 } }, achievements: []
                    });
                }
                data.loggedInUser = email;
                migrateAnonymousScores(email);
                persistData(); renderUserArea(); closeAuthModal(); notify('Đăng ký thành công. Bạn đã đăng nhập.', 'success'); updateProgressSidebar();
                return;
            } catch (err) {
                console.error('Firebase signup failed', err);
                // Friendly handling for invalid API key / config errors
                const code = err && (err.code || '');
                if (code && code.toString().toLowerCase().includes('api-key')) {
                    return notify('Đăng ký thất bại: cấu hình Firebase không hợp lệ (API key). Ứng dụng đang dùng lưu trữ cục bộ.', 'error');
                }
                const message = (err && err.message) ? `Đăng ký thất bại (Firebase): ${err.message}` : 'Đăng ký thất bại (Firebase). Vui lòng thử lại.';
                return notify(message, 'error');
            }
        }

        // Fallback: local registration
        if (data.users.find(x => x.username === u)) return notify('Tên đăng nhập đã tồn tại', 'error');
        const hash = await hashPassword(p);
        data.users.push({ username: u, pwHash: hash,
            progress: {
                ly: { percent: 0, score: 0, done: 0 },
                hoa: { percent: 0, score: 0, done: 0 },
                sinh: { percent: 0, score: 0, done: 0 },
                total: { percent: 0, bestScore: 0 }
            },
            achievements: []
        });
        data.loggedInUser = u;
        migrateAnonymousScores(u);
        persistData(); renderUserArea(); closeAuthModal(); notify('Đăng ký thành công. Bạn đã đăng nhập.', 'success'); updateProgressSidebar();
    } catch (err) {
        console.error('Lỗi đăng ký:', err);
        notify('Xảy ra lỗi khi đăng ký. Vui lòng thử lại.', 'error');
    }
}

async function loginUser() {
    try {
        const u = (document.getElementById('loginUsername') || {}).value || '';
        const p = (document.getElementById('loginPassword') || {}).value || '';
        if (!u.trim() || !p) return notify('Vui lòng nhập tên và mật khẩu', 'error');
        // If Firebase Auth is available, use remote login
        if (window._khtn_fb_auth && typeof loginRemote === 'function') {
            try {
                const cred = await loginRemote(u, p);
                const email = (cred && cred.user && (cred.user.email || cred.user.uid)) || u;
                if (!data.users.find(x => x.username === email)) {
                    data.users.push({ username: email, pwHash: null,
                        progress: { ly: { percent:0,score:0,done:0 }, hoa: { percent:0,score:0,done:0 }, sinh: { percent:0,score:0,done:0 }, total: { percent:0,bestScore:0 } }, achievements: []
                    });
                }
                data.loggedInUser = email;
                migrateAnonymousScores(email);
                persistData(); renderUserArea(); closeAuthModal(); notify('Đăng nhập thành công', 'success'); updateProgressSidebar();
                return;
            } catch (err) {
                console.error('Firebase login failed', err);
                const code = err && (err.code || '');
                if (code && code.toString().toLowerCase().includes('api-key')) {
                    return notify('Đăng nhập thất bại: cấu hình Firebase không hợp lệ (API key). Ứng dụng đang dùng lưu trữ cục bộ.', 'error');
                }
                const message = (err && err.message) ? `Đăng nhập thất bại (Firebase): ${err.message}` : 'Đăng nhập thất bại (Firebase). Kiểm tra email/mật khẩu.';
                return notify(message, 'error');
            }
        }

        const found = data.users.find(x => x.username === u);
        if (!found) return notify('Không tìm thấy tài khoản', 'error');
        const hash = await hashPassword(p);
        if (hash !== found.pwHash) return notify('Mật khẩu không đúng', 'error');
        data.loggedInUser = u;
        migrateAnonymousScores(u);
        persistData(); renderUserArea(); closeAuthModal(); notify('Đăng nhập thành công', 'success'); updateProgressSidebar();
    } catch (err) {
        console.error('Lỗi đăng nhập:', err);
        notify('Xảy ra lỗi khi đăng nhập. Vui lòng thử lại.', 'error');
    }
}

    function migrateAnonymousScores(username) {
        if (!username) return;
        const anonNames = new Set(['Học Sinh', 'Khách', null, undefined]);
        // also include legacy data.userName if present
        try {
            const raw = JSON.parse(localStorage.getItem('khtnData')) || {};
            if (raw && raw.userName) anonNames.add(raw.userName);
        } catch (e) {}

        let changed = false;
        data.leaderboard = (data.leaderboard || []).map(entry => {
            if (!entry || !entry.name) return entry;
            if (anonNames.has(entry.name)) { changed = true; return { ...entry, name: username }; }
            return entry;
        });
        if (changed) {
            persistData();
            updateProgressSidebar();
        }
    }
function logoutUser() {
    // If Firebase Auth present, sign out remotely as well
    try {
        if (window._khtn_fb_auth && typeof window._khtn_fb_auth.signOut === 'function') {
            window._khtn_fb_auth.signOut().catch(e => console.warn('Firebase signOut failed', e));
        }
    } catch (e) {}
    data.loggedInUser = null;
    persistData(); renderUserArea(); notify('Bạn đã đăng xuất'); updateProgressSidebar();
}

// Hàm thông báo đơn giản dùng chung (nếu quiz.js không cung cấp showNotification)
function notify(message, type = 'success', timeout = 3500) {
    try {
        const exist = document.getElementById('khtn-notif-container');
        let container = exist;
        if (!container) {
            container = document.createElement('div');
            container.id = 'khtn-notif-container';
            container.style.position = 'fixed';
            container.style.top = '16px';
            container.style.right = '16px';
            container.style.zIndex = 99999;
            document.body.appendChild(container);
        }

        const el = document.createElement('div');
        el.textContent = message;
        el.style.marginBottom = '8px';
        el.style.padding = '10px 14px';
        el.style.borderRadius = '8px';
        el.style.color = '#fff';
        el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.18)';
        el.style.opacity = '0';
        el.style.transition = 'opacity 220ms ease, transform 220ms ease';
        el.style.transform = 'translateY(-6px)';
        el.style.background = type === 'success' ? '#28a745' : (type === 'error' ? '#dc3545' : '#333');

        container.appendChild(el);
        requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });

        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-6px)';
            setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 260);
        }, timeout);
    } catch (err) {
        try { alert(message); } catch (e) { console.log(message); }
    }
}

// Modal chọn chủ đề + số câu cho từng môn

window.currentModalSubject = '';
async function showSubjectOptions(subject) {
    window.currentModalSubject = subject;
    const title = subject === 'ly' ? 'Vật Lý' : subject === 'hoa' ? 'Hóa Học' : 'Sinh Học';
    const total = subject === 'ly' ? (questions_ly || []).length : subject === 'hoa' ? (questions_hoa || []).length : (questions_sinh || []).length;
    const select = document.getElementById('subjectTopicSelect');
    // Populate topics: for `ly` try to read from pages/ly-thuyet.html; otherwise fallback to topics from questions_* files
    select.innerHTML = '';
    const optAll = document.createElement('option'); optAll.value = 'all'; optAll.text = 'Tất cả'; select.appendChild(optAll);
    try {
        const resp = await fetch('pages/ly-thuyet.html');
        if (resp.ok) {
            const txt = await resp.text();
            const doc = new DOMParser().parseFromString(txt, 'text/html');
            const mapping = { ly: 'VẬT LÍ', hoa: 'HOÁ HỌC', sinh: 'SINH HỌC' };
            const want = mapping[subject] || '';
            function normalize(s) { return (s || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g,'').toLowerCase(); }
            const cards = doc.querySelectorAll('.card');
            cards.forEach(card => {
                const h = card.querySelector('.subject-header');
                if (!h) return;
                if (normalize(h.textContent).startsWith(normalize(want))) {
                    const btns = card.querySelectorAll('.topic-btn');
                    btns.forEach(b => {
                        const t = b.textContent.trim();
                        if (t) {
                            const o = document.createElement('option'); o.value = t; o.text = t; select.appendChild(o);
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.warn('Không lấy được chủ đề từ ly-thuyet.html:', e);
    }

    // Built-in fallback topics (used when fetching pages/ly-thuyet.html fails, e.g., file://)
    const builtInTopics = {
        ly: ["Điện học","Quang học","Năng lượng"],
        hoa: [
            "Chuyên đề 1. KIM LOẠI – PHI KIM",
            "Chuyên đề 2. HỢP CHẤT HỮU CƠ – HIĐROCACBON – NHIÊN LIỆU",
            "Chuyên đề 3. ANCOL ETYLIC – AXIT AXETIC – ESTE",
            "Chuyên đề 4. HÓA HỮU CƠ TRONG ĐỜI SỐNG",
            "Chuyên đề 5. TÀI NGUYÊN – MÔI TRƯỜNG",
            "Chuyên đề 6. TỔNG HỢP"
        ],
        sinh: ["Cơ thể người","Sinh sản & sức khoẻ","Di truyền","Sinh vật & môi trường"]
    };

    // Fallback: populate topics from questions_* if select has only 'Tất cả'
    if (select.options.length <= 1) {
        // Try derive from questions data first (if questions have .topic fields)
        const pool = subject === 'ly' ? (questions_ly || []) : subject === 'hoa' ? (questions_hoa || []) : (questions_sinh || []);
        const topics = [...new Set(pool.map(q => q.topic).filter(Boolean))];
        if (topics.length > 0) {
            topics.forEach(t => { const o = document.createElement('option'); o.value = t; o.text = t; select.appendChild(o); });
        } else if (builtInTopics[subject] && builtInTopics[subject].length > 0) {
            // Last-resort: use hard-coded topics matching pages/ly-thuyet.html
            builtInTopics[subject].forEach(t => { const o = document.createElement('option'); o.value = t; o.text = t; select.appendChild(o); });
            console.warn('Using built-in topic list for', subject);
        }
    }
    const countInput = document.getElementById('subjectCountInput');
    if (countInput) {
        countInput.max = Math.max(1, total);
        countInput.value = Math.min(10, total) || 10;
    }
    const modalTitle = document.getElementById('subjectModalTitle'); if (modalTitle) modalTitle.textContent = `Ôn tập ${title}`;
    const modal = document.getElementById('subjectModal');
    if (modal) { modal.style.display = 'flex'; }
}

function closeSubjectModal() {
    const modal = document.getElementById('subjectModal'); if (modal) modal.style.display = 'none';
}

function startFilteredQuiz(subject) {
    // Read selections
    const topic = document.getElementById('subjectTopicSelect') ? document.getElementById('subjectTopicSelect').value : 'all';
    const count = parseInt(document.getElementById('subjectCountInput') ? document.getElementById('subjectCountInput').value : '10', 10) || 10;
    let pool = subject === 'ly' ? (questions_ly || []) : subject === 'hoa' ? (questions_hoa || []) : (questions_sinh || []);
    if (topic && topic !== 'all') {
        // If questions already have .topic fields, use them
        if (pool.some(q => q && q.topic)) {
            pool = pool.filter(q => q.topic === topic);
        } else {
            // No .topic metadata: apply subject-specific heuristics
            const t = (topic || '').toLowerCase();
            if (subject === 'hoa') {
                // Try keyword-based filtering first (more robust than fixed index ranges)
                const hoaKeywordMap = [
                    { keys: ['kim', 'kim loại', 'phi kim'], filter: ['kim loại','phi kim','sắt','đồng','nhôm','kẽm','vàng','đồng','sắt','gang'] },
                    { keys: ['hợp chất', 'hiđrocacbon', 'nhiên liệu', 'hữu cơ'], filter: ['hiđrocacbon','metan','etan','xăng','dầu','polietilen','anc','anken','hidrocacbon','hợp chất hữu cơ'] },
                    { keys: ['ancol', 'axit', 'este', 'ancol etylic'], filter: ['ancol','axit','este','etanol','axetic'] },
                    { keys: ['tài nguyên', 'môi trường'], filter: ['tài nguyên','môi trường','ô nhiễm','mưa axit','tái chế'] }
                ];
                let applied = false;
                for (const entry of hoaKeywordMap) {
                    if (entry.keys.some(k => t.indexOf(k) !== -1)) {
                        const kws = entry.filter;
                        pool = pool.filter(q => {
                            const text = (q.question || q.q || '').toLowerCase();
                            return kws.some(kw => text.indexOf(kw) !== -1);
                        });
                        applied = true;
                        break;
                    }
                }
                if (!applied) {
                    // Map 'Chuyên đề X' to question index ranges (legacy fallback)
                    const ranges = {
                        'chuyên đề 1': [0, 19],   // ids 1-20
                        'chuyên đề 2': [20, 39],  // ids 21-40
                        'chuyên đề 3': [40, 54],  // ids 41-55
                        'chuyên đề 4': [55, 79],  // ids 56-80
                        'chuyên đề 5': [80, 89],  // ids 81-90
                        'tổng hợp': [90, (pool.length - 1)]
                    };
                    let matched = false;
                    Object.keys(ranges).forEach(k => {
                        if (t.indexOf(k) !== -1) {
                            const [from, to] = ranges[k];
                            pool = pool.slice(from, Math.min(to + 1, pool.length));
                            matched = true;
                        }
                    });
                    if (!matched) {
                        // fallback: try exact match on displayed option text containing digit
                        const m = t.match(/\d+/);
                        if (m) {
                            const n = parseInt(m[0], 10);
                            if (!isNaN(n)) {
                                // approximate: each chuyên đề has ~20 questions
                                const start = Math.max(0, (n - 1) * 20);
                                pool = pool.slice(start, start + 20);
                            }
                        }
                    }
                }
            } else if (subject === 'ly') {
                // Keyword-based heuristics for Lý
                const keywords = {
                    'điện': [' điện ', 'điện ', 'ohm', 'dòng', 'điện trở', 'hiệu điện thế', 'công suất'],
                    'quang': ['ánh sáng', 'gương', 'khúc xạ', 'snell', 'tán xạ', 'phản xạ', 'bước sóng'],
                    'năng lượng': ['năng lượng', 'công ', 'động năng', 'thế năng', 'công suất', 'cơ năng']
                };
                let kws = [];
                Object.keys(keywords).forEach(k => { if (t.indexOf(k) !== -1) kws = keywords[k]; });
                if (kws.length > 0) {
                    pool = pool.filter(q => {
                        const text = (q.q || '').toLowerCase();
                        return kws.some(kw => text.indexOf(kw) !== -1);
                    });
                } else {
                    // If no keyword matched, try simple substring match
                    pool = pool.filter(q => (q.q || '').toLowerCase().indexOf(t) !== -1);
                }
            } else if (subject === 'sinh') {
                const keywords = {
                    'cơ thể': ['tiêu hoá','hô hấp','tuần hoàn','bài tiết','thần kinh','phế nang','tiểu cầu'],
                    'sinh sản': ['sinh sản','giao tử','tuổi dậy thì','sinh dục','sinh sản'],
                    'di truyền': ['adn','gen','nhiễm sắc','di truyền','alel','đột biến','mendel'],
                    'môi trường': ['quần thể','quần xã','môi trường','sinh thái','chuỗi thức ăn']
                };
                let kws = [];
                Object.keys(keywords).forEach(k => { if (t.indexOf(k) !== -1) kws = keywords[k]; });
                if (kws.length > 0) {
                    pool = pool.filter(q => {
                        const text = (q.q || '').toLowerCase();
                        return kws.some(kw => text.indexOf(kw) !== -1);
                    });
                } else {
                    pool = pool.filter(q => (q.q || '').toLowerCase().indexOf(t) !== -1);
                }
            }
        }
    }
    // Shuffle & slice
    // If filtering produced no questions, fallback to full unfiltered pool and warn
    if (!pool || pool.length === 0) {
        console.warn('Filtered pool empty for subject', subject, 'topic', topic);
        notify('Không tìm thấy câu hỏi cho chủ đề đã chọn — sử dụng tất cả câu hỏi của môn.', 'error');
        pool = subject === 'ly' ? (questions_ly || []) : subject === 'hoa' ? (questions_hoa || []) : (questions_sinh || []);
    }
    const shuffled = pool.slice().sort(() => Math.random() - 0.5).slice(0, Math.max(1, Math.min(count, pool.length)));

    // Set globals used by quiz.js and start
    try {
        currentQuiz = shuffled;
        currentQuestion = 0;
        score = 0;
        currentSubject = subject;
        closeSubjectModal();
        document.getElementById('mainMenu').style.display = 'none';
        // Call quiz rendering
        if (typeof showSubjectQuestion === 'function') showSubjectQuestion();
    } catch (e) {
        console.error('Không thể bắt đầu quiz đã lọc:', e);
        notify('Lỗi khi bắt đầu ôn tập. Vui lòng thử lại.', 'error');
    }
}

// Tin tức và mẹo vặt hiển thị ngay (tin có link, mẹo đã chắt lọc)
const newsItems = [
    { title: "Công bố đề minh họa 2026", url: "https://moet.gov.vn/", source: "Bộ GD&ĐT", domain: "moet.gov.vn" },
    { title: "Hướng dẫn ôn luyện và kỳ thi", url: "https://hanoi.edu.vn/", source: "Sở GD Hà Nội", domain: "hanoi.edu.vn" },
    { title: "Mẹo học nhanh - chuyên mục giáo dục", url: "https://giaoduc.net.vn/", source: "Giáo Dục VN", domain: "giaoduc.net.vn" },
    { title: "Các chiến lược ôn thi hiệu quả", url: "https://vietnamnet.vn/", source: "VietNamNet", domain: "vietnamnet.vn" },
    { title: "Tuyển tập mẹo & tài liệu tham khảo", url: "https://vnexpress.net/", source: "VnExpress", domain: "vnexpress.net" }
];

// Mẹo vặt trích lọc từ các trang chính thức (kèm nguồn)
const tips = [
    { text: "Chia nhỏ nội dung ôn luyện: 20-30 phút mỗi chủ đề.", source: "Bộ GD&ĐT", url: "https://moet.gov.vn/", domain: "moet.gov.vn" },
    { text: "Làm đề thử theo giờ, sau đó phân tích lỗi.", source: "Sở GD Hà Nội", url: "https://hanoi.edu.vn/", domain: "hanoi.edu.vn" },
    { text: "Ghi chú công thức quan trọng lên flashcard.", source: "Giáo Dục VN", url: "https://giaoduc.net.vn/", domain: "giaoduc.net.vn" },
    { text: "Ôn nhóm kiến thức liên quan để tăng liên kết nhớ.", source: "VietNamNet", url: "https://vietnamnet.vn/", domain: "vietnamnet.vn" },
    { text: "Dùng sơ đồ tư duy cho các chương lớn trong Sinh.", source: "VnExpress", url: "https://vnexpress.net/", domain: "vnexpress.net" }
];

function faviconFor(domain) {
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
}

document.getElementById('newsList').innerHTML = [
    '<div class="mb-2"><strong>Tin tức chính thức</strong></div>',
    ...newsItems.map(n => `
        <a href="${n.url}" target="_blank" rel="noopener" class="list-group-item list-group-item-action news-link d-flex align-items-center">
            <img src="${faviconFor(n.domain)}" alt="logo" class="news-logo me-2">
            <div>
                <div class="fw-semibold">${n.title}</div>
                <small class="text-muted">${n.source}</small>
            </div>
        </a>`),
    '<hr>',
    '<div class="mb-2"><strong>Mẹo vặt học tập (từ nguồn chính thức)</strong></div>',
    ...tips.map(t => `
        <a href="${t.url}" target="_blank" rel="noopener" class="list-group-item list-group-item-action d-flex align-items-start tip-item news-link">
            <img src="${faviconFor(t.domain)}" alt="logo" class="news-logo me-2">
            <div>
                <div class="small mb-1">${t.text}</div>
                <div class="small text-primary">${t.source}</div>
            </div>
        </a>`)
].join('');

function playSound(id) {
    try {
        if (!window.khtnSoundEnabled) return;
        const s = document.getElementById(id);
        if (s) { s.currentTime = 0; s.play().catch(() => {}); }
    } catch (e) { }
}

// Sound toggle: persist user preference
window.khtnSoundEnabled = (localStorage.getItem('khtnSound') !== 'off');

// Background music preference
window.khtnBgEnabled = (localStorage.getItem('khtnBg') !== 'off');

function updateBgToggleIcon() {
    const btn = document.getElementById('bgToggle');
    if (!btn) return;
    // Use a reliable fallback icon for the "off" state (fa-music-slash may not be available in some FA builds)
    btn.innerHTML = window.khtnBgEnabled ? '<i class="fas fa-music"></i>' : '<i class="fas fa-ban"></i>';
    btn.classList.toggle('active', !!window.khtnBgEnabled);
    btn.title = window.khtnBgEnabled ? 'Nhạc nền: Bật (nhấn để tắt)' : 'Nhạc nền: Tắt (nhấn để bật)';
}

function toggleBg() {
    window.khtnBgEnabled = !window.khtnBgEnabled;
    localStorage.setItem('khtnBg', window.khtnBgEnabled ? 'on' : 'off');
    updateBgToggleIcon();
    const bg = document.getElementById('bgMusic');
    if (!bg) return;
    try {
        if (window.khtnBgEnabled) {
            bg.volume = 0.18;
            bg.play().catch(() => {});
        } else {
            bg.pause();
            bg.currentTime = 0;
        }
    } catch (e) {}
}

function updateSoundToggleIcon() {
    const btn = document.getElementById('soundToggle');
    if (!btn) return;
    // Use clearer FA6 icons: volume-high when on, volume-xmark when off
    btn.innerHTML = window.khtnSoundEnabled ? '<i class="fas fa-volume-high" aria-hidden="true"></i>' : '<i class="fas fa-volume-xmark" aria-hidden="true"></i>';
    btn.classList.toggle('active', !!window.khtnSoundEnabled);
    btn.title = window.khtnSoundEnabled ? 'Âm thanh: Bật (nhấn để tắt)' : 'Âm thanh: Tắt (nhấn để bật)';
}

function toggleSound() {
    window.khtnSoundEnabled = !window.khtnSoundEnabled;
    localStorage.setItem('khtnSound', window.khtnSoundEnabled ? 'on' : 'off');
    updateSoundToggleIcon();
}

// Attach interactions for click and hover sounds
document.addEventListener('DOMContentLoaded', () => {
    updateSoundToggleIcon();
    const soundBtn = document.getElementById('soundToggle');
    if (soundBtn) soundBtn.addEventListener('click', toggleSound);
    const bgBtn = document.getElementById('bgToggle');
    if (bgBtn) bgBtn.addEventListener('click', toggleBg);
    updateBgToggleIcon();

    // Auto-start background music if enabled (user preference)
    const bg = document.getElementById('bgMusic');
    if (bg && window.khtnBgEnabled) { bg.volume = 0.18; bg.play().catch(() => {}); }

    // Play click sound for buttons and links
    document.body.addEventListener('click', (e) => {
        const t = e.target.closest('button, a');
        if (t) playSound('clickSound');
    });

    // Play hover sound when entering cards (debounced)
    let hoverTimeout = 0;
    document.querySelectorAll('.card-option').forEach(card => {
        card.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => playSound('hoverSound'), 80);
        });
        card.addEventListener('mouseleave', () => clearTimeout(hoverTimeout));
    });
    // Render user area (login/register or name)
    renderUserArea();

        // Initialize remote Firebase sync if config present and storage available
        try {
            // Initialize Firebase if static config present
            if (typeof initFirebase === 'function' && window.firebaseConfig) {
                    updateSyncStatus('connecting');
                    initFirebase(window.firebaseConfig).then(() => {
                        // initFirebase may skip if config invalid; check _khtn_fb_db
                        if (window._khtn_fb_db) updateSyncStatus('remote');
                        else updateSyncStatus('local');
                    }).catch(() => updateSyncStatus('error'));
            }
            // If Firebase Auth is available, listen for auth state changes
            try {
                if (window._khtn_fb_auth && typeof window._khtn_fb_auth.onAuthStateChanged === 'function') {
                    window._khtn_fb_auth.onAuthStateChanged(user => {
                        if (user) {
                            const email = user.email || user.uid;
                            if (!data.users.find(x => x.username === email)) {
                                data.users.push({ username: email, pwHash: null,
                                    progress: { ly: { percent:0,score:0,done:0 }, hoa: { percent:0,score:0,done:0 }, sinh: { percent:0,score:0,done:0 }, total: { percent:0,bestScore:0 } }, achievements: []
                                });
                            }
                            data.loggedInUser = email;
                            migrateAnonymousScores(email);
                            persistData(); renderUserArea(); updateProgressSidebar();
                        } else {
                            data.loggedInUser = null; persistData(); renderUserArea(); updateProgressSidebar();
                        }
                    });
                }
            } catch (e) { console.warn('Auth listener setup failed', e); }
            if (typeof subscribeLeaderboard === 'function') {
                // subscribe and keep local leaderboard in sync with remote
                window._khtn_unsub = subscribeLeaderboard(list => {
                    data.leaderboard = list.map(item => ({ name: item.username || item.name, score: item.score || 0, date: item.date || null }));
                    persistData();
                    updateProgressSidebar();
                    updateSyncStatus('remote');
                });
                // Unsubscribe when leaving page
                window.addEventListener('beforeunload', () => { if (window._khtn_unsub) window._khtn_unsub(); });
            }
        } catch (e) { console.warn('Remote leaderboard init error', e); }
});

updateProgressSidebar();