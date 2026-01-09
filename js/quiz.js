// js/quiz.js - Trắc nghiệm từng môn - NÚT "HOÀN THÀNH" HOẠT ĐỘNG CHẮC CHẮN (cách đơn giản nhất)

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let currentSubject = '';

function startSubjectQuiz(subject) {
    currentSubject = subject;

    let questions;
    if (subject === 'ly') questions = questions_ly || [];
    else if (subject === 'hoa') questions = questions_hoa || [];
    else questions = questions_sinh || [];

    if (questions.length === 0) {
        document.getElementById('contentArea').innerHTML = `
            <div class="text-center py-5">
                <h3 class="text-danger">Không có câu hỏi cho môn này!</h3>
                <div class="back-btn-container">
                    <button class="btn btn-primary btn-lg" onclick="backToMenu()">← Quay lại menu chính</button>
                </div>
            </div>
        `;
        return;
    }

    currentQuiz = [...questions];
    currentQuestion = 0;
    score = 0;
    document.getElementById('mainMenu').style.display = 'none';
    showSubjectQuestion();
}

function showSubjectQuestion() {
    // Normalize question object so older/newer formats both work
    const raw = currentQuiz[currentQuestion];
    const q = Object.assign({}, raw);
    // q text
    if (!q.q && q.question) q.q = q.question;
    // options: if object {A:...,B:...} convert to array ['A. ...', ...]
    if (!Array.isArray(q.options) && typeof q.options === 'object' && q.options !== null) {
        q.options = [
            (q.options.A ? `A. ${q.options.A}` : 'A.'),
            (q.options.B ? `B. ${q.options.B}` : 'B.'),
            (q.options.C ? `C. ${q.options.C}` : 'C.'),
            (q.options.D ? `D. ${q.options.D}` : 'D.')
        ];
    }
    // answer field: accept 'a' or 'answer' (single letter) and map to full option text
    if (!q.a && q.answer) {
        const letter = String(q.answer).trim().charAt(0).toUpperCase();
        const map = { A:0, B:1, C:2, D:3 };
        const idx = map[letter];
        if (Array.isArray(q.options) && typeof idx === 'number') q.a = q.options[idx];
        else q.a = q.answer;
    }
    // explanation alias
    if (!q.explain && q.explanation) q.explain = q.explanation;
    // Persist normalized question back to the quiz array so selectAnswer uses the same shape
    currentQuiz[currentQuestion] = q;
    // Compute canonical correct letter (A-D) for robust comparisons
    if (q.answer) {
        q.correctLetter = String(q.answer).trim().charAt(0).toUpperCase();
    } else if (q.a) {
        const maybe = String(q.a).trim().charAt(0).toUpperCase();
        if (/^[A-D]$/.test(maybe)) q.correctLetter = maybe;
        else if (Array.isArray(q.options)) {
            const idx = q.options.findIndex(opt => opt === q.a);
            if (idx >= 0) q.correctLetter = ['A','B','C','D'][idx];
        }
    }
    const isLastQuestion = (currentQuestion + 1 === currentQuiz.length);

    document.getElementById('contentArea').innerHTML = `
        <div class="card shadow-lg mb-4">
            <div class="card-header text-center bg-primary text-white py-4">
                <h4 class="fw-bold fs-3 mb-0">Câu ${currentQuestion + 1} / ${currentQuiz.length}</h4>
            </div>
            <div class="card-body p-5">
                <h5 class="fw-bold fs-4 mb-5 text-dark">${q.q}</h5>
                <div class="row g-4">
                    ${Array.isArray(q.options) ? q.options.map(opt => `
                        <div class="col-12 col-md-6">
                            <button class="btn btn-outline-primary w-100 py-4 fs-5 fw-medium shadow-sm"
                                    onclick="selectAnswer('${opt.replace(/'/g, "\\'")}')">
                                ${opt}
                            </button>
                        </div>
                    `).join('') : ''}
                </div>

                <div id="subjectFeedback" class="mt-5"></div>

                <!-- Nút hành động (ẩn ban đầu) -->
                <div id="actionBtnContainer" class="text-center mt-5" style="display: none;">
                    ${isLastQuestion ? `
                        <button class="btn btn-success btn-lg px-5 py-3 shadow" onclick="finishQuiz()">
                            <i class="fas fa-check-circle me-2"></i> Hoàn thành
                        </button>
                    ` : `
                        <button class="btn btn-success btn-lg px-5 py-3 shadow" onclick="nextQuestion()">
                            <i class="fas fa-arrow-right me-2"></i> Tiếp theo
                        </button>
                    `}
                </div>
            </div>
        </div>

        <div class="back-btn-container">
            <button class="btn btn-secondary btn-lg px-4" onclick="backToMenu()">
                ← Quay lại menu chính
            </button>
        </div>
    `;
}

function selectAnswer(selected) {
    const q = currentQuiz[currentQuestion];
    const feedback = document.getElementById('subjectFeedback');
    const actionBtnContainer = document.getElementById('actionBtnContainer');

    // Vô hiệu hóa nút đáp án
    const buttons = document.querySelectorAll('#contentArea button.btn-outline-primary');
    buttons.forEach(btn => btn.disabled = true);

    // Compare by letter to avoid issues with formatting/spacing in option strings
    const selLetter = String(selected || '').trim().charAt(0).toUpperCase();
    const correctLetter = q.correctLetter || (q.a ? String(q.a).trim().charAt(0).toUpperCase() : null);
    const isCorrect = selLetter && correctLetter && selLetter === correctLetter;

    if (isCorrect) {
        score++;
        playSound('correctSound');
        feedback.innerHTML = `
            <div class="alert alert-success p-5 rounded shadow">
                <h4 class="fw-bold mb-3">✅ Đúng rồi!</h4>
                <p class="fs-5">${q.explain || 'Tuyệt vời, bạn đã nắm vững kiến thức này!'}</p>
            </div>
        `;
    } else {
        playSound('wrongSound');
        // Determine display of correct answer: prefer full option text if available
        let correctDisplay = q.a || '';
        if (!correctDisplay && Array.isArray(q.options) && correctLetter) {
            const map = { A:0, B:1, C:2, D:3 };
            const idx = map[correctLetter];
            if (typeof idx === 'number' && q.options[idx]) correctDisplay = q.options[idx];
        }
        feedback.innerHTML = `
            <div class="alert alert-danger p-5 rounded shadow">
                <h4 class="fw-bold mb-3">❌ Sai rồi!</h4>
                <p class="mb-2 fs-5">Đáp án đúng: <strong>${correctDisplay}</strong></p>
                <p class="fs-5">${q.explain || ''}</p>
            </div>
        `;
    }

    // HIỆN NÚT HÀNH ĐỘNG
    actionBtnContainer.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    showSubjectQuestion();
}

function finishQuiz() {
    // Play success short effect
    playSound('successSound');

    // Decide which longer track to play based on performance
    const total = currentQuiz.length || 1;
    const pct = Math.round((score / total) * 100);
    if (pct >= 70) {
        playSound('completionMusic');
    } else {
        playSound('encourageSound');
    }

    saveScore(score, currentSubject);

    document.getElementById('contentArea').innerHTML = `
        <div class="text-center py-5 bg-light rounded shadow-lg mx-4">
            <div class="p-5">
                <h1 class="display-3 text-success fw-bold mb-4">🎉 Hoàn thành xuất sắc!</h1>
                <h2 class="display-5 mb-4">
                    Điểm số: <strong class="text-primary fw-bold">${score}</strong> / ${currentQuiz.length}
                </h2>
                <p class="lead fs-3 text-success mb-5">
                    Môn <strong>${getSubjectName(currentSubject)}</strong> đã hoàn thành!<br>
                    Tiến độ đã được cập nhật tự động.
                </p>
            </div>
            <div class="back-btn-container pb-5">
                <button class="btn btn-primary btn-lg px-5 py-3 shadow" onclick="backToMenu()">
                    ← Quay lại menu chính
                </button>
            </div>
        </div>
    `;
}

function getSubjectName(subject) {
    if (subject === 'ly') return "Vật Lý";
    if (subject === 'hoa') return "Hóa Học";
    if (subject === 'sinh') return "Sinh Học";
    return "";
}

function backToMenu() {
    document.getElementById('mainMenu').style.display = 'grid';
    document.getElementById('contentArea').innerHTML = '';
    currentQuiz = [];
    currentQuestion = 0;
    score = 0;
    currentSubject = '';
    // Stop background music when returning to main menu
    try {
        const bg = document.getElementById('bgMusic');
        if (bg) { bg.pause(); bg.currentTime = 0; }
    } catch (e) {}
}