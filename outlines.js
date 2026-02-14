/*
 * EMPOWERING ENGINEERS UK - REPORT OUTLINE DATABASE [v7.0]
 * THE MASTER INDEX: Registration, Design, Safety, Ops, Software, Business & Strategy.
 * * Aligned with:
 * - UK-SPEC (CEng/IEng)
 * - CDM Regulations 2015 / HSE
 * - ISO 9001 (Quality) & Machinery Directive (UKCA/CE)
 * - Prince2 / PMBOK
 */

const outlineDb = {
    // =========================================================================
    // CATEGORY 1: PROFESSIONAL REGISTRATION (The "Gold Standard")
    // =========================================================================
    "imeche_ceng": {
        title: "IMechE / IET Professional Review (Competence Based)",
        description: "The gold standard for CEng/IEng. Maps your career history strictly to the 5 UK-SPEC standards (A-E).",
        sections: [
            {
                title: "Introduction & Context",
                required: true, 
                rationale: "Reviewers need to immediately gauge the scale of your responsibility.",
                triggers: ["Current job title and time in role.", "Budget responsibility (£) and Team Size.", "Organisational Chart context."]
            },
            {
                title: "Competence A: Innovation & Problem Solving",
                required: true,
                rationale: "Demonstrates theoretical knowledge to solve non-routine problems.",
                triggers: ["A1: CPD and maintaining knowledge.", "A2: First Principles calculations/analysis.", "Why did you choose this technical approach?"]
            },
            {
                title: "Competence B: Application to Practice",
                required: true,
                rationale: "Shows you can turn theory into physical reality.",
                triggers: ["B1: Identifying the problem.", "B2: Design process (Concept to Detail).", "B3: Implementation and construction difficulties."]
            },
            {
                title: "Competence C: Leadership & Commercial",
                required: true,
                rationale: "Proves you understand the business context.",
                triggers: ["C1: Project Planning (Gantt).", "C2: Budget & Contract Management.", "C3: Leadership & Mentoring."]
            },
            {
                title: "Competence E: Safety & Ethics",
                required: true,
                rationale: "Mandatory. A failure here is an automatic fail.",
                triggers: ["E2: Safety management (HAZOP, RAMS).", "E3: Sustainability.", "E5: Ethical dilemmas resolved."]
            }
        ]
    },
    "ice_review": {
        title: "ICE Professional Review (Project Based)",
        description: "For Civil Engineers. A project-focused report analysing 1-2 major projects to demonstrate ICE Attributes.",
        sections: [
            {
                title: "Project Context",
                required: true,
                rationale: "Define scope, value, and role.",
                triggers: ["Contract Value (£).", "Client & Stakeholders.", "Your specific role."]
            },
            {
                title: "Technical Difficulty (Attributes 1 & 2)",
                required: true,
                rationale: "Demonstrate first principles.",
                triggers: ["Geotechnical challenges.", "Structural analysis methods.", "Material selection logic."]
            },
            {
                title: "Commercial Management (Attribute 5)",
                required: true,
                rationale: "Contractual competence.",
                triggers: ["NEC4 Option used.", "Compensation Events (CEs).", "Cost control."]
            },
            {
                title: "Health, Safety & Welfare (Attribute 6)",
                required: true,
                rationale: "CDM Regulations.",
                triggers: ["Principal Designer duties.", "Risk elimination by design.", "Temporary works."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 2: DESIGN & ENGINEERING CORE
    // =========================================================================
    "bod_design": {
        title: "Basis of Design (BoD)",
        description: "Foundational document defining codes, standards, and assumptions before detailed design begins.",
        sections: [
            {
                title: "Introduction & Site Conditions",
                required: true,
                rationale: "Environmental constraints.",
                triggers: ["Site location.", "Ambient Temperature range.", "Seismic/Wind loads."]
            },
            {
                title: "Codes & Standards",
                required: true,
                rationale: "Regulatory compliance framework.",
                triggers: ["British Standards (BS).", "ISO Standards.", "Client specific specifications."]
            },
            {
                title: "Design Life & Reliability",
                required: false,
                rationale: "Durability expectations.",
                triggers: ["Design life (e.g., 25 years).", "Maintenance intervals.", "Availability targets (%)."]
            },
            {
                title: "Discipline Specifics",
                required: true,
                rationale: "Key parameters for each trade.",
                triggers: ["Civil: Ground bearing capacity.", "Mech: Material selection.", "Elec: Voltage levels."]
            }
        ]
    },
    "concept_design": {
        title: "Concept Design Report",
        description: "Initial exploration of potential solutions before detailed engineering begins.",
        sections: [
            {
                title: "Design Brief",
                required: true,
                rationale: "What are we trying to solve?",
                triggers: ["Client Requirements (URS).", "Key Constraints.", "Target Performance."]
            },
            {
                title: "Concept Generation",
                required: true,
                rationale: "Breadth of ideas.",
                triggers: ["Mind maps / Sketches.", "Morphological Charts.", "Blue Sky ideas."]
            },
            {
                title: "Concept Evaluation",
                required: true,
                rationale: "Structured selection.",
                triggers: ["Pugh Matrix scoring.", "SWOT Analysis.", "Risk estimation."]
            },
            {
                title: "Selected Concept",
                required: true,
                rationale: "The winner.",
                triggers: ["3D Render.", "Cost Estimate (+/- 30%).", "Key Risks."]
            }
        ]
    },
    "detailed_design": {
        title: "Detailed Design Report",
        description: "The final technical definition of a solution, ready for manufacture or construction.",
        sections: [
            {
                title: "System Overview",
                required: true,
                rationale: "Context.",
                triggers: ["GA drawing ref.", "PFD ref."]
            },
            {
                title: "Design Calculations",
                required: true,
                rationale: "Mathematical proof.",
                triggers: ["Load / Stress calcs.", "Motor sizing.", "Flow rates."]
            },
            {
                title: "Component Selection",
                required: true,
                rationale: "BOM Justification.",
                triggers: ["Bill of Materials.", "Material specs.", "Supplier selection."]
            },
            {
                title: "Safety & Compliance",
                required: true,
                rationale: "Legal adherence.",
                triggers: ["Machinery Directive.", "Safety Factors.", "Guarding."]
            }
        ]
    },
    "calc_report": {
        title: "Calculation / Analysis Report",
        description: "Specific structural, thermal, or load calculations (e.g., Pipe Stress, Beam Loading).",
        sections: [
            {
                title: "Objective & Methodology",
                required: true,
                rationale: "What and How.",
                triggers: ["Code used (e.g., Eurocode 3).", "Hand calc or Software?"]
            },
            {
                title: "Inputs & Assumptions",
                required: true,
                rationale: "Garbage In, Garbage Out.",
                triggers: ["Material Properties.", "Load Cases (Dead, Live, Wind).", "Safety Factors."]
            },
            {
                title: "Calculation Body",
                required: true,
                rationale: "The working out.",
                triggers: ["Free Body Diagrams.", "Step-by-step derivation.", "Software screenshots."]
            },
            {
                title: "Conclusion",
                required: true,
                rationale: "Pass or Fail?",
                triggers: ["Utilization Ratios.", "Deflection checks.", "Is reinforcement needed?"]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 3: SIMULATION & AUTOMATION
    // =========================================================================
    "fea_cfd_report": {
        title: "FEA / CFD Analysis Report",
        description: "Verification of design using Finite Element Analysis or Computational Fluid Dynamics.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "Pass/Fail status.",
                triggers: ["Safety Factor found.", "Key recommendations."]
            },
            {
                title: "Model Setup",
                required: true,
                rationale: "Validation of virtual model.",
                triggers: ["Geometry simplifications.", "Mesh settings.", "Boundary Conditions."]
            },
            {
                title: "Results",
                required: true,
                rationale: "Interpretation.",
                triggers: ["Von Mises Stress.", "Displacement.", "Flow velocity."]
            }
        ]
    },
    "fds_control": {
        title: "Functional Design Specification (FDS)",
        description: "Translates process needs into software logic for Automation/SCADA.",
        sections: [
            {
                title: "System Architecture",
                required: true,
                rationale: "Hardware overview.",
                triggers: ["PLC type.", "Remote IO.", "Network topology."]
            },
            {
                title: "Control Logic",
                required: true,
                rationale: "How it works.",
                triggers: ["Auto/Manual modes.", "Start-up sequence.", "Interlocks."]
            },
            {
                title: "Alarms",
                required: true,
                rationale: "Fault handling.",
                triggers: ["Alarm List.", "Trip vs Warning."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 4: MANUFACTURING & OPERATIONS
    // =========================================================================
    "iom_manual": {
        title: "IOM Manual (Installation, Operation, Maintenance)",
        description: "Standard technical manual required for Machinery Directive / UKCA Compliance.",
        sections: [
            {
                title: "Safety & Residual Risks",
                required: true,
                rationale: "Legal warning of risks.",
                triggers: ["PPE Requirements.", "Warning Decals.", "LOTO procedures."]
            },
            {
                title: "Technical Spec",
                required: true,
                rationale: "Operating limits.",
                triggers: ["Dimensions.", "Electrical ratings.", "Pressure limits."]
            },
            {
                title: "Installation",
                required: true,
                rationale: "Setup instructions.",
                triggers: ["Lifting (CoG).", "Anchoring.", "Connections."]
            },
            {
                title: "Maintenance",
                required: true,
                rationale: "Preventative care.",
                triggers: ["Lubrication schedule.", "Spare Parts List.", "Fault finding."]
            }
        ]
    },
    "fat_protocol": {
        title: "Factory Acceptance Test (FAT) Protocol",
        description: "Formal validation document to prove equipment meets FDS before shipping.",
        sections: [
            {
                title: "Test Scope",
                required: true,
                rationale: "Pre-requisites.",
                triggers: ["Reference Docs.", "Calibration status."]
            },
            {
                title: "Visual Inspection",
                required: true,
                rationale: "Build quality.",
                triggers: ["Dimensions.", "Finish.", "Labels."]
            },
            {
                title: "Functional Tests",
                required: true,
                rationale: "Performance check.",
                triggers: ["Dry run.", "Safety Interlocks.", "Speed/Load tests."]
            },
            {
                title: "Punchlist",
                required: true,
                rationale: "Corrections needed.",
                triggers: ["Cat A (Must fix).", "Cat B (Site fix).", "Signatures."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 5: SAFETY & SITE WORK
    // =========================================================================
    "rams_method": {
        title: "RAMS (Risk Assessment & Method Statement)",
        description: "Essential H&S document for site work, construction, and installation.",
        sections: [
            {
                title: "Scope of Works",
                required: true,
                rationale: "Task definition.",
                triggers: ["Location.", "Duration.", "Task description."]
            },
            {
                title: "Risk Assessment",
                required: true,
                rationale: "Hazard ID & Control.",
                triggers: ["Hazards.", "Risk Score.", "Control Measures."]
            },
            {
                title: "Method Statement",
                required: true,
                rationale: "Step-by-step guide.",
                triggers: ["Induction.", "Isolation.", "Install steps.", "Handover."]
            }
        ]
    },
    "incident_report": {
        title: "Safety Incident / Near Miss Report",
        description: "Formal record of a safety event. Critical for HSE/RIDDOR compliance.",
        sections: [
            {
                title: "Incident Details",
                required: true,
                rationale: "Facts.",
                triggers: ["Date/Time.", "Location.", "Witnesses."]
            },
            {
                title: "Description",
                required: true,
                rationale: "Narrative.",
                triggers: ["What happened?", "Immediate outcome."]
            },
            {
                title: "Root Cause",
                required: true,
                rationale: "Why?",
                triggers: ["5-Whys.", "Failed controls."]
            },
            {
                title: "Corrective Actions",
                required: true,
                rationale: "Fixes.",
                triggers: ["Immediate containment.", "Long term prevention."]
            }
        ]
    },
    "site_survey": {
        title: "Site Survey Report",
        description: "Pre-construction assessment of existing conditions.",
        sections: [
            {
                title: "Site Access & Logistics",
                required: true,
                rationale: "Constructability.",
                triggers: ["Delivery routes.", "Crane hardstanding.", "Storage areas."]
            },
            {
                title: "Existing Services",
                required: true,
                rationale: "Clash avoidance.",
                triggers: ["Power/Water/Gas locations.", "Drainage.", "Cable routes."]
            },
            {
                title: "Condition Assessment",
                required: true,
                rationale: "Dilapidation.",
                triggers: ["Photos of defects.", "Ground conditions.", "Structural integrity."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 6: PROJECT MANAGEMENT
    // =========================================================================
    "pid_project": {
        title: "Project Initiation Document (PID)",
        description: "The foundation of any engineering project. Aligned with Prince2/PMBOK.",
        sections: [
            {
                title: "Objectives (SMART)",
                required: true,
                rationale: "Success criteria.",
                triggers: ["Specific Goals.", "Measurable Targets."]
            },
            {
                title: "Scope & Exclusions",
                required: true,
                rationale: "Battery limits.",
                triggers: ["In Scope.", "Out of Scope."]
            },
            {
                title: "Organisation (RACI)",
                required: false,
                rationale: "Roles.",
                triggers: ["Sponsor.", "PM.", "Tech Lead."]
            },
            {
                title: "Risks",
                required: true,
                rationale: "Constraints.",
                triggers: ["Top 5 Risks.", "Shutdown windows."]
            }
        ]
    },
    "sow_project": {
        title: "Scope of Work (SoW)",
        description: "Defines the boundaries of a project for contractors.",
        sections: [
            {
                title: "Objectives",
                required: true,
                rationale: "Definition of done.",
                triggers: ["Deliverables list.", "Key Dates."]
            },
            {
                title: "Detailed Scope",
                required: true,
                rationale: "Tasks.",
                triggers: ["Design.", "Procurement.", "Install."]
            },
            {
                title: "Exclusions",
                required: true,
                rationale: "Scope creep protection.",
                triggers: ["'By Others' list.", "Utility points."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 7: BUSINESS & STRATEGY
    // =========================================================================
    "business_case": {
        title: "Business Case / CAPEX Proposal",
        description: "Justifying capital expenditure to leadership.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "The Pitch.",
                triggers: ["Request Amount (£).", "ROI.", "Strategic fit."]
            },
            {
                title: "Problem Statement",
                required: true,
                rationale: "Why spend money?",
                triggers: ["Pain points.", "Risk of doing nothing."]
            },
            {
                title: "Financial Analysis",
                required: true,
                rationale: "The numbers.",
                triggers: ["CAPEX breakdown.", "Payback Period.", "NPV."]
            }
        ]
    },
    "tender_proposal": {
        title: "Tender Proposal / Bid",
        description: "Formal response to an RFQ or ITT.",
        sections: [
            {
                title: "Technical Solution",
                required: true,
                rationale: "Methodology.",
                triggers: ["Tech stack.", "Innovation.", "Compliance."]
            },
            {
                title: "Project Delivery",
                required: true,
                rationale: "Trust.",
                triggers: ["Team CVs.", "Timeline.", "Quality Plan."]
            },
            {
                title: "Commercial Offer",
                required: true,
                rationale: "Price.",
                triggers: ["Fixed Price?", "Payment Milestones.", "Exclusions."]
            }
        ]
    },
    "feasibility": {
        title: "Feasibility / Optioneering Study",
        description: "Comparing solutions (Do Nothing vs Retrofit vs Replace).",
        sections: [
            {
                title: "Problem Statement",
                required: true,
                rationale: "Drivers.",
                triggers: ["Business driver.", "Constraints."]
            },
            {
                title: "Options Analysis",
                required: true,
                rationale: "Comparison.",
                triggers: ["Option 1 (Base).", "Option 2 (Retrofit).", "Option 3 (Replace)."]
            },
            {
                title: "Recommendation",
                required: true,
                rationale: "Decision.",
                triggers: ["Preferred option.", "Justification."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 8: SOFTWARE & IT
    // =========================================================================
    "sad_software": {
        title: "Software Architecture Document (SAD)",
        description: "High-level overview of software design and data flow.",
        sections: [
            {
                title: "Architectural Overview",
                required: true,
                rationale: "The Big Picture.",
                triggers: ["Monolithic vs Microservices.", "Cloud vs On-Prem."]
            },
            {
                title: "Tech Stack",
                required: true,
                rationale: "Tools.",
                triggers: ["Frontend.", "Backend.", "Database."]
            },
            {
                title: "Data Design",
                required: false,
                rationale: "Storage.",
                triggers: ["Schema.", "API endpoints."]
            }
        ]
    },
    "api_docs": {
        title: "API Documentation",
        description: "Reference for developers.",
        sections: [
            {
                title: "Authentication",
                required: true,
                rationale: "Security.",
                triggers: ["API Keys.", "Tokens.", "Rate limits."]
            },
            {
                title: "Endpoints",
                required: true,
                rationale: "Commands.",
                triggers: ["GET/POST methods.", "Parameters.", "Responses."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 9: DISCIPLINE SPECIFIC (Drawings & Specs)
    // =========================================================================
    "elec_design": {
        title: "Electrical Design Description",
        description: "Context for SLDs, Cable Schedules, and Hazardous Areas.",
        sections: [
            {
                title: "Power Distribution Strategy",
                required: true,
                rationale: "Grid to Device.",
                triggers: ["HV/LV boundaries.", "Switchboard location.", "Earthing system."]
            },
            {
                title: "Cable Management",
                required: true,
                rationale: "Routing.",
                triggers: ["Cable Tray capacity.", "Segregation rules.", "Buried cables."]
            },
            {
                title: "Hazardous Area (ATEX/DSEAR)",
                required: true,
                rationale: "Explosion prevention.",
                triggers: ["Zone classification (0, 1, 2).", "Equipment protection levels."]
            }
        ]
    },
    "process_desc": {
        title: "Process Description (Context for P&ID)",
        description: "Narrative explaining the PFD/P&ID flow.",
        sections: [
            {
                title: "Process Overview",
                required: true,
                rationale: "Chemistry/Physics.",
                triggers: ["Inputs/Outputs.", "Reactions.", "Flow rates."]
            },
            {
                title: "Control Philosophy",
                required: true,
                rationale: "Automation.",
                triggers: ["Control loops.", "Setpoints.", "Safety trips."]
            },
            {
                title: "Effluent & Waste",
                required: false,
                rationale: "Environment.",
                triggers: ["By-products.", "Treatment requirements."]
            }
        ]
    },
    "failure_rca": {
        title: "Root Cause Failure Analysis (RCA)",
        description: "Investigate incidents using 5-Whys and Fishbone.",
        sections: [
            {
                title: "Incident Description",
                required: true,
                rationale: "Facts.",
                triggers: ["Date/Time.", "Conditions.", "Observations."]
            },
            {
                title: "Root Cause",
                required: true,
                rationale: "Logic.",
                triggers: ["Fishbone.", "5-Whys."]
            },
            {
                title: "Corrective Actions",
                required: true,
                rationale: "Fix.",
                triggers: ["Immediate.", "Preventative."]
            }
        ]
    }
};