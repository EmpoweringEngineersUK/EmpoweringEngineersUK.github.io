// EMPOWERING ENGINEERS UK - CENTRAL TOOL DATABASE [v15.0]
// Version: 15.0 (Consolidated Database - Removed low-value legacy tools)
// Date: 6 May 2026
// Logic: Dynamically renders the 'Instruction Header' into the #tool-header-target div.

const toolHeaders = {
    
    // 1. PROFESSIONAL REGISTRATION WORKBENCH (Consolidated Master Tool)
    "application": {
        title: "PROFESSIONAL REGISTRATION WORKBENCH",
        desc: "Achieving professional registration (CEng, IEng, or EngTech) requires demonstrating your engineering competence and commitment against the UK-SPEC 4th Edition standard. Developing engineers must prepare and draft their application portfolios through licensed Professional Engineering Institutions (PEIs)—such as IMechE and IChemE—who formally assess the submissions.\n\nThis all-in-one workspace streamlines that entire journey. It provides a structured environment to draft, audit, and export your application, complete with real-time UK-SPEC scoring and vocabulary coaching to ensure your evidence perfectly aligns with your institution's requirements.",
        bullets: [
            "<strong>Competence Logic (L1-L4):</strong> The tool analyses your text density and verb strength to estimate your UK-SPEC score (Level 1 'Aware' to Level 4 'Expert'). Target Level 3+ for CEng.",
            "<strong>The STAR Method:</strong> Use the built-in tabs to structure evidence: <strong>S</strong>ituation (Context), <strong>T</strong>ask (Problem), <strong>A</strong>ction (Your Contribution), <strong>R</strong>esult (Outcome).",
            "<strong>Ghost Text Engine:</strong> Stuck? The tool provides context-aware examples for Civil, Mechanical, and Electrical scenarios to overcome 'Blank Page Syndrome'."
        ],
        steps: [
            "<strong>1. Select Role:</strong> Choose your target (CEng/IEng) to load the specific UK-SPEC competence framework (A-E).",
            "<strong>2. Draft Career Summary:</strong> Use the 'Roles 1-3' tabs to map your last 5 years of employment history.",
            "<strong>3. Build Competencies:</strong> For each section (A1, A2, etc.), use the STAR builder. The tool will compile your inputs into a coherent narrative.",
            "<strong>4. Export:</strong> Generate a formatted .DOCX file ready for mentor review."
        ],
        privacy: "[!] DATA INTEGRITY: LocalStorage utilised. Your professional data remains strictly within your browser environment."
    },

    // 2. VIRTUAL INTERVIEWER
    "interview": {
        title: "VIRTUAL PRI SIMULATOR",
        desc: `The Professional Review Interview (PRI) is the final, critical milestone of the registration process managed by your chosen Professional Engineering Institution (PEI). Conducted by a panel of registered peer assessors, this interview is designed to probe your written submission and verbally validate your engineering competence and commitment against the UK-SPEC standard.\n\nThis Virtual PRI Simulator bridges the gap between written evidence and verbal execution. It provides an interactive platform to practice under real interview conditions, answering timed, dynamically generated questions mapped directly to UK-SPEC criteria. With a chance for  AI critiques evaluating your technical delivery, response structure, and professional vocabulary, you can confidently refine your presentation style before facing the actual panel.`,
        bullets: [
            "<strong>Active Recall:</strong> Timed questions simulate the pressure of the interview environment.",
            "<strong>Competence Tags:</strong> Questions are explicitly mapped to UK-SPEC categories A through E.",
            "<strong>AI Critique:</strong> Generate an elite prompt to have a Large Language Model grade your recorded answer."
        ],
        steps: [
            "<strong>1. Select Mode:</strong> Choose 'Standard' or focus on a specific competence area.",
            "<strong>2. Answer:</strong> Speak or type your response within the allocated time limit.",
            "<strong>3. Review:</strong> Compare your response with the expected 'Assessor's Intent'."
        ],
        privacy: "[!] PRIVACY: Audio inputs are not captured or stored on our servers."
    },

    // 3. CPD SMART-PLANNER
    "cpd": {
        title: "CPD SMART-PLANNER",
        desc: "Plan and execute a strategic Continuing Professional Development (CPD) portfolio fully aligned with UK-SPEC Competency E (Personal and Professional Commitment). For engineers working towards EngTech, IEng, or CEng registration, ad-hoc training is insufficient; the Engineering Council requires a demonstrable cycle of identifying skills gaps, planning targeted learning, and recording actionable reflection. This interactive CPD Smart-Planner replaces arbitrary goal-setting with the industry-standard 70/20/10 development framework. It helps you systematically map out experiential learning (70% on-the-job problem solving), social learning (20% mentoring and peer review), and formal education (10% structured courses). By pinpointing exact technical and leadership deficiencies, the system generates a comprehensive Development Action Plan (DAP). Furthermore, it engineers a highly contextualised AI prompt, allowing you to use any Large Language Model as a bespoke career mentor to stress-test your objectives, suggest relevant UK-specific engineering resources, and ensure your development trajectory strictly supports your impending Professional Review.",
        bullets: [
            "<strong>70/20/10 Model:</strong> 70% Job Experience (projects), 20% Social Learning (mentoring), 10% Formal Training.",
            "<strong>Gap Analysis:</strong> Visualise your competence against UK-SPEC (A-E). Identify if you are currently at 'Aware' or 'Expert' level.",
            "<strong>AI Mega-Prompt:</strong> Generates a detailed meta-prompt for your preferred LLM to create a highly tailored reading list."
        ],
        steps: [
            "<strong>1. Self-Assess:</strong> Rate your current competence (1-4) using the sliders.",
            "<strong>2. Set Objectives:</strong> Define your target role (e.g., 'Senior Mechanical Engineer').",
            "<strong>3. Generate:</strong> Receive specific activities to close the gap alongside your AI coach prompt."
        ],
        privacy: "[!] DATA INTEGRITY: Self-assessment scores are stored locally."
    },

    // 4. RACI MATRIX BUILDER
    "raci": {
        title: "RACI MATRIX BUILDER",
        desc: "Map technical accountabilities and demonstrate operational engineering governance aligned directly with UK-SPEC Competency C (Management and Leadership). For early-career engineers targeting Chartered (CEng) or Incorporated (IEng) registration, mastering project management boundaries is critical. This interactive workbench eliminates role ambiguity across multi-disciplinary engineering teams by creating a transparent, auditable trail of design and safety ownership. Define exactly who executes technical tasks (Responsible), who holds ultimate regulatory liability and sign-off veto power (Accountable), whose specialist domain advice must be formally integrated into the workflow (Consulted), and which stakeholders require closed-loop progress tracking (Informed). Use this system to mitigate engineering design risk, protect safety-critical interfaces under CDM regulations, resolve team friction, and establish robust, verifiable portfolio evidence for your Professional Review interview.",bullets: [
            "<strong>The 'Single Point of Accountability' Rule:</strong> There must be exactly <strong>one</strong> 'Accountable' person (The Owner) per task. If multiple people are accountable, no one is.",
            "<strong>R vs A Distinction:</strong> 'Responsible' (R) is the doer (e.g., Design Engineer). 'Accountable' (A) is the approver who holds the risk (e.g., Principal Engineer).",
            "<strong>Audit Logic:</strong> The built-in Auditor scans your matrix in real-time. It flags missing owners in <span style='color:var(--burnt-orange)'>Red</span> or split accountability in <span style='color:#e17055'>Orange</span>."
        ],
        steps: [
            "<strong>1. Load Template:</strong> Select a scenario (e.g., 'Technical Design', 'Site Safety') to populate standard roles.",
            "<strong>2. Assign Roles:</strong> Use the dropdowns to assign R, A, C, or I. Background colours automatically update.",
            "<strong>3. Verify Health:</strong> Check the 'Matrix Status' panel. Ensure every row has one 'A' and at least one 'R'.",
            "<strong>4. Export:</strong> Save as a PNG for your slide deck or CSV for Excel processing."
        ],
        privacy: "[!] DATA PRIVACY: Your matrix matrices are stored strictly in LocalStorage."
    },

    // 5. MANAGEMENT COACH
    "coach": {
        title: "MANAGEMENT COACHING STUDIO",
        desc: "Deploy an advanced leadership studio containing over 35 elite business strategy, operational optimisation, process design, and performance coaching frameworks to resolve workplace conflicts and architect corporate strategy. Essential for engineers accelerating towards IEng or CEng status, this interactive studio provides structured decision-making mechanisms to satisfy UK-SPEC Competencies C (Management and Leadership) and D (Communication). Formulate corporate industrial policy using SWOT Analysis, PESTLE Analysis, Porter's Five Forces, VRIO Framework, BCG Matrix, Ansoff Matrix, Scenario Planning, Value Chain Analysis, Blue Ocean Strategy, Business Model Canvas, SOAR Analysis, and Balanced Scorecards. Systematically eliminate workflow waste, resolve bottlenecks, and engineer continuous quality improvements using PDCA Cycles, DMAIC frameworks, Value Stream Mapping (VSM), 5 Whys Root Cause Analysis, Fishbone Diagrams, Pareto 80/20 Prioritisation, Kanban Boards, Poka-Yoke mistake-proofing, and SIPOC process scoping maps. Mitigate commercial and operational engineering risks using Monte Carlo Simulations, Decision Tree Analysis, Cost-Benefit Analysis (CBA), Risk Assessment Matrices, and Force Field Analysis change models. Accelerate tactical deployment and high-pressure operational decision cycles using the OODA Loop or WRAP Technique. For engineering team management and peer development, deploy professional closed-loop evaluation and communication vehicles including the GROW Model, OKRs, SBI, SBIBI, SBII, CEDAR performance reviews, Pendleton's Rules, and the COIN Model. This environment converts day-to-day engineering friction into robust, auditable evidence of C-suite executive competence ready for your Professional Review interview.",
        bullets: [
            "<strong>Conflict Resolution:</strong> COIN model scripts for delivering difficult feedback objectively.",
            "<strong>Strategy:</strong> SWOT/PESTLE analysis templates for formulating business cases.",
            "<strong>Mentoring:</strong> GROW model implementation for coaching junior engineering staff."
        ],
        steps: [
            "<strong>1. Choose Framework:</strong> Select an analytical model (e.g., 'Give Feedback').",
            "<strong>2. Draft:</strong> Input your context by answering the guided prompts.",
            "<strong>3. Export:</strong> Copy the structured text directly into your emails or meeting agendas."
        ],
        privacy: "[!] PRIVACY: Information remains within your browser cache."
    },

    // 6. ACRONYM DECODER
    "decoder": {
        title: "THE ENGINEERING DECODER",
        desc: "Master the language of professional engineering. Interrogate a comprehensive database of 15,000+ acronyms or use the flashcard system for active recall.",
        bullets: [
            "<strong>Jargon Buster:</strong> Decode terms such as 'SCADA', 'HAZOP', 'NDT', and 'GD&T' instantly.",
            "<strong>Sector Coverage:</strong> Broad applicability across Nuclear, Aerospace, Rail, Oil & Gas, and Civil Engineering sectors.",
            "<strong>Active Recall:</strong> Flashcard Mode builds rapid-recall memory essential for interview preparation."
        ],
        steps: [
            "<strong>1. Search:</strong> Input an acronym to retrieve its definition and relevant sector.",
            "<strong>2. Game:</strong> Initialise 'Start Quiz' to test your knowledge under timed conditions."
        ]
    },

    // 7. REFERENCE LIBRARY
    "library": {
        title: "ENGINEERING LIBRARY",
        desc: `Continuous Professional Development (CPD) and maintaining an authoritative, up-to-date knowledge base are core requirements of the UK-SPEC framework. To confidently satisfy the competence criteria for professional registration, developing engineers must back their practical experience with rigorous technical and industry-standard reference material.\n\nThis platform serves as a curated repository of 'Gold Standard' resources compiled specifically to support your professional growth. Through a highly granular filtering engine, you can instantly access fundamental textbooks, official British Standards (BS/ISO), and specialized technical tools across all engineering disciplines—from Civil and Mechanical to Electrical and Process. Whether you are cross-referencing industry compliance or exploring advanced topics like Net Zero, CFD, and Ethics, this database provides the exact technical foundation your application and career demand.`,bullets: [
            "<strong>Vetted Sources:</strong> Only industry-recognised references are included (strictly no pirate or unregulated sources).",
            "<strong>Categorised:</strong> Filter intuitively by discipline (Mechanical/Electrical/Civil) or topic area.",
            "<strong>Source Signposting:</strong> Direct hyperlinks to official publishers, BSI, or authorised retailers."
        ],
        steps: [
            "<strong>1. Search:</strong> Enter a specific keyword (e.g., 'Stress Analysis' or 'Python').",
            "<strong>2. Filter:</strong> Toggle results by Discipline or Format (Book/Standard/Tool).",
            "<strong>3. Access:</strong> Select 'Open Resource' to navigate to the official source material."
        ],
        privacy: "[!] PRIVACY: Search queries are processed locally."
    }
};

// --- RENDER FUNCTION ---
// Locates <div id="tool-header-target"></div> and injects the semantic instruction header.
function renderToolHeader(toolKey) {
    const data = toolHeaders[toolKey];
    if (!data) return; 

    // Update Page Title dynamically for SEO
    document.title = `${data.title} | Empowering Engineers UK`;

    // 1. Locate the target div explicitly placed in the HTML
    let container = document.getElementById('tool-header-target');

    // 2. Fallback: If ID not found, look for class (Legacy architecture support)
    if (!container) {
        container = document.querySelector('.tool-header');
    }

    // 3. Last Resort: Create it if missing (Safety net to prevent silent failures)
    if (!container) {
        const main = document.querySelector('.main-container') || document.querySelector('.container');
        if (main) {
            container = document.createElement('div');
            container.id = 'tool-header-target';
            
            const display = window.getComputedStyle(main).display;
            if(display === 'grid') {
                container.style.gridColumn = '1 / -1';
            }
            
            main.prepend(container);
        } else {
            console.error("System Status: tool-header-target insertion failed. Target container missing.");
            return; 
        }
    }

    // Apply strict layout class
    container.className = 'tool-header';

    // Construct Semantic HTML
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
        html += `<span class="privacy-badge" style="display:inline-block; margin-top:10px; font-size:0.7rem; color:#888; border:1px solid var(--border-color); padding:2px 6px; border-radius:4px;">🔒 ${data.privacy}</span>`;
    }

    container.innerHTML = html;
}