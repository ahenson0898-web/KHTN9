// Lightweight Firebase wrapper for leaderboard sync (uses compat SDK)
// Requires the compat SDKs to be included in index.html and `window.firebaseConfig` set.
(function (global) {
  async function initFirebase(cfg) {
    if (!cfg) return;
    // Basic validation: skip initialization when the placeholder config is still present
    const key = String(cfg.apiKey || '');
    if (!cfg.apiKey || key.startsWith('REPLACE') || key.includes('...') || key.length < 20) {
      console.warn('initFirebase: firebase-config looks like the placeholder or invalid. Skipping Firebase initialization.');
      return;
    }
    if (!window.firebase) {
      console.warn('Firebase SDK not found. Include compat scripts in index.html');
      return;
    }
    try {
      if (!window._khtn_fb_app) {
        window._khtn_fb_app = firebase.initializeApp(cfg);
        window._khtn_fb_auth = firebase.auth();
        window._khtn_fb_db = firebase.firestore();
      }
    } catch (e) {
      console.warn('initFirebase error', e);
    }
  }

  async function saveScoreRemote(username, score) {
    if (!window._khtn_fb_db) throw new Error('Firestore not initialized');
    const docRef = window._khtn_fb_db.collection('leaderboard').doc(username);
    const today = new Date().toISOString().split('T')[0];
    return window._khtn_fb_db.runTransaction(async tx => {
      const snap = await tx.get(docRef);
      if (!snap.exists || (score > (snap.data().score || 0))) {
        tx.set(docRef, { username, score, date: today });
      }
    });
  }

  function subscribeLeaderboard(onChange, limit = 50) {
    if (!window._khtn_fb_db) {
      console.warn('Firestore not initialized; cannot subscribe leaderboard');
      return () => {};
    }
    return window._khtn_fb_db.collection('leaderboard')
      .orderBy('score', 'desc')
      .limit(limit)
      .onSnapshot(snap => {
        const list = [];
        snap.forEach(d => list.push(d.data()));
        try { onChange(list); } catch (e) { console.error(e); }
      }, err => console.error('Leaderboard snapshot error', err));
  }

  // One-time fetch of leaderboard (returns array)
  async function getLeaderboardRemote(limit = 50) {
    if (!window._khtn_fb_db) throw new Error('Firestore not initialized');
    const snap = await window._khtn_fb_db.collection('leaderboard')
      .orderBy('score', 'desc')
      .limit(limit)
      .get();
    const list = [];
    snap.forEach(d => list.push(d.data()));
    return list;
  }

  async function signupRemote(email, password) {
    if (!window._khtn_fb_auth) throw new Error('Firebase Auth not initialized');
    return window._khtn_fb_auth.createUserWithEmailAndPassword(email, password);
  }

  async function loginRemote(email, password) {
    if (!window._khtn_fb_auth) throw new Error('Firebase Auth not initialized');
    return window._khtn_fb_auth.signInWithEmailAndPassword(email, password);
  }

  // Export to global
  global.initFirebase = initFirebase;
  global.saveScoreRemote = saveScoreRemote;
  global.subscribeLeaderboard = subscribeLeaderboard;
  global.getLeaderboardRemote = getLeaderboardRemote;
  global.signupRemote = signupRemote;
  global.loginRemote = loginRemote;
})(window);
