// ============================================
// NEURO TRACE — App Logic (Clean Build)
// ============================================

let currentQ = 0;
let scores = { CT: 0, TD: 0, FM: 0, EF: 0, VF: 0 };
let winnerProfile = null;

// --- Section Navigation ---
function showSection(id) {
    document.querySelectorAll('.sec').forEach(s => s.classList.remove('on'));
    const el = document.getElementById(id);
    void el.offsetWidth;
    el.classList.add('on');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Start Quiz ---
function startQuiz() {
    currentQ = 0;
    scores = { CT: 0, TD: 0, FM: 0, EF: 0, VF: 0 };
    buildQuestions();
    showSection('s-quiz');
    showQuestion(0);
}

// --- Fisher-Yates Shuffle ---
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- Build All Question Cards ---
function buildQuestions() {
    const wrap = document.getElementById('qwrap');
    wrap.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    QUESTIONS.forEach((q, qi) => {
        const shuffled = shuffle([...q.answers]);
        const card = document.createElement('div');
        card.className = 'qcard' + (qi === 0 ? ' on' : '');
        card.id = 'q-' + qi;

        let answersHTML = '';
        shuffled.forEach((a, ai) => {
            answersHTML += `<button class="abtn" data-profile="${a.profile}" data-qi="${qi}">${letters[ai]}) ${a.text}</button>`;
        });

        card.innerHTML = `
            <div class="qnum">Question ${qi + 1}</div>
            <div class="qtxt">${q.text}</div>
            <div class="answers">${answersHTML}</div>
        `;
        wrap.appendChild(card);
    });

    // Single event listener for all answer buttons
    wrap.addEventListener('click', handleAnswerClick);
}

// --- Handle Answer Click ---
function handleAnswerClick(e) {
    const btn = e.target.closest('.abtn');
    if (!btn || btn.disabled) return;

    const qi = parseInt(btn.dataset.qi);
    const profile = btn.dataset.profile;

    // Disable all buttons in this question
    const card = btn.closest('.qcard');
    const allBtns = card.querySelectorAll('.abtn');
    allBtns.forEach(b => {
        b.disabled = true;
        if (b === btn) {
            b.classList.add('selected');
        } else {
            b.classList.add('dimmed');
        }
    });

    // Score
    scores[profile]++;

    // Next or reveal
    setTimeout(() => {
        currentQ++;
        if (currentQ < QUESTIONS.length) {
            showQuestion(currentQ);
        } else {
            document.getElementById('pbar').style.width = '100%';
            setTimeout(showReveal, 500);
        }
    }, 400);
}

// --- Show Question ---
function showQuestion(idx) {
    document.querySelectorAll('.qcard').forEach(c => c.classList.remove('on'));
    const card = document.getElementById('q-' + idx);
    void card.offsetWidth;
    card.classList.add('on');
    document.getElementById('pbar').style.width = ((idx) / QUESTIONS.length * 100) + '%';
    document.getElementById('ptxt').textContent = (idx + 1) + ' / ' + QUESTIONS.length;
}

// --- Get Winner Profile ---
function getWinner() {
    const priority = ['VF', 'TD', 'CT', 'FM', 'EF'];
    let max = 0, winner = 'CT';
    for (const key of priority) {
        if (scores[key] > max) {
            max = scores[key];
            winner = key;
        }
    }
    return winner;
}

// --- Show Reveal with Blurred Preview ---
function showReveal() {
    winnerProfile = getWinner();
    const profile = PROFILES[winnerProfile];

    document.getElementById('rev-name').textContent = profile.name;
    document.getElementById('rev-name').style.color = profile.color;
    document.getElementById('rev-teaser').textContent = profile.teaser;

    // Build blurred preview cards
    const wrap = document.getElementById('blur-preview');
    wrap.innerHTML = '';
    profile.sections.forEach(sec => {
        const plain = sec.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const preview = plain.substring(0, 160) + '...';
        wrap.innerHTML += `
            <div class="blur-card">
                <div class="blur-card-head">
                    <span class="blur-card-icon">${sec.icon}</span>
                    <span class="blur-card-title">${sec.title}</span>
                </div>
                <div class="blur-card-body">${preview}</div>
                <div class="blur-card-lock"><span>🔒</span></div>
            </div>
        `;
    });

    // Store profile for post-payment
    localStorage.setItem('nt_profile', winnerProfile);
    localStorage.setItem('nt_ts', Date.now().toString());

    showSection('s-rev');
}

// --- Payment Button Click ---
function handlePayment() {
    const link = STRIPE_LINKS[winnerProfile];
    if (link && !link.includes('REPLACE')) {
        window.location.href = link;
    } else {
        // Demo mode
        showResult(winnerProfile);
    }
}

// --- Check Payment Return ---
function checkPaymentReturn() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('success') || params.has('session_id')) {
        const stored = localStorage.getItem('nt_profile');
        const ts = parseInt(localStorage.getItem('nt_ts') || '0');
        if (stored && PROFILES[stored] && (Date.now() - ts) < 7200000) {
            localStorage.removeItem('nt_profile');
            localStorage.removeItem('nt_ts');
            window.history.replaceState({}, '', window.location.pathname);
            showResult(stored);
            return true;
        }
    }

    if (params.has('profil')) {
        const p = params.get('profil').toUpperCase();
        if (PROFILES[p]) { showResult(p); return true; }
    }

    return false;
}

// --- Show Full Result ---
function showResult(profileKey) {
    const profile = PROFILES[profileKey];
    const c = document.getElementById('res-content');

    let html = `
        <div class="res-h">
            <div class="res-b">Ton résultat</div>
            <div class="res-n" style="color:${profile.color}">${profile.name}</div>
            <div class="res-tl">${profile.tagline}</div>
        </div>
    `;

    profile.sections.forEach((sec, i) => {
        html += `
            <div class="res-s">
                <div class="res-s-i">${sec.icon}</div>
                <h3>${sec.title}</h3>
                ${sec.content}
            </div>
        `;
        if (i === 1 || i === 3) html += '<div class="res-div"></div>';
    });

    html += `
        <div class="ups">
            <h3>Tu veux aller plus loin ?</h3>
            <p>Le guide complet pour ton profil <strong>"${profile.name}"</strong> — 45 pages pour transformer ta façon d'aimer.</p>
            <a class="btn-u" href="#">Obtenir le guide — 9,99 € →</a>
        </div>
    `;

    c.innerHTML = html;
    showSection('s-res');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    if (!checkPaymentReturn()) {
        showSection('s-land');
    }
});
