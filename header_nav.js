// EMPOWERING ENGINEERS UK - DYNAMIC HEADER, ANALYTICS & STACKED CONTROLS
// Version: 12.2 (Manual Tools Loading for Stability)
// Date: 13 Feb 2026
// Note: Styling for the Action Bar and Recommendation Card is managed in layout.css v12

/* --- 0. CENTRALISED ANALYTICS & SCRIPT INJECTION --- */
(function() {
    // A. Google Analytics 4 (GA4) Injection
    if (!document.getElementById('ga4-script')) {
        const gaScript = document.createElement('script');
        gaScript.id = 'ga4-script';
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PG4ZJ7W444';
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PG4ZJ7W444');
        console.log("System Status: GA4 Tracking Initialised.");
    }

    // B. Google AdSense Injection
    if (!document.getElementById('adsense-script')) {
        const adScript = document.createElement('script');
        adScript.id = 'adsense-script';
        adScript.async = true;
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7071036534151105';
        adScript.crossOrigin = 'anonymous';
        document.head.appendChild(adScript);
        console.log("System Status: AdSense Library Loaded.");
    }
})();

/* --- 1. THEME MANAGER --- */
window.ThemeManager = {
    states: [null, 'light', 'contrast'],
    labels: ['DEFAULT DARK', 'SITE LIGHT', 'HIGH VISIBILITY'],
    
    init: function() {
        const savedTheme = localStorage.getItem('ee_theme');
        if (savedTheme) document.body.setAttribute('data-theme', savedTheme);
        this.updateLabel();
    },

    toggle: function() {
        const currentTheme = document.body.getAttribute('data-theme');
        let nextIndex = this.states.indexOf(currentTheme) + 1;
        if (nextIndex >= this.states.length) nextIndex = 0;
        
        const nextTheme = this.states[nextIndex];
        if (nextTheme) {
            document.body.setAttribute('data-theme', nextTheme);
            localStorage.setItem('ee_theme', nextTheme);
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.removeItem('ee_theme');
        }
        this.updateLabel();
    },

    updateLabel: function() {
        const btns = document.querySelectorAll('.js-theme-toggle');
        const currentTheme = document.body.getAttribute('data-theme');
        const index = this.states.indexOf(currentTheme || null);
        btns.forEach(btn => btn.innerHTML = `&#128065; VIEW: ${this.labels[index]}`);
    }
};

window.ThemeManager.init();

/* --- 2. HEADER, AD UNIT & ACTION BAR INJECTION --- */
(function() {
    const page = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = [
        { label: "Career", url: "career_tool.html" },
        { label: "CPD", url: "cpd_tool.html" },
        { label: "RACI", url: "raci_tool.html" },
        { label: "STAR", url: "STAR_engine.html" },
        { label: "Ethics", url: "ethics_tool.html" },
        { label: "Coach", url: "feedback_tool.html" },
        { label: "Decoder", url: "glossary_tool.html" },
        { label: "Atlas", url: "hardware_tool.html" },
        { label: "Library", url: "reference_tool.html" },
        { label: "Report", url: "report_tool.html" },
        { label: "DAP", url: "dap_tool.html" },
        { label: "Application", url: "application_tool.html" },
        { label: "Interview", url: "interview_tool.html" },
        { label: "Manual", url: "guide.html" }
    ];

    let navHTML = '';
    navLinks.forEach(link => {
        const isActive = page === link.url ? 'class="active"' : '';
        navHTML += `<a href="${link.url}" ${isActive}>${link.label}</a>`;
    });

    const headerHTML = `
        <div class="sticky-container">
            <a href="index.html">
                <img src="EE_Logo_rect_Solid.png" alt="Empowering Engineers UK" class="site-brand-img">
            </a>
            <nav>${navHTML}</nav>
        </div>

        <div class="ad-slot ad-leaderboard" style="text-align: center; margin: 20px auto; min-height: 90px; display:flex; justify-content:center; align-items:center;">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:728px;height:90px"
                 data-ad-client="ca-pub-7071036534151105"
                 data-ad-slot="9995687043"></ins>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.log("AdSense push failed or blocked."); 
    }

    const intentMap = {
        "default": { tool: "", desc: "", url: "" },
        "report": { label: "Write my EngTech/IEng/CEng Application Report", tool: "Report Architect", desc: "Use standard templates to structure your evidence.", url: "report_tool.html" },
        "interview": { label: "Prepare for my Professional Review Interview", tool: "Virtual Interviewer", desc: "Practice timed UK-SPEC questions with AI critique.", url: "interview_tool.html" },
        "star": { label: "Draft my Competency Evidence (STAR)", tool: "STAR-Gen", desc: "Structure your examples using the Situation-Task-Action-Result format.", url: "STAR_engine.html" },
        "career": { label: "Apply for a new job / Write a CV", tool: "Career Starter", desc: "Generate a technical CV and Cover Letter tailored to your experience.", url: "career_tool.html" },
        "cpd": { label: "Plan my Development (CPD)", tool: "CPD Smart-Planner", desc: "Identify gaps (70/20/10) and build a Development Action Plan.", url: "cpd_tool.html" },
        "dap": { label: "Build my Development Action Plan (DAP)", tool: "Strategic DAP Architect", desc: "Create a Short/Medium/Long term plan for your application.", url: "dap_tool.html" },
        "conflict": { label: "Solve a Work Problem or Conflict", tool: "Management Coach", desc: "Use frameworks like GROW or COIN to resolve leadership issues.", url: "feedback_tool.html" },
        "atlas": { label: "Look up Engineering Hardware Specs", tool: "Component Atlas", desc: "Interactive blueprint database.", url: "hardware_tool.html" },
        "acronym": { label: "Decode a Technical Term", tool: "Engineering Decoder", desc: "Search 14,000+ technical acronyms instantly.", url: "glossary_tool.html" },
        "ref": { label: "Find a Technical Reference or Book", tool: "Engineering Library", desc: "Curated collection of formulas and standards.", url: "reference_tool.html" }
    };

    const container = document.querySelector('.sticky-container');
    if (!container) return;

    const barDiv = document.createElement('div');
    barDiv.className = 'action-bar-container';

    let optionsHTML = '<option value="default">>> SELECT OBJECTIVE</option>';
    for (const [key, data] of Object.entries(intentMap)) {
        if(key === "default") continue;
        optionsHTML += `<option value="${key}">${data.label}</option>`;
    }

    barDiv.innerHTML = `
        <button class="js-theme-toggle nav-theme-btn" onclick="window.ThemeManager.toggle()">
            &#128065; VIEW: DEFAULT
        </button>
        <div class="action-wrapper">
            <select id="intentSelect" class="action-select">
                ${optionsHTML}
            </select>
        </div>
        <div id="recCard" class="rec-card">
            <div class="rec-text">
                <strong id="recToolName" style="color:var(--terminal-green)"></strong><br>
                <span id="recDesc" style="font-size:0.9em; opacity:0.8;"></span>
            </div>
            <a id="recLink" href="#" class="rec-btn">OPEN TOOL</a>
        </div>
    `;

    container.appendChild(barDiv);

    const select = document.getElementById('intentSelect');
    const card = document.getElementById('recCard');
    const toolName = document.getElementById('recToolName');
    const desc = document.getElementById('recDesc');
    const link = document.getElementById('recLink');

    select.addEventListener('change', function() {
        const val = this.value;
        if (val === 'default') {
            card.style.display = 'none';
            this.classList.remove('active-choice');
            return;
        }
        this.classList.add('active-choice');
        const data = intentMap[val];
        toolName.innerText = data.tool;
        desc.innerText = data.desc;
        link.href = data.url;
        card.style.display = 'flex';
    });

    document.addEventListener('click', (e) => {
        if (!barDiv.contains(e.target) && !card.contains(e.target)) {
            card.style.display = 'none';
            if(select.value === 'default') select.classList.remove('active-choice');
        }
    });

    window.ThemeManager.updateLabel();
})();