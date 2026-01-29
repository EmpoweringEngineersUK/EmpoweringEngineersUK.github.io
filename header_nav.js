// EMPOWERING ENGINEERS UK - DYNAMIC ACTION BAR v2.2
// "Stealth Mode" - Transparent/Navy Background
// Updated with Library & DAP

(function() {
    // 1. DEFINITIONS: User Intent -> Tool Mapping
    const intentMap = {
        "default": { tool: "", desc: "", url: "" },
        "report": {
            label: "Write my CEng/IEng Application Report",
            tool: "Report Architect",
            desc: "Use standard templates (IET/IMechE) to structure your evidence.",
            url: "report_tool.html"
        },
        "interview": {
            label: "Prepare for my Professional Review Interview",
            tool: "Virtual Interviewer",
            desc: "Practice timed UK-SPEC questions with AI critique.",
            url: "interview_tool.html"
        },
        "star": {
            label: "Draft my Competency Evidence (STAR)",
            tool: "STAR-Gen",
            desc: "Structure your examples using the Situation-Task-Action-Result format.",
            url: "STAR_engine.html"
        },
        "career": {
            label: "Apply for a new job / Write a CV",
            tool: "Career Starter",
            desc: "Generate a technical CV and Cover Letter tailored to your experience.",
            url: "career_tool.html"
        },
        "cpd": {
            label: "Plan my Development (CPD)",
            tool: "CPD Smart-Planner",
            desc: "Identify gaps (70/20/10) and build a Development Action Plan.",
            url: "cpd_tool.html"
        },
        "dap": {
            label: "Build my Development Action Plan (DAP)",
            tool: "Strategic DAP Architect",
            desc: "Create a Short/Medium/Long term plan for your application.",
            url: "dap_tool.html"
        },
        "conflict": {
            label: "Solve a Work Problem or Conflict",
            tool: "Management Coach",
            desc: "Use frameworks like GROW or COIN to resolve leadership issues.",
            url: "feedback_tool.html"
        },
        "acronym": {
            label: "Decode a Technical Term",
            tool: "Engineering Decoder",
            desc: "Search 14,000+ engineering acronyms instantly.",
            url: "glossary_tool.html"
        },
        "ref": {
            label: "Find a Technical Reference or Book",
            tool: "Engineering Library",
            desc: "Curated collection of formulas, standards, and trusted websites.",
            url: "reference_tool.html"
        }
    };

    // 2. INJECT CSS STYLES (Stealth Mode: Transparent/Navy)
    const style = document.createElement('style');
    style.innerHTML = `
        .action-bar-container {
            background: transparent; 
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 8px 0;
            font-family: 'Courier Prime', monospace;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s ease;
            margin-top: -1px;
        }
        
        .action-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 600px;
        }

        .action-select {
            background: rgba(13, 27, 42, 0.6); /* Semi-transparent Navy */
            backdrop-filter: blur(5px);
            color: #8892b0;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 8px 15px;
            border-radius: 4px;
            font-family: inherit;
            cursor: pointer;
            font-size: 0.9rem;
            width: 100%;
            text-align: center;
            transition: 0.2s;
            appearance: none;
            -webkit-appearance: none;
        }

        .action-select:hover {
            border-color: #00FF99;
            color: #ffffff;
            background: rgba(13, 27, 42, 0.9);
        }

        .action-select:focus {
            outline: none;
            border-color: #00FF99;
            color: #00FF99;
            background: rgba(0, 0, 0, 0.8);
        }

        /* Recommendation Card */
        .rec-card {
            display: none;
            background: rgba(13, 27, 42, 0.95);
            border: 1px solid #00FF99;
            border-radius: 6px;
            padding: 12px 20px;
            margin-top: 10px;
            width: 90%;
            max-width: 800px;
            align-items: center;
            justify-content: space-between;
            animation: slideDown 0.3s ease-out;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        .rec-text { 
            color: #e2e8f0; 
            font-size: 0.9rem; 
        }

        .rec-btn {
            background: transparent;
            color: #00FF99;
            border: 1px solid #00FF99;
            text-decoration: none;
            padding: 6px 15px;
            border-radius: 4px;
            font-size: 0.85rem;
            font-weight: bold;
            white-space: nowrap;
            margin-left: 20px;
            transition: 0.2s;
            text-transform: uppercase;
        }

        .rec-btn:hover { 
            background: #00FF99; 
            color: #050a10; 
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 600px) {
            .rec-card { flex-direction: column; gap: 10px; text-align: center; }
            .rec-btn { margin-left: 0; width: 100%; }
        }
    `;
    document.head.appendChild(style);

    // 3. BUILD DOM
    const container = document.querySelector('.sticky-container');
    if (!container) return; 

    const barDiv = document.createElement('div');
    barDiv.className = 'action-bar-container';

    let optionsHTML = '<option value="default">>> Select Objective --</option>';
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
                <strong id="recToolName" style="color:#00FF99"></strong>: 
                <span id="recDesc"></span>
            </div>
            <a id="recLink" href="#" class="rec-btn">Go to Tool &rarr;</a>
        </div>
    `;

    container.appendChild(barDiv);

    // 4. ADD INTERACTIVITY
    const select = document.getElementById('intentSelect');
    const card = document.getElementById('recCard');
    const toolName = document.getElementById('recToolName');
    const desc = document.getElementById('recDesc');
    const link = document.getElementById('recLink');

    select.addEventListener('change', function() {
        const val = this.value;
        if (val === 'default') {
            card.style.display = 'none';
            this.style.color = '#8892b0'; 
            return;
        }

        this.style.color = '#00FF99'; 

        const data = intentMap[val];
        toolName.innerText = data.tool;
        desc.innerText = data.desc;
        link.href = data.url;
        
        card.style.display = 'flex';
    });

})();