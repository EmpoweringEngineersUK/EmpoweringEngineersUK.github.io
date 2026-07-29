/* =========================================================================
 * EMPOWERING ENGINEERS UK - CENTRAL INTERVIEW QUESTION DATABASE [v22.0]
 * =========================================================================
 * Unique Platform Identifier Code: ee_central_questions_database
 * Language Metric: British English Hardcoded UI Layout Controls
 * Security Profile: Sandboxed Local Arrays to protect Corporate Non-Disclosure Agreements
 * Compatibility Profile: Integrated Framework for interview.html, interview-registration-ceng.html,
 *                        interview-registration-ieng.html, interview-registration-engtech.html,
 *                        interview-career-external-jobs.html, and interview-career-internal-promotion.html
 * ========================================================================= */

const questions = [
    // =========================================================================
    // PART 1: INSTITUTIONAL REGISTRATION INTERVIEWS (UK-SPEC MATRIX)
    // Modes: All, CEng, IEng, EngTech
    // Taxonomy: Intro, A1, A2, B1, B2, B3, C1, C2, C3, C4, D1, D2, D3, E1, E2, E3, E4, E5, DAP, Closing
    // =========================================================================

    // --- TRACK 1.1: REGISTRATION INTRODUCTIONS (ALL MODES) ---
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "All", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and provide a brief overview of your current role and career highlights.", 
        paraphrase: "In other words, give us a 2 to 3 minute highlight reel of your engineering history so far." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "All", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. We've read your report, but can you give us a 2-minute summary of your engineering journey so far?", 
        paraphrase: "Essentially, walk us through the key milestones that brought you to this interview today." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "All", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us: what do you consider to be the defining moment or project of your career to date?", 
        paraphrase: "Take your time. We'd like to know what project you are most proud of and why." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "All", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us: why is now the right time for you to apply for professional registration?", 
        paraphrase: "What was the trigger or career milestone that made you decide you were ready to apply?" 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "All", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and briefly describe your current organisation and where you fit into the wider engineering structure.", 
        paraphrase: "Basically, give us an idea of your team size and who you report to or who reports to you." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "All", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us: what motivates you as an engineer? What part of the job do you enjoy the most?", 
        paraphrase: "We want to understand what gets you out of bed in the morning when it comes to your engineering work." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "All", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself. If you had to describe your engineering style in three words, what would they be and why?", 
        paraphrase: "In short, how would your colleagues or team members describe the way you work?" 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "CEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please tell us about your background, specifically focusing on roles where you held significant technical responsibility.", 
        paraphrase: "We're particularly interested in hearing about the points in your career where you started leading the technical decision-making." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "CEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and describe your current scope of authority and how it has evolved over the last 5 years.", 
        paraphrase: "In other words, how has your level of autonomy and leadership grown recently?" 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "CEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and explain how your current role allows you to influence the strategic direction of your department.", 
        paraphrase: "How do your day-to-day decisions impact the wider business goals?" 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "CEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us: in your opinion, what is the biggest challenge currently facing engineers in your sector?", 
        paraphrase: "We want to hear your high-level view of the industry landscape right now." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "IEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please walk us through your career history, focusing on your operational and practical engineering experience.", 
        paraphrase: "Give us a brief summary of your journey, highlighting your hands-on and management roles." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "IEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us how your role has changed from hands-on tasks to managing engineering processes.", 
        paraphrase: "We'd like to hear about your transition into supervising and managing technical work." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "IEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and describe the specific systems or assets you are currently responsible for maintaining or operating.", 
        paraphrase: "Basically, what equipment or processes fall under your direct control day-to-day?" 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "IEng", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us: what is the most complex operational challenge you handle in your day-to-day role?", 
        paraphrase: "What is the trickiest part of your daily job to manage safely and effectively?" 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "EngTech", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please describe your current job role. What are your main daily responsibilities and what equipment do you use?", 
        paraphrase: "Basically, walk us through what a typical day looks like for you on the tools." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "EngTech", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us how long you have been working in your current trade, and what training you have completed.", 
        paraphrase: "Take your time—just give us a quick summary of your background and how you learned your trade." 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "EngTech", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and tell us what specific practical skills you use most often in your day-to-day work.", 
        paraphrase: "What are the main technical skills you rely on to get your job done right?" 
    },
    { 
        catCode: "Intro", 
        catLabel: "Introduction", 
        mode: "EngTech", 
        text: "Hello and thank you for taking the time today for this interview. We will run this as an informal chat, and verify your competencies. We will begin with brief introductions. Now, please introduce yourself and describe a typical day in your working life.", 
        paraphrase: "From clocking in to clocking out, what does a normal shift look like for you?" 
    },

    // --- TRACK 1.2: COMPETENCE A1 - MAINTAIN & EXTEND KNOWLEDGE ---
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "CEng", 
        text: "Describe a time you solved a complex problem using first principles rather than relying on standard codes.", 
        paraphrase: "In other words, when did you have to go back to the fundamental physics or maths because the rulebook didn't cover your specific situation?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "CEng", 
        text: "Can you give an example where you had to learn a new theoretical concept from scratch to complete a project?", 
        paraphrase: "To put it another way, tell us about a time you stepped completely outside your technical comfort zone to deliver a result." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "CEng", 
        text: "Tell us about a time you challenged a standard assumption or 'rule of thumb' using theoretical analysis.", 
        paraphrase: "We're looking for an example where you proved 'the way we've always done it' was wrong, using hard engineering theory." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "CEng", 
        text: "How do you evaluate new and emerging technologies for potential application in your business?", 
        paraphrase: "Essentially, how do you sort the hype from the reality when looking at new tech for your company?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "CEng", 
        text: "Describe a situation where you had to synthesise information from multiple engineering disciplines.", 
        paraphrase: "For example, a time you had to combine mechanical, electrical, or software data to make a single strategic decision." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "CEng", 
        text: "Give an example of how you keep your technical knowledge at the cutting edge of your industry.", 
        paraphrase: "How do you personally ensure your skills don't become obsolete?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "CEng", 
        text: "Have you ever contributed to the development of a new standard or company specification?", 
        paraphrase: "In other words, how have you written the rules that other engineers now have to follow?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "IEng", 
        text: "Tell us about a time you applied existing technology to solve a maintenance or operational problem.", 
        paraphrase: "We're looking for a practical example where you used off-the-shelf tech to fix a specific site issue." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "IEng", 
        text: "How do you stay updated with the latest industry standards and manufacturer specifications?", 
        paraphrase: "In other words, what is your routine for making sure you aren't using out-of-date manuals or codes?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "IEng", 
        text: "Give an example of how you used your knowledge of engineering principles to diagnose a difficult fault.", 
        paraphrase: "Tell us about a time you couldn't just guess the fault, but had to actually calculate or deduce it." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "IEng", 
        text: "Describe a time you had to interpret a complex technical manual to fix a piece of equipment.", 
        paraphrase: "For example, a situation where the documentation was poor or highly complex, and you had to figure it out to get the job done." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "IEng", 
        text: "How do you ensure that you are using the correct version of a standard or procedure?", 
        paraphrase: "Essentially, how do you manage document control in your day-to-day work?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "IEng", 
        text: "Tell us about a time you realised a standard procedure was no longer fit for purpose. What did you do?", 
        paraphrase: "In other words, when did you spot a flawed process and take the initiative to change it?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Knowledge", 
        mode: "IEng", 
        text: "How do you broaden your knowledge beyond your immediate discipline (e.g. Mechanical learning Electrical)?", 
        paraphrase: "Give us an example of how you've made yourself a more well-rounded, multi-skilled engineer." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Review & Select", 
        mode: "EngTech", 
        text: "Describe a time you had to review and select the correct technique, procedure, or method to solve a practical engineering task.", 
        paraphrase: "Basically, tell us about a time you had to choose the right way to do a job, rather than just being told what to do." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Review & Select", 
        mode: "EngTech", 
        text: "How do you decide which tools or equipment are best suited for a specific job? Give an example.", 
        paraphrase: "For instance, why did you choose one specific tool over another to make sure the job was done safely and correctly?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Review & Select", 
        mode: "EngTech", 
        text: "Tell us about a time you had to check a manual or drawing to confirm how to proceed with a task.", 
        paraphrase: "We want to hear about a time you stopped to read the instructions or schematics instead of just guessing." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Review & Select", 
        mode: "EngTech", 
        text: "What do you do if you encounter a problem you haven't seen before?", 
        paraphrase: "In other words, what is your step-by-step process for dealing with the unknown on a job?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Review & Select", 
        mode: "EngTech", 
        text: "Give an example of a time you used your experience to choose a better way of doing a job.", 
        paraphrase: "Tell us about a time your hands-on experience meant you knew a quicker or safer way to complete a task." 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Review & Select", 
        mode: "EngTech", 
        text: "How do you ensure you understand the manufacturer's instructions before using new kit?", 
        paraphrase: "Essentially, how do you familiarise yourself with brand new equipment safely?" 
    },
    { 
        catCode: "A1", 
        catLabel: "A1: Review & Select", 
        mode: "EngTech", 
        text: "Describe a time you had to select a specific material or component for a repair.", 
        paraphrase: "For example, why did you choose a specific grade of steel or a certain type of cable for that particular fix?" 
    },

    // --- TRACK 1.3: COMPETENCE A2 - APPLICATION OF ENGINEERING KNOWLEDGE ---
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "CEng", 
        text: "Give an example of a technical innovation you championed. How did you prove it was viable?", 
        paraphrase: "In other words, how did you take a new idea and use engineering analysis to prove it would actually work in the real world?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "CEng", 
        text: "How did you ensure reliable outcomes when dealing with a novel or untested technology?", 
        paraphrase: "When there is no precedent, how do you guarantee your solution won't fail?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "CEng", 
        text: "Describe a situation where you had to balance conflicting technical requirements (e.g. weight vs. strength).", 
        paraphrase: "Tell us about a time you had to make a difficult engineering trade-off. How did you decide what to prioritise?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "CEng", 
        text: "Tell us about a time you used simulation or modelling (FEA/CFD) to validate a design before build.", 
        paraphrase: "We are looking for an example where you used software analysis to predict physical behaviour before committing to manufacture." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "CEng", 
        text: "Describe a root cause analysis you led on a complex systemic failure.", 
        paraphrase: "In other words, tell us about a time you investigated a major breakdown and traced it back to its fundamental engineering flaw." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "CEng", 
        text: "How do you validate that your theoretical calculations match reality?", 
        paraphrase: "Essentially, how do you prove that your maths works when the product actually hits the field?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "CEng", 
        text: "Give an example of a project where you applied a creative solution to a stagnation point.", 
        paraphrase: "Tell us about a time a project was stuck, and you used 'out-of-the-box' engineering thinking to get it moving again." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "IEng", 
        text: "Describe a time you identified a way to improve the efficiency of an existing process.", 
        paraphrase: "In other words, how have you made an operation faster, cheaper, or better using your engineering know-how?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "IEng", 
        text: "Tell us about a time you implemented a solution that reduced downtime or cost.", 
        paraphrase: "We're looking for a specific example where your intervention saved the company money or time." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "IEng", 
        text: "Give an example of a continuous improvement initiative you led using engineering data.", 
        paraphrase: "For example, a time you analysed fault logs or performance data to make a permanent fix." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "IEng", 
        text: "How did you prove that a proposed repair method would work before you started?", 
        paraphrase: "Essentially, what testing or calculation did you do to ensure your fix wouldn't just break again?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "IEng", 
        text: "Describe a time you used condition monitoring data to prevent a failure.", 
        paraphrase: "Tell us about a time you used data like vibration, heat, or oil analysis to catch a breakdown before it happened." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "IEng", 
        text: "How do you apply engineering principles to everyday problem solving on site?", 
        paraphrase: "In other words, how does your theoretical knowledge make you better at practical troubleshooting?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Application", 
        mode: "IEng", 
        text: "Tell us about a modification you made to a system to improve its reliability.", 
        paraphrase: "Give us an example of a time you changed a design or layout so it would stop failing so often." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Science & Maths", 
        mode: "EngTech", 
        text: "Give an example of a time you used technical data (calculations, charts, or specs) to solve a problem.", 
        paraphrase: "For instance, a time you had to look up tolerances or use a formula to figure out the right way forward." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Science & Maths", 
        mode: "EngTech", 
        text: "Describe a time you had to interpret a technical drawing or wiring diagram to complete a task.", 
        paraphrase: "We want to hear about a time you couldn't have finished the job without reading and understanding the schematics." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Science & Maths", 
        mode: "EngTech", 
        text: "Have you ever had to perform a basic calculation to check if a component was safe to use?", 
        paraphrase: "Tell us about a time you had to do the maths—like checking load limits or voltage drops—to ensure safety." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Science & Maths", 
        mode: "EngTech", 
        text: "Tell us about a time you had to measure something precisely. What tools did you use?", 
        paraphrase: "In other words, tell us about a job that required exact tolerances and how you achieved them." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Science & Maths", 
        mode: "EngTech", 
        text: "How do you identify what a symbol means on a schematic if you don't know it?", 
        paraphrase: "Basically, what is your process for finding out technical information when you are stuck?" 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Science & Maths", 
        mode: "EngTech", 
        text: "Describe a time you used a multimeter, gauge, or other diagnostic tool to find a fault.", 
        paraphrase: "Give us a step-by-step example of how you used testing equipment to trace a tricky problem." 
    },
    { 
        catCode: "A2", 
        catLabel: "A2: Science & Maths", 
        mode: "EngTech", 
        text: "Have you ever spotted an error in a drawing or instruction? What did you do?", 
        paraphrase: "Tell us about a time the paperwork was wrong, but your practical experience caught the mistake." 
    },

    // --- TRACK 1.4: COMPETENCE B1 - IDENTIFY PROBLEMS & OPPORTUNITIES ---
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "CEng", 
        text: "Describe a time you had to define the scope for a project with ambiguous or incomplete requirements.", 
        paraphrase: "In other words, how did you turn a vague client wish-list into a concrete engineering specification?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "CEng", 
        text: "How do you evaluate 'fitness for purpose' when developing a novel solution?", 
        paraphrase: "When there is no standard to benchmark against, how do you prove your new idea actually solves the problem?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "CEng", 
        text: "How do you ensure your specifications align with the client's strategic goals, not just their immediate needs?", 
        paraphrase: "How do you make sure your technical design actually delivers on the broader business case?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "CEng", 
        text: "Tell us about a feasibility study you conducted. What options did you consider and discard?", 
        paraphrase: "Walk us through your decision-making process: why did you choose the final option over the alternatives?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "CEng", 
        text: "Describe a time you identified a commercial opportunity through technical analysis.", 
        paraphrase: "Tell us about a time your engineering insight directly led to a financial win or new business." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "CEng", 
        text: "How do you ensure that the problem you are solving is actually the root problem?", 
        paraphrase: "How do you avoid just treating the symptoms when diagnosing a complex issue?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "CEng", 
        text: "Give an example of when you persuaded a client to change their requirements based on your technical advice.", 
        paraphrase: "Give an example of a time the client was asking for the wrong thing, and you had to correct them using your technical expertise." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "IEng", 
        text: "How do you determine which tools or equipment are best suited for a specific task?", 
        paraphrase: "Basically, walk us through your selection criteria before starting a job." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "IEng", 
        text: "Tell us about a time you reviewed a tender or supplier quote. What technical issues did you spot?", 
        paraphrase: "Tell us about a time you caught a technical flaw or omission in a contractor's proposal." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "IEng", 
        text: "Describe a time you had to select between repairing an asset or replacing it.", 
        paraphrase: "How did you balance the cost, downtime, and technical risks to make that specific decision?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "IEng", 
        text: "How do you identify bottlenecks in your production or maintenance process?", 
        paraphrase: "What data or observations did you use to pinpoint exactly what was holding the process up?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "IEng", 
        text: "Give an example of a time you identified a safety risk in a proposed plan.", 
        paraphrase: "Tell us about a time you had to challenge a method statement or plan because it wasn't safe." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "IEng", 
        text: "How do you ensure that a proposed solution is compatible with existing site infrastructure?", 
        paraphrase: "How did you ensure your new installation would 'play nicely' with the legacy systems already on site?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify/Select", 
        mode: "IEng", 
        text: "Describe a time you had to choose a supplier based on technical capability.", 
        paraphrase: "Beyond just price, how did you evaluate whether a supplier actually had the engineering chops to deliver?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify Problems", 
        mode: "EngTech", 
        text: "Tell us about a time you identified a potential problem or defect in a product or system. What did you do?", 
        paraphrase: "Walk us through what you saw, what you suspected, and how you escalated or fixed it." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify Problems", 
        mode: "EngTech", 
        text: "Have you ever spotted a mistake in a design or instruction? How did you raise it?", 
        paraphrase: "Tell us about a time the paperwork was wrong, but your practical experience caught the error." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify Problems", 
        mode: "EngTech", 
        text: "Describe a time you noticed a piece of equipment wasn't working correctly. How did you investigate it?", 
        paraphrase: "What was your step-by-step logical process for fault-finding in that specific situation?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify Problems", 
        mode: "EngTech", 
        text: "What do you do when you arrive at a job and the site conditions are not what you expected?", 
        paraphrase: "Give us an example of how you adapted your plan safely when faced with a surprise on site." 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify Problems", 
        mode: "EngTech", 
        text: "Give an example of a time you had to report a fault that others had missed.", 
        paraphrase: "Why do you think you spotted it when others didn't, and what action did you take?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify Problems", 
        mode: "EngTech", 
        text: "How do you check that the parts you have been given are the right ones for the job?", 
        paraphrase: "How do you verify specifications or part numbers before starting the installation?" 
    },
    { 
        catCode: "B1", 
        catLabel: "B1: Identify Problems", 
        mode: "EngTech", 
        text: "Have you ever had to stop a job because you identified a better or safer way to do it?", 
        paraphrase: "Tell us about a time you took the initiative to pause work and change the approach for the better." 
    },

    // --- TRACK 1.5: COMPETENCE B2 - DESIGN & DEVELOPMENT ---
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "CEng", 
        text: "Tell us about a complex design problem where standard codes didn't apply. How did you justify your solution?", 
        paraphrase: "When the rulebook fell short, how did you build a rigorous engineering justification for your design?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "CEng", 
        text: "How did your design compare with existing literature or historical benchmarks?", 
        paraphrase: "How did you benchmark your novel design against what had been done before in the industry?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "CEng", 
        text: "Describe a time a design failed during testing. What was the root cause and how did you fix it?", 
        paraphrase: "Tell us about a failure, the specific engineering diagnosis you performed, and the redesign that solved it." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "CEng", 
        text: "How do you manage the interface between different design disciplines (e.g. Civil vs MEICA)?", 
        paraphrase: "How do you prevent clash issues or miscommunications when mechanical, electrical, and civil teams overlap?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "CEng", 
        text: "Give an example of how you incorporated 'Safety by Design' principles into a concept.", 
        paraphrase: "Give a specific example of a hazard you designed out of a system before it was ever built." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "CEng", 
        text: "How do you ensure your designs are sustainable and have a low environmental impact?", 
        paraphrase: "What specific choices did you make in your design to reduce energy, materials, or lifecycle impact?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "CEng", 
        text: "Describe the process you use to approve and sign off a high-risk design.", 
        paraphrase: "Walk us through your personal accountability and the checks you mandate before signing your name to a critical design." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "IEng", 
        text: "How do you ensure your design modifications comply with relevant engineering standards?", 
        paraphrase: "What was your process for checking your changes against the regulations?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "IEng", 
        text: "Tell us about a time you adapted a standard design to fit a specific site condition.", 
        paraphrase: "Tell us about a time the 'off-the-shelf' solution didn't fit, and you had to engineer a custom workaround." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "IEng", 
        text: "How do you ensure that your designs are practical to manufacture and maintain?", 
        paraphrase: "How do you ensure you aren't designing something that is a nightmare for the maintenance team to service later?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "IEng", 
        text: "Describe a time you had to redesign a component because it kept failing.", 
        paraphrase: "Walk us through the root cause analysis and the specific design changes you made to increase reliability." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "IEng", 
        text: "How do you manage version control on drawings and specifications?", 
        paraphrase: "How do you make absolutely sure the guys on site are building to the latest revision?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "IEng", 
        text: "Give an example of a cost-saving change you made to a design without compromising quality.", 
        paraphrase: "Tell us about a time you value-engineered a solution effectively." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design", 
        mode: "IEng", 
        text: "How do you verify that a modification has not negatively affected the system?", 
        paraphrase: "What testing or validation did you do to ensure your fix didn't create a new problem elsewhere?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design/Dev", 
        mode: "EngTech", 
        text: "Describe a contribution you made to the design, development, or testing of a product or service.", 
        paraphrase: "What specific input did you have? Did you suggest a material, a layout, or a testing method?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design/Dev", 
        mode: "EngTech", 
        text: "Give an example of a time you built, tested, or commissioned a piece of equipment.", 
        paraphrase: "Walk us through the process from receiving the parts to handing over the working kit." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design/Dev", 
        mode: "EngTech", 
        text: "Have you ever suggested a modification to a part to make it easier to install or fix?", 
        paraphrase: "Tell us about a time your hands-on experience led to a practical design improvement." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design/Dev", 
        mode: "EngTech", 
        text: "Describe a time you made a jig, fixture, or tool to help with a task.", 
        paraphrase: "Why did you need to make it, and how did it improve the quality or speed of the task?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design/Dev", 
        mode: "EngTech", 
        text: "Tell us about a time you had to follow a complex test procedure. What were the results?", 
        paraphrase: "Tell us about a time you had to be extremely rigorous and methodical to get accurate test data." 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design/Dev", 
        mode: "EngTech", 
        text: "How do you record the results of a test you have carried out?", 
        paraphrase: "How do you ensure your test data is accurate, legible, and traceable?" 
    },
    { 
        catCode: "B2", 
        catLabel: "B2: Design/Dev", 
        mode: "EngTech", 
        text: "Give an example of a time you helped an engineer improve a design based on your practical experience.", 
        paraphrase: "Give an example of bridging the gap between theory in the office and reality on the shop floor." 
    },

    // --- TRACK 1.6: COMPETENCE B3 - IMPLEMENTATION ---
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "CEng", 
        text: "Describe the transition from 'concept' to 'commissioning'. What strategic hurdles did you overcome?", 
        paraphrase: "What were the major technical roadblocks during implementation, and how did you navigate them?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "CEng", 
        text: "Was your solution more effective than previous methods? How did you quantify that improvement?", 
        paraphrase: "We want to know the hard numbers—how did you measure the success of your implemented solution?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "CEng", 
        text: "How do you manage the handover of a complex system to the operations team?", 
        paraphrase: "How do you ensure the operational team is fully equipped and trained to run what you've built?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "CEng", 
        text: "Describe a time you had to halt implementation due to a critical emerging risk.", 
        paraphrase: "Tell us about a time you had to make the tough call to stop the job, and how you managed the fallout." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "CEng", 
        text: "How do you ensure lessons learned from implementation are fed back into future designs?", 
        paraphrase: "How do you close the loop so that implementation mistakes aren't repeated on the next project?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "CEng", 
        text: "Give an example of how you managed a phased rollout of a new system.", 
        paraphrase: "How did you manage the technical risks of integrating new tech while keeping the legacy system running?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "CEng", 
        text: "How do you manage the tension between aggressive schedules and technical quality during construction?", 
        paraphrase: "Give an example of a time you refused to compromise on engineering standards despite immense program pressure." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "IEng", 
        text: "Tell us about a time you supervised an installation. How did you ensure it matched the drawings?", 
        paraphrase: "How do you handle quality control and verification while the build is actively happening?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "IEng", 
        text: "Describe a time you had to troubleshoot a problem during the commissioning phase.", 
        paraphrase: "Walk us through your fault-finding logic when the system was first turned on and didn't work." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "IEng", 
        text: "Give an example of how you managed site safety during an implementation task.", 
        paraphrase: "Give us a specific example of how you enforced safety standards during a high-risk activity." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "IEng", 
        text: "How do you deal with snagging lists and defects at the end of a project?", 
        paraphrase: "How do you systematically ensure every minor issue is closed out before final handover?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "IEng", 
        text: "Describe a time you had to coordinate multiple trades to complete an installation.", 
        paraphrase: "How did you manage the scheduling and physical clashes between different contractors?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "IEng", 
        text: "How do you ensure that the end-user knows how to operate the new system?", 
        paraphrase: "Tell us about the training, documentation, or demonstrations you provided to the client." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "IEng", 
        text: "Tell us about a time an installation went wrong. How did you recover the situation?", 
        paraphrase: "Tell us about a time you had to firefight a major issue on site to get the project back on track." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "EngTech", 
        text: "Describe a time you had to install a new piece of equipment. How did you plan the task?", 
        paraphrase: "Walk us through your preparation before you even picked up a tool." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "EngTech", 
        text: "Tell us about a time an installation didn't go to plan. How did you adapt?", 
        paraphrase: "Give an example of a time you had to think on your feet to overcome a practical hurdle on site." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "EngTech", 
        text: "How do you ensure you leave a work area safe and tidy after completing a job?", 
        paraphrase: "Why is housekeeping and final inspection so critical before handing a job back?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "EngTech", 
        text: "Describe a time you had to work to a very tight tolerance.", 
        paraphrase: "Tell us about a job that required extreme precision and the methods you used to achieve it." 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "EngTech", 
        text: "Give an example of a time you successfully completed a difficult repair.", 
        paraphrase: "What made it so difficult, and how did your skills ensure it was fixed properly?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "EngTech", 
        text: "How do you confirm that a job is finished and ready for the customer?", 
        paraphrase: "What are your final checks or functional tests before you walk away from a task?" 
    },
    { 
        catCode: "B3", 
        catLabel: "B3: Implementation", 
        mode: "EngTech", 
        text: "Tell us about a time you had to use a new method or technique to get a job done.", 
        paraphrase: "Tell us about a time you had to learn a new way of doing things on the fly to finish an installation." 
    },

    // --- TRACK 1.7: COMPETENCE C1 - PROJECT PLANNING ---
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "CEng", 
        text: "Can you run us through a project you led? How did you balance resources, budget, and schedule?", 
        paraphrase: "Walk us through the specific tools or methods you used to keep the golden triangle—cost, time, and quality—in check." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "CEng", 
        text: "Tell us about a time you had to negotiate a project schedule with a demanding client.", 
        paraphrase: "Tell us about a time you had to push back on unrealistic deadlines using hard data." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "CEng", 
        text: "How do you integrate risk management into your project planning phase?", 
        paraphrase: "In other words, how do you actively identify and mitigate show-stoppers before they happen?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "CEng", 
        text: "Describe a time you had to recover a project that was significantly behind schedule.", 
        paraphrase: "Give us an example of how you stepped in, assessed the damage, and got a failing project back on track." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "CEng", 
        text: "How do you estimate costs and resources for a project with high uncertainty?", 
        paraphrase: "When you don't have all the facts, what is your strategy for building a reliable forecast?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "CEng", 
        text: "Give an example of how you manage dependencies between different project workstreams.", 
        paraphrase: "How do you ensure that a delay in one department doesn't cause a domino effect across the whole project?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "CEng", 
        text: "How do you handle changes to the project scope once the plan is agreed?", 
        paraphrase: "Tell us about a time you had to manage 'scope creep' without damaging the client relationship." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "IEng", 
        text: "Describe how you plan your own workload and the workload of others for a specific task.", 
        paraphrase: "Basically, how do you decide who does what, and when, to ensure the job gets done efficiently?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "IEng", 
        text: "How do you ensure that all necessary materials and permits are in place before starting work?", 
        paraphrase: "Walk us through your pre-start checklist to prevent delays once the team is on site." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "IEng", 
        text: "Give an example of a Gantt chart or schedule you created. How did you track progress against it?", 
        paraphrase: "How do you actually use the schedule as a live tool, rather than just a document that sits on a desk?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "IEng", 
        text: "Describe a time you had to re-prioritise tasks due to an urgent breakdown.", 
        paraphrase: "Tell us about a time you had to drop everything and completely shuffle your team's workload to fix an emergency." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "IEng", 
        text: "How do you coordinate site access or shutdowns with the client?", 
        paraphrase: "How do you manage the logistics of getting your team onto a live or restricted site safely?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "IEng", 
        text: "Tell us about a time you underestimated the time needed for a job. How did you handle it?", 
        paraphrase: "Tell us about a time you got the planning wrong. How did you communicate this and recover?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Planning", 
        mode: "IEng", 
        text: "How do you plan for contingencies or unexpected delays?", 
        paraphrase: "How do you build 'float' or backup plans into your daily or weekly schedules?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Resources", 
        mode: "EngTech", 
        text: "How do you ensure you have the right materials and resources before starting a job?", 
        paraphrase: "What is your routine for checking your van or toolkit before you head to a site?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Resources", 
        mode: "EngTech", 
        text: "Describe a time you had to supervise or guide another colleague/apprentice on a task.", 
        paraphrase: "Tell us about a time you had to plan the work for someone less experienced so they could do it safely." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Resources", 
        mode: "EngTech", 
        text: "How do you plan your day to ensure you complete your assigned tasks on time?", 
        paraphrase: "How do you prioritise your job tickets or daily work orders?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Resources", 
        mode: "EngTech", 
        text: "What do you do if you realise you don't have the right tool for the job?", 
        paraphrase: "Tell us about a time you had to adapt your plan safely because you were missing a piece of equipment." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Resources", 
        mode: "EngTech", 
        text: "Describe a time you had to organise your workspace to work efficiently.", 
        paraphrase: "Why is a tidy and organised work area important for getting the job done?" 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Resources", 
        mode: "EngTech", 
        text: "Have you ever had to order parts or materials? How did you know what to get?", 
        paraphrase: "Walk us through how you identify the correct part numbers or materials needed for a repair." 
    },
    { 
        catCode: "C1", 
        catLabel: "C1: Resources", 
        mode: "EngTech", 
        text: "How do you handle interruptions to your planned work?", 
        paraphrase: "When your supervisor pulls you off a job halfway through, how do you manage the switch?" 
    },

    // --- TRACK 1.8: COMPETENCE C2 - MANAGEMENT & BUDGET ---
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "CEng", 
        text: "How do you manage the commercial implications of scope creep?", 
        paraphrase: "How do you ensure you actually get paid for the extra work the client asks for?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "CEng", 
        text: "Describe a time you had to make a difficult decision to sacrifice cost for quality (or vice versa).", 
        paraphrase: "Tell us about a time you had to make a hard commercial trade-off without compromising engineering integrity." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "CEng", 
        text: "Tell us about your experience with contract management (e.g., NEC/FIDIC).", 
        paraphrase: "Give an example of how you've actively managed a contract's terms to protect your organisation." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "CEng", 
        text: "How do you evaluate the financial viability of a technical project (NPV/IRR)?", 
        paraphrase: "In other words, how do you prove to the business that your engineering project will actually make a return on investment?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "CEng", 
        text: "Describe a time you had to challenge a supplier on a commercial issue.", 
        paraphrase: "Tell us about a time you had to push back on a contractor regarding costs, variations, or poor value." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "CEng", 
        text: "How do you manage the budget for your department or project?", 
        paraphrase: "What tools and processes do you use to track spending and forecast costs to completion?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "CEng", 
        text: "Give an example of a cost-saving initiative you implemented on a strategic level.", 
        paraphrase: "Give us a specific example where your management reduced overall operational or capital expenditure." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "IEng", 
        text: "Describe a time you had to manage a contractor or supplier who was underperforming.", 
        paraphrase: "Tell us about a time you had to have a difficult conversation with a sub-contractor about their performance." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "IEng", 
        text: "How do you coordinate resources (people, equipment) on a busy site?", 
        paraphrase: "How do you avoid clashes and ensure everyone has what they need to keep working?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "IEng", 
        text: "How do you ensure statutory inspections or maintenance schedules are met?", 
        paraphrase: "How do you track and manage compliance so that nothing falls through the cracks?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "IEng", 
        text: "Tell us about a time you had to manage a small budget for a repair or project.", 
        paraphrase: "Walk us through how you quoted, tracked, and delivered a specific job within its financial limits." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "IEng", 
        text: "How do you track the time and materials used on a job?", 
        paraphrase: "How do you ensure accurate reporting so the project or maintenance budget stays updated?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "IEng", 
        text: "Describe a time you had to resolve a dispute over who was responsible for a task.", 
        paraphrase: "Tell us about a time you had to step in and clearly define roles to stop an argument on site." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Management", 
        mode: "IEng", 
        text: "How do you ensure that your team is working productively?", 
        paraphrase: "How do you measure or monitor the output of your staff or contractors?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Responsibility", 
        mode: "EngTech", 
        text: "Tell us about a task where you held sole responsibility for the quality of the outcome.", 
        paraphrase: "Tell us about a job where the buck stopped with you. How did you ensure it was right?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Responsibility", 
        mode: "EngTech", 
        text: "Have you ever suggested an improvement to a working practice or method statement? What was the result?", 
        paraphrase: "Give an example of a time you spoke up to make a task faster, easier, or safer." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Responsibility", 
        mode: "EngTech", 
        text: "Describe a time you had to take charge of a situation because a supervisor wasn't present.", 
        paraphrase: "Tell us about a time you had to step up and make a decision on your own." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Responsibility", 
        mode: "EngTech", 
        text: "How do you ensure you are following the correct company procedures?", 
        paraphrase: "How do you make sure you aren't accidentally breaking company rules while trying to get the job done?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Responsibility", 
        mode: "EngTech", 
        text: "Give an example of a time you took ownership of a mistake you made.", 
        paraphrase: "Tell us about a time things went wrong on your watch, and how you reported and fixed it." 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Responsibility", 
        mode: "EngTech", 
        text: "How do you enable others to trust you to work without supervision?", 
        paraphrase: "What specific behaviours do you demonstrate that show your boss you can be left to your own devices?" 
    },
    { 
        catCode: "C2", 
        catLabel: "C2: Responsibility", 
        mode: "EngTech", 
        text: "Describe a time you had to sign off a piece of work as complete.", 
        paraphrase: "What checks do you personally carry out before you hand the paperwork back in?" 
    },

    // --- TRACK 1.9: COMPETENCE C3 - LEADERSHIP & TEAMS ---
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "CEng", 
        text: "Describe a time you led a team through a complex technical challenge. How did you keep them motivated?", 
        paraphrase: "When the project got really difficult, what specific actions did you take to maintain team morale and focus?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "CEng", 
        text: "Tell us about a time you had to manage conflict between two departments.", 
        paraphrase: "Tell us about a time you acted as the mediator to resolve a technical or strategic dispute." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "CEng", 
        text: "How do you influence people over whom you have no direct authority?", 
        paraphrase: "How do you get things done when you can't just order people to do it?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "CEng", 
        text: "Describe your leadership style. How do you adapt it for different team members?", 
        paraphrase: "Give an example of how you changed your approach to suit a junior engineer versus a senior specialist." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "CEng", 
        text: "How do you mentor and develop the future leaders in your team?", 
        paraphrase: "How do you actively build succession planning and competence in the people below you?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "CEng", 
        text: "Tell us about a time you had to deliver unpopular news to your team.", 
        paraphrase: "Tell us about a time you had to announce budget cuts, overtime, or project cancellations. How did you handle the room?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "CEng", 
        text: "How do you build a culture of innovation within your team?", 
        paraphrase: "How do you create an environment where people feel safe to propose new, risky engineering ideas?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "IEng", 
        text: "Tell us about a time you supervised a team or junior engineer. How did you ensure quality?", 
        paraphrase: "When you are in charge, how do you verify the work of those under you without micromanaging?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "IEng", 
        text: "How do you handle a team member who is not pulling their weight?", 
        paraphrase: "Tell us about a time you had to address poor performance or laziness on your team." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "IEng", 
        text: "Give an example of how you provide constructive feedback to your team.", 
        paraphrase: "Give a specific example of how you corrected someone's mistake so they learned from it." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "IEng", 
        text: "Describe a time you had to lead a 'Toolbox Talk' or safety briefing.", 
        paraphrase: "How do you ensure the team is actually listening and understanding the briefing, rather than just signing the sheet?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "IEng", 
        text: "How do you ensure good communication between shifts or teams?", 
        paraphrase: "What processes do you use to stop information getting lost during handovers?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "IEng", 
        text: "Tell us about a time you had to step up and lead when the manager was away.", 
        paraphrase: "Tell us about a time you successfully acted as the primary point of contact in an emergency or absence." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Leadership", 
        mode: "IEng", 
        text: "How do you motivate a team working in difficult conditions (e.g. night shift/bad weather)?", 
        paraphrase: "When everyone is cold, tired, or fed up, what do you do to keep the job moving safely?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Teams", 
        mode: "EngTech", 
        text: "Describe a time you had to work as part of a team to solve a problem. What was your role?", 
        paraphrase: "Give an example of how you contributed to a group effort to get a difficult job done." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Teams", 
        mode: "EngTech", 
        text: "Have you ever had to help a colleague who was struggling with a task?", 
        paraphrase: "Tell us about a time you went out of your way to support a team member." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Teams", 
        mode: "EngTech", 
        text: "How do you communicate with other trades or disciplines on site to avoid clashes?", 
        paraphrase: "How do you coordinate with the electricians, plumbers, or builders so you aren't getting in each other's way?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Teams", 
        mode: "EngTech", 
        text: "Describe a time you had a disagreement with a team member. How did you resolve it?", 
        paraphrase: "Tell us about a time you clashed with a colleague over how to do a job, and how you settled it." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Teams", 
        mode: "EngTech", 
        text: "How do you help new starters or apprentices fit into the team?", 
        paraphrase: "What do you personally do to make sure the 'new guy' learns the ropes and feels welcome?" 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Teams", 
        mode: "EngTech", 
        text: "What makes a 'good' team player in your opinion?", 
        paraphrase: "Give an example of a time you demonstrated these 'good team player' qualities yourself." 
    },
    { 
        catCode: "C3", 
        catLabel: "C3: Teams", 
        mode: "EngTech", 
        text: "Tell us about a time you learned a new skill from a colleague.", 
        paraphrase: "Tell us about a time you asked for help and improved your own competence by watching someone else." 
    },

    // --- TRACK 1.10: COMPETENCE C4 - QUALITY MANAGEMENT ---
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "CEng", 
        text: "How do you ensure quality standards are defined and met for a novel product?", 
        paraphrase: "When there is no existing benchmark, how do you set the quality parameters and enforce them?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "CEng", 
        text: "How do you promote a culture of quality assurance within your organisation?", 
        paraphrase: "How do you move your team away from 'tick-box compliance' toward genuine quality engineering?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "CEng", 
        text: "How do you evaluate the quality of a supplier before engaging them?", 
        paraphrase: "What specific audits, checks, or metrics do you use to vet the supply chain?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "CEng", 
        text: "Describe a time you audited a process. What did you find and what did you change?", 
        paraphrase: "Walk us through an inspection or audit you led, and the continuous improvement that resulted from it." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "CEng", 
        text: "How do you balance the cost of quality control against the risk of failure?", 
        paraphrase: "How do you decide how much testing is 'enough' testing?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "CEng", 
        text: "Tell us about a Six Sigma or Lean initiative you championed.", 
        paraphrase: "Give a specific example of a structured methodology you used to eliminate waste or defects." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "CEng", 
        text: "How do you ensure continuous improvement is not just a 'buzzword' in your team?", 
        paraphrase: "What mechanisms have you put in place to ensure lessons learned are actually actioned?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "IEng", 
        text: "Describe a time you updated a procedure or workflow to improve efficiency.", 
        paraphrase: "Tell us about a time you rewrote the instructions or changed the process to make it better." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "IEng", 
        text: "How do you ensure work on site complies with the technical drawings?", 
        paraphrase: "What is your specific method for conducting inspections or quality checks during a build?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "IEng", 
        text: "Describe a time you spotted a quality defect before it reached the client.", 
        paraphrase: "Walk us through a time you caught a major mistake internally. How did you handle the rework?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "IEng", 
        text: "How do you handle a non-conformance report (NCR)?", 
        paraphrase: "When something fails quality checks, how do you document it, investigate it, and close it out?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "IEng", 
        text: "Tell us about a time you investigated a customer complaint regarding quality.", 
        paraphrase: "Tell us about a time you had to figure out why the client wasn't happy, and how you fixed the root cause." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "IEng", 
        text: "How do you ensure calibration of tools and equipment is maintained?", 
        paraphrase: "How do you manage the risk of using out-of-date or inaccurate measurement equipment?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "IEng", 
        text: "Give an example of a quality checklist you use or created.", 
        paraphrase: "Tell us about a time you implemented a simple check sheet that prevented recurring mistakes." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "EngTech", 
        text: "How do you check that your own work meets the required standard?", 
        paraphrase: "What are your personal habits for checking your work before you say 'I'm finished'?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "EngTech", 
        text: "Tell us about a time you noticed a quality issue in a product. What did you do?", 
        paraphrase: "Tell us about a time you realised something wasn't manufactured or installed right, and how you raised it." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "EngTech", 
        text: "Do you follow any specific ISO standards or checklists in your daily work?", 
        paraphrase: "How do you make sure you aren't skipping steps when following quality procedures?" 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "EngTech", 
        text: "Why is it important to complete job sheets and quality records accurately?", 
        paraphrase: "Give an example of a time accurate paperwork was crucial for traceability or getting paid." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "EngTech", 
        text: "Describe a time you had to redo a job because it wasn't right the first time.", 
        paraphrase: "Tell us about a time you had to swallow your pride, admit it wasn't perfect, and do it again." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "EngTech", 
        text: "How do you take pride in your work? Give an example.", 
        paraphrase: "Tell us about a specific job where you went above and beyond to make sure the finish was top-notch." 
    },
    { 
        catCode: "C4", 
        catLabel: "C4: Quality", 
        mode: "EngTech", 
        text: "What would you do if you were pressured to rush a job and skip quality checks?", 
        paraphrase: "Tell us about a time you refused to compromise on quality, even though you were behind schedule." 
    },

    // --- TRACK 1.11: COMPETENCE D1 - WRITTEN COMMUNICATION ---
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "CEng", 
        text: "Describe a time you had to explain a complex technical concept to a non-technical board member.", 
        paraphrase: "How did you translate engineering jargon into business risk or financial terms?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "CEng", 
        text: "How do you structure your technical reports to ensure they are persuasive?", 
        paraphrase: "What specific techniques do you use to ensure your written arguments lead to a clear executive decision?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "CEng", 
        text: "How do you manage communication with remote or international teams?", 
        paraphrase: "What strategies do you use to overcome time zones, language barriers, or cultural differences in written communication?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "CEng", 
        text: "Tell us about a technical paper or article you have written. Who was the audience?", 
        paraphrase: "Why did you write it, and how did you adapt the technical depth for that specific readership?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "CEng", 
        text: "How do you ensure clarity in legal or contractual correspondence?", 
        paraphrase: "Give an example of a time you had to write extremely precise instructions to avoid commercial or legal liability." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "CEng", 
        text: "Describe a time you had to write a crisis communication or incident report.", 
        paraphrase: "How did you ensure accuracy and objectivity while writing under immense pressure?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "CEng", 
        text: "How do you review and critique the written work of your subordinates?", 
        paraphrase: "Give an example of how you coach junior engineers to improve their technical writing." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "IEng", 
        text: "How do you ensure your shift handovers or site briefings are clearly understood?", 
        paraphrase: "What specific written formats or logs do you use to prevent critical information from falling through the cracks?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "IEng", 
        text: "Give an example of how you communicate technical instructions to technicians.", 
        paraphrase: "Tell us about a time you had to write clear, step-by-step guidance for a complex or dangerous task." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "IEng", 
        text: "Tell us about a time you had to clarify a misunderstanding with a client.", 
        paraphrase: "Give an example of how you used an email or report to successfully defuse a confusing situation." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "IEng", 
        text: "Describe a Standard Operating Procedure (SOP) you wrote or updated.", 
        paraphrase: "Why did it need updating, and how did you ensure the new document was easy to follow?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "IEng", 
        text: "How do you document 'Lessons Learned' after a project?", 
        paraphrase: "Where does that written information go, and how do you ensure the next project team actually reads it?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "IEng", 
        text: "Give an example of a technical email you sent to resolve a problem.", 
        paraphrase: "Tell us about a time a well-structured email saved you hours of meetings or site visits." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Communication", 
        mode: "IEng", 
        text: "How do you record meeting minutes or actions effectively?", 
        paraphrase: "How do you ensure that what was agreed in the room is accurately captured and actioned afterwards?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Written", 
        mode: "EngTech", 
        text: "Give an example of a technical log, site report, or handover document you have written.", 
        paraphrase: "Walk us through what kind of details you include to make sure the next person knows exactly what happened." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Written", 
        mode: "EngTech", 
        text: "How do you record the results of your tests or inspections?", 
        paraphrase: "Why is it critical that your test data is recorded accurately and clearly?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Written", 
        mode: "EngTech", 
        text: "Describe a time you had to write an email to explain a technical issue to a manager.", 
        paraphrase: "How did you keep the email clear and to the point while still explaining the engineering fault?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Written", 
        mode: "EngTech", 
        text: "Do you ever have to sketch or draw to explain your ideas? Give an example.", 
        paraphrase: "Tell us about a time a quick sketch on a whiteboard or notepad solved a communication problem." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Written", 
        mode: "EngTech", 
        text: "Why is it important to write down exactly what you did on a job card?", 
        paraphrase: "Give an example of a time poor paperwork caused a problem, or good paperwork saved the day." 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Written", 
        mode: "EngTech", 
        text: "Have you ever had to fill out an accident or near-miss form?", 
        paraphrase: "What specific details did you make sure to include so the safety team could investigate properly?" 
    },
    { 
        catCode: "D1", 
        catLabel: "D1: Written", 
        mode: "EngTech", 
        text: "How do you ensure your handwriting or data entry is legible for the next person?", 
        paraphrase: "What personal checks do you do to make sure your notes can't be misinterpreted?" 
    },

    // --- TRACK 1.12: COMPETENCE D2 - VERBAL PERSUASION & PROPOSALS ---
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "CEng", 
        text: "Describe a time you had to defend your technical opinion against significant opposition.", 
        paraphrase: "How did you stand your ground and use evidence to win over a hostile audience?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "CEng", 
        text: "Describe a time you had to deliver bad news to a client. How did you handle it?", 
        paraphrase: "How did you structure the conversation to maintain trust while delivering a difficult truth?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "CEng", 
        text: "How do you secure buy-in from stakeholders with conflicting interests?", 
        paraphrase: "Give an example of how you navigated a room where everyone wanted something different." 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "CEng", 
        text: "Tell us about a technical presentation you delivered. How did you handle the Q&A?", 
        paraphrase: "How do you prepare for and handle difficult, unexpected questions in a public forum?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "CEng", 
        text: "How do you adapt your language when speaking to finance/HR vs engineering?", 
        paraphrase: "Give a specific example of how you translated technical constraints into commercial impacts." 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "CEng", 
        text: "Describe a negotiation you led. What was the outcome?", 
        paraphrase: "What was your strategy going into the room, and what did you have to compromise on?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "CEng", 
        text: "How do you handle a senior manager who questions your engineering judgment?", 
        paraphrase: "Tell us about a time you had to respectfully disagree with the boss using engineering facts." 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "IEng", 
        text: "How did you persuade a manager to approve a necessary tool or repair?", 
        paraphrase: "Walk us through how you built the verbal business case to get the money spent." 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "IEng", 
        text: "How do you influence colleagues to follow safety procedures when they are cutting corners?", 
        paraphrase: "How do you challenge unsafe behaviour without causing a shouting match on site?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "IEng", 
        text: "Describe a time you successfully negotiated a deadline or resource allocation.", 
        paraphrase: "Tell us about a time you had to verbally push back because the schedule was impossible." 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "IEng", 
        text: "Tell us about a time you chaired a meeting. How did you keep it on track?", 
        paraphrase: "When the conversation went off-topic, how did you politely but firmly bring it back to the agenda?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "IEng", 
        text: "How do you explain a complex fault to a non-technical customer?", 
        paraphrase: "Give an example of an analogy or method you used to help a layperson understand a mechanical or electrical issue." 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "IEng", 
        text: "Describe a time you had to calm down an angry stakeholder.", 
        paraphrase: "What specific de-escalation techniques did you use to turn the conversation around?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Persuasion", 
        mode: "IEng", 
        text: "How do you speak up in a meeting when you disagree with the group?", 
        paraphrase: "Tell us about a time you were the lone dissenting voice, and how you communicated your concerns." 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Verbal", 
        mode: "EngTech", 
        text: "Describe a time you had to explain a technical issue to someone from a non-technical background.", 
        paraphrase: "How did you adjust your language to make sure the customer or operator actually understood the problem?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Verbal", 
        mode: "EngTech", 
        text: "How do you report progress to your supervisor?", 
        paraphrase: "What kind of updates do you verbally give to make sure your boss knows where the job is at?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Verbal", 
        mode: "EngTech", 
        text: "Tell us about a time you had to ask for help or clarification on a task.", 
        paraphrase: "How do you approach a supervisor when you are genuinely stuck, to ensure you get the right guidance?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Verbal", 
        mode: "EngTech", 
        text: "Have you ever had to use a radio or phone to coordinate work? How did you ensure clarity?", 
        paraphrase: "When you can't see the other person, how do you verify they've understood your instructions?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Verbal", 
        mode: "EngTech", 
        text: "Describe a time you had to warn someone about a hazard verbally.", 
        paraphrase: "How did you quickly and clearly get their attention to stop them doing something dangerous?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Verbal", 
        mode: "EngTech", 
        text: "How do you handle it if a customer asks you a question you don't know the answer to?", 
        paraphrase: "How do you maintain a professional image while admitting you need to go and find out?" 
    },
    { 
        catCode: "D2", 
        catLabel: "D2: Verbal", 
        mode: "EngTech", 
        text: "Tell us about a time you had to give a handover to the next shift.", 
        paraphrase: "What key pieces of verbal information did you pass on to make sure they could hit the ground running?" 
    },

    // --- TRACK 1.13: COMPETENCE D3 - INTERPERSONAL SKILLS & DIVERSITY ---
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "CEng", 
        text: "How do you champion diversity and inclusion in your strategic decision making?", 
        paraphrase: "Give an example of a specific policy, design choice, or hiring decision where you actively promoted D&I." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "CEng", 
        text: "Describe a situation where you had to consider the diverse needs of end-users in your design.", 
        paraphrase: "How did you ensure your engineering solution was accessible and usable by a wide demographic?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "CEng", 
        text: "How do you create an inclusive environment where junior engineers feel safe to ask questions?", 
        paraphrase: "What specific actions do you take as a leader to break down hierarchical barriers?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "CEng", 
        text: "Tell us about a professional relationship you built that resulted in a business benefit.", 
        paraphrase: "Give an example of how networking or interpersonal skills directly solved a technical or commercial problem." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "CEng", 
        text: "How do you manage office politics to ensure your projects succeed?", 
        paraphrase: "Tell us about a time you had to diplomatically navigate conflicting internal agendas." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "CEng", 
        text: "Describe a time you had to mediate a serious dispute between senior stakeholders.", 
        paraphrase: "How did you remain neutral and facilitate a solution when emotions were running high?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "CEng", 
        text: "How do you demonstrate emotional intelligence in your leadership?", 
        paraphrase: "Give an example of a time you had to 'read the room' and change your approach to get the best out of your team." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "IEng", 
        text: "Describe a time you had to work with a difficult personality. How did you manage it?", 
        paraphrase: "Tell us about your strategy for getting the job done with someone who is notoriously hard to deal with." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "IEng", 
        text: "How do you ensure all voices are heard during a team toolbox talk?", 
        paraphrase: "How do you draw out input from the quiet team members, not just the loud ones?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "IEng", 
        text: "Describe a time you helped resolve a dispute between a contractor and your company.", 
        paraphrase: "How did you act as the middleman to de-escalate the situation and reach an agreement?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "IEng", 
        text: "How do you build rapport with a new team?", 
        paraphrase: "When walking onto a new site or joining a new project, what are your first steps to earn trust?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "IEng", 
        text: "Tell us about a time you felt someone was being treated unfairly. What did you do?", 
        paraphrase: "Give an example of a time you stepped in as an ally to address inappropriate behaviour." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "IEng", 
        text: "How do you manage stress in yourself and your team?", 
        paraphrase: "When the pressure is on, how do you prevent the working environment from becoming toxic?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "IEng", 
        text: "Describe a time you had to collaborate with a non-engineering department.", 
        paraphrase: "How did you build a productive working relationship with HR, Finance, or Sales?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "EngTech", 
        text: "How do you work effectively with people from different trades or backgrounds?", 
        paraphrase: "Give an example of how you build good relationships with other contractors on site." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "EngTech", 
        text: "Describe a time you had a disagreement with a colleague. How did you resolve it?", 
        paraphrase: "Tell us about a time you cleared the air professionally after a clash." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "EngTech", 
        text: "How do you contribute to a positive team atmosphere?", 
        paraphrase: "What do you personally do to keep morale up when the job is tough?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "EngTech", 
        text: "Have you ever had to work with someone who didn't speak your language well? How did you cope?", 
        paraphrase: "How did you use patience and alternative communication methods to get the job done safely?" 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "EngTech", 
        text: "What do you do to help a new apprentice feel welcome?", 
        paraphrase: "Tell us about a time you took a junior team member under your wing." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "EngTech", 
        text: "How do you show respect to clients or customers on site?", 
        paraphrase: "Give an example of how you manage your behaviour, language, or cleanliness to leave a good impression." 
    },
    { 
        catCode: "D3", 
        catLabel: "D3: Interpersonal", 
        mode: "EngTech", 
        text: "Describe a time you had to bite your tongue to avoid an argument.", 
        paraphrase: "Tell us about a time you chose to be professional and walk away rather than escalating a conflict." 
    },

    // --- TRACK 1.14: COMPETENCE E1 - COMPLIANCE & LEGISLATION ---
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "CEng", 
        text: "Describe a time you navigated a conflict between business pressure and professional standards.", 
        paraphrase: "When commercial demands pushed against engineering ethics, how did you hold the line?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "CEng", 
        text: "Give an example of how you ensure data protection and IP rights are respected in your projects.", 
        paraphrase: "How do you actively prevent confidential client data or proprietary tech from leaking?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "CEng", 
        text: "Have you ever refused to sign off on a piece of work? Why?", 
        paraphrase: "Tell us about a time you withheld your signature because the work didn't meet professional standards." 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "CEng", 
        text: "How do you handle whistleblowing or reporting malpractice in your organisation?", 
        paraphrase: "If you discovered serious misconduct, what exact steps would you take to report it safely?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "CEng", 
        text: "Describe how you promote the reputation of the engineering profession.", 
        paraphrase: "How do you act as an ambassador for engineering in your daily life or community?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "CEng", 
        text: "What does the Institution's Code of Conduct mean to you personally?", 
        paraphrase: "Beyond the paperwork, how does the Code actually change the way you behave at work?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "CEng", 
        text: "How do you ensure your team operates within the laws of the countries you work in?", 
        paraphrase: "When working internationally or across different regions, how do you guarantee legal compliance?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "IEng", 
        text: "How do you ensure your daily work complies with relevant regulations and legislation?", 
        paraphrase: "What systems do you use to ensure you aren't accidentally breaking the rules?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "IEng", 
        text: "What would you do if you saw a colleague violating a safety regulation?", 
        paraphrase: "How would you handle stepping in if a mate was doing something dangerous?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "IEng", 
        text: "How do you ensure contractors working under you follow the correct codes of practice?", 
        paraphrase: "How do you police your sub-contractors to make sure they aren't cutting corners?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "IEng", 
        text: "Describe a time you had to enforce a rule that made you unpopular.", 
        paraphrase: "Tell us about a time you prioritised compliance over being liked." 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "IEng", 
        text: "How do you ensure you do not undertake work beyond your competence?", 
        paraphrase: "Give an example of a time you had to say 'I don't know enough to do this safely'." 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "IEng", 
        text: "Have you ever admitted to a mistake you made? What happened?", 
        paraphrase: "Tell us about a time you owned up to an error before it became a bigger issue." 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Codes of Conduct", 
        mode: "IEng", 
        text: "How do you treat client information confidentially?", 
        paraphrase: "How do you ensure sensitive site or client details aren't discussed where they shouldn't be?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Conduct", 
        mode: "EngTech", 
        text: "Give an example of how you ensure you are working ethically and honestly in your daily role.", 
        paraphrase: "Give us an example of doing the right thing, even when it would have been easier not to." 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Conduct", 
        mode: "EngTech", 
        text: "What would you do if a supervisor asked you to do something you thought was unsafe?", 
        paraphrase: "How would you push back if the boss told you to do a job without the right safety gear?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Conduct", 
        mode: "EngTech", 
        text: "How do you ensure you represent your company professionally when on site?", 
        paraphrase: "How do you ensure you leave a good impression of your employer when visiting a site?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Conduct", 
        mode: "EngTech", 
        text: "Why is punctuality and reliability important in your role?", 
        paraphrase: "Why does turning up late or unprepared cause bigger problems for the whole team?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Conduct", 
        mode: "EngTech", 
        text: "Have you ever seen someone stealing or misusing company property? What did you do?", 
        paraphrase: "If you saw someone taking materials home, what exactly would you do?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Conduct", 
        mode: "EngTech", 
        text: "How do you ensure you are fit for work (e.g. fatigue, health)?", 
        paraphrase: "How do you manage your own readiness to ensure you don't cause an accident due to being tired?" 
    },
    { 
        catCode: "E1", 
        catLabel: "E1: Conduct", 
        mode: "EngTech", 
        text: "Describe a time you went the extra mile to do a good job.", 
        paraphrase: "Tell us about a time you put in extra effort just because you take pride in your job." 
    },

    // --- TRACK 1.15: COMPETENCE E2 - HEALTH, SAFETY & RISK ---
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "CEng", 
        text: "How do you apply the principles of 'Safety by Design' or ALARP in your work?", 
        paraphrase: "How do you prove that you have reduced a risk 'As Low As Reasonably Practicable'?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "CEng", 
        text: "How do you promote a positive safety culture beyond just 'following the rules'?", 
        paraphrase: "How do you get your team to actually care about safety, rather than just ticking boxes?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "CEng", 
        text: "How do you manage the safety risks associated with legacy equipment?", 
        paraphrase: "How do you keep people safe when working with old kit that doesn't meet modern standards?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "CEng", 
        text: "Describe a time you led a HAZOP or HAZID study.", 
        paraphrase: "Walk us through your role in systematically identifying hazards in a complex design." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "CEng", 
        text: "How do you quantify safety risk in your projects?", 
        paraphrase: "What methods or matrices do you use to put a hard number or severity level on a risk?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "CEng", 
        text: "Tell us about a safety improvement you initiated that had a measurable impact.", 
        paraphrase: "Tell us about a safety initiative you started that actively reduced incident rates." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "CEng", 
        text: "How do you stay current with changing Health & Safety legislation?", 
        paraphrase: "How do you keep yourself updated on the law so your projects stay compliant?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "IEng", 
        text: "Tell us about a time you had to stop work due to a safety concern.", 
        paraphrase: "Tell us about a time you pulled the plug on a job because the risk was too high." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "IEng", 
        text: "How do you ensure equipment is safe to operate before handing it over?", 
        paraphrase: "What are your final checks before you let someone use a machine you just worked on?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "IEng", 
        text: "Give an example of a Permit to Work system you have used.", 
        paraphrase: "Walk us through how you manage the permit process to ensure isolated systems stay safe." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "IEng", 
        text: "How do you conduct a Risk Assessment and Method Statement (RAMS)?", 
        paraphrase: "How do you go about writing a method statement that actually keeps the guys on the ground safe?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "IEng", 
        text: "Describe a 'Near Miss' you reported. What was the outcome?", 
        paraphrase: "Tell us about a close call. Why was it important to report it, and what changed as a result?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "IEng", 
        text: "How do you ensure visitors to your site are safe?", 
        paraphrase: "How do you control the site environment to protect people who don't know the hazards?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "IEng", 
        text: "Tell us about a time you had to deal with an emergency situation.", 
        paraphrase: "Tell us about a time things went wrong and you had to react quickly to keep people safe." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "EngTech", 
        text: "Describe how you apply safe systems of work (e.g., Permits, LOTO, RAMS) before starting a task.", 
        paraphrase: "Walk us through your personal safety checks before you even pick up a tool." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "EngTech", 
        text: "Tell us about a time you spotted a safety hazard. What immediate action did you take?", 
        paraphrase: "Tell us about a time you saw a danger on site and fixed it or flagged it immediately." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "EngTech", 
        text: "What PPE do you use for your job, and how do you check it is in good condition?", 
        paraphrase: "How do you know your safety gear is actually going to protect you if things go wrong?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "EngTech", 
        text: "Have you ever had to use an emergency stop button? Why?", 
        paraphrase: "Tell us about a time you had to act instantly to stop an accident happening." 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "EngTech", 
        text: "How do you keep your work area tidy to prevent accidents?", 
        paraphrase: "Why is housekeeping such a critical part of site safety?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "EngTech", 
        text: "What are the specific risks associated with your trade (e.g. electricity, heights)?", 
        paraphrase: "What is the most dangerous part of your trade, and how do you protect yourself?" 
    },
    { 
        catCode: "E2", 
        catLabel: "E2: Safety", 
        mode: "EngTech", 
        text: "How do you ensure you don't put others at risk while you are working?", 
        paraphrase: "How do you make sure your actions aren't creating a hazard for the person working next to you?" 
    },

    // --- TRACK 1.16: COMPETENCE E3 - SUSTAINABILITY PRINCIPLES ---
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "CEng", 
        text: "Describe a time you influenced a design choice specifically to reduce its environmental footprint.", 
        paraphrase: "Tell us about a time you actively engineered out environmental harm." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "CEng", 
        text: "How do you consider the full lifecycle (cradle-to-grave) of your designs?", 
        paraphrase: "How do you account for decommissioning and recycling right at the start of a project?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "CEng", 
        text: "Have you ever proposed a more sustainable alternative that cost more? How did you justify it?", 
        paraphrase: "How do you build a business case for a greener option when it hits the bottom line?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "CEng", 
        text: "How do you contribute to your organisation's Net Zero strategy?", 
        paraphrase: "What tangible actions are you taking to help your company reach its carbon targets?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "CEng", 
        text: "Describe a time you applied the principles of the Circular Economy.", 
        paraphrase: "Give an example of designing for reuse, repair, or remanufacture." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "CEng", 
        text: "How do you evaluate the social impact of your engineering projects?", 
        paraphrase: "How do you measure how your engineering affects the local community or society at large?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "CEng", 
        text: "Tell us about a time you reduced the use of scarce materials in a design.", 
        paraphrase: "Tell us about a time you substituted a rare or toxic material for something more sustainable." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "IEng", 
        text: "What actions have you taken to reduce waste or energy consumption in your daily operations?", 
        paraphrase: "What practical changes have you made on site or in the workshop to be greener?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "IEng", 
        text: "How do you ensure proper disposal of hazardous materials or waste on site?", 
        paraphrase: "Walk us through your process for ensuring dangerous waste doesn't end up in the environment." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "IEng", 
        text: "How do you monitor energy usage or emissions in your facility?", 
        paraphrase: "How do you track power or resource usage to identify areas for improvement?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "IEng", 
        text: "Describe a time you fixed a leak or inefficiency that was wasting resources.", 
        paraphrase: "Tell us about a time you stopped a process from actively wasting energy or materials." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "IEng", 
        text: "How do you encourage your team to be environmentally conscious?", 
        paraphrase: "How do you get the guys on site to actually care about recycling and turning things off?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "IEng", 
        text: "Give an example of a time you reused a component instead of buying new.", 
        paraphrase: "Give an example of a time you safely salvaged a part instead of buying a new one." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "IEng", 
        text: "How do you manage spill kits and environmental protection on site?", 
        paraphrase: "How do you manage the risk of environmental contamination on your sites?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "EngTech", 
        text: "How do you minimise waste or energy use in your daily work? Give a practical example.", 
        paraphrase: "Give us an example of how you avoid throwing away good material." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "EngTech", 
        text: "How do you dispose of waste materials (e.g., oil, batteries, scrap metal) responsibly?", 
        paraphrase: "How do you make sure you are putting the right waste in the right skips?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "EngTech", 
        text: "Have you ever suggested a way to reduce waste or reuse materials on a job?", 
        paraphrase: "Tell us about a time you found a clever way to reuse an offcut or spare part." 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "EngTech", 
        text: "Do you turn off equipment when it's not in use? Why?", 
        paraphrase: "Why is it part of your job to worry about the electricity bill or fuel usage?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "EngTech", 
        text: "How do you prevent spills or pollution when refuelling or using chemicals?", 
        paraphrase: "What precautions do you take to ensure oils or chemicals don't go down the drain?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "EngTech", 
        text: "Describe a time you segregated waste for recycling.", 
        paraphrase: "Why is it important that you separate different types of waste on a job?" 
    },
    { 
        catCode: "E3", 
        catLabel: "E3: Sustainability", 
        mode: "EngTech", 
        text: "Why is it important to look after the environment as an engineer?", 
        paraphrase: "In your own words, why should an engineer care about sustainability?" 
    },

    // --- TRACK 1.17: COMPETENCE E4 - CPD PLANNING & MENTORSHIP ---
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "CEng", 
        text: "How do you support the professional development of others in your organisation?", 
        paraphrase: "How do you act as a mentor or sponsor for the next generation of engineers?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "CEng", 
        text: "How do you contribute to the wider engineering profession (e.g., volunteering, mentoring)?", 
        paraphrase: "What do you do outside your day job to give back to the engineering community?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "CEng", 
        text: "How do you identify knowledge gaps in your team?", 
        paraphrase: "How do you assess what your team needs to learn to stay competitive?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "CEng", 
        text: "Describe your long-term CPD strategy. How does it align with your career goals?", 
        paraphrase: "Where are you trying to get to, and what is your roadmap for learning the skills to get there?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "CEng", 
        text: "How do you reflect on your learning to ensure it adds value?", 
        paraphrase: "How do you ensure a training course actually changes the way you work?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "CEng", 
        text: "Tell us about a time you learned something from a failure.", 
        paraphrase: "Tell us about a time you messed up, and how you turned that into a lasting lesson." 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "CEng", 
        text: "How do you stay motivated to learn after achieving Chartership?", 
        paraphrase: "Once you get CEng, what keeps you pushing to learn more?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "IEng", 
        text: "Describe a recent technical skill you learned and how you applied it to improve your work.", 
        paraphrase: "What is the newest thing you've learned to do, and how has it helped your job?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "IEng", 
        text: "How do you stay competent in the use of new tools or software?", 
        paraphrase: "When new technology arrives on site, how do you make sure you know how to use it safely?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "IEng", 
        text: "Have you attended any recent industry conferences or webinars? What did you take away?", 
        paraphrase: "Tell us about an industry event you went to recently. Did you learn anything useful?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "IEng", 
        text: "How do you help apprentices or junior staff learn the ropes?", 
        paraphrase: "How do you pass on your practical knowledge to the new starters?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "IEng", 
        text: "Do you read any trade magazines or engineering journals? Give an example.", 
        paraphrase: "How do you keep an eye on what is happening in the wider industry?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "IEng", 
        text: "How do you plan your training for the year ahead?", 
        paraphrase: "How do you decide what courses you want to go on each year?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "IEng", 
        text: "Tell us about a qualification you are currently working towards.", 
        paraphrase: "Tell us about the formal studying you are doing and why you chose it." 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "EngTech", 
        text: "How do you keep your technical skills up to date? (e.g., Manufacturer training, reading, courses).", 
        paraphrase: "How do you make sure you aren't getting left behind as equipment gets more modern?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "EngTech", 
        text: "What was the last training course you attended? What did you learn?", 
        paraphrase: "What did you actually get out of your most recent company training?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "EngTech", 
        text: "How do you record your learning and development activities?", 
        paraphrase: "How do you keep track of the tickets, courses, and toolbox talks you've done?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "EngTech", 
        text: "Have you learned how to use any new tools recently?", 
        paraphrase: "Tell us about a time you had to figure out how a new piece of kit worked." 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "EngTech", 
        text: "Do you ask your supervisor for feedback on your work? Give an example.", 
        paraphrase: "How do you use your supervisor's criticism to make yourself a better technician?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "EngTech", 
        text: "Is there a specific skill you want to learn next year?", 
        paraphrase: "What is the one thing you really want to get ticketed or trained on next?" 
    },
    { 
        catCode: "E4", 
        catLabel: "E4: CPD", 
        mode: "EngTech", 
        text: "How do you help new people learn the job?", 
        paraphrase: "How do you make sure the new guy learns the right way to do things, not the wrong way?" 
    },

    // --- TRACK 1.18: COMPETENCE E5 - ETHICAL FRAMEWORKS & DILEMMAS ---
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "CEng", 
        text: "Describe a significant ethical dilemma you have faced. How did you resolve it?", 
        paraphrase: "Tell us about a time the 'right thing to do' was the hardest thing to do." 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "CEng", 
        text: "How do you handle conflicts of interest (e.g., with suppliers)?", 
        paraphrase: "How do you ensure your engineering decisions are never compromised by personal gain?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "CEng", 
        text: "How do you protect whistleblowers in your organisation?", 
        paraphrase: "If someone in your team reported a serious issue, how would you protect them from backlash?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "CEng", 
        text: "How do you ensure data security (GDPR) and intellectual property rights are respected?", 
        paraphrase: "How do you ensure you aren't accidentally giving away company secrets or client data?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "CEng", 
        text: "Describe a time you had to reject a gift or hospitality.", 
        paraphrase: "Tell us about a time you had to politely decline hospitality to maintain your integrity." 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "CEng", 
        text: "How do you ensure your decisions are not biased?", 
        paraphrase: "How do you ensure you remain objective when selecting contractors or making design choices?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "CEng", 
        text: "Tell us about a time you prioritised public welfare over profit.", 
        paraphrase: "Give an example of a time you prioritised keeping people safe over making the company money." 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "IEng", 
        text: "Have you ever been asked to cut a corner you felt was unsafe? What did you do?", 
        paraphrase: "Tell us about a time you stood your ground when pressured to do a job dangerously." 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "IEng", 
        text: "How do you ensure you do not undertake work beyond your competence?", 
        paraphrase: "How do you recognise your own limits, and what do you do when you hit them?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "IEng", 
        text: "How do you ensure fair treatment of all contractors and staff?", 
        paraphrase: "How do you make sure you aren't playing favourites with your team or suppliers?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "IEng", 
        text: "Describe a time you had to correct someone's behaviour on site.", 
        paraphrase: "Tell us about a time you had to tell someone off for acting unprofessionally." 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "IEng", 
        text: "How do you ensure accurate reporting of data (no falsification)?", 
        paraphrase: "Why is it absolutely critical that you never falsify test results or time sheets?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "IEng", 
        text: "What does 'professional integrity' mean to you in your daily work?", 
        paraphrase: "In your own words, what makes an engineer trustworthy?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "IEng", 
        text: "Have you ever challenged a decision you felt was unethical?", 
        paraphrase: "Tell us about a time you had to speak truth to power." 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "EngTech", 
        text: "Have you ever seen someone doing something dishonest or unsafe? How did you handle it?", 
        paraphrase: "If you saw a mate doing something dodgy, how would you actually handle it?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "EngTech", 
        text: "Why is it important to be honest if you make a mistake on a job?", 
        paraphrase: "Why is covering up a mistake far more dangerous than just admitting it?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "EngTech", 
        text: "How do you ensure you are treating customers and colleagues with respect?", 
        paraphrase: "How do you make sure you keep things professional, even when the customer is annoying?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "EngTech", 
        text: "Would you sign a job off if it wasn't quite finished? Why/Why not?", 
        paraphrase: "If the boss said 'just sign it, it's fine', but it wasn't, what would you do?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "EngTech", 
        text: "How do you look after company tools and vans?", 
        paraphrase: "Why does treating company property with respect matter?" 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "EngTech", 
        text: "Describe a time you refused to do something you knew was wrong.", 
        paraphrase: "Tell us about a time you just said 'no' because you knew it wasn't right." 
    },
    { 
        catCode: "E5", 
        catLabel: "E5: Ethics", 
        mode: "EngTech", 
        text: "Why is it important to follow the rules even when no one is watching?", 
        paraphrase: "Why do you still do the job properly even if the client will never see it?" 
    },

    // --- TRACK 1.19: DEVELOPMENT ACTION PLANS & CLOSING (ALL ACCREDITATIONS) ---
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "CEng", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? Specifically, where do you see yourself professionally in 5 years? Do you plan to move into management or technical specialisation?", 
        paraphrase: "In other words, what is your long-term career trajectory now that you are reaching this milestone?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "CEng", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? For example, what is the next 'big thing' in your industry, and how are you preparing for it?", 
        paraphrase: "How are you future-proofing your own skill set against upcoming technological shifts?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "CEng", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? Looking ahead, what leadership roles do you aspire to hold?", 
        paraphrase: "Are you aiming for a Director, Principal, or Fellow role, and what gaps do you need to close to get there?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "CEng", 
        text: "Can you tell us about your personal and career development goals? As part of your long-term plan, how do you intend to give back to the institution after you are registered?", 
        paraphrase: "For example, are you planning to mentor, become an interviewer, or contribute to STEM events?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "IEng", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? For instance, what technical skills do you plan to master in the next 12 months?", 
        paraphrase: "What specific gaps in your knowledge are you actively targeting right now?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "IEng", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? Do you plan to progress to CEng in the future? If so, what is your plan?", 
        paraphrase: "If Chartered status is your goal, what specific CEng competencies are you trying to develop next?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "IEng", 
        text: "Can you tell us about your personal and career development goals? Are there any formal qualifications (degrees or certifications) you are planning to take in the medium to long term?", 
        paraphrase: "What formal training is next on your agenda?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "IEng", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? How will you maintain your competence as technology changes?", 
        paraphrase: "How do you plan to avoid your skills becoming outdated over the next few years?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "EngTech", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? For example, do you have any plans to progress towards IEng or CEng registration in the future?", 
        paraphrase: "Are you looking to move up the registration ladder, or are you focusing on deepening your current hands-on expertise?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "EngTech", 
        text: "Can you tell us about your personal and career development goals? In the short term, what new tools or machinery would you like to get trained on?", 
        paraphrase: "Is there a specific piece of equipment or software you want to get ticketed for next?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "EngTech", 
        text: "Can you tell us about your personal and career development goals in the short to medium term? Specifically, where do you see yourself in 2 years? Do you want to lead a team?", 
        paraphrase: "Are you aiming for a supervisory role, or do you prefer to be the lead technical expert on the tools?" 
    },
    { 
        catCode: "DAP", 
        catLabel: "Development Plan", 
        mode: "EngTech", 
        text: "Can you tell us about your personal and career development goals in the short, medium, and long term? Is there a specific area of your trade you want to specialise in?", 
        paraphrase: "What part of your daily work do you want to become the absolute 'go-to' expert at?" 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "Very briefly, is there anything you'd like to mention that we haven't quite covered?", 
        paraphrase: "This is your chance to drop in any final bits of evidence you had prepared." 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "Is there a specific project highlight you really wanted to share but didn't get a chance to?", 
        paraphrase: "If there's a STAR example you memorised and we didn't ask about it, tell us now." 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "Do you have any questions for us regarding the interview process?", 
        paraphrase: "Is there anything you'd like to ask the panel about the next steps?" 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "Before we finish, would you like to clarify any of your previous answers?", 
        paraphrase: "If you feel you fumbled an earlier question, you can take a moment to correct it now." 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "Is there anything else you would like to add to support your application?", 
        paraphrase: "Any final thoughts to help convince us of your competence?" 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "How do you feel the interview went? Is there any area you felt you under-represented?", 
        paraphrase: "Be honest—if you think you missed something important, let's hear it briefly." 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "If you are successful today, what will be your first action as a registered engineer?", 
        paraphrase: "How will achieving this title change your immediate day-to-day outlook?" 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "Thank you. Please take a moment to relax. Do you have any final closing statement?", 
        paraphrase: "We're wrapping up now. The floor is yours for a final summary." 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "Are there any external factors or extenuating circumstances we should be aware of?", 
        paraphrase: "Is there anything impacting your career timeline or application that we need to consider?" 
    },
    { 
        catCode: "Closing", 
        catLabel: "Closing", 
        mode: "All", 
        text: "What is the one thing you want us to remember about you after you leave the room?", 
        paraphrase: "Give us your final 'elevator pitch' as an engineer." 
    },


    // =========================================================================
    // PART 2: EXTERNAL CORPORATE INTERVIEWS (CROSS-DISCIPLINARY CAREER POOL)
    // Modes: Graduate, Senior, Principal, All
    // Taxonomy: Corp_Intro, Corp_Tech, Corp_Ops, Corp_Comm, Corp_Lead, Corp_Closing
    // Disciplines Addressed: Mechanical, Electrical, Civil, Chemical, Project Control
    // =========================================================================

    // --- 2.1: CORPORATE INTRODUCTIONS & PROFILES ---
    { 
        catCode: "Corp_Intro", 
        catLabel: "Corporate Profile Check", 
        mode: "Graduate", 
        text: "Welcome. To help us understand your foundational readiness for this enterprise procurement engineering role, please summarise your academic design projects and outline how you verified your model data.", 
        paraphrase: "Walk us through your top university design projects and explain how you proved your calculations were correct." 
    },
    { 
        catCode: "Corp_Intro", 
        catLabel: "Corporate Profile Check", 
        mode: "Senior", 
        text: "Thank you for attending our technical board review today. Please run us through your professional engineering resume, explicitly detailing the high-value assets you have managed and the commercial metrics you optimised.", 
        paraphrase: "Summarise your background, focusing directly on the scale of budgets and projects you have overseen." 
    },
    { 
        catCode: "Corp_Intro", 
        catLabel: "Corporate Profile Check", 
        mode: "Principal", 
        text: "Good day. As a candidate for a principal director appointment, please outline your philosophy on technical governance. How do you align cross-disciplinary engineering strategies with corporate capital allocation targets?", 
        paraphrase: "Explain how you ensure engineering activities actively support the business's high-level financial goals." 
    },

    // --- 2.2: TECHNICAL DEPTH & CROSS-DISCIPLINARY DESTRUCTIVE DIAGNOSTICS ---
    { 
        catCode: "Corp_Tech", 
        catLabel: "Technical Depth (Mechanical)", 
        mode: "Senior", 
        text: "Describe a scenario where a high-vibration asset or dynamic component suffered a catastrophic structural deficiency. What specific finite element analysis (FEA) or stress metrics did you execute to trace the root cause?", 
        paraphrase: "Detail how you diagnosed a severe mechanical breakdown and mathematically validated your structural fix." 
    },
    { 
        catCode: "Corp_Tech", 
        catLabel: "Technical Depth (Electrical)", 
        mode: "Senior", 
        text: "Detail your background in managing complex control loops, instrumentation SCADA systems, or high-voltage distributions. How did you resolve a severe systemic signal clash or cascade electrical fault?", 
        paraphrase: "Tell us about a tricky electrical or instrumentation failure you diagnosed and resolved under pressure." 
    },
    { 
        catCode: "Corp_Tech", 
        catLabel: "Technical Depth (Civil/Structural)", 
        mode: "Senior", 
        text: "In managing substructure or deep foundation assets under adverse soil or water conditions, how did you perform soil-structure interaction reviews to resolve an unexpected structural settlement anomaly?", 
        paraphrase: "How did you analyse an unexpected structural settling issue and modify the foundation design safely?" 
    },
    { 
        catCode: "Corp_Tech", 
        catLabel: "Technical Depth (Chemical/Process)", 
        mode: "Senior", 
        text: "When managing exothermic reactions, mass-transfer operations, or volatile fluid corridors, how did you recalculate pressure relief boundaries (such as sizing an emergency relief valve) during a major process deviation?", 
        paraphrase: "Walk us through recalculating process safety parameters when fluid or thermal rates exceeded standard limits." 
    },
    { 
        catCode: "Corp_Tech", 
        catLabel: "Technical Depth & Strategy", 
        mode: "Principal", 
        text: "When auditing multi-disciplinary design models for major brownfield installations, what gatekeeping checklists do you mandate to catch and eliminate cross-discipline design clashes before field construction starts?", 
        paraphrase: "What explicit engineering checks do you enforce to catch inter-departmental design errors before they hit site?" 
    },

    // --- 2.3: PROJECT DELIVERY & OPERATIONAL MANOEUVRES ---
    { 
        catCode: "Corp_Ops", 
        catLabel: "Project Delivery & Turnarounds", 
        mode: "Graduate", 
        text: "Describe how you managed task prioritisation and resource constraints when a major project milestone overlapped with limited access to testing laboratories or computing software.", 
        paraphrase: "How did you keep your tasks on schedule when your work environment or resource access was heavily restricted?" 
    },
    { 
        catCode: "Corp_Ops", 
        catLabel: "Project Delivery & Turnarounds", 
        mode: "Senior", 
        text: "Run us through how you managed an aggressive site installation timeline when a primary sub-contractor failed to deliver critical technical equipment. What workaround strategies did you execute?", 
        paraphrase: "When supply chain delays threatened a major milestone, how did you modify the engineering plan to protect delivery targets?" 
    },
    { 
        catCode: "Corp_Ops", 
        catLabel: "Project Delivery & Turnarounds", 
        mode: "Principal", 
        text: "Explain your framework for risk mitigation during high-exposure asset overhauls or plant turnarounds. How do you balance aggressive commissioning schedules with strict regulatory engineering compliance?", 
        paraphrase: "How do you protect engineering safety boundaries when executive stakeholders demand a fast plant restart?" 
    },

    // --- 2.4: COMMERCIAL ACUMEN & FINANCIAL METRICS ---
    { 
        catCode: "Corp_Comm", 
        catLabel: "Commercial Acumen (CapEx/OpEx)", 
        mode: "Graduate", 
        text: "Are you aware of how small design parameters alter overall manufacturing costs? Outline a time you modified a design feature to minimise raw material waste or simplify fabrication.", 
        paraphrase: "Give an example of value engineering a component to cut production costs without lowering product quality." 
    },
    { 
        catCode: "Corp_Comm", 
        catLabel: "Commercial Acumen (CapEx/OpEx)", 
        mode: "Senior", 
        text: "Describe a technical layout modification you championed that lowered long-term operational expenditure (OpEx). How did you present and justify the investment case to secure funding from the board?", 
        paraphrase: "How did you translate an engineering improvement into financial numbers to win capital approval from management?" 
    },
    { 
        catCode: "Corp_Comm", 
        catLabel: "Commercial Acumen (CapEx/OpEx)", 
        mode: "Principal", 
        text: "Detail your framework for creating and defending capital expenditure (CapEx) portfolios for major asset upgrades. What financial metrics (such as NPV, IRR, or payback periods) do you prioritise?", 
        paraphrase: "How do you manage company budgets and mathematically evaluate project value for executive review?" 
    },

    // --- 2.5: BEHAVIOURAL & LEADERSHIP METRICS ---
    { 
        catCode: "Corp_Lead", 
        catLabel: "Behavioural Leadership (STAR)", 
        mode: "Graduate", 
        text: "Describe a situation where a member of your project team disagreed with your technical approach. How did you manage the interpersonal dynamic to ensure delivery?", 
        paraphrase: "Tell us about a project disagreement with a peer and how you resolved it to achieve your goal." 
    },
    { 
        catCode: "Corp_Lead", 
        catLabel: "Behavioural Leadership (STAR)", 
        mode: "Senior", 
        text: "Tell us about a time you had to deliver critical, highly unpopular technical feedback to a senior project manager regarding a serious site safety or compliance risk. How did you handle the friction?", 
        paraphrase: "When commercial leaders wanted to bypass a safety protocol, how did you step in to enforce engineering compliance?" 
    },
    { 
        catCode: "Corp_Lead", 
        catLabel: "Behavioural Leadership (STAR)", 
        mode: "Principal", 
        text: "Cultivating a high-performance culture requires distinct behavioural management. How do you encourage accountability and maintain technical innovation across global, multi-disciplinary engineering networks?", 
        paraphrase: "What explicit leadership steps do you take to drive safety ownership and technical performance across dispersed teams?" 
    },

    // --- 2.6: CORPORATE CLOSING FLOWS ---
    { 
        catCode: "Corp_Closing", 
        catLabel: "Corporate Closing parameters", 
        mode: "All", 
        text: "We have completed our commercial competency review. To close this session, what core corporate asset or value stream do you believe your appointment will immediately optimise within our enterprise?", 
        paraphrase: "Give us your final summary pitch explaining why your specific technical background matches our business goals." 
    },
    { 
        catCode: "Corp_Closing", 
        catLabel: "Corporate Closing parameters", 
        mode: "All", 
        text: "Do you have any precise questions for our executive board regarding our five-year technical roadmap, upcoming mergers, or division structures?", 
        paraphrase: "The floor is yours to ask our panel about our current operational challenges or investment pipelines." 
    },


    // =========================================================================
    // PART 3: INTERNAL PROMOTION BOARDS (STEWARDSHIP & SUCCESSION POOL)
    // Tiers: Senior, Principal, Director, All
    // Taxonomy: Promo_Intro, Promo_Lead, Promo_Gov, Promo_Comm, Promo_Change, Promo_Closing
    // Focus Areas: Mentorship, Governance, P&L Accountability, Culture Shift
    // =========================================================================

    // --- 3.1: PROMOTION CONTEXT & MILESTONES ---
    { 
        catCode: "Promo_Intro", 
        catLabel: "Progression Context", 
        mode: "All", 
        text: "Thank you for standing before our internal progression panel today. Please outline your core contributions to our asset portfolio over the past 24 months, and explain why now represents the appropriate milestone to transition to broader corporate stewardship.", 
        paraphrase: "In short, summarise your biggest technical or commercial wins within the company and explain why you are ready for this step up." 
    },
    { 
        catCode: "Promo_Intro", 
        catLabel: "Progression Context", 
        mode: "Senior", 
        text: "As you transition from a localised design engineer to a lead supervisor role within this company, how will you adjust your daily routine to shift from personal task execution to systemic team oversight?", 
        paraphrase: "How will you effectively delegate technical tasks while preserving strict design quality control?" 
    },
    { 
        catCode: "Promo_Intro", 
        catLabel: "Progression Context", 
        mode: "Director", 
        text: "Moving to a departmental leadership tier involves significant strategic exposure. How has your experience working with our business systems prepared you to take on full strategic oversight for this division?", 
        paraphrase: "How will you lead our engineering division to support long-term company growth?" 
    },

    // --- 3.2: LEADERSHIP, MENTORSHIP & TEAM BENCH GROWTH ---
    { 
        catCode: "Promo_Lead", 
        catLabel: "Mentorship & Staff Growth", 
        mode: "Senior", 
        text: "Detail how you have used our internal development programs to mentor graduate engineers, apprentices, or technicians to help close skills gaps in your current team.", 
        paraphrase: "Give us an explicit example of a junior team member you coached to expand our internal competency bench." 
    },
    { 
        catCode: "Promo_Lead", 
        catLabel: "Mentorship & Staff Growth", 
        mode: "Principal", 
        text: "When managing multi-disciplinary specialists across separate business locations, what specific governance steps do you implement to maintain professional standards and eliminate technical siloes?", 
        paraphrase: "How do you keep different engineering teams communicating clearly so information does not get trapped in department siloes?" 
    },
    { 
        catCode: "Promo_Lead", 
        catLabel: "Mentorship & Staff Growth", 
        mode: "Director", 
        text: "Building a resilient internal talent bench is vital for our company's future. What concrete frameworks will you implement to identify high-performing talent and prepare them for future promotion?", 
        paraphrase: "What is your strategy for spotting leadership potential in our teams and prepping those individuals for future promotion?" 
    },

    // --- 3.3: OPERATIONAL GOVERNANCE & SAFETY RISK EXPOSURE ---
    { 
        catCode: "Promo_Gov", 
        catLabel: "Operational Policy Governance", 
        mode: "Senior", 
        text: "How do you intend to monitor and enforce compliance with our company's Safety Management Systems (SMS) during complex site operations or high-risk asset turnarounds?", 
        paraphrase: "What practical steps do you take on the ground to ensure contractors and staff stick to our exact safety protocols?" 
    },
    { 
        catCode: "Promo_Gov", 
        catLabel: "Operational Policy Governance", 
        mode: "Principal", 
        text: "As you assume increased legal and safety liability under active regulatory environments, what explicit design gatekeeping processes will you enforce to guarantee absolute compliance before structural sign-off?", 
        paraphrase: "What gatekeeping checks will you mandate to ensure our designs are legally and technically compliant before you sign your name?" 
    },
    { 
        catCode: "Promo_Gov", 
        catLabel: "Operational Policy Governance", 
        mode: "Director", 
        text: "How will you design and roll out an asset integrity management policy that balances aggressive production timelines with our corporate net-zero carbon reduction strategy?", 
        paraphrase: "How do you plan to adjust departmental policies to keep our plant output high while hitting our sustainability goals?" 
    },

    // --- 3.4: COMMERCIAL STRATEGY & PROFIT & LOSS BALANCE SHEETS ---
    { 
        catCode: "Promo_Comm", 
        catLabel: "Commercial Budget Strategy", 
        mode: "Senior", 
        text: "Outline a time when you modified an existing project modification scheme to lower material or operational expenditure (OpEx) without introducing technical risk.", 
        paraphrase: "Tell us how you cut project costs or asset waste while completely maintaining system safety and specifications." 
    },
    { 
        catCode: "Promo_Comm", 
        catLabel: "Commercial Budget Strategy", 
        mode: "Principal", 
        text: "How do you evaluate the long-term return on investment (ROI) or net present value (NPV) of a proposed equipment upgrade before presenting the investment case to senior management?", 
        paraphrase: "Walk us through how you mathematically prove a costly equipment upgrade is worth the investment before bringing it to the board." 
    },
    { 
        catCode: "Promo_Comm", 
        catLabel: "Commercial Budget Strategy", 
        mode: "Director", 
        text: "If assigned absolute Profit and Loss (P&L) accountability for this major engineering division, what internal financial controls will you implement to insulate our projects from supply-chain inflation?", 
        paraphrase: "How will you structure our division's budget to protect our margins from rising supplier costs?" 
    },

    // --- 3.5: CHANGE MANAGEMENT & SAFETY SAFETY CULTURES ---
    { 
        catCode: "Promo_Change", 
        catLabel: "Change Leadership Matrix", 
        mode: "All", 
        text: "Describe a scenario within our organisation where you championed a process change or software migration and successfully overcame pushback from internal stakeholders.", 
        paraphrase: "How did you win over colleagues who were resistant to changing their daily habits or systems?" 
    },
    { 
        catCode: "Promo_Change", 
        catLabel: "Change Leadership Matrix", 
        mode: "Senior", 
        text: "How do you build an inclusive environment where engineers and operators feel completely safe to report near-misses and challenge legacy design methods without fear of hierarchy?", 
        paraphrase: "What habits do you demonstrate daily to make sure team members feel safe to report errors or safety concerns immediately?" 
    },
    { 
        catCode: "Promo_Change", 
        catLabel: "Change Leadership Matrix", 
        mode: "Principal", 
        text: "When rolling out a major process or system change across different business units, how do you capture field feedback to ensure standard operating procedures (SOPs) are permanently optimised?", 
        paraphrase: "How do you loop field feedback back into our office manuals so we do not repeat implementation mistakes?" 
    },

    // --- 3.6: STRATEGIC INTENT CLOSING VECTORS ---
    { 
        catCode: "Promo_Closing", 
        catLabel: "Strategic Intent Execution", 
        mode: "All", 
        text: "In your first ninety days post-promotion, what specific operational bottleneck or asset performance deficit do you intend to audit and rectify? Define your execution roadmap.", 
        paraphrase: "What is your immediate tactical priority once your promotion is confirmed by the board?" 
    },
    { 
        catCode: "Promo_Closing", 
        catLabel: "Strategic Intent Execution", 
        mode: "All", 
        text: "Do you have any precise questions for our executive panel regarding our high-level business goals, joint-venture alignments, or our capital investment pipeline for the upcoming fiscal year?", 
        paraphrase: "The box is open to ask our panel about our corporate strategy or funding directions." 
    }
];

// Clean validation export module configuration supporting safe cross-page asset synthesis
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions };
}