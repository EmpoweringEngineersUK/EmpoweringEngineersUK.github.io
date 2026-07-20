// =========================================================================
// EMPOWERING ENGINEERS UK - header_nav.js - v21.7 - Dynamic Advanced Navigation Engine
// Date: 20 Jul 2026
// Optimisation Profile: Full Taxonomy Capitalised Fuzzy Search Indexer
// Telemetry Profile: Environment-Aware GA4 Conversion Tracking Engine
// Language Metric: British English Hardcoded UI Layout Controls
// Isolation Standard: Strict Sandbox Drawer Memory Structural Containment
// =========================================================================

/* --- 0. CENTRALISED ANALYTICS & SCRIPT INJECTION --- */
(function() {
    // Environment Verification Lock: 
    // Prevents local sandbox testing on Windows 11 from polluting live GA4/AdSense production data.
    const isProduction = (window.location.hostname === 'www.empoweringengineers.uk');

    if (isProduction) {
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
            console.log("System Status: Production GA4 Telemetry Tracking Initialised.");
        }

        // B. Google AdSense Injection
        if (!document.getElementById('adsense-script')) {
            const adScript = document.createElement('script');
            adScript.id = 'adsense-script';
            adScript.async = true;
            adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7071036534151105';
            adScript.crossOrigin = 'anonymous';
            document.head.appendChild(adScript);
            console.log("System Status: Production AdSense Library Loaded.");
        }
        
        // C. Google Ad blocking recovery
        if (!document.getElementById('adblock-recovery-script')) {
            const recoveryScript = document.createElement('script');
            recoveryScript.id = 'adblock-recovery-script';
            recoveryScript.async = true;
            recoveryScript.src = 'https://fundingchoicesmessages.google.com/i/pub-7071036534151105?ers=1';
            document.head.appendChild(recoveryScript);
            
            function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                    if (document.body) {
                        const iframe = document.createElement('iframe'); 
                        iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; 
                        iframe.style.display = 'none'; 
                        iframe.name = 'googlefcPresent'; 
                        document.body.appendChild(iframe);
                    } else {
                        setTimeout(signalGooglefcPresent, 0);
                    }
                }
            }
            signalGooglefcPresent();
            console.log("System Status: AdBlock Recovery Library Loaded.");
        }
    } else {
        console.log("System Status: Local offline sandbox detected. Telemetry and AdSense scripts safely suppressed.");
    }
})();

/* --- 1. CORE ACCESSIBILITY THEME MANAGER --- */
window.ThemeManager = {
    states: ['light', 'dark', 'contrast'],
    labels: ['light', 'dark', 'contrast'],
    
    init: function() {
        let savedTheme = localStorage.getItem('ee_theme');
        if (!savedTheme || !this.states.includes(savedTheme)) {
            savedTheme = 'light';
            localStorage.setItem('ee_theme', 'light');
        }
        if (savedTheme === 'light') {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', savedTheme);
        }
        this.updateLabel();
    },

    toggle: function() {
        let currentTheme = localStorage.getItem('ee_theme') || 'light';
        let nextIndex = this.states.indexOf(currentTheme) + 1;
        if (nextIndex >= this.states.length) nextIndex = 0;
        
        const nextTheme = this.states[nextIndex];
        localStorage.setItem('ee_theme', nextTheme);
        
        if (nextTheme === 'light') {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', nextTheme);
        }
        this.updateLabel();
    },

    updateLabel: function() {
        let currentTheme = localStorage.getItem('ee_theme') || 'light';
        if (!this.states.includes(currentTheme)) {
            currentTheme = 'light';
        }
        const index = this.states.indexOf(currentTheme);
        const currentLabel = this.labels[index];
        const svgUrl = `assets/EE_${currentLabel}-visibility.svg`;
        
        const targets = document.querySelectorAll('.js-theme-svg-target');
        targets.forEach(img => {
            img.src = svgUrl;
            img.alt = `Theme: ${currentLabel.toUpperCase()}`;
        });
    }
};

window.ThemeManager.init();

/* --- 2. MULTI-LEVEL RESPONSIVE INJECTION ENGINE --- */
(function() {
    const navStyles = `
    <style>
    /* Encapsulated Layout Controls to Prevent Live Server Rendering Collapse */
    .sticky-container {
        position: sticky;
        top: 0;
        z-index: 2000;
        min-height: 180px;
        padding: 10px 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 3px solid var(--ee-terminal-green, #03F7A0);
        box-shadow: 0 4px 20px rgba(13, 27, 42, 0.2);
        background-color: #0D1B2A;
        background-image: url('assets/EE_banner.webp') !important;
        background-position: center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        transition: min-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
    }
    .sticky-container.scrolled {
        min-height: 65px !important;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
    }
    .header-brand-row {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: 100% !important;
    }
    .header-title-row {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        flex-grow: 1 !important;
        width: 100% !important;
        transition: opacity 0.2s ease, visibility 0.2s ease;
    }
    .sticky-container.scrolled .header-title-row {
        opacity: 0 !important;
        visibility: hidden !important;
        display: none !important;
    }
    .ee-nav-menu {
        display: flex !important;
        flex-direction: row !important;
        list-style: none !important;
        list-style-type: none !important;
        margin: 0 !important;
        padding: 0 !important;
        gap: 6px;
        align-items: center;
    }
    .ee-nav-menu li {
        list-style: none !important;
        list-style-type: none !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    .ee-nav-item { position: relative; }
    
    /* Isolated Sub-Menu Architecture Restoring Correct Dropdown States */
    .ee-nav-menu .ee-dropdown {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        background: #0D1B2A !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-top: 3px solid #03F7A0 !important;
        border-radius: 0 0 6px 6px !important;
        display: flex !important;
        flex-direction: column !important;
        min-width: 280px !important;
        padding: 6px 0 !important;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3) !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transform: translateY(10px) !important;
        transition: all 0.2s ease !important;
        z-index: 2100 !important;
    }
    .ee-nav-item:hover > .ee-dropdown {
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateY(0) !important;
    }
    .ee-dropdown-sub { position: relative; }
    .ee-dropdown-sub .ee-dropdown {
        top: -7px !important;
        left: 100% !important;
        border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-left: 3px solid #03F7A0 !important;
        border-radius: 0 6px 6px 0 !important;
    }
    .ee-mobile-trigger-bar {
        display: none;
        gap: 10px;
        align-items: center;
    }
    @media (max-width: 992px) {
        .header-brand-row nav { display: none !important; }
        .ee-mobile-trigger-bar { display: flex !important; }
    }
    /* Mobile Side-Drawer Insulation & Contrast Layer Rules */
    .ee-mobile-drawer {
        position: fixed !important;
        top: 0 !important;
        left: -340px !important;
        width: 300px !important;
        height: 100% !important;
        background: #0D1B2A !important;
        border-right: 2px solid #03F7A0 !important;
        box-shadow: 8px 0 24px rgba(0,0,0,0.4) !important;
        z-index: 3000 !important;
        transition: left 0.3s cubic-bezier(0.77, 0, 0.175, 1) !important;
        overflow-y: auto !important;
        padding: 20px !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 20px !important;
        visibility: hidden !important;
    }
    .ee-mobile-drawer.open {
        left: 0 !important;
        visibility: visible !important;
    }
    .ee-accordion, .ee-accordion ul {
        list-style: none !important;
        list-style-type: none !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    .ee-accordion li {
        list-style: none !important;
        list-style-type: none !important;
    }
    .ee-accordion-link {
        color: rgba(255, 255, 255, 0.95) !important;
        text-decoration: none;
        padding: 10px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        font-size: 0.95rem;
        font-weight: 700;
    }
    .ee-accordion-link:hover, .ee-accordion-link:active {
        color: #03F7A0 !important;
    }
    .ee-accordion-sub-menu .ee-accordion-link {
        color: #03F7A0 !important;
        font-size: 0.9rem;
    }
    .ee-accordion-sub-menu .ee-accordion-link:hover {
        color: #FFFFFF !important;
    }
    @media (min-width: 993px) {
        .ee-dropdown-sub:hover > .ee-dropdown {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
        }
        .ee-nav-item:not(:first-child) .ee-dropdown-sub .ee-dropdown {
            left: auto !important;
            right: 100% !important;
            border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-right: 3px solid #03F7A0 !important;
            border-radius: 6px 0 0 6px !important;
        }
    }
    </style>
    `;

    const menuTree = [
        {
            label: "HOME",
            url: "index.html",
            children: [
                { label: "About Us", url: "about.html" },
                { label: "Contact Us", url: "contact.html" },
                { label: "Social Media", url: "social.html" }
            ]
        },
        {
            label: "MENTOR",
            url: "mentor.html",
            children: [
                { label: "Career CV Builder", url: "career.html" },
                {
                    label: "Chartered Engineer (CEng)",
                    url: "ceng.html",
                    children: [
                        { label: "CEng Competence A", url: "ceng-a.html" },
                        { label: "CEng Competence B", url: "ceng-b.html" },
                        { label: "CEng Competence C", url: "ceng-c.html" },
                        { label: "CEng Competence D", url: "ceng-d.html" },
                        { label: "CEng Competence E", url: "ceng-e.html" }
                    ]
                },
                {
                    label: "Incorporated Engineer (IEng)",
                    url: "ieng.html",
                    children: [
                        { label: "IEng Competence A", url: "ieng-a.html" },
                        { label: "IEng Competence B", url: "ieng-b.html" },
                        { label: "IEng Competence C", url: "ieng-c.html" },
                        { label: "IEng Competence D", url: "ieng-d.html" },
                        { label: "IEng Competence E", url: "ieng-e.html" }
                    ]
                },
                {
                    label: "Engineering Technician (EngTech)",
                    url: "engtech.html",
                    children: [
                        { label: "EngTech Competence A", url: "engtech-a.html" },
                        { label: "EngTech Competence B", url: "engtech-b.html" },
                        { label: "EngTech Competence C", url: "engtech-c.html" },
                        { label: "EngTech Competence D", url: "engtech-d.html" },
                        { label: "EngTech Competence E", url: "engtech-e.html" }
                    ]
                },
                { label: "CPD Action Plans (DAP)", url: "dap.html" },
                { label: "Application Sponsors", url: "sponsors.html" }
            ]
        },
        {
            label: "COACH",
            url: "coach.html",
            children: [
                {
                    label: "Strategy & Business Planning",
                    url: "strategy.html",
                    children: [
                        { label: "SWOT Analysis", url: "strategy-swot.html" },
                        { label: "PESTLE Analysis", url: "strategy-pestle.html" },
                        { label: "Porter's Five Forces", url: "strategy-porters.html" },
                        { label: "VRIO Framework", url: "strategy-vrio.html" },
                        { label: "BCG Matrix", url: "strategy-bcg.html" },
                        { label: "Ansoff Matrix", url: "strategy-ansoff.html" },
                        { label: "Scenario Planning", url: "strategy-scenarios.html" },
                        { label: "Value Chain Analysis (VCA)", url: "strategy-value-chain.html" },
                        { label: "Blue Ocean Strategy (BOS)", url: "strategy-blue-ocean.html" },
                        { label: "Business Model Canvas (BMC)", url: "strategy-bmc.html" },
                        { label: "SOAR Analysis", url: "strategy-soar.html" },
                        { label: "Strategy Map", url: "strategy-map.html" }
                    ]
                },
                {
                    label: "Process & Quality Improvement",
                    url: "quality.html",
                    children: [
                        { label: "PDCA Continuous Improvement", url: "quality-pdca.html" },
                        { label: "DMAIC Problem Solving", url: "quality-dmaic.html" },
                        { label: "Value Stream Mapping", url: "quality-vsm.html" },
                        { label: "5 Whys Cause & Effect", url: "quality-5whys.html" },
                        { label: "Fishbone Diagram", url: "quality-fishbone.html" },
                        { label: "Pareto Analysis", url: "quality-pareto.html" },
                        { label: "Kanban Board", url: "quality-kanban.html" },
                        { label: "Poka-Yoke Error Prevention", url: "quality-poka-yoke.html" },
                        { label: "SIPOC Process Mapping", url: "quality-sipoc.html" }
                    ]
                },
                {
                    label: "Decision Making & Risk Management",
                    url: "decisions.html",
                    children: [
                        { label: "Monte Carlo Simulation", url: "decisions-monte-carlo.html" },
                        { label: "Decision Tree Analysis", url: "decisions-tree.html" },
                        { label: "Cost-Benefit Analysis (CBA)", url: "decisions-cba.html" },
                        { label: "Risk Assessment Matrix", url: "decisions-risk-matrix.html" },
                        { label: "Force Field Analysis", url: "decisions-force-field.html" },
                        { label: "OODA Loop", url: "decisions-ooda.html" },
                        { label: "WRAP Technique", url: "decisions-wrap.html" }
                    ]
                },
                {
                    label: "Goal Setting & Performance Management",
                    url: "goals.html",
                    children: [
                        { label: "SMART Goals", url: "goals-smart.html" },
                        { label: "Objectives & Key Results (OKRs)", url: "goals-okrs.html" },
                        { label: "Balanced Scorecard", url: "goals-scorecard.html" },
                        { label: "Big Hairy Audacious Goal (BHAG)", url: "goals-bhag.html" },
                        { label: "Backward Goal Framework", url: "goals-backward.html" },
                        { label: "The Golden Circle", url: "goals-golden-circle.html" },
                        { label: "Goals Pyramid", url: "goals-pyramid.html" },
                        { label: "Tiered Goals", url: "goals-tiered.html" },
                        { label: "HARD Goals", url: "goals-hard.html" },
                        { label: "Goals, Signals, Measures (GSM)", url: "goals-gsm.html" },
                        { label: "WOOP Framework", url: "goals-woop.html" },
                        { label: "Locke & Latham's 5 Principles", url: "goals-five-principles.html" },
                        { label: "One Word Goal Setting", url: "goals-one-word.html" }
                    ]
                },
                {
                    label: "Feedback & Coaching",
                    url: "feedback.html",
                    children: [
                        { label: "GROW Model", url: "feedback-grow.html" },
                        { label: "Situation-Behaviour-Impact (SBI)", url: "feedback-sbi.html" },
                        { label: "CEDAR Feedback", url: "feedback-cedar.html" },
                        { label: "Pendleton's Rules", url: "feedback-pendletons.html" },
                        { label: "COIN Model", url: "feedback-coin.html" },
                        { label: "Big Small Quick (BSQ)", url: "feedback-bsq.html" }
                    ]
                },
                {
                    label: "Interview & Professional Communication",
                    url: "communication.html",
                    children: [
                        { label: "Storytelling", url: "communication-storytelling.html" },
                        { label: "STAR Method", url: "communication-star.html" },
                        { label: "CAR Framework", url: "communication-car.html" },
                        { label: "SOAR Technique", url: "communication-soar.html" },
                        { label: "PARLA Method", url: "communication-parla.html" },
                        { label: "FAB Approach", url: "communication-fab.html" },
                        { label: "SAO Framework", url: "communication-sao.html" },
                        { label: "SHARE Model", url: "communication-share.html" },
                        { label: "DARE Method", url: "communication-dare.html" },
                        { label: "CAPS Technique", url: "communication-caps.html" }
                    ]
                }
            ]
        },
        {
            label: "INTERVIEW",
            url: "interview.html",
            children: [
                {
                    label: "Career Interviews",
                    url: "career-interviews.html",
                    children: [
                        { label: "Internal Promotion Interviews", url: "interview-career-internal-promotion.html" },
                        { label: "External Job Interviews", url: "interview-career-external-jobs.html" }
                    ]
                },
                {
                    label: "Professional Registration Interviews (PRI)",
                    url: "pri.html",
                    children: [
                        { label: "CEng Review Interviews", url: "interview-registration-ceng.html" },
                        { label: "IEng Review Interviews", url: "interview-registration-ieng.html" },
                        { label: "EngTech Review Interviews", url: "interview-registration-engtech.html" }
                    ]
                }
            ]
        },
        {
            label: "CPD",
            url: "cpd.html",
            children: [
                { label: "CPD Planner", url: "planner.html" },
                { label: "Engineering Acronyms Decoder", url: "decoder.html" },
                { label: "RACI Matrix Roles", url: "raci.html" },
                { label: "Engineering Resources", url: "resources.html" },
                {
                    label: "Hobbies",
                    url: "hobbies.html",
                    children: [
                        { label: "STEM Volunteering", url: "stem.html" },
                        { label: "Playing Chess", url: "chess.html" },
                        { label: "Performing Poetry", url: "poetry.html" },
                        { label: "Calisthenics Training", url: "calisthenics.html" },
                        { label: "Acronym Blitz Game", url: "blitz.html" }
                    ]
                }
            ]
        }
    ];

    const path = window.location.pathname;
    const page = path === "/" ? "index" : path.split("/").pop().replace('.html', '');

    let resolvedTitle = "Empowering Engineers UK®";
    if (page !== "index" && page !== "") {
        let cleanTitle = document.title.replace(/\s*\|\s*Empowering Engineers UK/gi, '').trim();
        const matchedNode = menuTree.find(item => item.url.includes(page));
        if (matchedNode) {
            resolvedTitle = matchedNode.label;
        } else {
            resolvedTitle = cleanTitle.split(/[|\-]/)[0].trim();
        }
    } else {
        resolvedTitle = "Accelerating Your Professional Registration";
    }

    function buildDesktopMenu(tree) {
        let html = '<ul class="ee-nav-menu">';
        tree.forEach(item => {
            const hasChildren = item.children && item.children.length > 0;
            const caret = hasChildren ? ' <span>▼</span>' : '';
            const isActive = (page === item.url.replace('.html', '')) ? 'active' : '';
            
            html += `<li class="ee-nav-item">`;
            html += `<a href="${item.url}" class="ee-nav-link ${isActive}">${item.label}${caret}</a>`;
            
            if (hasChildren) {
                html += `<ul class="ee-dropdown">`;
                item.children.forEach(child => {
                    const hasSubChildren = child.children && child.children.length > 0;
                    const subCaret = hasSubChildren ? ' <span>▶</span>' : '';
                    const subClass = hasSubChildren ? 'class="ee-dropdown-sub"' : '';
                    
                    html += `<li ${subClass}>`;
                    html += `<a href="${child.url}" class="ee-dropdown-link"><span>${child.label}</span>${subCaret}</a>`;
                    
                    if (hasSubChildren) {
                        html += `<ul class="ee-dropdown">`;
                        child.children.forEach(subChild => {
                            html += `<li><a href="${subChild.url}" class="ee-dropdown-link">${subChild.label}</a></li>`;
                        });
                        html += `</ul>`;
                    }
                    html += `</li>`;
                });
                html += `</ul>`;
            }
            html += `</li>`;
        });
        
        html += `
        <li class="ee-nav-theme-item-wrapper">
            <button class="ee-search-trigger-btn" onclick="window.toggleSearchModal(true)" aria-label="Open sitemap search overlay" style="background:transparent; border:none; font-size:1.4rem; box-shadow:none !important;">🔍</button>
        </li>
        <li class="ee-nav-theme-item-wrapper">
            <button class="ee-nav-theme-svg-btn" onclick="window.ThemeManager.toggle()" aria-label="Toggle user interface configuration state" style="background:transparent; border:none; box-shadow:none !important;">
                <img class="js-theme-svg-target" src="assets/EE_light-visibility.svg" alt="Active Interface Visibility Toggle Target" style="height:24px; width:24px;">
            </button>
        </li>
        `;
        html += '</ul>';
        return html;
    }

    function buildMobileMenu(tree) {
        let html = '<ul class="ee-accordion">';
        tree.forEach(item => {
            const hasChildren = item.children && item.children.length > 0;
            
            if (hasChildren) {
                html += `<li class="ee-accordion-item">`;
                html += `<button class="ee-accordion-toggle" onclick="toggleMobileAccordion(this)">${item.label} <span>▼</span></button>`;
                html += `<ul class="ee-accordion-content">`;
                
                if (item.url && item.url !== "#") {
                    html += `<li><a href="${item.url}" class="ee-accordion-link" onclick="window.toggleMobileDrawer(false)" style="color: #03F7A0 !important; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 5px;">${item.label} Overview</a></li>`;
                }
                
                item.children.forEach(child => {
                    const hasSubChildren = child.children && child.children.length > 0;
                    
                    if (hasSubChildren) {
                        html += `<li class="ee-accordion-item">`;
                        html += `<button class="ee-accordion-toggle" style="font-size:0.9rem;" onclick="toggleMobileAccordion(this)">${child.label} <span>▼</span></button>`;
                        html += `<ul class="ee-accordion-sub-menu" style="display:none; list-style:none; padding-left:15px; background:rgba(0,0,0,0.15);">`;
                        
                        if (child.url && child.url !== "#") {
                            html += `<li><a href="${child.url}" class="ee-accordion-link" onclick="window.toggleMobileDrawer(false)" style="color: #03F7A0 !important; font-style: italic;">${child.label} Overview</a></li>`;
                        }

                        child.children.forEach(subChild => {
                            html += `<li><a href="${subChild.url}" class="ee-accordion-link" onclick="window.toggleMobileDrawer(false)">${subChild.label}</a></li>`;
                        });
                        html += `</ul>`;
                        html += `</li>`;
                    } else {
                        html += `<li><a href="${child.url}" class="ee-accordion-link" onclick="window.toggleMobileDrawer(false)">${child.label}</a></li>`;
                    }
                });
                
                html += `</ul>`;
                html += `</li>`;
            } else {
                html += `<li><a href="${item.url}" class="ee-accordion-link" onclick="window.toggleMobileDrawer(false)" style="padding: 12px 16px; font-size:1rem;">${item.label}</a></li>`;
            }
        });
        
        html += '</ul>';
        return html;
    }

    const desktopNavHTML = buildDesktopMenu(menuTree);
    const mobileNavHTML = buildMobileMenu(menuTree);

    const headerHTML = `
    ${navStyles}
    <header class="sticky-container" >
        <div class="header-brand-row">
            <a href="index.html" aria-label="Return to Empowering Engineers UK Home">
                <img src="assets/EE_Favicon_1024.jpg" alt="Empowering Engineers UK Logo" class="site-brand-img">
            </a> 
            <nav aria-label="Main Navigation">
                ${desktopNavHTML}
            </nav> 
            <div class="ee-mobile-trigger-bar">
                <button class="ee-hamburger-btn" onclick="toggleMobileDrawer(true)" aria-label="Toggle responsive drawer pane">☰</button>
                <button class="ee-search-trigger-btn" onclick="window.toggleSearchModal(true)" aria-label="Open search engine viewport" style="background:transparent; border:none; box-shadow:none !important; color:#fff; font-size:1.4rem;">🔍</button>
            </div>
        </div> 
        <div class="header-title-row">
            <div>
                <p style="text-align:center;"><img width="460" src="assets/EE_Logo_rect_Trans.png" class="logo-box" alt="Empowering Engineers UK Master Emblem"></p>
                <h1 class="header-page-title">${resolvedTitle}</h1>
            </div>
        </div>
    </header>

    <div id="eeSearchModal" class="ee-search-modal">
        <div class="ee-search-box-container">
            <div class="ee-search-modal-header">
                <span class="ee-search-modal-title">Fuzzy Navigation Search Index</span>
                <button class="ee-search-close-btn" onclick="window.toggleSearchModal(false)">✕</button>
            </div>
            <input type="text" id="eeSearchInput" class="ee-search-input-field" placeholder="Search subpages... (e.g. CENG, SWOT, OKRS)" autocomplete="off" oninput="window.executeFuzzySearch()">
            <div id="eeSearchResults" class="ee-search-results-list"></div>
        </div>
    </div>

    <div id="eeMobileOverlay" class="ee-drawer-overlay" onclick="toggleMobileDrawer(false)"></div>
    <div id="eeMobileDrawer" class="ee-mobile-drawer">
        <div class="ee-drawer-header">
            <span style="color:#FFFFFF; font-weight:700; text-transform:uppercase; font-size:0.9rem; letter-spacing:0.5px;">Navigation Menu</span>
            <button class="ee-drawer-close" onclick="toggleMobileDrawer(false)">✕</button>
        </div>
        <nav aria-label="Mobile Navigation System Menu">
            ${mobileNavHTML}
            <div style="padding: 15px 16px; margin-top: 10px; border-top: 1px dashed rgba(255,255,255,0.1); display:flex; gap:10px;">
                <button class="ee-nav-theme-svg-btn" onclick="window.ThemeManager.toggle()" aria-label="Cycle system layouts" style="background:transparent; border:none; box-shadow:none !important;">
                    <img class="js-theme-svg-target" src="assets/EE_light-visibility.svg" alt="Active visibility layout variant" style="height:32px; width:32px;">
                </button>
            </div>
        </nav>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    /* --- 3. HIGH PERFORMANCE SCROLL ENGINE & LIFECYCLE CONTROLS --- */
    let isTicking = false;
    let dynamicCollapseTrigger = 220; // Fallback starting metric
    const EXPAND_TRIGGER = 20;

    // Dynamically calculate the accurate state boundaries based on current window formatting
    function calculateDynamicHeaderMetrics() {
        const header = document.querySelector('.sticky-container');
        if (!header) return;
        
        // Prevent layout thrashing: Measure actual state ONLY when expanded
        if (!header.classList.contains('scrolled')) {
            const actualHeight = header.offsetHeight;
            // Mathematical Deadzone Law: 
            // The gap between collapse and expand triggers MUST exceed the maximum height shift.
            // By setting the collapse trigger greater than the total expanded height itself, 
            // the layout shift can NEVER bridge the gap and trigger a feedback loop.
            dynamicCollapseTrigger = actualHeight + 60; 
        }
    }

    // Initialise metrics on structural mount
    window.addEventListener('DOMContentLoaded', calculateDynamicHeaderMetrics);
    
    // Recalculate safely on resize without thrashing active scroll states
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(calculateDynamicHeaderMetrics, 200);
    });

    window.addEventListener('scroll', function() {
        if (!isTicking) {
            window.requestAnimationFrame(function() {
                const header = document.querySelector('.sticky-container');
                if (header) {
                    // Implement strict calculated boundaries to eliminate feedback loops
                    if (window.scrollY > dynamicCollapseTrigger) {
                        header.classList.add('scrolled');
                    } else if (window.scrollY < EXPAND_TRIGGER) {
                        header.classList.remove('scrolled');
                    }
                }
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });

    window.toggleMobileDrawer = function(openState) {
        const drawer = document.getElementById('eeMobileDrawer');
        const overlay = document.getElementById('eeMobileOverlay');
        if (openState) { 
            drawer.classList.add('open'); 
            overlay.classList.add('visible'); 
        } else { 
            drawer.classList.remove('open'); 
            overlay.classList.remove('visible'); 
        }
    };

    window.addEventListener('pageshow', function(event) {
        window.toggleMobileDrawer(false);
    });

    window.toggleMobileAccordion = function(element) {
        const item = element.parentElement;
        const subMenu = element.nextElementSibling;
        if (subMenu && subMenu.classList.contains('ee-accordion-sub-menu')) {
            if (subMenu.style.display === 'none' || subMenu.style.display === '') {
                subMenu.style.display = 'block';
                element.querySelector('span').innerText = '▲';
            } else {
                subMenu.style.display = 'none';
                element.querySelector('span').innerText = '▼';
            }
            return;
        }
        const isOpen = item.classList.contains('open');
        const siblings = item.parentElement.querySelectorAll('.ee-accordion-item');
        siblings.forEach(sib => {
            sib.classList.remove('open');
            const sibToggle = sib.querySelector('.ee-accordion-toggle span');
            if (sibToggle) sibToggle.innerText = '▼';
        });
        if (!isOpen) { item.classList.add('open'); element.querySelector('span').innerText = '▲'; }
        else { item.classList.remove('open'); element.querySelector('span').innerText = '▼'; }
    };

    // --- 4. FUZZY SEARCH SUBSYSTEM MODULE ENGINE ---
    let searchIndex = [];
    function flattenSitemap(nodes) {
        nodes.forEach(n => {
            if (n.url !== "#") {
                searchIndex.push({ name: n.label, url: n.url });
            }
            if (n.children) flattenSitemap(n.children);
        });
    }
    flattenSitemap(menuTree);

    window.toggleSearchModal = function(show) {
        const modal = document.getElementById('eeSearchModal');
        modal.classList.toggle('active', show);
        if (show) {
            const input = document.getElementById('eeSearchInput');
            input.value = '';
            input.focus();
            window.executeFuzzySearch();
        }
    };

    window.executeFuzzySearch = function() {
        const query = document.getElementById('eeSearchInput').value.toLowerCase().trim();
        const resultsBox = document.getElementById('eeSearchResults');
        resultsBox.innerHTML = '';

        const filterMatches = searchIndex.filter(item => item.name.toLowerCase().includes(query));

        if (filterMatches.length > 0) {
            filterMatches.forEach(match => {
                const token = document.createElement('div');
                token.className = 'ee-search-result-token';
                token.innerHTML = `<a href="${match.url}">${match.name.toUpperCase()}</a>`;
                resultsBox.appendChild(token);
            });
        } else {
            resultsBox.innerHTML = `<div class="ee-search-empty-state">NO STRUCTURED NARRATIVE RECORDS CAPTURED.</div>`;
        }
    };

    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") window.toggleSearchModal(false);
    });

    // --- 5. TELEMETRY EVENT DELEGATION ENGINE ---
    // Dynamically captures designated technical interactions across the platform without bloating child scripts
    document.addEventListener('DOMContentLoaded', function() {
        document.body.addEventListener('click', function(e) {
            // Guard clause: Prevent phantom event fires outside of live deployment environments
            if (window.location.hostname !== 'www.empoweringengineers.uk' || typeof gtag !== 'function') return;
            
            const interactiveNode = e.target.closest('button') || e.target.closest('a');
            if (!interactiveNode) return;
            
            const nodeText = (interactiveNode.innerText || '').toUpperCase();
            
            // Core Registration Cohort Tracking: Identify users building formal CEng/IEng documentation
            if (nodeText.includes('GENERATE APPLICATION PREVIEW')) {
                const pathwayMatch = window.location.pathname.match(/(ceng|ieng|engtech)/i);
                const pathwayType = pathwayMatch ? pathwayMatch[1].toUpperCase() : 'GENERAL_PORTFOLIO';
                
                gtag('event', 'generate_master_portfolio', { 
                    'event_category': 'technical_conversion', 
                    'pathway_type': pathwayType 
                });
            }
            
            // Framework Narrative Tracking: Identify users actively executing coaching methodology scripts
            if (nodeText.includes('PREVIEW DRAFT') || nodeText.includes('COPY OUTLINE')) {
                const frameworkType = window.location.pathname.includes('star') ? 'STAR' : 'GENERAL_NARRATIVE';
                
                gtag('event', 'preview_narrative_draft', { 
                    'event_category': 'framework_engagement', 
                    'framework_type': frameworkType 
                });
            }
        });
    });

})();