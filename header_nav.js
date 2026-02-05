// EMPOWERING ENGINEERS UK - DYNAMIC HEADER & ACTION BAR v4.0
// UPDATE: Standardized Font (Arial/Helvetica) for Action Bar

(function() {

    // --- PART 1: INJECT MAIN HEADER (Logo + Nav) ---
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

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
		{ label: "Application", url: "application_tool.html" }, // OUR LATEST APPLICATION FOR RECORDING YOUR PROFESSIONAL REGISTRATION COMPETENCE STATEMENTS!
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
            <nav>
                ${navHTML}
            </nav>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // --- PART 2: DYNAMIC ACTION BAR ---
    const intentMap = {
        "default": { tool: "", desc: "", url: "" },
        "report": { label: "Write my CEng/IEng Application Report", tool: "Report Architect", desc: "Use standard templates (IET/IMechE) to structure your evidence.", url: "report_tool.html" },
        "interview": { label: "Prepare for my Professional Review Interview", tool: "Virtual Interviewer", desc: "Practice timed UK-SPEC questions with AI critique.", url: "interview_tool.html" },
        "star": { label: "Draft my Competency Evidence (STAR)", tool: "STAR-Gen", desc: "Structure your examples using the Situation-Task-Action-Result format.", url: "STAR_engine.html" },
        "career": { label: "Apply for a new job / Write a CV", tool: "Career Starter", desc: "Generate a technical CV and Cover Letter tailored to your experience.", url: "career_tool.html" },
        "cpd": { label: "Plan my Development (CPD)", tool: "CPD Smart-Planner", desc: "Identify gaps (70/20/10) and build a Development Action Plan.", url: "cpd_tool.html" },
        "dap": { label: "Build my Development Action Plan (DAP)", tool: "Strategic DAP Architect", desc: "Create a Short/Medium/Long term plan for your application.", url: "dap_tool.html" },
        "conflict": { label: "Solve a Work Problem or Conflict", tool: "Management Coach", desc: "Use frameworks like GROW or COIN to resolve leadership issues.", url: "feedback_tool.html" },
        "atlas": { label: "Look up Engineering Hardware Specs", tool: "Component Atlas", desc: "Interactive blueprint database (Mech, Elec, Civil, Auto).", url: "hardware_tool.html" },
        "acronym": { label: "Decode a Technical Term", tool: "Engineering Decoder", desc: "Search 14,000+ engineering acronyms instantly.", url: "glossary_tool.html" },
        "ref": { label: "Find a Technical Reference or Book", tool: "Engineering Library", desc: "Curated collection of formulas, standards, and trusted websites.", url: "reference_tool.html" }
    };

    const style = document.createElement('style');
    style.innerHTML = `
        .action-bar-container {
            background: transparent; 
            padding: 0;
            font-family: "Arial", "Helvetica Neue", "Helvetica", sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 15px; 
            justify-content: center;
        }
        
        .action-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 250px;
            height: 30px; 
            align-items: center;
        }

        .action-select {
            background: var(--input-bg);
            backdrop-filter: blur(5px);
            color: var(--slate-grey);
            border: 1px solid var(--border-color);
            height: 30px;
            padding: 2px 10px; 
            border-radius: 4px;
            font-family: inherit;
            cursor: pointer;
            font-size: 0.8rem;
            width: 100%;
            text-align: center;
            transition: 0.2s;
            appearance: none;
            -webkit-appearance: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .action-select:hover {
            border-color: var(--terminal-green);
            color: #ffffff;
            background: rgba(13, 27, 42, 0.9);
        }

        .action-select:focus {
            outline: none;
            border-color: var(--terminal-green);
            color: var(--terminal-green) !important;
            background: rgba(0, 0, 0, 0.8);
        }

        .action-select.active-choice {
            color: var(--terminal-green) !important;
            border-color: var(--terminal-green);
        }

        .rec-card {
            display: none;
            background: var(--dark-card);
            border: 1px solid var(--terminal-green);
            border-radius: 6px;
            padding: 12px 20px;
            position: absolute;
            top: 100%; 
            margin-top: 5px;
            right: 20px;
            width: 350px;
            z-index: 2000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.6);
            animation: slideDown 0.2s ease-out;
            flex-direction: column;
            gap: 10px;
        }

        .rec-text { color: var(--cloud-white); font-size: 0.85rem; line-height: 1.4; }
        .rec-btn {
            background: var(--terminal-green);
            color: var(--midnight-navy);
            text-decoration: none;
            padding: 8px 15px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            text-align: center;
            display: block;
            margin-top: 5px;
        }
        .rec-btn:hover { opacity: 0.9; }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 900px) {
            .action-bar-container { margin-left: 0; width: 100%; margin-top: 10px; }
            .action-wrapper { max-width: 100%; }
            .rec-card { position: fixed; top: auto; bottom: 20px; left: 5%; width: 90%; right: auto; margin-top: 0; }
        }
    `;
    document.head.appendChild(style);

    const container = document.querySelector('.sticky-container');
    if (!container) return; 

    const barDiv = document.createElement('div');
    barDiv.className = 'action-bar-container';

    let optionsHTML = '<option value="default">>> Select Objective</option>';
    for (const [key, data] of Object.entries(intentMap)) {
        if(key === "default") continue;
        optionsHTML += `<option value="${key}">${data.label}</option>`;
    }

    barDiv.innerHTML = `
        <div class="action-wrapper">
            <select id="intentSelect" class="action-select">
                ${optionsHTML}
            </select>
        </div>
        <div id="recCard" class="rec-card">
            <div class="rec-text">
                <strong id="recToolName" style=\"color:var(--terminal-green)\"></strong><br>
                <span id=\"recDesc\" style=\"font-size:0.9em; opacity:0.8;\"></span>
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

    document.addEventListener('click', function(e) {
        if (!barDiv.contains(e.target) && !card.contains(e.target)) {
            card.style.display = 'none';
            if(select.value === 'default') {
                select.classList.remove('active-choice');
            }
        }
    });

})();