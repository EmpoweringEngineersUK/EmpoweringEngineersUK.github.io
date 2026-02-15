// EMPOWERING ENGINEERS UK - CENTRAL TOOL DATABASE [v13.0]
// Version: 13.0 (Optimized: Removed redundant AdSense triggers)
// Date: 15 Feb 2026
// Logic: Dynamically renders the 'Instruction Header' into the #tool-header-target div.

const toolHeaders = {
    
    // 1. RACI MATRIX BUILDER
    "raci": {
        title: "RACI MATRIX BUILDER",
        desc: "Clarify project leadership and eliminate role ambiguity. This tool helps you define exactly who is Responsible, Accountable, Consulted, and Informed for every technical deliverable, preventing 'design by committee'.",
        bullets: [
            "<strong>The 'Single Point of Accountability' Rule:</strong> There must be exactly <strong>one</strong> 'Accountable' person (The Owner) per task. If multiple people are accountable, no one is.",
            "<strong>R vs A Distinction:</strong> 'Responsible' (R) is the doer (e.g., Design Engineer). 'Accountable' (A) is the approver who holds the risk (e.g., Senior Engineer).",
            "<strong>Audit Logic:</strong> The built-in Auditor scans your matrix in real-time. It flags missing owners in <span style='color:var(--burnt-orange)'>Red</span> or split accountability in <span style='color:#e17055'>Orange</span>."
        ],
        steps: [
            "<strong>1. Load Template:</strong> Select a scenario (e.g., 'Technical Design', 'Site Safety') to populate standard roles.",
            "<strong>2. Assign Roles:</strong> Use the dropdowns to assign R, A, C, or I. The background colors update automatically.",
            "<strong>3. Verify Health:</strong> Check the 'Matrix Status' panel. Ensure every row has one 'A' and at least one 'R'.",
            "<strong>4. Export:</strong> Save as a PNG for slides or CSV for Excel."
        ],
        privacy: "[!] DATA PRIVACY: Your matrix is stored in LocalStorage. No project data is sent to external servers."
    },

    // 2. STAR ENGINE & AUDITOR
    "star": {
        title: "STAR ENGINE & AUDITOR",
        desc: "Draft your competency example. We will compile it, analyse it against UK-SPEC (A1-E5) standards, and generate an AI refinement prompt for you.",
        bullets: [
            "<strong>Action Bias:</strong> UK-SPEC requires 'I led', 'I calculated'. We flag 'We' and 'Team' to ensure personal accountability.",
            "<strong>Acronym Check:</strong> The auditor ensures you define technical terms on first use to maintain professional clarity.",
            "<strong>Sub-Competencies:</strong> Our algorithm analyses your text to estimate which UK-SPEC clauses (e.g., A1, B2, E5) you have evidenced."
        ],
        steps: [
            "<strong>1. Target:</strong> Select your Target Goal (e.g., CEng) and Sector to configure the auditor.",
            "<strong>2. Draft:</strong> Fill in the S-T-A-R boxes. Focus heavily on the 'Action' (what YOU did).",
            "<strong>3. Analyse:</strong> Click 'Compile & Analyse' to run the audit logic and generate your report.",
            "<strong>4. Review:</strong> Check the Action Bias Score and address any Passive Language warnings."
        ],
        privacy: "[!] PRIVACY: Your drafts are saved to your browser. Clearing cache will remove them."
    },

    // 3. CPD SMART-PLANNER
    "cpd": {
        title: "CPD SMART-PLANNER",
        desc: "Identify skills gaps and build a 70/20/10 Development Action Plan. Generates a context-aware AI prompt to act as your career mentor.",
        bullets: [
            "<strong>70/20/10 Model:</strong> 70% Job Experience (projects), 20% Social Learning (mentoring), 10% Formal Training.",
            "<strong>Gap Analysis:</strong> Visualise your competence against UK-SPEC (A-E). Are you 'Aware' or 'Expert'?",
            "<strong>AI Mega-Prompt:</strong> Generates a detailed prompt for ChatGPT to create a tailored reading list."
        ],
        steps: [
            "<strong>1. Self-Assess:</strong> Rate your competence (1-4) on the sliders.",
            "<strong>2. Set Objectives:</strong> Define your target role (e.g., 'Senior Engineer').",
            "<strong>3. Generate:</strong> Get specific activities to close the gap and a prompt for your AI coach."
        ],
        privacy: "Scores stored locally."
    },

    // 4. ETHICS COMPASS
    "ethics": {
        title: "ENGINEERING ETHICS COMPASS",
        desc: "Navigate ethical dilemmas using the RAEng Statement of Ethical Principles. Generate scripts for difficult conversations about safety or integrity.",
        bullets: [
            "<strong>Four Fundamental Principles:</strong> Analysis based on Honesty & Integrity, Respect for Life, Accuracy & Rigour, and Leadership.",
            "<strong>Conflict Resolution:</strong> Generate scripts to challenge authority figures objectively, focusing on risk and liability rather than personal opinion.",
            "<strong>Risk Assessment:</strong> Quantify the commercial and legal risk of unethical decisions (e.g., GDPR, CDM 2015, Bribery Act)."
        ],
        steps: [
            "<strong>1. Context:</strong> Select your Role and the Counterpart (e.g., Client, Director) to tailor the tone.",
            "<strong>2. Dilemma:</strong> Describe the specific conflict (e.g., 'Pressure to cut testing time').",
            "<strong>3. Analyze:</strong> Select the relevant RAEng principle to generate a professional script."
        ],
        privacy: "Processing is local."
    },

    // 5. THE ENGINEERING DECODER
    "glossary": {
        title: "THE ENGINEERING DECODER",
        desc: "Master the language of engineering. A searchable database of 15,000+ acronyms and a flashcard game to test your knowledge.",
        bullets: [
            "<strong>Jargon Buster:</strong> Decode terms like 'SCADA', 'HAZOP', 'NDT', and 'GD&T' instantly.",
            "<strong>Sector Coverage:</strong> Nuclear, Aerospace, Rail, Oil & Gas, and Civil Engineering.",
            "<strong>Active Recall:</strong> Flashcard Mode builds rapid-recall memory for interviews."
        ],
        steps: [
            "<strong>Search:</strong> Type an acronym to see its definition and sector.",
            "<strong>Game:</strong> Click 'Start Quiz' to race against the clock."
        ]
    },

    // 6. COMPONENT ATLAS
    "hardware": {
        title: "THE COMPONENT ATLAS",
        desc: "Technical reference library for engineering components. Review design parameters, failure modes, and manufacturing standards.",
        bullets: [
            "<strong>First Principles:</strong> Understand load paths, failure modes (shear vs tension), and operating principles.",
            "<strong>Cross-Discipline:</strong> Mechanical, Electrical, and Civil component data.",
            "<strong>Standards:</strong> Links to relevant ISO/BS/ASTM standards."
        ],
        steps: [
            "<strong>1. Select Discipline:</strong> Choose Mechanical, Electrical, or Civil.",
            "<strong>2. Browse:</strong> Select a component (e.g., Gears, Sensors, Beams).",
            "<strong>3. Review:</strong> Read design specs and failure modes."
        ]
    },

    // 7. CAREER STARTER
    "career": {
        title: "CAREER STARTER",
        desc: "Synthesise your technical history into a professional profile. Generates a CV, Cover Letter, and LinkedIn bio strategy using UK-SPEC language.",
        bullets: [
            "<strong>Translator:</strong> Converts 'Site Talk' into 'Professional Engineering' language suitable for recruiters.",
            "<strong>Competence Mapping:</strong> Ensures your CV highlights UK-SPEC competencies (A & B).",
            "<strong>Mutual Benefit:</strong> Creates a cover letter structure that emphasizes value-add, not just experience."
        ],
        steps: [
            "<strong>1. Input Job:</strong> Paste the <strong>Job Description</strong> you are applying for.",
            "<strong>2. Input Wins:</strong> List your <strong>Top 3 Achievements</strong> (STAR format).",
            "<strong>3. Generate:</strong> Click <strong>Generate AI Prompt</strong> and paste into ChatGPT/Claude."
        ],
        privacy: "Local storage only."
    },

    // 8. MANAGEMENT COACH
    "feedback": {
        title: "MANAGEMENT COACHING STUDIO",
        desc: "Solve leadership conflicts and build strategy. 30+ frameworks (SWOT, GROW, COIN) to structure your thinking.",
        bullets: [
            "<strong>Conflict Resolution:</strong> COIN model scripts for difficult feedback.",
            "<strong>Strategy:</strong> SWOT/PESTLE analysis for business cases.",
            "<strong>Mentoring:</strong> GROW model for coaching junior engineers."
        ],
        steps: [
            "<strong>1. Choose Framework:</strong> Select a model (e.g., 'Give Feedback').",
            "<strong>2. Draft:</strong> Answer the prompts.",
            "<strong>3. Export:</strong> Copy structured text for emails/meetings."
        ],
        privacy: "Browser cache only."
    },

    // 9. VIRTUAL INTERVIEWER
    "interview": {
        title: "VIRTUAL PRI SIMULATOR",
        desc: "Simulate your Professional Review Interview (PRI). Answer timed UK-SPEC questions and get AI critiques.",
        bullets: [
            "<strong>Active Recall:</strong> Timed questions simulate interview pressure.",
            "<strong>Competence Tags:</strong> Questions mapped to UK-SPEC A-E.",
            "<strong>AI Critique:</strong> Generate a prompt to grade your answer."
        ],
        steps: [
            "<strong>1. Select Mode:</strong> Choose 'Standard' or specific competence.",
            "<strong>2. Answer:</strong> Speak or type within the time limit.",
            "<strong>3. Review:</strong> Compare with the 'Assessor's Intent'."
        ],
        privacy: "No audio stored."
    },

    // 10. REPORT ARCHITECT
    "report": {
        title: "TECHNICAL REPORT ARCHITECT",
        desc: "Structure professional reports. Templates for Failure Analysis, Design Studies, and Feasibility Reports.",
        bullets: [
            "<strong>Narrative Flow:</strong> Problem -> Analysis -> Solution -> Validation.",
            "<strong>Guidance:</strong> Prompts for calculations, standards, and evidence.",
            "<strong>Export:</strong> Download as .DOCX for final editing."
        ],
        steps: [
            "<strong>1. Choose Type:</strong> Select the report template.",
            "<strong>2. Populate:</strong> Follow the section hints.",
            "<strong>3. Download:</strong> Export to Word."
        ],
        privacy: "[!] PRIVACY: Your drafts are saved to your browser. Clearing cache will remove them."
    },

    // 11. DAP ARCHITECT
    "dap": {
        title: "STRATEGIC DAP ARCHITECT",
        desc: "Build a strategic Development Action Plan (DAP) for the Engineering Council. This tool maps short, medium, and long-term goals to UK-SPEC competencies, helping you transition from technical specialist to strategic leader.",
        bullets: [
            "<strong>Local Optimization (Short Term):</strong> Deepening technical expertise (UK-SPEC A/B).",
            "<strong>Systemic Leadership (Medium Term):</strong> Broadening skills in safety & commerce (UK-SPEC C/E).",
            "<strong>Strategic Alignment (Long Term):</strong> Influencing industry standards (UK-SPEC D)."
        ],
        steps: [
            "<strong>1. Select Target:</strong> Select your Registration Target (e.g., CEng) and Discipline.",
            "<strong>2. Identify Weakness:</strong> Identify your key strategic weakness (e.g., Commercial Awareness).",
            "<strong>3. Generate:</strong> Click 'Generate DAP' to create a 3-horizon plan.",
            "<strong>4. Refine:</strong> Refine the plan with specific course names and project titles."
        ],
        privacy: "[!] PRIVACY: Your drafts are saved to your browser. Clearing cache will remove them."
    },

    // 12. APPLICATION ARCHITECT
    "application": {
        title: "PROFESSIONAL REGISTRATION WORKBENCH",
        desc: "The all-in-one workspace for drafting, auditing, and exporting your CEng, IEng, or EngTech application. Features real-time UK-SPEC scoring and vocabulary coaching.",
        bullets: [
            "<strong>Competence Logic (L1-L4):</strong> The tool analyzes your text density and verb strength to estimate your UK-SPEC score (Level 1 'Aware' to Level 4 'Expert'). Target Level 3+ for CEng.",
            "<strong>The STAR Method:</strong> Use the built-in tabs to structure evidence: <strong>S</strong>ituation (Context), <strong>T</strong>ask (Problem), <strong>A</strong>ction (Your Contribution), <strong>R</strong>esult (Outcome).",
            "<strong>Ghost Text Engine:</strong> Stuck? The tool provides context-aware examples for Civil, Mech, and Electrical scenarios to overcome 'Blank Page Syndrome'."
        ],
        steps: [
            "<strong>1. Select Role:</strong> Choose your target (CEng/IEng) to load the specific UK-SPEC competence framework (A-E).",
            "<strong>2. Draft Career Summary:</strong> Use the 'Roles 1-3' tabs to map your last 5 years of employment history.",
            "<strong>3. Build Competencies:</strong> For each section (A1, A2, etc.), use the STAR builder. The tool will compile your inputs into a coherent narrative.",
            "<strong>4. Export:</strong> Generate a formatted .DOCX file ready for mentor review."
        ],
        privacy: "[!] PRIVACY: Your drafts are saved to your browser. Clearing cache will remove them."
    },

    // 13. REFERENCE LIBRARY
    "reference": {
        title: "ENGINEERING LIBRARY",
        desc: "Curated 'Gold Standard' resources. Textbooks, standards (ISO/BS), and tools for all disciplines.",
        bullets: [
            "<strong>Vetted Sources:</strong> Industry-recognized references only (no pirate sites).",
            "<strong>Categorized:</strong> Filter by discipline (Mech/Elec/Civil) or topic (Stress/Wiring).",
            "<strong>Source Signposting:</strong> Directs you to official publishers, Amazon, or authorized retailers."
        ],
        steps: [
            "<strong>1. Search:</strong> Type a keyword (e.g., 'Stress' or 'Python').",
            "<strong>2. Filter:</strong> Toggle by Discipline or Type (Book/Standard/Tool).",
            "<strong>3. Access:</strong> Click 'Open Resource' to visit the official source."
        ],
        privacy: "[!] PRIVACY: Your drafts are saved to your browser. Clearing cache will remove them."
    },
};

// --- RENDER FUNCTION ---
// Finds <div id="tool-header-target"></div> and injects the header content.
function renderToolHeader(toolKey) {
    const data = toolHeaders[toolKey];
    if (!data) return; 

    // Update Page Title
    document.title = `${data.title} | Empowering Engineers UK`;

    // 1. Locate the target div explicitly placed in the HTML
    let container = document.getElementById('tool-header-target');

    // 2. Fallback: If ID not found, look for class (Legacy support)
    if (!container) {
        container = document.querySelector('.tool-header');
    }

    // 3. Last Resort: Create it if missing (Safety net)
    if (!container) {
        // Try finding main container (ID or Class)
        const main = document.querySelector('.main-container') || document.querySelector('.container');
        if (main) {
            container = document.createElement('div');
            container.id = 'tool-header-target';
            
            // If injecting into a grid container, span full width
            const display = window.getComputedStyle(main).display;
            if(display === 'grid') {
                container.style.gridColumn = '1 / -1';
            }
            
            main.prepend(container);
        } else {
            return; // Exit if no valid place to put it
        }
    }

    // Apply the correct class for CSS styling (layout.css)
    container.className = 'tool-header';

    // Construct HTML
    let html = `<h1 class="tool-h1">${data.title}</h1>
            <p class="tool-desc">${data.desc}</p>
            <div class="header-grid">
                <div class="header-col">
                    <h4>>> KEY FEATURES</h4>
                    <ul class="tool-list">`;
                        if(data.bullets) data.bullets.forEach(b => html += `<li>${b}</li>`);
    html += `       </ul>
                </div>
                <div class="header-col">
                    <h4>>> HOW TO USE</h4>
                    <ul class="tool-list">`;
                        if(data.steps) data.steps.forEach(s => html += `<li>${s}</li>`);
    html += `       </ul>
                </div>
            </div>`;

    if (data.privacy) {
        html += `<span class="privacy-badge" style="display:inline-block; margin-top:10px; font-size:0.7rem; color:#888; border:1px solid #333; padding:2px 6px; border-radius:4px;">🔒 ${data.privacy}</span>`;
    }

    // Inject content
    container.innerHTML = html;

    // NOTE: AdSense trigger removed to prevent conflicts. 
    // Ads are now handled via specific placement in the HTML tools.
}