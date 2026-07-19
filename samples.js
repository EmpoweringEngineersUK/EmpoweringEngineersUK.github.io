/**
 * Empowering Engineers UK - Unified Sample Database [v3.0]
 * Includes:
 * 1. Ghost Text for Application Architect (UK-SPEC)
 * 2. Scenario Templates for RACI Matrix Tool
 */

const sampleDb = {
    // =========================================================================
    // PART 1: APPLICATION ARCHITECT (Ghost Text)
    // =========================================================================
    intro: {
        j1: {
            c: "ABC Engineering Solutions Ltd",
            t: "Lead Civil Engineer",
            s: "Jan 2022",
            e: "Present",
            r: "Lead Engineer for the North-West Infrastructure Upgrade. Responsible for technical approval of structural designs, managing a team of 4 junior engineers, and client liaison for the £5M portfolio.",
            a: "• Delivered the Alpha Bridge Project 3 weeks ahead of schedule.\n• Reduced material waste by 15% through new procurement strategy.\n• Mentored 2 graduates to IEng registration.",
            aut: "Budget authority up to £50k. Full technical sign-off for temporary works (Cat 2 checks)."
        },
        j2: {
            c: "Global Def-Tech Systems",
            t: "Mechanical Design Engineer",
            s: "Mar 2019",
            e: "Dec 2021",
            r: "Responsible for CAD modelling (SolidWorks), creating BOMs, and conducting FEA stress analysis for aerospace components.",
            a: "• Redesigned the fuel-pump housing, reducing weight by 2kg.\n• Authorised 50+ concessions/production permits.\n• Solved a critical vibration issue on the prototype test rig.",
            aut: "Authorized to sign off non-critical drawing changes. Reported to Senior Systems Engineer."
        },
        j3: {
            c: "Junior & Sons Fabrication",
            t: "Graduate Engineer",
            s: "Sep 2017",
            e: "Feb 2019",
            r: "Rotational graduate scheme. Spent 6 months in Design, Manufacturing, and Quality Assurance.",
            a: "• Created a new tracking spreadsheet for scrap reduction.\n• Assisted in the commissioning of the new CNC lathe.",
            aut: "No financial authority. Work checked by Line Manager."
        }
    },

    // COMPETENCE A
    A1: {
        s: "SITUATION: On the Alpha Bridge project, we encountered an unexpected soil condition (running sand) during piling...",
        t: "TASK: My task was to review the geotechnical report and propose a revised piling methodology to prevent collapse...",
        a: "ACTION: I researched alternative techniques and selected a CFA (Continuous Flight Auger) method. I calculated the new load capacities using Eurocode 7...",
        r: "RESULT: The solution was approved by the client. Piling was completed safely with no settlement issues."
    },
    A2: {
        s: "SITUATION: The original specification called for Grade 304 Stainless Steel for the coastal piping system...",
        t: "TASK: I identified that this grade was insufficient for the high-salinity environment and would lead to premature corrosion...",
        a: "ACTION: I conducted a lifecycle cost analysis comparing 304, 316, and Duplex steel. I used NACE standards to justify the upgrade...",
        r: "RESULT: I persuaded the client to adopt Duplex steel, increasing the design life by 15 years."
    },

    // COMPETENCE B
    B1: {
        s: "SITUATION: The production line was suffering from 20% downtime due to motor overheating...",
        t: "TASK: I needed to diagnose the root cause of the failure and implement a permanent fix...",
        a: "ACTION: I installed thermal loggers and vibration sensors. I analysed the data and found a misalignment in the drive shaft. I designed a new laser-alignment procedure...",
        r: "RESULT: Downtime was reduced to <2%, saving the company £50k per year."
    },
    B2: {
        s: "SITUATION: We were designing a safety-critical pressure vessel...",
        t: "TASK: I had to ensure the design met the Pressure Equipment Directive (PED) requirements...",
        a: "ACTION: I performed a 'First Principles' calculation for the wall thickness. I then verified this using Ansys FEA software to check for stress concentrations...",
        r: "RESULT: The design passed the Notified Body audit on the first submission."
    },
    B3: {
        s: "SITUATION: The legacy control system used an obsolete PLC that was failing frequently...",
        t: "TASK: I was tasked with upgrading the system to a modern Siemens S7 architecture without stopping production...",
        a: "ACTION: I studied the old ladder logic and reverse-engineered the control philosophy. I wrote a migration strategy that involved installing the new system in parallel...",
        r: "RESULT: The switch-over was seamless. The new system allows for remote diagnostics, reducing maintenance call-outs."
    },

    // COMPETENCE C
    C1: {
        s: "SITUATION: I was assigned as Project Manager for the £2M depot upgrade...",
        t: "TASK: I had to deliver the project within a tight 6-month window during a factory shutdown...",
        a: "ACTION: I created a detailed Gantt chart in MS Project, identifying the critical path. I established weekly progress meetings to track milestones...",
        r: "RESULT: The facility opened on time. I managed the snagging list to clear all defects within 2 weeks."
    },
    C2: {
        s: "SITUATION: During the tender phase for the HVAC subcontract...",
        t: "TASK: I had to select a supplier that offered the best value, not just the lowest price...",
        a: "ACTION: I negotiated with three suppliers to fix prices for 12 months. I replaced the specified bespoke valves with standard off-the-shelf equivalents...",
        r: "RESULT: The project was delivered for £1.8M (10% under budget) without compromising technical performance."
    },
    C3: {
        s: "SITUATION: My team of 3 junior engineers was struggling with the new BIM software...",
        t: "TASK: I needed to upskill the team to ensure we met the drawing submission deadline...",
        a: "ACTION: I arranged for a specialist trainer to visit. I also created a 'Quick Start Guide' and held daily 15-minute stand-ups to resolve technical blockers...",
        r: "RESULT: The team became proficient within 2 weeks. We met the deadline and the drawings were accepted."
    },
    C4: {
        s: "SITUATION: I noticed that the site drawings were often outdated versions...",
        t: "TASK: I had to implement a document control system to prevent construction errors...",
        a: "ACTION: I introduced a cloud-based 'Common Data Environment' (CDE). I set up a strict approval workflow (Check -> Review -> Approve) before drawings could be issued for construction...",
        r: "RESULT: Rework due to outdated drawings was eliminated, saving approximately £10k in wasted materials."
    },

    // COMPETENCE D
    D1: {
        s: "SITUATION: I discovered a significant error in the foundation design just before pouring concrete...",
        t: "TASK: I had to communicate this urgent issue to the Client and the Structural Director...",
        a: "ACTION: I wrote a formal Non-Conformance Report (NCR). I explained the technical issue clearly and proposed a remedial design (adding reinforcement bars)...",
        r: "RESULT: The client appreciated the transparency. The fix was implemented in 24 hours, avoiding a project delay."
    },
    D2: {
        s: "SITUATION: We needed to convince the client to adopt a more expensive, but safer, fire suppression system...",
        t: "TASK: I had to present the technical safety case to the non-technical client board...",
        a: "ACTION: I prepared a presentation focusing on lifecycle costs and risk reduction (ALARP). I used simple diagrams to explain the complex failure mode...",
        r: "RESULT: The client approved the £20k upgrade, acknowledging the long-term safety benefits."
    },
    D3: {
        s: "SITUATION: Two senior technicians disagreed on the best method to weld the pipework...",
        t: "TASK: As the Lead Engineer, I had to resolve the conflict to allow work to proceed...",
        a: "ACTION: I held a meeting with both. I listened to their technical arguments. I decided to run a procedure qualification test (WPQR) to see which method was stronger...",
        r: "RESULT: The test showed Method A was superior. Both technicians accepted the data-driven decision."
    },

    // COMPETENCE E
    E1: {
        s: "SITUATION: A client asked us to ignore a minor clause in the BS 7671 wiring regulations to save money...",
        t: "TASK: I had a duty of care to uphold professional standards and refuse this request...",
        a: "ACTION: I referenced the Electricity at Work Regulations (EAWR) and explained that as professional engineers, we could not sign off on non-compliant work...",
        r: "RESULT: The client accepted the position. We remained compliant and protected our professional indemnity."
    },
    E2: {
        s: "SITUATION: While inspecting the site, I noticed a contractor working at height without a harness...",
        t: "TASK: I had a duty of care to intervene immediately to prevent a potential fatality...",
        a: "ACTION: I stopped the work immediately. I spoke to the site supervisor and conducted a 'Toolbox Talk' on the spot. I updated the RAMS to include clearer anchor points...",
        r: "RESULT: Work resumed safely. No accidents occurred on the project, and the safety culture score improved."
    },
    E3: {
        s: "SITUATION: Our manufacturing process was generating excessive plastic waste...",
        t: "TASK: I wanted to improve the sustainability of our operations...",
        a: "ACTION: I conducted a waste audit. I identified that the packaging could be reused. I implemented a 'return to supplier' scheme...",
        r: "RESULT: Waste sent to landfill was reduced by 40%, aligning with the company's ISO 14001 targets."
    },
    E4: {
        s: "SITUATION: I identified a gap in my knowledge regarding high-voltage switchgear...",
        t: "TASK: I needed to close this gap to take on a new project...",
        a: "ACTION: I attended a 3-day C&G certified course. I also shadowed the Senior Electrical Engineer during the shutdown maintenance...",
        r: "RESULT: I gained the authorized person (AP) status and successfully led the switchgear upgrade."
    },
    E5: {
        s: "SITUATION: I was offered a gift (tickets to a sports event) by a supplier during a tender process...",
        t: "TASK: I had to manage this ethical conflict of interest...",
        a: "ACTION: I politely declined the gift, citing the company's anti-bribery policy. I declared the offer in the company gift register...",
        r: "RESULT: The tender process remained fair and transparent. The supplier respected our strict ethical stance."
    }
};

// =========================================================================
// PART 2: RACI MATRIX TEMPLATES (Moved from HTML to Database)
// =========================================================================
const raciScenarios = {
    custom: { roles: ["Role 1", "Role 2", "Role 3"], tasks: [{name: "Task 1", r: ["","",""]}, {name: "Task 2", r: ["","",""]}] },
    technical: {
        roles: ["Project Director", "Project Manager", "Senior Engineer", "Graduate Engineer", "CAD Technician", "Client"],
        tasks: [
            { name: "Define Scope of Works", r: ["A", "R", "C", "I", "", "C"] },
            { name: "Concept Design Report", r: ["I", "A", "R", "R", "", "C"] },
            { name: "Detailed Design Calcs", r: ["", "I", "A", "R", "", ""] },
            { name: "3D Modelling & Drawings", r: ["", "I", "A", "C", "R", ""] },
            { name: "Internal Design Review", r: ["I", "A", "R", "C", "I", ""] },
            { name: "Client Approval (Gateway)", r: ["C", "R", "I", "", "", "A"] }
        ]
    },
    value_eng: {
        roles: ["Project Director", "Design Lead", "Cost Consultant", "Client", "Contractor"],
        tasks: [
            { name: "Identify High Cost Items", r: ["A", "R", "R", "I", "C"] },
            { name: "Brainstorm Alternatives", r: ["A", "R", "C", "I", "R"] }, 
            { name: "Feasibility Analysis", r: ["A", "R", "C", "C", "C"] },
            { name: "Cost Benefit Report", r: ["I", "C", "R", "A", "I"] },
            { name: "Final Option Selection", r: ["C", "R", "I", "A", "I"] } 
        ]
    },
    npd: {
        roles: ["Product Director", "Product Manager", "Lead Engineer", "Manufacturing", "Marketing", "Quality"],
        tasks: [
            { name: "Market Research", r: ["I", "R", "I", "", "R", "A"] },
            { name: "Product Spec Definition", r: ["C", "A", "R", "C", "C", "I"] },
            { name: "Prototype Fabrication", r: ["", "I", "A", "R", "", "I"] }, 
            { name: "Design Validation (DVT)", r: ["", "I", "R", "I", "", "A"] },
            { name: "Production Ramp-up", r: ["I", "C", "C", "R", "I", "A"] },
            { name: "Product Launch", r: ["A", "R", "I", "I", "R", ""] }
        ]
    },
    prototype: {
        roles: ["Lab Manager", "Design Eng", "Workshop Tech", "Testing Lead", "Project Mgr"],
        tasks: [
            { name: "CAD Model Prep", r: ["I", "R", "C", "I", "A"] },
            { name: "Material Procurement", r: ["A", "C", "R", "", "I"] },
            { name: "Fabrication / Machining", r: ["A", "C", "R", "", "I"] },
            { name: "Assembly", r: ["I", "R", "C", "", "A"] },
            { name: "Performance Testing", r: ["I", "C", "I", "R", "A"] },
            { name: "Test Report", r: ["A", "R", "", "C", "I"] }
        ]
    },
    software: {
        roles: ["Eng Manager", "Tech Lead", "Developer", "Product Owner", "QA Tester"],
        tasks: [
            { name: "Write User Stories", r: ["I", "C", "R", "A", "I"] }, 
            { name: "Sprint Planning", r: ["I", "R", "C", "A", "C"] },
            { name: "Feature Development", r: ["", "A", "R", "I", ""] },
            { name: "Code Review (PR)", r: ["", "A", "R", "", ""] },
            { name: "Integration Testing", r: ["", "A", "C", "I", "R"] }, 
            { name: "Deploy to Prod", r: ["A", "R", "I", "I", "I"] }
        ]
    },
    site: {
        roles: ["Project Director", "Site Manager", "Foreman", "Safety Officer", "Sub-Contractor"],
        tasks: [
            { name: "RAMS Approval", r: ["I", "A", "I", "R", "C"] },
            { name: "Daily Briefing / Toolbox Talk", r: ["", "A", "R", "C", "I"] },
            { name: "Permit to Work Issue", r: ["", "A", "R", "C", "R"] },
            { name: "Site Inspection Audit", r: ["I", "A", "I", "R", "C"] }, 
            { name: "Progress Reporting", r: ["A", "R", "C", "I", ""] }
        ]
    },
    safety: {
        roles: ["Client", "Principal Designer", "Principal Contractor", "Designer", "H&S Manager"],
        tasks: [
            { name: "F10 Notification", r: ["A", "R", "I", "", "C"] },
            { name: "Pre-Construction Info (PCI)", r: ["A", "R", "I", "C", "C"] },
            { name: "Construction Phase Plan (CPP)", r: ["I", "I", "A", "", "R"] },
            { name: "Design Risk Assessments", r: ["I", "A", "I", "R", "C"] },
            { name: "Health & Safety File", r: ["A", "R", "C", "C", "I"] }
        ]
    },
    travel: {
        roles: ["Director", "Line Mgr", "Traveler", "Travel Agent", "H&S Team"],
        tasks: [
            { name: "Determine Business Need", r: ["A", "R", "C", "", ""] },
            { name: "Budget Approval", r: ["A", "R", "I", "", ""] },
            { name: "Booking Flights/Hotel", r: ["I", "A", "C", "R", ""] }, 
            { name: "Travel Risk Assessment", r: ["I", "A", "R", "", "C"] },
            { name: "Expense Reporting", r: ["I", "A", "R", "", ""] }
        ]
    },
    stem: {
        roles: ["Head Teacher", "STEM Lead (You)", "Volunteer Team", "Students", "Company Mgr"],
        tasks: [
            { name: "Define Activity Idea", r: ["I", "R", "R", "I", "A"] }, 
            { name: "Risk Assessment (RAMS)", r: ["A", "R", "I", "", "C"] },
            { name: "Prepare Kits/Materials", r: ["", "A", "R", "", "I"] },
            { name: "Deliver Session", r: ["I", "A", "R", "C", ""] },
            { name: "Feedback / Photos", r: ["C", "A", "R", "C", "I"] }
        ]
    },
    lunch: {
        roles: ["Dept Head", "Organizer (You)", "Speaker", "Attendees", "IT Support"],
        tasks: [
            { name: "Select Topic", r: ["A", "R", "C", "I", ""] },
            { name: "Book Room / Link", r: ["A", "R", "", "", "C"] }, 
            { name: "Send Invites", r: ["A", "R", "I", "I", ""] }, 
            { name: "Prepare Slides", r: ["I", "A", "R", "", ""] },
            { name: "Host Session", r: ["A", "R", "R", "C", "C"] }
        ]
    },
    csr: {
        roles: ["Board Sponsor", "CSR Champ", "Volunteers", "Charity PoC"],
        tasks: [
            { name: "Identify Cause/Charity", r: ["A", "R", "C", "I"] },
            { name: "Budget Approval", r: ["A", "R", "", ""] },
            { name: "Event Logistics", r: ["I", "A", "R", "C"] },
            { name: "Execute Event", r: ["I", "A", "R", "C"] },
            { name: "Impact Report", r: ["A", "R", "C", "I"] }
        ]
    },
    conf: {
        roles: ["Event Director", "Facilitator", "Speakers", "Venue Staff", "Sponsors"],
        tasks: [
            { name: "Agenda Creation", r: ["A", "R", "C", "", "I"] },
            { name: "Venue/Catering", r: ["A", "C", "I", "R", ""] },
            { name: "Marketing Strategy", r: ["A", "R", "I", "", "C"] },
            { name: "Registration Mgmt", r: ["I", "A", "", "R", ""] },
            { name: "Running the Day", r: ["A", "R", "C", "C", "I"] }
        ]
    }
};