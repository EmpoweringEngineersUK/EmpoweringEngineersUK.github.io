/*
 * EMPOWERING ENGINEERS UK - CPD INTELLIGENCE DATABASE [v6.0]
 * Aligned with UK-SPEC 4th Edition
 * Structure: { 70: "On Job", 20: "Social", 10: "Formal", prompt: "Context for AI" }
 */

const cpdDb = {
    // =========================================================================
    // A: KNOWLEDGE & UNDERSTANDING
    // =========================================================================
    "a1": { // Maintain & Extend Knowledge
        "CEng": {
            "General": {
                70: "Lead a technical review of [Emerging Technology] and determine its viability for [Current Project].",
                20: "Interview a subject matter expert on the long-term implications of [Industry Trend].",
                10: "Complete advanced certification in [Specialist Field].",
                prompt: "deepening theoretical knowledge in complex engineering systems"
            },
            "Mechanical": {
                70: "Evaluate the fatigue properties of [New Alloy/Material] for the [Component Name] design.",
                20: "Peer review a colleague's stress analysis regarding [Failure Mode].",
                10: "Attend a seminar on Fracture Mechanics or Advanced Tribology.",
                prompt: "advanced mechanical failure mechanisms"
            },
            "Software": {
                70: "Architect a proof-of-concept using [New Framework/Pattern] to solve [Scalability Issue].",
                20: "Lead a code-review session focusing on [Architecture Pattern] best practices.",
                10: "Complete a course on Distributed Systems or Cloud Native Architecture.",
                prompt: "software architectural patterns for scalability"
            },
            "Civil": {
                70: "Critique the impact of updates to [Eurocode/Standard] on the [Project Name] design criteria.",
                20: "Discuss geotechnical risks of [Site Condition] with a specialist consultant.",
                10: "Formal training on advanced FEA modelling for [Structure Type].",
                prompt: "advanced structural analysis under changing standards"
            }
        },
        "IEng": {
            "General": {
                70: "Apply [New Technology] to optimize the efficiency of [Current Process].",
                20: "Shadow a senior engineer during the commissioning of [System].",
                10: "Technical training on [Equipment/Software] operation.",
                prompt: "application of new technology in existing systems"
            },
            "Mechanical": {
                70: "Implement [Manufacturing Technique] to reduce cycle time on [Production Line].",
                20: "Discuss tolerance stack-up issues on [Assembly] with the design team.",
                10: "Training course on GD&T (BS 8888) application.",
                prompt: "manufacturing process optimization"
            }
        },
        "EngTech": {
            "General": {
                70: "Use [Tool/Equipment] to diagnose faults in [System].",
                20: "Ask a supervisor to demonstrate the correct calibration of [Instrument].",
                10: "Manufacturer training on [Specific Hardware].",
                prompt: "diagnostic techniques for hardware"
            }
        }
    },
    "a2": { // Application / Problem Solving
        "CEng": {
            "General": {
                70: "Develop a first-principles solution to the [Unusual Problem] where standard codes do not apply.",
                20: "Facilitate a root cause analysis workshop for [Critical Failure].",
                10: "Training on TRIZ or Advanced Problem Solving methodologies.",
                prompt: "first-principles engineering problem solving"
            }
        },
        "IEng": {
            "General": {
                70: "Adapt [Standard Solution] to fit the specific constraints of [Client Requirement].",
                20: "Review the 'Lessons Learned' log from [Previous Project] with the Project Manager.",
                10: "Course on Continuous Improvement (Kaizen/Six Sigma).",
                prompt: "adapting standard engineering solutions"
            }
        },
        "EngTech": {
            "General": {
                70: "Identify the root cause of [Machine Stoppage] and implement a fix.",
                20: "Assist a senior colleague in testing [New Component].",
                10: "Training on basic fault-finding logic.",
                prompt: "practical fault finding and repair"
            }
        }
    },

    // =========================================================================
    // B: DESIGN & DEVELOPMENT
    // =========================================================================
    "b1": { // Identify Problems
        "CEng": {
            "General": {
                70: "Author the User Requirement Specification (URS) for [Major System].",
                20: "Liaise with [Client/Stakeholder] to define the boundary conditions for [Project].",
                10: "Training on Requirements Engineering (e.g., INCOSE).",
                prompt: "defining complex engineering requirements"
            }
        },
        "IEng": {
            "General": {
                70: "Conduct a site survey to identify constraints for [Installation].",
                20: "Review the tender specification for [Sub-System] with a supplier.",
                10: "Workshop on writing technical specifications.",
                prompt: "identifying technical constraints"
            }
        },
        "EngTech": {
            "General": {
                70: "Report a recurring defect in [Equipment] and suggest a modification.",
                20: "Discuss the assembly difficulty of [Part] with the workshop team.",
                10: "Training on reading engineering drawings/schematics.",
                prompt: "identifying practical defects"
            }
        }
    },
    "b2": { // Design Solutions
        "CEng": {
            "General": {
                70: "Lead the detailed design of [Critical Sub-System] ensuring compliance with [Regulation].",
                20: "Participate in a Critical Design Review (CDR) for [Peer's Project].",
                10: "Advanced course on Design for Manufacture/Assembly (DFMA).",
                prompt: "leading complex engineering design"
            }
        },
        "IEng": {
            "General": {
                70: "Design a modification to [Existing Asset] to improve performance.",
                20: "Present design calculations for [Component] to the Lead Engineer.",
                10: "Training on CAD software (e.g., SolidWorks/AutoCAD) advanced features.",
                prompt: "designing technical modifications"
            }
        },
        "EngTech": {
            "General": {
                70: "Fabricate a jig/fixture to aid the assembly of [Product].",
                20: "Review a prototype of [Part] and provide feedback on buildability.",
                10: "Practical skills training (e.g., Welding, Coding, Soldering).",
                prompt: "practical contribution to design"
            }
        }
    },
    "b3": { // Implementation
        "CEng": {
            "General": {
                70: "Oversee the commissioning and handover of [Major Project].",
                20: "Debrief the installation team on [Project Phase] to capture improvements.",
                10: "Training on Systems Integration and Validation.",
                prompt: "strategic implementation of engineering systems"
            }
        },
        "IEng": {
            "General": {
                70: "Manage the installation schedule for [Equipment] on site.",
                20: "Coordinate with [Contractor] to resolve on-site clashes.",
                10: "Course on Site Management Safety (SMSTS).",
                prompt: "managing engineering implementation"
            }
        },
        "EngTech": {
            "General": { // Merged B1/B2 usually, but for completeness
                70: "Install and test [Component] according to the drawing.",
                20: "Supervise an apprentice during [Task].",
                10: "Training on specific installation standards.",
                prompt: "hands-on installation and testing"
            }
        }
    },

    // =========================================================================
    // C: LEADERSHIP & MANAGEMENT
    // =========================================================================
    "c1": { // Plan for Project Implementation
        "CEng": {
            "General": {
                70: "Develop the Project Execution Plan (PEP) for [Project Name].",
                20: "Negotiate project milestones with [Client/Director].",
                10: "Prince2 or APM Project Management Qualification.",
                prompt: "strategic project planning"
            }
        },
        "IEng": {
            "General": {
                70: "Create the detailed Gantt chart for [Work Package].",
                20: "Lead the weekly progress meeting for [Team].",
                10: "Training on MS Project or Primavera P6.",
                prompt: "operational project planning"
            }
        },
        "EngTech": {
            "General": {
                70: "Organise the tools and materials required for [Next Week's Task].",
                20: "Brief the team on the method statement for [Activity].",
                10: "Training on time management.",
                prompt: "task planning and preparation"
            }
        }
    },
    "c2": { // Budget & Resources
        "CEng": {
            "General": {
                70: "Manage the budget of [£X Amount] for [Department/Project].",
                20: "Review tender responses from [Suppliers] and select the vendor.",
                10: "Course on Contract Law (e.g., NEC4/FIDIC) or Commercial Management.",
                prompt: "commercial and budget management"
            }
        },
        "IEng": {
            "General": {
                70: "Track material spend against the BOM for [Product].",
                20: "Justify the purchase of [New Tooling] to management.",
                10: "Training on procurement processes.",
                prompt: "resource and cost control"
            }
        },
        "EngTech": {
            "General": {
                70: "Ensure [Consumables] are stocked to prevent downtime.",
                20: "Report on waste levels in [Process].",
                10: "Basic training on cost awareness.",
                prompt: "efficient use of resources"
            }
        }
    },
    "c3": { // Teams & Staff
        "CEng": {
            "General": {
                70: "Conduct performance appraisals for [Number] engineers.",
                20: "Mentor [Name] towards their CEng registration.",
                10: "Training on Inclusive Leadership or Conflict Resolution.",
                prompt: "leading and developing teams"
            }
        },
        "IEng": {
            "General": {
                70: "Supervise the daily workflow of [Technician Team].",
                20: "Induct [New Starter] into the workshop/office procedures.",
                10: "Training on Supervisor Skills.",
                prompt: "supervising technical staff"
            }
        },
        "EngTech": {
            "General": {
                70: "Guide [Apprentice] through the [Specific Task].",
                20: "Hand over the shift state effectively to [Colleague].",
                10: "Training on coaching/mentoring basics.",
                prompt: "guiding junior staff"
            }
        }
    },
    "c4": { // Quality
        "CEng": {
            "General": {
                70: "Audit the Quality Management System (ISO 9001) for [Department].",
                20: "Chair a Quality Review meeting regarding [Defect Trend].",
                10: "Lead Auditor training.",
                prompt: "strategic quality management"
            }
        },
        "IEng": {
            "General": {
                70: "Update the Standard Operating Procedure (SOP) for [Process].",
                20: "Inspect [Product] against the acceptance criteria.",
                10: "Training on Quality Control methods.",
                prompt: "operational quality control"
            }
        }
    },

    // =========================================================================
    // D: COMMUNICATION
    // =========================================================================
    "d1": { // English Language
        "CEng": {
            "General": {
                70: "Write the technical approval paper for [Project] for Board review.",
                20: "Review technical reports written by [Junior Engineers].",
                10: "Advanced Technical Writing course.",
                prompt: "writing complex technical reports"
            }
        },
        "IEng": {
            "General": {
                70: "Draft the commissioning report for [System].",
                20: "Explain [Technical Issue] to a non-technical client.",
                10: "Presentation skills training.",
                prompt: "technical communication"
            }
        },
        "EngTech": {
            "General": {
                70: "Complete the shift log/maintenance record accurately for [Asset].",
                20: "Report [Incident] clearly via email to management.",
                10: "Training on basic report writing.",
                prompt: "recording technical information"
            }
        }
    },
    "d2": { // Presentation
        "CEng": {
            "General": {
                70: "Present the [Project Strategy] to the Steering Committee.",
                20: "Speak at an industry conference or internal 'Lunch & Learn'.",
                10: "Public Speaking / Rhetoric training.",
                prompt: "presenting to senior stakeholders"
            }
        },
        "IEng": {
            "General": {
                70: "Deliver the toolbox talk on [Safety Topic] to the site team.",
                20: "Demonstrate [New Software] to the department.",
                10: "Training on effective slide design.",
                prompt: "presenting technical instructions"
            }
        }
    },
    "d3": { // Social Skills
        "CEng": {
            "General": {
                70: "Negotiate the scope change with [Difficult Client].",
                20: "Act as a STEM Ambassador at [Local School].",
                10: "Training on Equality, Diversity & Inclusion (EDI).",
                prompt: "negotiation and EDI"
            }
        }
    },

    // =========================================================================
    // E: COMMITMENT (Safety, Ethics, Environment)
    // =========================================================================
    "e1": { // Codes of Conduct
        "CEng": {
            "General": {
                70: "Ensure [Project] complies with the IET/IMechE Code of Conduct.",
                20: "Discuss an ethical dilemma from [Recent Project] with a mentor.",
                10: "Read the Institution's Bye-laws and Rules of Conduct.",
                prompt: "professional codes of conduct"
            }
        }
    },
    "e2": { // Safety
        "CEng": {
            "General": {
                70: "Approve the CDM Pre-Construction Information for [Site].",
                20: "Lead a HAZOP/HAZID study for [Process].",
                10: "NEBOSH Diploma or IOSH Managing Safely.",
                prompt: "managing safety critical work"
            }
        },
        "IEng": {
            "General": {
                70: "Conduct a Risk Assessment and Method Statement (RAMS) for [Activity].",
                20: "Participate in a safety audit of [Workshop/Site].",
                10: "Training on Permit to Work systems.",
                prompt: "applying safety systems"
            }
        },
        "EngTech": {
            "General": {
                70: "Carry out a 'Point of Work' risk assessment before starting [Task].",
                20: "Report a 'Near Miss' regarding [Hazard].",
                10: "Manual Handling / Fire Safety training.",
                prompt: "working safely"
            }
        }
    },
    "e3": { // Sustainability
        "CEng": {
            "General": {
                70: "Conduct a Lifecycle Carbon Assessment for [Project].",
                20: "Champion the 'Net Zero' strategy within [Department].",
                10: "Training on Circular Economy principles.",
                prompt: "engineering sustainability strategies"
            }
        },
        "IEng": {
            "General": {
                70: "Implement a recycling/waste reduction scheme for [Process].",
                20: "Calculate the energy savings of [New Equipment].",
                10: "Training on Environmental Management (ISO 14001).",
                prompt: "improving environmental performance"
            }
        },
        "EngTech": {
            "General": {
                70: "Dispose of [Hazardous Waste] according to regulations.",
                20: "Suggest a way to reduce energy consumption on [Machine].",
                10: "Spill kit / Environmental awareness training.",
                prompt: "safe disposal and waste reduction"
            }
        }
    },
    "e4": { // CPD
        "CEng": {
            "General": {
                70: "Create a 5-year strategic career plan.",
                20: "Mentor others on their CPD recording.",
                10: "Attend institution AGM or lectures.",
                prompt: "strategic professional development"
            }
        }
    },
    "e5": { // Ethics
        "CEng": {
            "General": {
                70: "Manage a conflict of interest regarding [Supplier Selection].",
                20: "Discuss the RAEng Statement of Ethical Principles with the team.",
                10: "Training on Anti-Bribery and Corruption.",
                prompt: "engineering ethics in leadership"
            }
        },
        "IEng": {
            "General": {
                70: "Refuse to sign off [Work] that does not meet the specification.",
                20: "Raise a concern about [Unsafe Practice] through proper channels.",
                10: "Ethics in Engineering workshop.",
                prompt: "ethical decision making"
            }
        },
        "EngTech": {
            "General": {
                70: "Refuse to use [Damaged Equipment] despite schedule pressure.",
                20: "Report data accurately without falsification.",
                10: "Briefing on company values and ethics.",
                prompt: "ethical conduct in daily tasks"
            }
        }
    }
};