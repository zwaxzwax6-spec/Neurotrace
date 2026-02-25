// ============================================
// NEURO TRACE — App Logic
// ============================================

let currentQ = 0;
let scores = { CT: 0, TD: 0, FM: 0, EF: 0, VF: 0 };
let winnerProfile = null;

// --- Section Management ---
function showSection(id) {
    document.querySelectorAll('.sec').forEach(s => s.classList.remove('on'));
    const el = document.getElementById(id);
    el.classList.remove('on');
    void el.offsetWidth; // force reflow for animation
    el.classList.add('on');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Quiz Start ---
function startQuiz() {
    currentQ = 0;
    scores = { CT: 0, TD: 0, FM: 0, EF: 0, VF: 0 };
    buildQuestions();
    showSection('s-quiz');
    showQuestion(0);
}

// --- Build Question Cards ---
function buildQuestions() {
    const wrap = document.getElementById('qwrap');
    wrap.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    QUESTIONS.forEach((q, qi) => {
        const card = document.createElement('div');
        card.className = 'qcard' + (qi === 0 ? ' on' : '');
        card.id = 'q-' + qi;

        // Shuffle answers for each question to avoid pattern detection
        const shuffled = q.answers.map((a, i) => ({ ...a, origIndex: i }));
        shuffleArray(shuffled);

        card.innerHTML = `
            <div class="qnum">Question ${qi + 1}</div>
            <div class="qtxt">${q.text}</div>
            <div class="answers">
                ${shuffled.map((a, ai) => `
                    <button class="abtn" onclick="selectAnswer(${qi}, '${a.profile}', this)">
                        <span class="al">${letters[ai]}</span>${a.text}
                    </button>
                `).join('')}
            </div>
        `;
        wrap.appendChild(card);
    });
}

// --- Fisher-Yates Shuffle ---
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// --- Show Question ---
function showQuestion(idx) {
    document.querySelectorAll('.qcard').forEach(c => c.classList.remove('on'));
    const card = document.getElementById('q-' + idx);
    if (card) {
        void card.offsetWidth;
        card.classList.add('on');
    }
    // Update progress
    const pct = ((idx) / QUESTIONS.length) * 100;
    document.getElementById('pbar').style.width = pct + '%';
    document.getElementById('ptxt').textContent = (idx + 1) + ' / ' + QUESTIONS.length;
}

// --- Select Answer ---
function selectAnswer(qIndex, profile, btnEl) {
    // Visual feedback
    btnEl.style.borderColor = 'var(--cyan)';
    btnEl.style.background = 'var(--bg3)';
    btnEl.style.boxShadow = 'inset 3px 0 0 var(--cyan)';

    // Disable all buttons for this question
    const btns = btnEl.parentElement.querySelectorAll('.abtn');
    btns.forEach(b => {
        b.style.pointerEvents = 'none';
        if (b !== btnEl) b.style.opacity = '0.4';
    });

    // Score
    scores[profile]++;

    // Next question or reveal
    setTimeout(() => {
        currentQ++;
        if (currentQ < QUESTIONS.length) {
            showQuestion(currentQ);
        } else {
            // Complete progress bar
            document.getElementById('pbar').style.width = '100%';
            setTimeout(() => showReveal(), 600);
        }
    }, 500);
}

// --- Determine Winner ---
function getWinner() {
    let max = 0;
    let winner = 'CT';
    // Priority order for tie-breaking: VF > TD > CT > FM > EF
    const priority = ['VF', 'TD', 'CT', 'FM', 'EF'];
    for (const key of priority) {
        if (scores[key] > max) {
            max = scores[key];
            winner = key;
        }
    }
    return winner;
}

// --- Show Reveal ---
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
        // Strip HTML tags to get plain text for blur preview
        const plainText = sec.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const preview = plainText.substring(0, 180) + '...';

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

    showSection('s-rev');
}

// --- Handle Payment ---
function handlePayment() {
    // Check if we're returning from payment (demo mode) or redirecting to Stripe
    const link = STRIPE_LINKS[winnerProfile];

    if (link.includes('REPLACE')) {
        // Demo mode: show result directly
        showResult(winnerProfile);
    } else {
        // Production: store profile in localStorage then redirect to Stripe
        localStorage.setItem('nt_profile', winnerProfile);
        localStorage.setItem('nt_ts', Date.now().toString());
        window.location.href = link;
    }
}

// --- Check for payment return ---
function checkPaymentReturn() {
    const params = new URLSearchParams(window.location.search);

    // Stripe redirects back with ?success=true or similar
    if (params.has('success') || params.has('session_id')) {
        const storedProfile = localStorage.getItem('nt_profile');
        const ts = parseInt(localStorage.getItem('nt_ts') || '0');
        const now = Date.now();

        // Valid if profile exists and was stored less than 1 hour ago
        if (storedProfile && PROFILES[storedProfile] && (now - ts) < 3600000) {
            localStorage.removeItem('nt_profile');
            localStorage.removeItem('nt_ts');
            showResult(storedProfile);
            return true;
        }
    }

    // Also check direct profile param (for testing)
    if (params.has('profil')) {
        const p = params.get('profil').toUpperCase();
        if (PROFILES[p]) {
            showResult(p);
            return true;
        }
    }

    return false;
}

// --- Show Full Result ---
function showResult(profileKey) {
    const profile = PROFILES[profileKey];
    const container = document.getElementById('res-content');

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
        if (i < profile.sections.length - 1 && (i === 1 || i === 3)) {
            html += '<div class="res-div"></div>';
        }
    });

    // Upsell
    html += `
        <div class="ups">
            <h3>Tu veux aller plus loin ?</h3>
            <p>Le guide complet pour ton profil <strong>"${profile.name}"</strong> — 45 pages pour comprendre tes patterns en profondeur, transformer ta façon d'aimer, et construire la relation que tu mérites.</p>
            <a class="btn-u" href="#" onclick="alert('Lien ebook à configurer')">Obtenir le guide — 9,99 € →</a>
        </div>
    `;

    container.innerHTML = html;

    // Update result section bullet colors to match profile
    setTimeout(() => {
        container.querySelectorAll('.res-s ul li::before').forEach(el => {
            // Can't style pseudo-elements directly, using CSS variable override
        });
    }, 100);

    showSection('s-res');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if returning from payment
    if (!checkPaymentReturn()) {
        // Normal: show landing
        showSection('s-land');
    }
});
