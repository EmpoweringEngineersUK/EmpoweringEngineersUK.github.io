// --- INTERVIEW QUESTION DATABASE ---
// UK-SPEC Aligned for CEng / IEng / EngTech
// Volume: ~7+ Questions per Competency per Mode
// Categories: Intro, A1, A2, B1, B2, B3, C1, C2, C3, C4, D1, D2, D3, E1, E2, E3, E4, E5, DAP, Closing

const questions = [
    // =========================================================================
    // INTRODUCTION (Ice Breakers & Context)
    // =========================================================================
    // ALL LEVELS
    { catCode: "Intro", catLabel: "Introduction", mode: "All", text: "Please introduce yourself and provide a brief overview of your current role and career highlights." },
    { catCode: "Intro", catLabel: "Introduction", mode: "All", text: "We've read your report, but can you give us a 2-minute summary of your engineering journey so far?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "All", text: "What do you consider to be the defining moment or project of your career to date?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "All", text: "Why is now the right time for you to apply for professional registration?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "All", text: "Briefly describe your current organization and where you fit into the wider engineering structure." },
    { catCode: "Intro", catLabel: "Introduction", mode: "All", text: "What motivates you as an engineer? What part of the job do you enjoy the most?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "All", text: "If you had to describe your engineering style in three words, what would they be and why?" },

    // CEng SPECIFIC
    { catCode: "Intro", catLabel: "Introduction", mode: "CEng", text: "Tell us about your background, specifically focusing on roles where you held significant technical responsibility." },
    { catCode: "Intro", catLabel: "Introduction", mode: "CEng", text: "Describe your current scope of authority and how it has evolved over the last 5 years." },
    { catCode: "Intro", catLabel: "Introduction", mode: "CEng", text: "How does your current role allow you to influence the strategic direction of your department?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "CEng", text: "In your opinion, what is the biggest challenge currently facing engineers in your sector?" },

    // IEng SPECIFIC
    { catCode: "Intro", catLabel: "Introduction", mode: "IEng", text: "Walk us through your career history, focusing on your operational and practical engineering experience." },
    { catCode: "Intro", catLabel: "Introduction", mode: "IEng", text: "How has your role changed from hands-on tasks to managing engineering processes?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "IEng", text: "Describe the specific systems or assets you are currently responsible for maintaining or operating." },
    { catCode: "Intro", catLabel: "Introduction", mode: "IEng", text: "What is the most complex operational challenge you handle in your day-to-day role?" },

    // EngTech SPECIFIC
    { catCode: "Intro", catLabel: "Introduction", mode: "EngTech", text: "Describe your current job role. What are your main daily responsibilities and what equipment do you use?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "EngTech", text: "How long have you been working in your current trade, and what training have you completed?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "EngTech", text: "What specific practical skills do you use most often in your day-to-day work?" },
    { catCode: "Intro", catLabel: "Introduction", mode: "EngTech", text: "Can you describe a typical day in your working life?" },

    // =========================================================================
    // A1: MAINTAIN & EXTEND KNOWLEDGE
    // =========================================================================
    // CEng
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "CEng", text: "Describe a time you solved a complex problem using first principles rather than relying on standard codes." },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "CEng", text: "Can you give an example where you had to learn a new theoretical concept from scratch to complete a project?" },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "CEng", text: "Tell us about a time you challenged a standard assumption or 'rule of thumb' using theoretical analysis." },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "CEng", text: "How do you evaluate new and emerging technologies for potential application in your business?" },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "CEng", text: "Describe a situation where you had to synthesize information from multiple engineering disciplines." },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "CEng", text: "Give an example of how you keep your technical knowledge at the cutting edge of your industry." },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "CEng", text: "Have you ever contributed to the development of a new standard or company specification?" },

    // IEng
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "IEng", text: "Tell us about a time you applied existing technology to solve a maintenance or operational problem." },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "IEng", text: "How do you stay updated with the latest industry standards and manufacturer specifications?" },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "IEng", text: "Give an example of how you used your knowledge of engineering principles to diagnose a difficult fault." },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "IEng", text: "Describe a time you had to interpret a complex technical manual to fix a piece of equipment." },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "IEng", text: "How do you ensure that you are using the correct version of a standard or procedure?" },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "IEng", text: "Tell us about a time you realized a standard procedure was no longer fit for purpose. What did you do?" },
    { catCode: "A1", catLabel: "A1: Knowledge", mode: "IEng", text: "How do you broaden your knowledge beyond your immediate discipline (e.g. Mechanical learning Electrical)?" },

    // EngTech
    { catCode: "A1", catLabel: "A1: Review & Select", mode: "EngTech", text: "Describe a time you had to review and select the correct technique, procedure, or method to solve a practical engineering task." },
    { catCode: "A1", catLabel: "A1: Review & Select", mode: "EngTech", text: "How do you decide which tools or equipment are best suited for a specific job? Give an example." },
    { catCode: "A1", catLabel: "A1: Review & Select", mode: "EngTech", text: "Tell us about a time you had to check a manual or drawing to confirm how to proceed with a task." },
    { catCode: "A1", catLabel: "A1: Review & Select", mode: "EngTech", text: "What do you do if you encounter a problem you haven't seen before?" },
    { catCode: "A1", catLabel: "A1: Review & Select", mode: "EngTech", text: "Give an example of a time you used your experience to choose a better way of doing a job." },
    { catCode: "A1", catLabel: "A1: Review & Select", mode: "EngTech", text: "How do you ensure you understand the manufacturer's instructions before using new kit?" },
    { catCode: "A1", catLabel: "A1: Review & Select", mode: "EngTech", text: "Describe a time you had to select a specific material or component for a repair." },

    // =========================================================================
    // A2: APPLICATION OF ENGINEERING KNOWLEDGE
    // =========================================================================
    // CEng
    { catCode: "A2", catLabel: "A2: Application", mode: "CEng", text: "Give an example of a technical innovation you championed. How did you prove it was viable?" },
    { catCode: "A2", catLabel: "A2: Application", mode: "CEng", text: "How did you ensure reliable outcomes when dealing with a novel or untested technology?" },
    { catCode: "A2", catLabel: "A2: Application", mode: "CEng", text: "Describe a situation where you had to balance conflicting technical requirements (e.g. weight vs. strength)." },
    { catCode: "A2", catLabel: "A2: Application", mode: "CEng", text: "Tell us about a time you used simulation or modelling (FEA/CFD) to validate a design before build." },
    { catCode: "A2", catLabel: "A2: Application", mode: "CEng", text: "Describe a root cause analysis you led on a complex systemic failure." },
    { catCode: "A2", catLabel: "A2: Application", mode: "CEng", text: "How do you validate that your theoretical calculations match reality?" },
    { catCode: "A2", catLabel: "A2: Application", mode: "CEng", text: "Give an example of a project where you applied a creative solution to a stagnation point." },

    // IEng
    { catCode: "A2", catLabel: "A2: Application", mode: "IEng", text: "Describe a time you identified a way to improve the efficiency of an existing process." },
    { catCode: "A2", catLabel: "A2: Application", mode: "IEng", text: "Tell us about a time you implemented a solution that reduced downtime or cost." },
    { catCode: "A2", catLabel: "A2: Application", mode: "IEng", text: "Give an example of a continuous improvement initiative you led using engineering data." },
    { catCode: "A2", catLabel: "A2: Application", mode: "IEng", text: "How did you prove that a proposed repair method would work before you started?" },
    { catCode: "A2", catLabel: "A2: Application", mode: "IEng", text: "Describe a time you used condition monitoring data to prevent a failure." },
    { catCode: "A2", catLabel: "A2: Application", mode: "IEng", text: "How do you apply engineering principles to everyday problem solving on site?" },
    { catCode: "A2", catLabel: "A2: Application", mode: "IEng", text: "Tell us about a modification you made to a system to improve its reliability." },

    // EngTech
    { catCode: "A2", catLabel: "A2: Science & Maths", mode: "EngTech", text: "Give an example of a time you used technical data (calculations, charts, or specs) to solve a problem." },
    { catCode: "A2", catLabel: "A2: Science & Maths", mode: "EngTech", text: "Describe a time you had to interpret a technical drawing or wiring diagram to complete a task." },
    { catCode: "A2", catLabel: "A2: Science & Maths", mode: "EngTech", text: "Have you ever had to perform a basic calculation to check if a component was safe to use?" },
    { catCode: "A2", catLabel: "A2: Science & Maths", mode: "EngTech", text: "Tell us about a time you had to measure something precisely. What tools did you use?" },
    { catCode: "A2", catLabel: "A2: Science & Maths", mode: "EngTech", text: "How do you identify what a symbol means on a schematic if you don't know it?" },
    { catCode: "A2", catLabel: "A2: Science & Maths", mode: "EngTech", text: "Describe a time you used a multimeter, gauge, or other diagnostic tool to find a fault." },
    { catCode: "A2", catLabel: "A2: Science & Maths", mode: "EngTech", text: "Have you ever spotted an error in a drawing or instruction? What did you do?" },

    // =========================================================================
    // B1: IDENTIFY PROBLEMS & OPPORTUNITIES
    // =========================================================================
    // CEng
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "CEng", text: "Describe a time you had to define the scope for a project with ambiguous or incomplete requirements." },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "CEng", text: "How do you evaluate 'fitness for purpose' when developing a novel solution?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "CEng", text: "How do you ensure your specifications align with the client's strategic goals, not just their immediate needs?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "CEng", text: "Tell us about a feasibility study you conducted. What options did you consider and discard?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "CEng", text: "Describe a time you identified a commercial opportunity through technical analysis." },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "CEng", text: "How do you ensure that the problem you are solving is actually the root problem?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "CEng", text: "Give an example of when you persuaded a client to change their requirements based on your technical advice." },

    // IEng
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "IEng", text: "How do you determine which tools or equipment are best suited for a specific task?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "IEng", text: "Tell us about a time you reviewed a tender or supplier quote. What technical issues did you spot?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "IEng", text: "Describe a time you had to select between repairing an asset or replacing it." },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "IEng", text: "How do you identify bottlenecks in your production or maintenance process?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "IEng", text: "Give an example of a time you identified a safety risk in a proposed plan." },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "IEng", text: "How do you ensure that a proposed solution is compatible with existing site infrastructure?" },
    { catCode: "B1", catLabel: "B1: Identify/Select", mode: "IEng", text: "Describe a time you had to choose a supplier based on technical capability." },

    // EngTech
    { catCode: "B1", catLabel: "B1: Identify Problems", mode: "EngTech", text: "Tell us about a time you identified a potential problem or defect in a product or system. What did you do?" },
    { catCode: "B1", catLabel: "B1: Identify Problems", mode: "EngTech", text: "Have you ever spotted a mistake in a design or instruction? How did you raise it?" },
    { catCode: "B1", catLabel: "B1: Identify Problems", mode: "EngTech", text: "Describe a time you noticed a piece of equipment wasn't working correctly. How did you investigate it?" },
    { catCode: "B1", catLabel: "B1: Identify Problems", mode: "EngTech", text: "What do you do when you arrive at a job and the site conditions are not what you expected?" },
    { catCode: "B1", catLabel: "B1: Identify Problems", mode: "EngTech", text: "Give an example of a time you had to report a fault that others had missed." },
    { catCode: "B1", catLabel: "B1: Identify Problems", mode: "EngTech", text: "How do you check that the parts you have been given are the right ones for the job?" },
    { catCode: "B1", catLabel: "B1: Identify Problems", mode: "EngTech", text: "Have you ever had to stop a job because you identified a better or safer way to do it?" },

    // =========================================================================
    // B2: DESIGN & DEVELOPMENT
    // =========================================================================
    // CEng
    { catCode: "B2", catLabel: "B2: Design", mode: "CEng", text: "Tell us about a complex design problem where standard codes didn't apply. How did you justify your solution?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "CEng", text: "How did your design compare with existing literature or historical benchmarks?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "CEng", text: "Describe a time a design failed during testing. What was the root cause and how did you fix it?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "CEng", text: "How do you manage the interface between different design disciplines (e.g. Civil vs MEICA)?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "CEng", text: "Give an example of how you incorporated 'Safety by Design' principles into a concept." },
    { catCode: "B2", catLabel: "B2: Design", mode: "CEng", text: "How do you ensure your designs are sustainable and have a low environmental impact?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "CEng", text: "Describe the process you use to approve and sign off a high-risk design." },

    // IEng
    { catCode: "B2", catLabel: "B2: Design", mode: "IEng", text: "How do you ensure your design modifications comply with relevant engineering standards?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "IEng", text: "Tell us about a time you adapted a standard design to fit a specific site condition." },
    { catCode: "B2", catLabel: "B2: Design", mode: "IEng", text: "How do you ensure that your designs are practical to manufacture and maintain?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "IEng", text: "Describe a time you had to redesign a component because it kept failing." },
    { catCode: "B2", catLabel: "B2: Design", mode: "IEng", text: "How do you manage version control on drawings and specifications?" },
    { catCode: "B2", catLabel: "B2: Design", mode: "IEng", text: "Give an example of a cost-saving change you made to a design without compromising quality." },
    { catCode: "B2", catLabel: "B2: Design", mode: "IEng", text: "How do you verify that a modification has not negatively affected the system?" },

    // EngTech
    { catCode: "B2", catLabel: "B2: Design/Dev", mode: "EngTech", text: "Describe a contribution you made to the design, development, or testing of a product or service." },
    { catCode: "B2", catLabel: "B2: Design/Dev", mode: "EngTech", text: "Give an example of a time you built, tested, or commissioned a piece of equipment." },
    { catCode: "B2", catLabel: "B2: Design/Dev", mode: "EngTech", text: "Have you ever suggested a modification to a part to make it easier to install or fix?" },
    { catCode: "B2", catLabel: "B2: Design/Dev", mode: "EngTech", text: "Describe a time you made a jig, fixture, or tool to help with a task." },
    { catCode: "B2", catLabel: "B2: Design/Dev", mode: "EngTech", text: "Tell us about a time you had to follow a complex test procedure. What were the results?" },
    { catCode: "B2", catLabel: "B2: Design/Dev", mode: "EngTech", text: "How do you record the results of a test you have carried out?" },
    { catCode: "B2", catLabel: "B2: Design/Dev", mode: "EngTech", text: "Give an example of a time you helped an engineer improve a design based on your practical experience." },

    // =========================================================================
    // B3: IMPLEMENTATION
    // =========================================================================
    // CEng
    { catCode: "B3", catLabel: "B3: Implementation", mode: "CEng", text: "Describe the transition from 'concept' to 'commissioning'. What strategic hurdles did you overcome?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "CEng", text: "Was your solution more effective than previous methods? How did you quantify that improvement?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "CEng", text: "How do you manage the handover of a complex system to the operations team?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "CEng", text: "Describe a time you had to halt implementation due to a critical emerging risk." },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "CEng", text: "How do you ensure lessons learned from implementation are fed back into future designs?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "CEng", text: "Give an example of how you managed a phased rollout of a new system." },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "CEng", text: "How do you manage the tension between aggressive schedules and technical quality during construction?" },

    // IEng
    { catCode: "B3", catLabel: "B3: Implementation", mode: "IEng", text: "Tell us about a time you supervised an installation. How did you ensure it matched the drawings?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "IEng", text: "Describe a time you had to troubleshoot a problem during the commissioning phase." },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "IEng", text: "Give an example of how you managed site safety during an implementation task." },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "IEng", text: "How do you deal with snagging lists and defects at the end of a project?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "IEng", text: "Describe a time you had to coordinate multiple trades to complete an installation." },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "IEng", text: "How do you ensure that the end-user knows how to operate the new system?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "IEng", text: "Tell us about a time an installation went wrong. How did you recover the situation?" },

    // EngTech
    { catCode: "B3", catLabel: "B3: Implementation", mode: "EngTech", text: "Describe a time you had to install a new piece of equipment. How did you plan the task?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "EngTech", text: "Tell us about a time an installation didn't go to plan. How did you adapt?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "EngTech", text: "How do you ensure you leave a work area safe and tidy after completing a job?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "EngTech", text: "Describe a time you had to work to a very tight tolerance." },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "EngTech", text: "Give an example of a time you successfully completed a difficult repair." },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "EngTech", text: "How do you confirm that a job is finished and ready for the customer?" },
    { catCode: "B3", catLabel: "B3: Implementation", mode: "EngTech", text: "Tell us about a time you had to use a new method or technique to get a job done." },

    // =========================================================================
    // C1: PLANNING
    // =========================================================================
    // CEng
    { catCode: "C1", catLabel: "C1: Planning", mode: "CEng", text: "Can you run us through a project you led? How did you balance resources, budget, and schedule?" },
    { catCode: "C1", catLabel: "C1: Planning", mode: "CEng", text: "Tell us about a time you had to negotiate a project schedule with a demanding client." },
    { catCode: "C1", catLabel: "C1: Planning", mode: "CEng", text: "How do you integrate risk management into your project planning phase?" },
    { catCode: "C1", catLabel: "C1: Planning", mode: "CEng", text: "Describe a time you had to recover a project that was significantly behind schedule." },
    { catCode: "C1", catLabel: "C1: Planning", mode: "CEng", text: "How do you estimate costs and resources for a project with high uncertainty?" },
    { catCode: "C1", catLabel: "C1: Planning", mode: "CEng", text: "Give an example of how you manage dependencies between different project workstreams." },
    { catCode: "C1", catLabel: "C1: Planning", mode: "CEng", text: "How do you handle changes to the project scope once the plan is agreed?" },

    // IEng
    { catCode: "C1", catLabel: "C1: Planning", mode: "IEng", text: "Describe how you plan your own workload and the workload of others for a specific task." },
    { catCode: "C1", catLabel: "C1: Planning", mode: "IEng", text: "How do you ensure that all necessary materials and permits are in place before starting work?" },
    { catCode: "C1", catLabel: "C1: Planning", mode: "IEng", text: "Give an example of a Gantt chart or schedule you created. How did you track progress against it?" },
    { catCode: "C1", catLabel: "C1: Planning", mode: "IEng", text: "Describe a time you had to re-prioritize tasks due to an urgent breakdown." },
    { catCode: "C1", catLabel: "C1: Planning", mode: "IEng", text: "How do you coordinate site access or shutdowns with the client?" },
    { catCode: "C1", catLabel: "C1: Planning", mode: "IEng", text: "Tell us about a time you underestimated the time needed for a job. How did you handle it?" },
    { catCode: "C1", catLabel: "C1: Planning", mode: "IEng", text: "How do you plan for contingencies or unexpected delays?" },

    // EngTech
    { catCode: "C1", catLabel: "C1: Resources", mode: "EngTech", text: "How do you ensure you have the right materials and resources before starting a job?" },
    { catCode: "C1", catLabel: "C1: Resources", mode: "EngTech", text: "Describe a time you had to supervise or guide another colleague/apprentice on a task." },
    { catCode: "C1", catLabel: "C1: Resources", mode: "EngTech", text: "How do you plan your day to ensure you complete your assigned tasks on time?" },
    { catCode: "C1", catLabel: "C1: Resources", mode: "EngTech", text: "What do you do if you realize you don't have the right tool for the job?" },
    { catCode: "C1", catLabel: "C1: Resources", mode: "EngTech", text: "Describe a time you had to organize your workspace to work efficiently." },
    { catCode: "C1", catLabel: "C1: Resources", mode: "EngTech", text: "Have you ever had to order parts or materials? How did you know what to get?" },
    { catCode: "C1", catLabel: "C1: Resources", mode: "EngTech", text: "How do you handle interruptions to your planned work?" },

    // =========================================================================
    // C2: MANAGEMENT & BUDGET
    // =========================================================================
    // CEng
    { catCode: "C2", catLabel: "C2: Management", mode: "CEng", text: "How do you manage the commercial implications of scope creep?" },
    { catCode: "C2", catLabel: "C2: Management", mode: "CEng", text: "Describe a time you had to make a difficult decision to sacrifice cost for quality (or vice versa)." },
    { catCode: "C2", catLabel: "C2: Management", mode: "CEng", text: "Tell us about your experience with contract management (e.g., NEC/FIDIC)." },
    { catCode: "C2", catLabel: "C2: Management", mode: "CEng", text: "How do you evaluate the financial viability of a technical project (NPV/IRR)?" },
    { catCode: "C2", catLabel: "C2: Management", mode: "CEng", text: "Describe a time you had to challenge a supplier on a commercial issue." },
    { catCode: "C2", catLabel: "C2: Management", mode: "CEng", text: "How do you manage the budget for your department or project?" },
    { catCode: "C2", catLabel: "C2: Management", mode: "CEng", text: "Give an example of a cost-saving initiative you implemented on a strategic level." },

    // IEng
    { catCode: "C2", catLabel: "C2: Management", mode: "IEng", text: "Describe a time you had to manage a contractor or supplier who was underperforming." },
    { catCode: "C2", catLabel: "C2: Management", mode: "IEng", text: "How do you coordinate resources (people, equipment) on a busy site?" },
    { catCode: "C2", catLabel: "C2: Management", mode: "IEng", text: "How do you ensure statutory inspections or maintenance schedules are met?" },
    { catCode: "C2", catLabel: "C2: Management", mode: "IEng", text: "Tell us about a time you had to manage a small budget for a repair or project." },
    { catCode: "C2", catLabel: "C2: Management", mode: "IEng", text: "How do you track the time and materials used on a job?" },
    { catCode: "C2", catLabel: "C2: Management", mode: "IEng", text: "Describe a time you had to resolve a dispute over who was responsible for a task." },
    { catCode: "C2", catLabel: "C2: Management", mode: "IEng", text: "How do you ensure that your team is working productively?" },

    // EngTech
    { catCode: "C2", catLabel: "C2: Responsibility", mode: "EngTech", text: "Tell us about a task where you held sole responsibility for the quality of the outcome." },
    { catCode: "C2", catLabel: "C2: Responsibility", mode: "EngTech", text: "Have you ever suggested an improvement to a working practice or method statement? What was the result?" },
    { catCode: "C2", catLabel: "C2: Responsibility", mode: "EngTech", text: "Describe a time you had to take charge of a situation because a supervisor wasn't present." },
    { catCode: "C2", catLabel: "C2: Responsibility", mode: "EngTech", text: "How do you ensure you are following the correct company procedures?" },
    { catCode: "C2", catLabel: "C2: Responsibility", mode: "EngTech", text: "Give an example of a time you took ownership of a mistake you made." },
    { catCode: "C2", catLabel: "C2: Responsibility", mode: "EngTech", text: "How do you enable others to trust you to work without supervision?" },
    { catCode: "C2", catLabel: "C2: Responsibility", mode: "EngTech", text: "Describe a time you had to sign off a piece of work as complete." },

    // =========================================================================
    // C3: LEADERSHIP & TEAMS
    // =========================================================================
    // CEng
    { catCode: "C3", catLabel: "C3: Leadership", mode: "CEng", text: "Describe a time you led a team through a complex technical challenge. How did you keep them motivated?" },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "CEng", text: "Tell us about a time you had to manage conflict between two departments." },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "CEng", text: "How do you influence people over whom you have no direct authority?" },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "CEng", text: "Describe your leadership style. How do you adapt it for different team members?" },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "CEng", text: "How do you mentor and develop the future leaders in your team?" },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "CEng", text: "Tell us about a time you had to deliver unpopular news to your team." },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "CEng", text: "How do you build a culture of innovation within your team?" },

    // IEng
    { catCode: "C3", catLabel: "C3: Leadership", mode: "IEng", text: "Tell us about a time you supervised a team or junior engineer. How did you ensure quality?" },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "IEng", text: "How do you handle a team member who is not pulling their weight?" },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "IEng", text: "Give an example of how you provide constructive feedback to your team." },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "IEng", text: "Describe a time you had to lead a 'Toolbox Talk' or safety briefing." },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "IEng", text: "How do you ensure good communication between shifts or teams?" },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "IEng", text: "Tell us about a time you had to step up and lead when the manager was away." },
    { catCode: "C3", catLabel: "C3: Leadership", mode: "IEng", text: "How do you motivate a team working in difficult conditions (e.g. night shift/bad weather)?" },

    // EngTech
    { catCode: "C3", catLabel: "C3: Teams", mode: "EngTech", text: "Describe a time you had to work as part of a team to solve a problem. What was your role?" },
    { catCode: "C3", catLabel: "C3: Teams", mode: "EngTech", text: "Have you ever had to help a colleague who was struggling with a task?" },
    { catCode: "C3", catLabel: "C3: Teams", mode: "EngTech", text: "How do you communicate with other trades or disciplines on site to avoid clashes?" },
    { catCode: "C3", catLabel: "C3: Teams", mode: "EngTech", text: "Describe a time you had a disagreement with a team member. How did you resolve it?" },
    { catCode: "C3", catLabel: "C3: Teams", mode: "EngTech", text: "How do you help new starters or apprentices fit into the team?" },
    { catCode: "C3", catLabel: "C3: Teams", mode: "EngTech", text: "What makes a 'good' team player in your opinion?" },
    { catCode: "C3", catLabel: "C3: Teams", mode: "EngTech", text: "Tell us about a time you learned a new skill from a colleague." },

    // =========================================================================
    // C4: QUALITY & IMPROVEMENT
    // =========================================================================
    // CEng
    { catCode: "C4", catLabel: "C4: Quality", mode: "CEng", text: "How do you ensure quality standards are defined and met for a novel product?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "CEng", text: "How do you promote a culture of quality assurance within your organization?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "CEng", text: "How do you evaluate the quality of a supplier before engaging them?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "CEng", text: "Describe a time you audited a process. What did you find and what did you change?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "CEng", text: "How do you balance the cost of quality control against the risk of failure?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "CEng", text: "Tell us about a Six Sigma or Lean initiative you championed." },
    { catCode: "C4", catLabel: "C4: Quality", mode: "CEng", text: "How do you ensure continuous improvement is not just a 'buzzword' in your team?" },

    // IEng
    { catCode: "C4", catLabel: "C4: Quality", mode: "IEng", text: "Describe a time you updated a procedure or workflow to improve efficiency." },
    { catCode: "C4", catLabel: "C4: Quality", mode: "IEng", text: "How do you ensure work on site complies with the technical drawings?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "IEng", text: "Describe a time you spotted a quality defect before it reached the client." },
    { catCode: "C4", catLabel: "C4: Quality", mode: "IEng", text: "How do you handle a non-conformance report (NCR)?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "IEng", text: "Tell us about a time you investigated a customer complaint regarding quality." },
    { catCode: "C4", catLabel: "C4: Quality", mode: "IEng", text: "How do you ensure calibration of tools and equipment is maintained?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "IEng", text: "Give an example of a quality checklist you use or created." },

    // EngTech
    { catCode: "C4", catLabel: "C4: Quality", mode: "EngTech", text: "How do you check that your own work meets the required standard?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "EngTech", text: "Tell us about a time you noticed a quality issue in a product. What did you do?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "EngTech", text: "Do you follow any specific ISO standards or checklists in your daily work?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "EngTech", text: "Why is it important to complete job sheets and quality records accurately?" },
    { catCode: "C4", catLabel: "C4: Quality", mode: "EngTech", text: "Describe a time you had to redo a job because it wasn't right the first time." },
    { catCode: "C4", catLabel: "C4: Quality", mode: "EngTech", text: "How do you take pride in your work? Give an example." },
    { catCode: "C4", catLabel: "C4: Quality", mode: "EngTech", text: "What would you do if you were pressured to rush a job and skip quality checks?" },

    // =========================================================================
    // D1: COMMUNICATION (WRITTEN)
    // =========================================================================
    // CEng
    { catCode: "D1", catLabel: "D1: Communication", mode: "CEng", text: "Describe a time you had to explain a complex technical concept to a non-technical board member." },
    { catCode: "D1", catLabel: "D1: Communication", mode: "CEng", text: "How do you structure your technical reports to ensure they are persuasive?" },
    { catCode: "D1", catLabel: "D1: Communication", mode: "CEng", text: "How do you manage communication with remote or international teams?" },
    { catCode: "D1", catLabel: "D1: Communication", mode: "CEng", text: "Tell us about a technical paper or article you have written. Who was the audience?" },
    { catCode: "D1", catLabel: "D1: Communication", mode: "CEng", text: "How do you ensure clarity in legal or contractual correspondence?" },
    { catCode: "D1", catLabel: "D1: Communication", mode: "CEng", text: "Describe a time you had to write a crisis communication or incident report." },
    { catCode: "D1", catLabel: "D1: Communication", mode: "CEng", text: "How do you review and critique the written work of your subordinates?" },

    // IEng
    { catCode: "D1", catLabel: "D1: Communication", mode: "IEng", text: "How do you ensure your shift handovers or site briefings are clearly understood?" },
    { catCode: "D1", catLabel: "D1: Communication", mode: "IEng", text: "Give an example of how you communicate technical instructions to technicians." },
    { catCode: "D1", catLabel: "D1: Communication", mode: "IEng", text: "Tell us about a time you had to clarify a misunderstanding with a client." },
    { catCode: "D1", catLabel: "D1: Communication", mode: "IEng", text: "Describe a Standard Operating Procedure (SOP) you wrote or updated." },
    { catCode: "D1", catLabel: "D1: Communication", mode: "IEng", text: "How do you document 'Lessons Learned' after a project?" },
    { catCode: "D1", catLabel: "D1: Communication", mode: "IEng", text: "Give an example of a technical email you sent to resolve a problem." },
    { catCode: "D1", catLabel: "D1: Communication", mode: "IEng", text: "How do you record meeting minutes or actions effectively?" },

    // EngTech
    { catCode: "D1", catLabel: "D1: Written", mode: "EngTech", text: "Give an example of a technical log, site report, or handover document you have written." },
    { catCode: "D1", catLabel: "D1: Written", mode: "EngTech", text: "How do you record the results of your tests or inspections?" },
    { catCode: "D1", catLabel: "D1: Written", mode: "EngTech", text: "Describe a time you had to write an email to explain a technical issue to a manager." },
    { catCode: "D1", catLabel: "D1: Written", mode: "EngTech", text: "Do you ever have to sketch or draw to explain your ideas? Give an example." },
    { catCode: "D1", catLabel: "D1: Written", mode: "EngTech", text: "Why is it important to write down exactly what you did on a job card?" },
    { catCode: "D1", catLabel: "D1: Written", mode: "EngTech", text: "Have you ever had to fill out an accident or near-miss form?" },
    { catCode: "D1", catLabel: "D1: Written", mode: "EngTech", text: "How do you ensure your handwriting or data entry is legible for the next person?" },

    // =========================================================================
    // D2: COMMUNICATION (VERBAL/PERSUASION)
    // =========================================================================
    // CEng
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "CEng", text: "Describe a time you had to defend your technical opinion against significant opposition." },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "CEng", text: "Describe a time you had to deliver bad news to a client. How did you handle it?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "CEng", text: "How do you secure buy-in from stakeholders with conflicting interests?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "CEng", text: "Tell us about a technical presentation you delivered. How did you handle the Q&A?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "CEng", text: "How do you adapt your language when speaking to finance/HR vs engineering?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "CEng", text: "Describe a negotiation you led. What was the outcome?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "CEng", text: "How do you handle a senior manager who questions your engineering judgment?" },

    // IEng
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "IEng", text: "How did you persuade a manager to approve a necessary tool or repair?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "IEng", text: "How do you influence colleagues to follow safety procedures when they are cutting corners?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "IEng", text: "Describe a time you successfully negotiated a deadline or resource allocation." },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "IEng", text: "Tell us about a time you chaired a meeting. How did you keep it on track?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "IEng", text: "How do you explain a complex fault to a non-technical customer?" },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "IEng", text: "Describe a time you had to calm down an angry stakeholder." },
    { catCode: "D2", catLabel: "D2: Persuasion", mode: "IEng", text: "How do you speak up in a meeting when you disagree with the group?" },

    // EngTech
    { catCode: "D2", catLabel: "D2: Verbal", mode: "EngTech", text: "Describe a time you had to explain a technical issue to someone from a non-technical background." },
    { catCode: "D2", catLabel: "D2: Verbal", mode: "EngTech", text: "How do you report progress to your supervisor?" },
    { catCode: "D2", catLabel: "D2: Verbal", mode: "EngTech", text: "Tell us about a time you had to ask for help or clarification on a task." },
    { catCode: "D2", catLabel: "D2: Verbal", mode: "EngTech", text: "Have you ever had to use a radio or phone to coordinate work? How did you ensure clarity?" },
    { catCode: "D2", catLabel: "D2: Verbal", mode: "EngTech", text: "Describe a time you had to warn someone about a hazard verbally." },
    { catCode: "D2", catLabel: "D2: Verbal", mode: "EngTech", text: "How do you handle it if a customer asks you a question you don't know the answer to?" },
    { catCode: "D2", catLabel: "D2: Verbal", mode: "EngTech", text: "Tell us about a time you had to give a handover to the next shift." },

    // =========================================================================
    // D3: INTERPERSONAL SKILLS
    // =========================================================================
    // CEng
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "CEng", text: "How do you champion diversity and inclusion in your strategic decision making?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "CEng", text: "Describe a situation where you had to consider the diverse needs of end-users in your design." },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "CEng", text: "How do you create an inclusive environment where junior engineers feel safe to ask questions?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "CEng", text: "Tell us about a professional relationship you built that resulted in a business benefit." },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "CEng", text: "How do you manage office politics to ensure your projects succeed?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "CEng", text: "Describe a time you had to mediate a serious dispute between senior stakeholders." },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "CEng", text: "How do you demonstrate emotional intelligence in your leadership?" },

    // IEng
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "IEng", text: "Describe a time you had to work with a difficult personality. How did you manage it?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "IEng", text: "How do you ensure all voices are heard during a team toolbox talk?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "IEng", text: "Describe a time you helped resolve a dispute between a contractor and your company." },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "IEng", text: "How do you build rapport with a new team?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "IEng", text: "Tell us about a time you felt someone was being treated unfairly. What did you do?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "IEng", text: "How do you manage stress in yourself and your team?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "IEng", text: "Describe a time you had to collaborate with a non-engineering department." },

    // EngTech
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "EngTech", text: "How do you work effectively with people from different trades or backgrounds?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "EngTech", text: "Describe a time you had a disagreement with a colleague. How did you resolve it?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "EngTech", text: "How do you contribute to a positive team atmosphere?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "EngTech", text: "Have you ever had to work with someone who didn't speak your language well? How did you cope?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "EngTech", text: "What do you do to help a new apprentice feel welcome?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "EngTech", text: "How do you show respect to clients or customers on site?" },
    { catCode: "D3", catLabel: "D3: Interpersonal", mode: "EngTech", text: "Describe a time you had to bite your tongue to avoid an argument." },

    // =========================================================================
    // E1: PROFESSIONAL CONDUCT
    // =========================================================================
    // CEng
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "CEng", text: "Describe a time you navigated a conflict between business pressure and professional standards." },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "CEng", text: "Give an example of how you ensure data protection and IP rights are respected in your projects." },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "CEng", text: "Have you ever refused to sign off on a piece of work? Why?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "CEng", text: "How do you handle whistleblowing or reporting malpractice in your organization?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "CEng", text: "Describe how you promote the reputation of the engineering profession." },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "CEng", text: "What does the Institution's Code of Conduct mean to you personally?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "CEng", text: "How do you ensure your team operates within the laws of the countries you work in?" },

    // IEng
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "IEng", text: "How do you ensure your daily work complies with relevant regulations and legislation?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "IEng", text: "What would you do if you saw a colleague violating a safety regulation?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "IEng", text: "How do you ensure contractors working under you follow the correct codes of practice?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "IEng", text: "Describe a time you had to enforce a rule that made you unpopular." },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "IEng", text: "How do you ensure you do not undertake work beyond your competence?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "IEng", text: "Have you ever admitted to a mistake you made? What happened?" },
    { catCode: "E1", catLabel: "E1: Codes of Conduct", mode: "IEng", text: "How do you treat client information confidentially?" },

    // EngTech
    { catCode: "E1", catLabel: "E1: Conduct", mode: "EngTech", text: "Give an example of how you ensure you are working ethically and honestly in your daily role." },
    { catCode: "E1", catLabel: "E1: Conduct", mode: "EngTech", text: "What would you do if a supervisor asked you to do something you thought was unsafe?" },
    { catCode: "E1", catLabel: "E1: Conduct", mode: "EngTech", text: "How do you ensure you represent your company professionally when on site?" },
    { catCode: "E1", catLabel: "E1: Conduct", mode: "EngTech", text: "Why is punctuality and reliability important in your role?" },
    { catCode: "E1", catLabel: "E1: Conduct", mode: "EngTech", text: "Have you ever seen someone stealing or misusing company property? What did you do?" },
    { catCode: "E1", catLabel: "E1: Conduct", mode: "EngTech", text: "How do you ensure you are fit for work (e.g. fatigue, health)?" },
    { catCode: "E1", catLabel: "E1: Conduct", mode: "EngTech", text: "Describe a time you went the extra mile to do a good job." },

    // =========================================================================
    // E2: SAFETY & RISK
    // =========================================================================
    // CEng
    { catCode: "E2", catLabel: "E2: Safety", mode: "CEng", text: "How do you apply the principles of 'Safety by Design' or ALARP in your work?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "CEng", text: "How do you promote a positive safety culture beyond just 'following the rules'?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "CEng", text: "How do you manage the safety risks associated with legacy equipment?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "CEng", text: "Describe a time you led a HAZOP or HAZID study." },
    { catCode: "E2", catLabel: "E2: Safety", mode: "CEng", text: "How do you quantify safety risk in your projects?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "CEng", text: "Tell us about a safety improvement you initiated that had a measurable impact." },
    { catCode: "E2", catLabel: "E2: Safety", mode: "CEng", text: "How do you stay current with changing Health & Safety legislation?" },

    // IEng
    { catCode: "E2", catLabel: "E2: Safety", mode: "IEng", text: "Tell us about a time you had to stop work due to a safety concern." },
    { catCode: "E2", catLabel: "E2: Safety", mode: "IEng", text: "How do you ensure equipment is safe to operate before handing it over?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "IEng", text: "Give an example of a Permit to Work system you have used." },
    { catCode: "E2", catLabel: "E2: Safety", mode: "IEng", text: "How do you conduct a Risk Assessment and Method Statement (RAMS)?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "IEng", text: "Describe a 'Near Miss' you reported. What was the outcome?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "IEng", text: "How do you ensure visitors to your site are safe?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "IEng", text: "Tell us about a time you had to deal with an emergency situation." },

    // EngTech
    { catCode: "E2", catLabel: "E2: Safety", mode: "EngTech", text: "Describe how you apply safe systems of work (e.g., Permits, LOTO, RAMS) before starting a task." },
    { catCode: "E2", catLabel: "E2: Safety", mode: "EngTech", text: "Tell us about a time you spotted a safety hazard. What immediate action did you take?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "EngTech", text: "What PPE do you use for your job, and how do you check it is in good condition?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "EngTech", text: "Have you ever had to use an emergency stop button? Why?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "EngTech", text: "How do you keep your work area tidy to prevent accidents?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "EngTech", text: "What are the specific risks associated with your trade (e.g. electricity, heights)?" },
    { catCode: "E2", catLabel: "E2: Safety", mode: "EngTech", text: "How do you ensure you don't put others at risk while you are working?" },

    // =========================================================================
    // E3: SUSTAINABILITY
    // =========================================================================
    // CEng
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "CEng", text: "Describe a time you influenced a design choice specifically to reduce its environmental footprint." },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "CEng", text: "How do you consider the full lifecycle (cradle-to-grave) of your designs?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "CEng", text: "Have you ever proposed a more sustainable alternative that cost more? How did you justify it?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "CEng", text: "How do you contribute to your organization's Net Zero strategy?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "CEng", text: "Describe a time you applied the principles of the Circular Economy." },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "CEng", text: "How do you evaluate the social impact of your engineering projects?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "CEng", text: "Tell us about a time you reduced the use of scarce materials in a design." },

    // IEng
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "IEng", text: "What actions have you taken to reduce waste or energy consumption in your daily operations?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "IEng", text: "How do you ensure proper disposal of hazardous materials or waste on site?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "IEng", text: "How do you monitor energy usage or emissions in your facility?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "IEng", text: "Describe a time you fixed a leak or inefficiency that was wasting resources." },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "IEng", text: "How do you encourage your team to be environmentally conscious?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "IEng", text: "Give an example of a time you reused a component instead of buying new." },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "IEng", text: "How do you manage spill kits and environmental protection on site?" },

    // EngTech
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "EngTech", text: "How do you minimize waste or energy use in your daily work? Give a practical example." },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "EngTech", text: "How do you dispose of waste materials (e.g., oil, batteries, scrap metal) responsibly?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "EngTech", text: "Have you ever suggested a way to reduce waste or reuse materials on a job?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "EngTech", text: "Do you turn off equipment when it's not in use? Why?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "EngTech", text: "How do you prevent spills or pollution when refuelling or using chemicals?" },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "EngTech", text: "Describe a time you segregated waste for recycling." },
    { catCode: "E3", catLabel: "E3: Sustainability", mode: "EngTech", text: "Why is it important to look after the environment as an engineer?" },

    // =========================================================================
    // E4: CPD (CONTINUING PROFESSIONAL DEVELOPMENT)
    // =========================================================================
    // CEng
    { catCode: "E4", catLabel: "E4: CPD", mode: "CEng", text: "How do you support the professional development of others in your organization?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "CEng", text: "How do you contribute to the wider engineering profession (e.g., volunteering, mentoring)?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "CEng", text: "How do you identify knowledge gaps in your team?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "CEng", text: "Describe your long-term CPD strategy. How does it align with your career goals?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "CEng", text: "How do you reflect on your learning to ensure it adds value?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "CEng", text: "Tell us about a time you learned something from a failure." },
    { catCode: "E4", catLabel: "E4: CPD", mode: "CEng", text: "How do you stay motivated to learn after achieving Chartership?" },

    // IEng
    { catCode: "E4", catLabel: "E4: CPD", mode: "IEng", text: "Describe a recent technical skill you learned and how you applied it to improve your work." },
    { catCode: "E4", catLabel: "E4: CPD", mode: "IEng", text: "How do you stay competent in the use of new tools or software?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "IEng", text: "Have you attended any recent industry conferences or webinars? What did you take away?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "IEng", text: "How do you help apprentices or junior staff learn the ropes?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "IEng", text: "Do you read any trade magazines or engineering journals? Give an example." },
    { catCode: "E4", catLabel: "E4: CPD", mode: "IEng", text: "How do you plan your training for the year ahead?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "IEng", text: "Tell us about a qualification you are currently working towards." },

    // EngTech
    { catCode: "E4", catLabel: "E4: CPD", mode: "EngTech", text: "How do you keep your technical skills up to date? (e.g., Manufacturer training, reading, courses)." },
    { catCode: "E4", catLabel: "E4: CPD", mode: "EngTech", text: "What was the last training course you attended? What did you learn?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "EngTech", text: "How do you record your learning and development activities?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "EngTech", text: "Have you learned how to use any new tools recently?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "EngTech", text: "Do you ask your supervisor for feedback on your work? Give an example." },
    { catCode: "E4", catLabel: "E4: CPD", mode: "EngTech", text: "Is there a specific skill you want to learn next year?" },
    { catCode: "E4", catLabel: "E4: CPD", mode: "EngTech", text: "How do you help new people learn the job?" },

    // =========================================================================
    // E5: ETHICS
    // =========================================================================
    // CEng
    { catCode: "E5", catLabel: "E5: Ethics", mode: "CEng", text: "Describe a significant ethical dilemma you have faced. How did you resolve it?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "CEng", text: "How do you handle conflicts of interest (e.g., with suppliers)?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "CEng", text: "How do you protect whistleblowers in your organization?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "CEng", text: "How do you ensure data security (GDPR) and intellectual property rights are respected?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "CEng", text: "Describe a time you had to reject a gift or hospitality." },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "CEng", text: "How do you ensure your decisions are not biased?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "CEng", text: "Tell us about a time you prioritized public welfare over profit." },

    // IEng
    { catCode: "E5", catLabel: "E5: Ethics", mode: "IEng", text: "Have you ever been asked to cut a corner you felt was unsafe? What did you do?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "IEng", text: "How do you ensure you do not undertake work beyond your competence?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "IEng", text: "How do you ensure fair treatment of all contractors and staff?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "IEng", text: "Describe a time you had to correct someone's behavior on site." },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "IEng", text: "How do you ensure accurate reporting of data (no falsification)?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "IEng", text: "What does 'professional integrity' mean to you in your daily work?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "IEng", text: "Have you ever challenged a decision you felt was unethical?" },

    // EngTech
    { catCode: "E5", catLabel: "E5: Ethics", mode: "EngTech", text: "Have you ever seen someone doing something dishonest or unsafe? How did you handle it?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "EngTech", text: "Why is it important to be honest if you make a mistake on a job?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "EngTech", text: "How do you ensure you are treating customers and colleagues with respect?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "EngTech", text: "Would you sign a job off if it wasn't quite finished? Why/Why not?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "EngTech", text: "How do you look after company tools and vans?" },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "EngTech", text: "Describe a time you refused to do something you knew was wrong." },
    { catCode: "E5", catLabel: "E5: Ethics", mode: "EngTech", text: "Why is it important to follow the rules even when no one is watching?" },

    // =========================================================================
    // DAP: DEVELOPMENT ACTION PLAN
    // =========================================================================
    // CEng
    { catCode: "DAP", catLabel: "Development Plan", mode: "CEng", text: "Where do you see yourself professionally in 5 years? Do you plan to move into management or technical specialization?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "CEng", text: "What is the next 'big thing' in your industry, and how are you preparing for it?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "CEng", text: "What leadership roles do you aspire to hold?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "CEng", text: "How do you plan to give back to the institution after you are registered?" },
    
    // IEng
    { catCode: "DAP", catLabel: "Development Plan", mode: "IEng", text: "What technical skills do you plan to master in the next 12 months?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "IEng", text: "Do you plan to progress to CEng in the future? If so, what is your plan?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "IEng", text: "Are there any formal qualifications (degrees/certifications) you are planning to take?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "IEng", text: "How will you maintain your competence as technology changes?" },

    // EngTech
    { catCode: "DAP", catLabel: "Development Plan", mode: "EngTech", text: "Do you have any plans to progress towards IEng or CEng registration in the future?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "EngTech", text: "What new tools or machinery would you like to get trained on?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "EngTech", text: "Where do you see yourself in 2 years? Do you want to lead a team?" },
    { catCode: "DAP", catLabel: "Development Plan", mode: "EngTech", text: "Is there a specific area of your trade you want to specialize in?" },

    // =========================================================================
    // CLOSING
    // =========================================================================
    // ALL LEVELS
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "Very briefly, is there anything you'd like to mention that we haven't quite covered?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "Is there a specific project highlight you really wanted to share but didn't get a chance to?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "Do you have any questions for us regarding the interview process?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "Before we finish, would you like to clarify any of your previous answers?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "Is there anything else you would like to add to support your application?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "How do you feel the interview went? Is there any area you felt you under-represented?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "If you are successful today, what will be your first action as a registered engineer?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "Thank you. Please take a moment to relax. Do you have any final closing statement?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "Are there any external factors or extenuating circumstances we should be aware of?" },
    { catCode: "Closing", catLabel: "Closing", mode: "All", text: "What is the one thing you want us to remember about you after you leave the room?" }
];