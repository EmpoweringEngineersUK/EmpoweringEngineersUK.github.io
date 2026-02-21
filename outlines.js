/*
 * EMPOWERING ENGINEERS UK - REPORT OUTLINE DATABASE [v13.0]
 * THE MASTER INDEX: 23 Complete Engineering Blueprints.
 * * REQUIRED FLAGS CALIBRATED: Set to "Minimum Viable Document" (MVD) for small projects.
 * * DAP UPDATED: Short, Medium, and Long-term timelines defined.
 */

const outlineDb = {
    // =========================================================================
    // CATEGORY 1: PROFESSIONAL REGISTRATION (The "Gold Standard")
    // =========================================================================
    "engc_review": {
        title: "Engineering Council Professional Competence Review",
        description: "The complete standard for CEng/IEng. Maps your career history strictly to the 5 UK-SPEC standards (A-E) and Future Development.",
        sections: [
            {
                title: "Introduction & Career Overview",
                required: true, 
                rationale: "Reviewers need to immediately gauge the scale of your responsibility, autonomy, and engineering environment.",
                triggers: ["Current job title, time in role, and brief summary of your career progression.", "Budget responsibility (£), level of autonomy, and Direct/Indirect Team Size.", "Organisational Chart: Who do you report to, and who reports to you?"]
            },
            {
                title: "Competence A: Optimise the Application of Technology",
                required: true,
                rationale: "Demonstrates theoretical knowledge, first principles, and ability to solve complex, non-routine engineering problems.",
                triggers: ["A1: How did you acquire new technical knowledge or analytical techniques to solve a specific problem?", "A2: Provide a specific example of First Principles calculations, FEA, CFD, or complex mathematical modelling.", "Why did you choose this specific technical approach over the available alternatives?"]
            },
            {
                title: "Competence B: Application to Practice (Design & Development)",
                required: true,
                rationale: "Shows you can turn theory into physical, practical reality while managing technical and physical constraints.",
                triggers: ["B1: How did you identify the initial design constraints, URS, and physical parameters?", "B2: Describe your design process from Concept Optioneering to Detailed Design.", "B3: What physical implementation, manufacturing, integration, or construction difficulties did you overcome?"]
            },
            {
                title: "Competence C: Technical & Commercial Leadership",
                required: true,
                rationale: "Proves you understand the business context, project management, and team leadership.",
                triggers: ["C1: Describe your project planning and resource allocation approach (e.g., Gantt, Agile).", "C2: How did you manage the budget, commercial risks, procurement, or contract disputes?", "C3: Provide evidence of leadership, team management, or mentoring junior engineering staff.", "C4: How do you handle continuous quality improvement (ISO 9001, Six Sigma)?"]
            },
            {
                title: "Competence D: Effective Communication & Interpersonal Skills",
                required: true,
                rationale: "Demonstrates your ability to convey technical concepts to non-technical stakeholders and manage relationships.",
                triggers: ["D1: How do you adapt your communication style for clients, directors, vs. shop-floor contractors?", "D2: Describe a challenging technical presentation, report, or tender you successfully delivered.", "D3: How do you handle conflict, negotiations, or push-back in multi-disciplinary technical meetings?"]
            },
            {
                title: "Competence E: Professional Commitment & Safety",
                required: true,
                rationale: "Mandatory. Shows understanding of statutory safety obligations, sustainability, and professional ethics.",
                triggers: [
                    "E1: How do you adhere to your institution's Code of Conduct in your daily role?",
                    "E2: Specific examples of Safety management, CDM 2015 Regulations, HAZOP, or RAMS application.",
                    "E3: How did you improve sustainability, energy efficiency, or apply circular economy principles?",
                    "E4: Summarise your approach to Continuous Professional Development (CPD).",
                    "E5: Describe a specific ethical dilemma you faced and how you resolved it."
                ]
            },
            {
                title: "Development Action Plan (DAP)",
                required: true,
                rationale: "The Engineering Council requires proof that you have a plan for your future career.",
                triggers: [
                    "Short term goals (6-12 months): Immediate skill gaps or targeted project roles.", 
                    "Medium term goals (1-2 years): Broader responsibilities or specific technical milestones.", 
                    "Long term goals (2-5 years): Pathway to Fellowship or Senior Leadership."
                ]
            },
            {
                title: "Appendices & Supporting Evidence",
                required: false,
                rationale: "Reference materials to validate your claims without clogging the main text.",
                triggers: ["Calculations excerpts, GA drawings, or P&IDs.", "Risk assessments or project schedules.", "Certificates or published papers."]
            }
        ]
    },
    "ice_review": {
        title: "ICE Professional Review (Project Based)",
        description: "For Civil/Structural Engineers. A project-focused report analysing major infrastructure projects to demonstrate the 7 ICE Attributes.",
        sections: [
            {
                title: "Executive Summary & Project Context",
                required: true,
                rationale: "Defines the scope, scale, and exact responsibility of the applicant in the chosen projects.",
                triggers: ["Overall Contract Value (£), procurement route (e.g., Design & Build), and Client.", "Your specific role, authorities, and reporting lines."]
            },
            {
                title: "Attribute 1: Knowledge & Understanding of Engineering",
                required: true,
                rationale: "Demonstrates deep civil/structural theoretical knowledge.",
                triggers: ["How did you apply structural mechanics, geotechnics, or fluid dynamics theory?", "What novel or complex analytical methods did you utilise?"]
            },
            {
                title: "Attribute 2: Technical & Practical Application",
                required: true,
                rationale: "Shows how theory was translated into buildable construction.",
                triggers: ["Describe the optioneering process and how you selected the final design.", "What specific design codes (e.g., Eurocodes) did you apply and why?"]
            },
            {
                title: "Attribute 3: Management & Leadership",
                required: false,
                rationale: "Evidence of directing resources and leading teams.",
                triggers: ["How did you manage the project programme and critical path?", "Give an example of resolving a dispute or leading a multi-disciplinary team."]
            },
            {
                title: "Attribute 4: Independent Judgement & Responsibility",
                required: false,
                rationale: "Proves you can make tough calls when data is incomplete.",
                triggers: ["Describe a situation where you had to make a technical decision without full information."]
            },
            {
                title: "Attribute 5: Commercial Ability",
                required: false,
                rationale: "Contractual competence and financial control.",
                triggers: ["What form of contract was used (e.g., NEC4, JCT) and what was your role in administering it?"]
            },
            {
                title: "Attribute 6: Health, Safety & Welfare",
                required: true,
                rationale: "Application of CDM Regulations and site safety.",
                triggers: ["How did you apply the Principles of Prevention in your design?", "What were your specific duties under CDM 2015?"]
            },
            {
                title: "Attribute 7: Sustainable Development",
                required: false,
                rationale: "Carbon reduction and environmental stewardship.",
                triggers: ["How did you measure and reduce embodied or operational carbon?"]
            },
            {
                title: "Interpersonal Skills & Communication",
                required: false,
                rationale: "Evidenced throughout, but formalised here.",
                triggers: ["How did you run public consultations or stakeholder engagements?"]
            },
            {
                title: "Professional Commitment & DAP",
                required: true,
                rationale: "Your future as a Chartered Civil Engineer.",
                triggers: [
                    "Summary of CPD activities over the last 3 years.",
                    "Short term goals (6-12 months): Immediate targets.", 
                    "Medium term goals (1-2 years): Mid-level objectives.", 
                    "Long term goals (2-5 years): Strategic career direction."
                ]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 2: DESIGN & ENGINEERING CORE
    // =========================================================================
    "bod_design": {
        title: "Basis of Design (BoD)",
        description: "Foundational multi-disciplinary document defining codes, standards, and assumptions before detailed design begins.",
        sections: [
            {
                title: "Document Scope & Battery Limits",
                required: true,
                rationale: "Defines exactly what the engineering team is responsible for.",
                triggers: ["Physical battery limits (where does the design start/stop).", "Project phases covered (e.g., Concept to FEED)."]
            },
            {
                title: "Site Conditions & Environmental Data",
                required: true,
                rationale: "Defines the physical constraints the design must survive.",
                triggers: ["Site elevation, coordinates, and geotechnical baseline.", "Ambient Temperature range (Min/Max), humidity, and salinity."]
            },
            {
                title: "Statutory Codes & Standards",
                required: true,
                rationale: "The regulatory compliance framework.",
                triggers: ["Mandatory British/European Standards (BS EN).", "Local authority planning conditions and HSE requirements."]
            },
            {
                title: "Design Life, Reliability & Availability",
                required: false,
                rationale: "Establishes long-term performance expectations.",
                triggers: ["Target design life (e.g., 25 years structure, 10 years controls).", "Target Operational Availability (%) and MTBF."]
            },
            {
                title: "Mechanical & Process Parameters",
                required: true,
                rationale: "Core physical engineering constraints.",
                triggers: ["Throughput/Capacity requirements.", "Operating pressures and temperatures."]
            },
            {
                title: "Civil & Structural Parameters",
                required: false,
                rationale: "Foundations and framing constraints.",
                triggers: ["Ground bearing capacity and foundation strategy.", "Structural deflection limits."]
            },
            {
                title: "Electrical & Control Parameters",
                required: false,
                rationale: "Power and automation baseline.",
                triggers: ["Incoming supply voltage and fault levels.", "Control system platform (PLC/SCADA preference)."]
            },
            {
                title: "Utility Requirements",
                required: false,
                rationale: "Energy and feed requirements to keep the system running.",
                triggers: ["Electrical grid connection capacity.", "Compressed air, cooling water, or natural gas supply parameters."]
            },
            {
                title: "Health, Safety & Ergonomics",
                required: true,
                rationale: "Human interaction and risk baseline.",
                triggers: ["Hazardous Area Classification (ATEX/DSEAR).", "Noise emission limits (dBA)."]
            },
            {
                title: "Assumptions & Dependencies",
                required: true,
                rationale: "Protects the engineering team from liability if unknown data changes.",
                triggers: ["List of unverified client data assumed to be true.", "Dependencies on third-party deliverables."]
            }
        ]
    },
    "concept_design": {
        title: "Concept Design Report",
        description: "Initial exploration of potential solutions, structured to prove objective decision making before Capex commitment.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "High-level summary for the Project Sponsor.",
                triggers: ["The core problem.", "The recommended solution.", "Estimated cost and timeline."]
            },
            {
                title: "Design Brief & Problem Statement",
                required: true,
                rationale: "Clearly establishes what is being solved.",
                triggers: ["Summary of User Requirement Specification (URS).", "Absolute 'Must-Have' constraints vs 'Nice-to-Haves'."]
            },
            {
                title: "Legislative & Safety Framework",
                required: true,
                rationale: "Early identification of legal roadblocks.",
                triggers: ["CDM 2015 implications.", "Planning permission requirements."]
            },
            {
                title: "Concept Option A (Base Case / Do Minimum)",
                required: true,
                rationale: "Establishes the baseline for comparison.",
                triggers: ["Technical description.", "Pros and Cons.", "High-level cost estimate."]
            },
            {
                title: "Concept Option B (Alternative Technology)",
                required: false,
                rationale: "A standard engineering alternative.",
                triggers: ["Technical description and sketches.", "Pros and Cons."]
            },
            {
                title: "Concept Evaluation Strategy",
                required: true,
                rationale: "Shows objective, structured selection rather than bias.",
                triggers: ["Evaluation criteria weighting (e.g., Cost 40%, Safety 30%, Speed 30%).", "Pugh Matrix or Kepner-Tregoe scoring."]
            },
            {
                title: "Selected Concept & Justification",
                required: true,
                rationale: "The final decision to proceed to detailed design.",
                triggers: ["Architectural/System Layout sketch of the winner.", "Why it won the matrix."]
            },
            {
                title: "Preliminary Risk Register (HAZID)",
                required: false,
                rationale: "Identifies showstoppers early.",
                triggers: ["Top 5 technical risks.", "Top 5 commercial risks."]
            },
            {
                title: "Next Steps & Resource Requirements",
                required: false,
                rationale: "The ask for the next phase.",
                triggers: ["Budget required to reach Detailed Design.", "Draft programme schedule."]
            }
        ]
    },
    "detailed_design": {
        title: "Detailed Design Report",
        description: "The final technical definition of a solution, providing mathematical proof that the design is safe and ready for manufacture.",
        sections: [
            {
                title: "Introduction & System Overview",
                required: true,
                rationale: "Contextualises the design.",
                triggers: ["Reference to Concept Design / FEED.", "General Arrangement (GA) description."]
            },
            {
                title: "Design Inputs & Assumptions",
                required: true,
                rationale: "The data driving the math.",
                triggers: ["Load cases applied.", "Material properties assumed.", "Operating temperatures/pressures."]
            },
            {
                title: "Mechanical / Structural Calculations",
                required: true,
                rationale: "Mathematical proof of integrity.",
                triggers: ["Stress/Strain calculations.", "Fatigue life analysis."]
            },
            {
                title: "Fluid / Thermal Calculations",
                required: false,
                rationale: "Proof of process performance.",
                triggers: ["Pump sizing and head loss.", "Heat exchanger sizing."]
            },
            {
                title: "Electrical & Control Specification",
                required: false,
                rationale: "Power and logic proof.",
                triggers: ["Cable sizing and volt drop calcs.", "Protection device coordination."]
            },
            {
                title: "Component Selection & BOM",
                required: true,
                rationale: "Justification of purchased parts.",
                triggers: ["Critical Bill of Materials (BOM).", "OEM supplier selection rationale."]
            },
            {
                title: "Manufacturing & Assembly Strategy",
                required: false,
                rationale: "Ensuring the design is actually buildable.",
                triggers: ["Welding specs (WPS) and NDT requirements.", "Tolerances and fits."]
            },
            {
                title: "QA/QC & Inspection Requirements",
                required: false,
                rationale: "How we prove it was built right.",
                triggers: ["Inspection and Test Plan (ITP) requirements.", "Factory Acceptance Test (FAT) criteria."]
            },
            {
                title: "Safety Compliance (CE / UKCA)",
                required: true,
                rationale: "Legal adherence.",
                triggers: ["Machinery Directive compliance.", "Design risk assessment (DRA) summary."]
            },
            {
                title: "Maintenance & Decommissioning Strategy",
                required: false,
                rationale: "Life-cycle engineering.",
                triggers: ["Access for routine maintenance.", "Special tools required."]
            },
            {
                title: "Master Document Register (MDR)",
                required: false,
                rationale: "Index of all associated files.",
                triggers: ["List of 2D manufacturing drawings.", "List of Schematics."]
            }
        ]
    },
    "calc_report": {
        title: "Calculation / Analysis Report",
        description: "A highly focused document proving specific structural, thermal, or load calculations.",
        sections: [
            {
                title: "Objective & Scope",
                required: true,
                rationale: "What is being calculated and why?",
                triggers: ["Component/System being analysed.", "Failure mode being checked (e.g., buckling, yield)."]
            },
            {
                title: "Codes, Standards & Methodology",
                required: true,
                rationale: "The rules of the math.",
                triggers: ["Specific design code (e.g., BS EN 1993 for steel).", "Hand calculation vs Software approach."]
            },
            {
                title: "Inputs, Material Data & Geometry",
                required: true,
                rationale: "Garbage In, Garbage Out.",
                triggers: ["Yield strength, Young's modulus.", "Boundary conditions (fixed, pinned)."]
            },
            {
                title: "Load Cases & Combinations",
                required: true,
                rationale: "What forces are acting on it?",
                triggers: ["Dead loads (self-weight).", "Live loads (dynamic, wind, seismic)."]
            },
            {
                title: "Calculation Body (Primary Analysis)",
                required: true,
                rationale: "The core working out.",
                triggers: ["Free Body Diagrams (FBD).", "Step-by-step mathematical derivation."]
            },
            {
                title: "Software Output & Screenshots",
                required: false,
                rationale: "Visual proof if using tools like MathCAD or STAAD.",
                triggers: ["Key node outputs.", "Deflection plots."]
            },
            {
                title: "Sensitivity & Error Analysis",
                required: false,
                rationale: "What if the inputs are slightly wrong?",
                triggers: ["Impact of +/- 10% load variation.", "Worst-case scenario checks."]
            },
            {
                title: "Results & Utilisation Ratios",
                required: true,
                rationale: "The final verdict.",
                triggers: ["Max stress vs Allowable stress.", "Utilisation ratio (e.g., 0.85 = 85% capacity)."]
            },
            {
                title: "Conclusions & Recommendations",
                required: true,
                rationale: "Engineering judgement on the results.",
                triggers: ["Clear PASS or FAIL statement.", "Optimization opportunities if over-designed."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 3: SIMULATION & AUTOMATION
    // =========================================================================
    "fea_cfd_report": {
        title: "FEA / CFD Analysis Report",
        description: "Verification of complex geometry using Finite Element Analysis or Computational Fluid Dynamics.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "Pass/Fail status for management.",
                triggers: ["Objective of study.", "Minimum Safety Factor found."]
            },
            {
                title: "Objective & Acceptance Criteria",
                required: true,
                rationale: "What defines success?",
                triggers: ["Target stress limit.", "Target pressure drop."]
            },
            {
                title: "Geometry Preparation & Defeaturing",
                required: false,
                rationale: "Simplifying the CAD model.",
                triggers: ["Removal of fillets/chamfers.", "Symmetry used?"]
            },
            {
                title: "Mesh Generation & Independence",
                required: false,
                rationale: "Proving the mesh size doesn't skew results.",
                triggers: ["Element types (Tetrahedral vs Hexahedral).", "Mesh convergence study results."]
            },
            {
                title: "Material Models & Properties",
                required: false,
                rationale: "How the material behaves virtually.",
                triggers: ["Linear elastic vs Non-linear.", "Density and Viscosity.", "Plasticity data."]
            },
            {
                title: "Boundary Conditions & Loads",
                required: true,
                rationale: "How the model is constrained.",
                triggers: ["Fixed supports and frictionless planes.", "Inlet velocity and outlet pressure."]
            },
            {
                title: "Results: Visualisations (Plots)",
                required: true,
                rationale: "The 'pretty pictures' that tell the story.",
                triggers: ["Von Mises Stress contour plots.", "Velocity streamlines."]
            },
            {
                title: "Results: Data Extraction",
                required: false,
                rationale: "The hard numbers.",
                triggers: ["Peak stress locations and values.", "Reaction forces at supports."]
            },
            {
                title: "Validation vs First Principles",
                required: true,
                rationale: "Proving the computer isn't lying.",
                triggers: ["Hand calculation of a simplified section.", "Comparison of hand calc vs FEA result."]
            },
            {
                title: "Conclusions & Design Iterations",
                required: true,
                rationale: "What changes need to be made?",
                triggers: ["Identify stress concentrations.", "Recommend increased radii or thickness."]
            }
        ]
    },
    "fds_control": {
        title: "Functional Design Specification (FDS)",
        description: "Translates mechanical/process needs into precise software logic for Automation/SCADA systems.",
        sections: [
            {
                title: "Introduction & System Scope",
                required: true,
                rationale: "Defines the boundaries of the automation.",
                triggers: ["Process overview.", "Exclusions (what is not automated)."]
            },
            {
                title: "System Hardware Architecture",
                required: true,
                rationale: "Provides the physical topology the software will run on.",
                triggers: ["PLC processor type and firmware.", "Remote IO distribution."]
            },
            {
                title: "Network & Communications",
                required: false,
                rationale: "How devices talk to each other.",
                triggers: ["Topology (Profinet, Ethernet/IP).", "Cybersecurity and VLAN segregation."]
            },
            {
                title: "Operational Modes & States",
                required: true,
                rationale: "Defines how the machine changes states.",
                triggers: ["Auto vs Manual vs Maintenance modes.", "Start-up sequence and Initialization."]
            },
            {
                title: "Sequential Logic & State Machines",
                required: true,
                rationale: "The step-by-step process flow.",
                triggers: ["Step 1: Fill, Step 2: Heat, etc.", "Transition conditions between steps."]
            },
            {
                title: "Continuous Control (PID Loops)",
                required: false,
                rationale: "Modulating control details.",
                triggers: ["Process Variable (PV), Setpoint (SP), Control Variable (CV)."]
            },
            {
                title: "Safety Interlocks & Constraints",
                required: true,
                rationale: "Hard-coded software limits preventing damage.",
                triggers: ["Valve sequencing interlocks.", "Motor start permissives."]
            },
            {
                title: "Alarm Philosophy & Fault Handling",
                required: false,
                rationale: "Determines how the system alerts operators without fatigue.",
                triggers: ["Categorization: Critical Trip vs Warning.", "Alarm debounce timers."]
            },
            {
                title: "HMI / SCADA Interface Design",
                required: false,
                rationale: "Defines the visual interaction point.",
                triggers: ["Screen hierarchy and navigation.", "Colour standards and animations."]
            },
            {
                title: "Failure Modes & Fallback",
                required: false,
                rationale: "What happens when instruments break?",
                triggers: ["Loss of comms behavior.", "Sensor wire-break defaults."]
            }
        ]
    },
    "sad_software": {
        title: "Software Architecture Document (SAD)",
        description: "High-level overview of a software system's structure, APIs, and data flow.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "Overview of the software solution.",
                triggers: ["Business goal.", "High-level technology stack (e.g., React, Node, AWS)."]
            },
            {
                title: "Architectural Goals & Constraints",
                required: true,
                rationale: "The non-functional requirements driving the architecture.",
                triggers: ["Performance targets (e.g., latency under 50ms).", "Security and compliance (e.g., GDPR)."]
            },
            {
                title: "System Context (C4 Model Level 1)",
                required: true,
                rationale: "How the system fits into the world.",
                triggers: ["External actors (Users, 3rd Party APIs).", "System boundary diagram."]
            },
            {
                title: "Logical Architecture (Containers)",
                required: false,
                rationale: "High-level components.",
                triggers: ["Microservices vs Monolith.", "Web App vs Mobile App vs DB."]
            },
            {
                title: "Physical Deployment Architecture",
                required: false,
                rationale: "Where the code actually lives.",
                triggers: ["Cloud provider infrastructure (AWS EC2, S3, RDS).", "CI/CD Pipeline tools."]
            },
            {
                title: "Data Architecture & Storage",
                required: true,
                rationale: "How state is managed.",
                triggers: ["Relational vs NoSQL choices.", "Caching strategy (e.g., Redis)."]
            },
            {
                title: "API & Integration Strategy",
                required: true,
                rationale: "How services communicate.",
                triggers: ["REST vs GraphQL vs gRPC.", "Authentication flow (e.g., OAuth 2.0, JWT)."]
            },
            {
                title: "Security & Threat Mitigation",
                required: false,
                rationale: "Keeping data safe.",
                triggers: ["Encryption at rest and in transit.", "Role-based access control (RBAC)."]
            },
            {
                title: "Performance & Scaling Strategy",
                required: false,
                rationale: "Handling load.",
                triggers: ["Load balancing.", "Horizontal vs Vertical scaling triggers."]
            },
            {
                title: "Error Handling & Logging",
                required: false,
                rationale: "Observability.",
                triggers: ["Monitoring tools (e.g., Datadog, ELK).", "Alerting thresholds."]
            }
        ]
    },
    "api_docs": {
        title: "API Documentation",
        description: "Standardised documentation for RESTful or GraphQL integrations.",
        sections: [
            {
                title: "API Overview & Base URL",
                required: true,
                rationale: "Where to send requests.",
                triggers: ["Production vs Staging URLs.", "Version control strategy (e.g., /v1/)."]
            },
            {
                title: "Authentication & Authorization",
                required: true,
                rationale: "How to gain access.",
                triggers: ["API Keys vs OAuth.", "Token expiration and refresh flows."]
            },
            {
                title: "Rate Limiting & Quotas",
                required: false,
                rationale: "Preventing abuse.",
                triggers: ["Requests per minute.", "HTTP headers indicating remaining quota."]
            },
            {
                title: "Standard Request Format",
                required: true,
                rationale: "Data shape.",
                triggers: ["Content-Type required (e.g., application/json).", "Standard required headers."]
            },
            {
                title: "Standard Response Format",
                required: true,
                rationale: "What to expect back.",
                triggers: ["Pagination structure.", "Standard payload wrapper."]
            },
            {
                title: "Error Codes & Handling",
                required: false,
                rationale: "Troubleshooting.",
                triggers: ["4xx vs 5xx meaning in this context.", "Custom error code dictionary."]
            },
            {
                title: "Endpoint: GET Resources",
                required: true,
                rationale: "Retrieving data.",
                triggers: ["Path parameters.", "Query parameters (filtering, sorting)."]
            },
            {
                title: "Endpoint: POST/PUT Resources",
                required: true,
                rationale: "Modifying data.",
                triggers: ["Required body fields.", "Validation rules."]
            },
            {
                title: "Code Examples",
                required: false,
                rationale: "Developer experience.",
                triggers: ["cURL snippet.", "Python/JS integration examples."]
            },
            {
                title: "Changelog & Deprecation Notices",
                required: false,
                rationale: "Managing lifecycle.",
                triggers: ["Upcoming breaking changes.", "Sunsetting timelines."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 4: MANUFACTURING, OPERATIONS & SITE WORK
    // =========================================================================
    "iom_manual": {
        title: "IOM Manual (Installation, Operation, Maintenance)",
        description: "Standard technical manual required for Machinery Directive / UKCA Compliance.",
        sections: [
            {
                title: "Introduction & Contacts",
                required: true,
                rationale: "Manufacturer details and document scope.",
                triggers: ["Manufacturer address and support line.", "Equipment serial numbers covered."]
            },
            {
                title: "Declaration of Conformity & Safety",
                required: true,
                rationale: "Legal requirement and risk warning.",
                triggers: ["CE / UKCA Declaration.", "Mandatory PPE.", "Intended use vs Foreseeable misuse."]
            },
            {
                title: "Technical Specifications",
                required: false,
                rationale: "Operating limits.",
                triggers: ["Dimensions and weight.", "Electrical/Pneumatic ratings."]
            },
            {
                title: "Handling, Transport & Storage",
                required: false,
                rationale: "Getting it to site safely.",
                triggers: ["Lifting points and Centre of Gravity.", "Forklift guides."]
            },
            {
                title: "Installation & Commissioning",
                required: false,
                rationale: "Setup instructions.",
                triggers: ["Foundation/Anchoring requirements.", "Utility connections (Power, Air, Water)."]
            },
            {
                title: "Operating Instructions",
                required: true,
                rationale: "Day-to-day use.",
                triggers: ["HMI navigation.", "Starting and stopping procedures.", "Emergency stop recovery."]
            },
            {
                title: "Preventative Maintenance",
                required: true,
                rationale: "Keeping it alive.",
                triggers: ["Daily/Weekly/Monthly schedules.", "Lubrication points and grease types."]
            },
            {
                title: "Troubleshooting & Fault Finding",
                required: true,
                rationale: "Minimising downtime.",
                triggers: ["Alarm code list.", "Symptom -> Cause -> Solution matrix."]
            },
            {
                title: "Recommended Spares & BOM",
                required: false,
                rationale: "Ordering parts.",
                triggers: ["Consumables list.", "Critical strategic spares."]
            },
            {
                title: "Decommissioning & Disposal",
                required: false,
                rationale: "End of life handling.",
                triggers: ["Safe energy isolation (LOTO).", "Recycling guidelines."]
            }
        ]
    },
    "fat_protocol": {
        title: "Factory Acceptance Test (FAT) Protocol",
        description: "Formal validation document to prove equipment meets the FDS and PO requirements before shipping to site.",
        sections: [
            {
                title: "Introduction & Test Objectives",
                required: true,
                rationale: "Sets the rules of the test.",
                triggers: ["Reference to PO and URS.", "Attendees required (Client, QA, Engineering)."]
            },
            {
                title: "Pre-requisites & Safety",
                required: true,
                rationale: "Checks before power is applied.",
                triggers: ["Calibration certificates for test equipment.", "Area made safe."]
            },
            {
                title: "Documentation Review",
                required: false,
                rationale: "Checking the paperwork matches the build.",
                triggers: ["As-built drawings check.", "Material certificates (e.g., 3.1 certs) present."]
            },
            {
                title: "Visual & Mechanical Inspection",
                required: false,
                rationale: "Build quality check.",
                triggers: ["Overall dimensions match GA.", "Paint/Finish quality."]
            },
            {
                title: "Electrical & I/O Loop Checks",
                required: false,
                rationale: "Wiring verification.",
                triggers: ["Earth continuity test.", "Panel layout matches schematic."]
            },
            {
                title: "Safety System Verification",
                required: true,
                rationale: "Proving the machine is safe.",
                triggers: ["E-Stop button tests (drops power).", "Guard door interlock tests."]
            },
            {
                title: "Functional Sequence Testing",
                required: true,
                rationale: "Dry running the logic.",
                triggers: ["Auto mode start sequence.", "Verify interlocks block illegal moves."]
            },
            {
                title: "Performance / Load Testing",
                required: false,
                rationale: "Proving it does the job.",
                triggers: ["Run at 100% capacity.", "Measure throughput/speed."]
            },
            {
                title: "Punchlist (Defect Log)",
                required: false,
                rationale: "Recording what needs fixing.",
                triggers: ["Category A faults (Must fix before ship).", "Category B faults (Can fix on site)."]
            },
            {
                title: "Formal Sign-Off",
                required: true,
                rationale: "Commercial release.",
                triggers: ["Client signature.", "Manufacturer signature.", "Conditional vs Unconditional pass."]
            }
        ]
    },
    "rams_method": {
        title: "RAMS (Risk Assessment & Method Statement)",
        description: "The essential Health & Safety document for site work, construction, maintenance, and installation.",
        sections: [
            {
                title: "Project Information & Contacts",
                required: true,
                rationale: "Who, Where, When.",
                triggers: ["Site Address and Principal Contractor.", "Site Supervisor contact details."]
            },
            {
                title: "Scope of Works",
                required: true,
                rationale: "Clear definition of the task.",
                triggers: ["Brief description of the activity.", "Exclusions (what we are NOT doing)."]
            },
            {
                title: "Personnel & Competency",
                required: false,
                rationale: "Proving the team is qualified.",
                triggers: ["Required tickets (CSCS, IPAF, PASMA, SSSTS).", "First aider identified."]
            },
            {
                title: "PPE Requirements",
                required: true,
                rationale: "Last line of defence.",
                triggers: ["Mandatory 5-point PPE.", "Task-specific (Harnesses, Visors, Respirators)."]
            },
            {
                title: "Hazard Identification (Risk Assessment)",
                required: true,
                rationale: "Identifying what can go wrong.",
                triggers: ["Working at height, live electricity, moving plant.", "Specific Control Measures applied."]
            },
            {
                title: "Sequence of Works (Method Statement)",
                required: true,
                rationale: "The step-by-step safe guide.",
                triggers: ["Step 1: Site Induction and Permit to Work.", "Step 2: Establish exclusion zones.", "Detailed execution steps."]
            },
            {
                title: "Emergency Procedures",
                required: false,
                rationale: "What to do when things go wrong.",
                triggers: ["Location of nearest hospital.", "Spill kit locations."]
            },
            {
                title: "Environmental Protection",
                required: false,
                rationale: "Site ecology.",
                triggers: ["Waste disposal plan.", "Noise/Dust control."]
            },
            {
                title: "Briefing Register (Sign-off)",
                required: true,
                rationale: "Legal proof the team read it.",
                triggers: ["Operative signatures.", "Date of briefing.", "Supervisor sign-off."]
            }
        ]
    },
    "safety_incident": {
        title: "Safety Incident / Near Miss Report",
        description: "Formal logging of a health and safety incident to comply with HSE/RIDDOR requirements.",
        sections: [
            {
                title: "Incident Overview",
                required: true,
                rationale: "High-level summary for HSE.",
                triggers: ["Date, time, and exact location.", "Classification (Near Miss, Minor Injury, LTI, RIDDOR)."]
            },
            {
                title: "Injured Party Details",
                required: true,
                rationale: "Personnel tracking.",
                triggers: ["Name and occupation.", "Nature of injury (if applicable)."]
            },
            {
                title: "Detailed Description of Event",
                required: true,
                rationale: "Factual recounting of what happened.",
                triggers: ["Sequence of events leading up to the incident.", "Environmental conditions at the time."]
            },
            {
                title: "Immediate Action Taken",
                required: false,
                rationale: "First aid and containment.",
                triggers: ["First aid administered.", "Area quarantined or made safe."]
            },
            {
                title: "Witness Statements",
                required: false,
                rationale: "Corroborating evidence.",
                triggers: ["Names of witnesses.", "Summary of their accounts."]
            },
            {
                title: "Root Cause Analysis (Brief)",
                required: true,
                rationale: "Why it happened.",
                triggers: ["Failure of equipment vs human error vs process failure.", "Was a RAMS/Permit in place and followed?"]
            },
            {
                title: "Corrective & Preventative Actions (CAPA)",
                required: true,
                rationale: "Stopping it happening again.",
                triggers: ["Immediate fixes.", "Long-term procedural changes.", "Action owners."]
            },
            {
                title: "Photographic Evidence",
                required: false,
                rationale: "Visual context.",
                triggers: ["Photos of the scene.", "Photos of failed equipment."]
            },
            {
                title: "Management Sign-Off",
                required: true,
                rationale: "Closing the loop.",
                triggers: ["H&S Manager signature.", "Date reported to external bodies (if RIDDOR)."]
            }
        ]
    },
    "site_survey": {
        title: "Site Survey Report",
        description: "Documentation of existing site conditions prior to design or construction commencing.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "Overview of site viability.",
                triggers: ["Site address.", "Main conclusions (e.g., suitable for development)."]
            },
            {
                title: "Survey Objectives & Scope",
                required: true,
                rationale: "Why we went to site.",
                triggers: ["Client brief.", "Limitations of the survey (e.g., visual inspection only, no intrusive works)."]
            },
            {
                title: "Site Location & Topography",
                required: false,
                rationale: "Physical mapping.",
                triggers: ["Site boundaries.", "Gradients and access routes."]
            },
            {
                title: "Existing Structures Assessment",
                required: false,
                rationale: "Condition of current assets.",
                triggers: ["Condition of building fabric.", "Signs of subsidence or structural distress."]
            },
            {
                title: "MEP Services Assessment",
                required: false,
                rationale: "Utilities check.",
                triggers: ["Location of incoming power, water, gas.", "Condition of existing distribution boards."]
            },
            {
                title: "Environmental & Ecological Factors",
                required: false,
                rationale: "Nature constraints.",
                triggers: ["Presence of asbestos.", "Protected trees/species.", "Flood risk indicators."]
            },
            {
                title: "Health, Safety & Access Risks",
                required: false,
                rationale: "Logistical challenges.",
                triggers: ["Restricted headroom.", "Traffic management requirements for future plant."]
            },
            {
                title: "Photographic Log",
                required: true,
                rationale: "Visual proof.",
                triggers: ["Key defects photographed.", "General panoramic views."]
            },
            {
                title: "Conclusions & Recommendations",
                required: true,
                rationale: "Next steps for the client.",
                triggers: ["Remedial works required immediately.", "Further intrusive surveys recommended (e.g., geotechnical)."]
            }
        ]
    },
    "elec_design": {
        title: "Electrical Design Description",
        description: "Core technical document outlining power distribution, loading, and protection strategies.",
        sections: [
            {
                title: "Introduction & Scope",
                required: true,
                rationale: "Defines the electrical boundary.",
                triggers: ["System overview.", "Design codes applied (e.g., BS 7671)."]
            },
            {
                title: "Maximum Demand & Load Profile",
                required: true,
                rationale: "How much power is needed.",
                triggers: ["Total connected load (kW/kVA).", "Diversity factors applied.", "Estimated maximum demand."]
            },
            {
                title: "Incoming Supply & Earthing",
                required: true,
                rationale: "The grid connection.",
                triggers: ["Supply voltage and frequency.", "Earthing arrangement (TN-C-S, TT, etc.).", "Prospective fault current (Ipf)."]
            },
            {
                title: "Main Distribution Architecture",
                required: true,
                rationale: "How power moves through the building.",
                triggers: ["Switchgear locations.", "Busbar vs Cable strategy.", "UPS and Generator backup integration."]
            },
            {
                title: "Cable Sizing Methodology",
                required: false,
                rationale: "Proving wires won't melt.",
                triggers: ["Installation methods assumed.", "Voltage drop limits applied.", "Thermal constraints."]
            },
            {
                title: "Protection & Discrimination",
                required: true,
                rationale: "Safety tripping hierarchy.",
                triggers: ["MCB/MCCB selection.", "RCD/RCBO philosophy for personnel protection.", "Selectivity (ensuring only the local breaker trips)."]
            },
            {
                title: "Lighting & Emergency Lighting",
                required: false,
                rationale: "Illumination design.",
                triggers: ["Target lux levels.", "Control strategy (PIR, DALI).", "Emergency escape route compliance."]
            },
            {
                title: "Fire Alarm & Security Systems",
                required: false,
                rationale: "Life safety integrations.",
                triggers: ["Fire alarm category (e.g., L1, L2).", "CCTV and Access Control overview."]
            },
            {
                title: "Equipment Schedules",
                required: false,
                rationale: "Summary tables.",
                triggers: ["Distribution Board schedules.", "Cable schedules."]
            }
        ]
    },
    "process_desc": {
        title: "Process Description (Context for P&ID)",
        description: "Narrative explanation of how a chemical or physical process operates, accompanying the P&ID drawings.",
        sections: [
            {
                title: "Process Objective",
                required: true,
                rationale: "What is the plant trying to achieve?",
                triggers: ["Main product output.", "Desired production rate/capacity."]
            },
            {
                title: "Feedstock & Raw Materials",
                required: true,
                rationale: "What goes in.",
                triggers: ["Chemical composition of feed.", "Required inlet temperature and pressure."]
            },
            {
                title: "Chemistry & Physical Principles",
                required: false,
                rationale: "The science behind the process.",
                triggers: ["Main chemical reactions.", "Exothermic vs Endothermic behavior.", "Phase changes (e.g., boiling, condensing)."]
            },
            {
                title: "Unit Operations Narrative",
                required: true,
                rationale: "Step-by-step flow.",
                triggers: ["Step 1: Feed preparation.", "Step 2: Reaction.", "Step 3: Separation/Filtration."]
            },
            {
                title: "Mass & Energy Balance Summary",
                required: false,
                rationale: "Proving the thermodynamics.",
                triggers: ["Yield percentages.", "Heat duties required (kW/MW)."]
            },
            {
                title: "Process Control Philosophy",
                required: true,
                rationale: "How operators keep it stable.",
                triggers: ["Key control loops (e.g., level control in a tank).", "Critical setpoints.", "Cascade or ratio control strategies."]
            },
            {
                title: "Utility Requirements",
                required: false,
                rationale: "Services needed.",
                triggers: ["Cooling water demand.", "Steam demand.", "Instrument air pressure."]
            },
            {
                title: "Waste, Effluent & Emissions",
                required: false,
                rationale: "Environmental compliance.",
                triggers: ["Gas flaring or scrubbing.", "Wastewater treatment requirements.", "Solid waste disposal."]
            },
            {
                title: "Safety & Relief Systems",
                required: true,
                rationale: "Overpressure protection.",
                triggers: ["PSV (Pressure Safety Valve) locations and sizing basis.", "Rupture discs.", "Blowdown systems."]
            }
        ]
    },
    "failure_rca": {
        title: "Root Cause Failure Analysis (RCA)",
        description: "Investigate mechanical/system incidents using 5-Whys and Fishbone to prevent recurrence.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "High-level overview for management.",
                triggers: ["What failed?", "What was the core root cause?"]
            },
            {
                title: "Problem Description & Context",
                required: true,
                rationale: "Setting the scene.",
                triggers: ["Equipment ID and location.", "Operating conditions at the time of failure."]
            },
            {
                title: "Timeline of Events",
                required: false,
                rationale: "Chronological mapping.",
                triggers: ["T-minus 24 hours.", "The exact moment of failure."]
            },
            {
                title: "Damage Assessment",
                required: false,
                rationale: "Physical evidence.",
                triggers: ["Photographic log.", "Parts deformed, sheared, or burnt."]
            },
            {
                title: "Fault Tree / Fishbone Analysis",
                required: false,
                rationale: "Brainstorming all possible causes.",
                triggers: ["Man (Operator error?).", "Machine (Design flaw?).", "Method (Wrong procedure?).", "Material (Defective batch?)."]
            },
            {
                title: "The 5-Whys Analysis",
                required: true,
                rationale: "Drilling down to the systemic issue.",
                triggers: ["Why 1: The bearing seized.", "Why 2: Lack of lubrication.", "Why 3, 4, 5..."]
            },
            {
                title: "Root Cause Identification",
                required: true,
                rationale: "The final conclusion.",
                triggers: ["Primary Root Cause (Systemic).", "Contributing factors (Secondary)."]
            },
            {
                title: "Immediate Containment Actions",
                required: false,
                rationale: "How did we stop the bleeding?",
                triggers: ["Temporary repairs.", "Quarantine of suspect batches."]
            },
            {
                title: "Corrective & Preventative Actions (CAPA)",
                required: true,
                rationale: "Ensuring it never happens again.",
                triggers: ["Engineering out the risk (Design change).", "Updating PM schedules.", "Assigning action owners and deadlines."]
            },
            {
                title: "Lessons Learnt & Dissemination",
                required: false,
                rationale: "Sharing knowledge.",
                triggers: ["Toolbox talk requirements.", "Updates to design standards."]
            }
        ]
    },

    // =========================================================================
    // CATEGORY 5: BUSINESS & STRATEGY
    // =========================================================================
    "pid_project": {
        title: "Project Initiation Document (PID)",
        description: "The Prince2/PMBOK standard document to formally authorize a project and define its baseline.",
        sections: [
            {
                title: "Project Purpose & Background",
                required: true,
                rationale: "Why are we doing this?",
                triggers: ["Business driver (e.g., obsolescence, market expansion).", "Link to corporate strategy."]
            },
            {
                title: "Project Objectives & Success Criteria",
                required: true,
                rationale: "What defines success.",
                triggers: ["SMART objectives.", "KPIs that will measure success."]
            },
            {
                title: "Project Scope & Exclusions",
                required: true,
                rationale: "Boundaries.",
                triggers: ["What is definitively in scope.", "What is explicitly out of scope (to prevent scope creep)."]
            },
            {
                title: "Deliverables & Work Breakdown Structure",
                required: false,
                rationale: "What will be produced.",
                triggers: ["Key physical assets.", "Key documentation deliverables."]
            },
            {
                title: "Project Organisation & Governance",
                required: true,
                rationale: "Who is in charge.",
                triggers: ["Project Sponsor/Executive.", "Project Manager.", "Steering Committee members."]
            },
            {
                title: "Initial Business Case & Budget",
                required: true,
                rationale: "The money.",
                triggers: ["Approved CapEx.", "ROI expectations.", "Funding source."]
            },
            {
                title: "High-Level Project Plan / Milestones",
                required: false,
                rationale: "The timeline.",
                triggers: ["Target start date.", "Key phase gates (e.g., Complete Design, Complete Build).", "Target Go-Live."]
            },
            {
                title: "Risk & Issue Management Strategy",
                required: false,
                rationale: "Controlling the unknown.",
                triggers: ["Top 3 initial project risks.", "How risk registers will be maintained."]
            },
            {
                title: "Communication & Stakeholder Plan",
                required: false,
                rationale: "Keeping people informed.",
                triggers: ["Key stakeholders.", "Reporting frequency (Weekly/Monthly)."]
            }
        ]
    },
    "sow_project": {
        title: "Scope of Work (SoW)",
        description: "A contractual document defining exactly what a contractor or supplier must deliver.",
        sections: [
            {
                title: "Executive Summary & Background",
                required: true,
                rationale: "Context for the supplier.",
                triggers: ["Brief project overview.", "Location of the works."]
            },
            {
                title: "Detailed Scope of Supply (Goods/Services)",
                required: true,
                rationale: "The core contractual obligation.",
                triggers: ["Exact hardware to be supplied.", "Exact services to be rendered (e.g., installation, commissioning)."]
            },
            {
                title: "Exclusions (Out of Scope)",
                required: true,
                rationale: "Preventing disputes.",
                triggers: ["What the Client will provide (e.g., free-issue materials, power).", "What the Contractor is NOT responsible for."]
            },
            {
                title: "Technical Specifications & Standards",
                required: false,
                rationale: "The quality level required.",
                triggers: ["Relevant British Standards.", "Client-specific drawing or welding standards."]
            },
            {
                title: "Deliverables & Documentation",
                required: true,
                rationale: "The paperwork required for handover.",
                triggers: ["O&M Manuals.", "Test Certificates.", "As-Built drawings."]
            },
            {
                title: "Schedule & Milestones",
                required: true,
                rationale: "Time constraints.",
                triggers: ["Required delivery date.", "Penalty clauses/Liquidated damages applicability."]
            },
            {
                title: "Acceptance Criteria",
                required: true,
                rationale: "How we know it's finished.",
                triggers: ["FAT/SAT parameters.", "Performance guarantees (e.g., must hit 50 units/min)."]
            },
            {
                title: "Payment Terms & Commercials",
                required: false,
                rationale: "How they get paid.",
                triggers: ["Milestone payments (e.g., 30% upfront, 60% delivery, 10% handover).", "Warranty retention period."]
            },
            {
                title: "Health, Safety & Site Rules",
                required: false,
                rationale: "Working on the client site.",
                triggers: ["Induction requirements.", "Working hours.", "CDM 2015 roles (e.g., are they Principal Contractor?)."]
            }
        ]
    },
    "business_case": {
        title: "Business Case / CAPEX Proposal",
        description: "Financial and strategic justification required to unlock capital expenditure for a project.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "The pitch for the board.",
                triggers: ["The problem.", "The requested investment amount.", "The expected ROI."]
            },
            {
                title: "Strategic Context & Problem Statement",
                required: true,
                rationale: "Why this matters now.",
                triggers: ["Current pain points (e.g., equipment failing, losing market share).", "Alignment with company goals."]
            },
            {
                title: "Options Appraisal",
                required: true,
                rationale: "Proving you considered alternatives.",
                triggers: ["Option 1: Do nothing (baseline).", "Option 2: Refurbish existing.", "Option 3: Replace with new."]
            },
            {
                title: "Financial Analysis & ROI",
                required: true,
                rationale: "The numbers.",
                triggers: ["Total CapEx required.", "OpEx impact (savings or increases).", "Payback period (years) or NPV/IRR."]
            },
            {
                title: "Non-Financial Benefits",
                required: false,
                rationale: "Soft benefits.",
                triggers: ["Health & Safety improvements.", "Carbon/ESG footprint reduction.", "Staff morale."]
            },
            {
                title: "Risk Assessment",
                required: false,
                rationale: "What could derail the investment.",
                triggers: ["Delivery risks (e.g., supply chain delays).", "Mitigation strategies."]
            },
            {
                title: "Delivery & Implementation Strategy",
                required: false,
                rationale: "How it will happen if approved.",
                triggers: ["High-level schedule.", "Internal resources required."]
            },
            {
                title: "Recommendation & Sign-off",
                required: true,
                rationale: "The ask.",
                triggers: ["Clear statement of the preferred option.", "Signature blocks for Financial Director / Sponsor."]
            }
        ]
    },
    "tender_proposal": {
        title: "Tender Proposal / Bid",
        description: "A formal response to a client's Request for Quotation (RFQ) or Invitation to Tender (ITT).",
        sections: [
            {
                title: "Cover Letter & Executive Summary",
                required: true,
                rationale: "First impressions.",
                triggers: ["Thanks for the opportunity.", "High-level summary of why we are the best fit.", "Total bid price."]
            },
            {
                title: "Company Profile & Experience",
                required: false,
                rationale: "Building trust.",
                triggers: ["Years in business.", "Relevant case studies or previous projects.", "Key team members and CVs."]
            },
            {
                title: "Technical Solution & Methodology",
                required: true,
                rationale: "How we will solve the problem.",
                triggers: ["Detailed description of the proposed engineering solution.", "Equipment to be used.", "Why this approach is superior."]
            },
            {
                title: "Project Programme (Schedule)",
                required: true,
                rationale: "When it will be done.",
                triggers: ["Gantt chart overview.", "Key milestones.", "Lead times for major equipment."]
            },
            {
                title: "Quality Assurance & Compliance",
                required: false,
                rationale: "Proving competence.",
                triggers: ["ISO 9001 certification.", "Testing and commissioning approach (FAT/SAT)."]
            },
            {
                title: "Health, Safety & Environment",
                required: false,
                rationale: "Site safety.",
                triggers: ["ISO 45001/14001 status.", "Safety record (e.g., zero LTIs).", "Draft RAMS overview."]
            },
            {
                title: "Commercial Offer & Pricing Breakdown",
                required: true,
                rationale: "The cost.",
                triggers: ["Itemised pricing.", "Day rates for variations.", "Validity period of the quote."]
            },
            {
                title: "Clarifications & Exceptions",
                required: true,
                rationale: "Protecting margins.",
                triggers: ["Deviations from the client's spec.", "Assumptions made in pricing (e.g., working hours)."]
            },
            {
                title: "Terms and Conditions",
                required: false,
                rationale: "Legal boundaries.",
                triggers: ["Standard terms of sale.", "Payment milestones.", "Warranty period."]
            }
        ]
    },
    "feasibility_study": {
        title: "Feasibility / Optioneering Study",
        description: "Early-stage assessment to determine if a project is technically and commercially viable.",
        sections: [
            {
                title: "Executive Summary",
                required: true,
                rationale: "Go/No-Go recommendation.",
                triggers: ["Brief project concept.", "Is it viable?", "Recommended next steps."]
            },
            {
                title: "Background & Objectives",
                required: true,
                rationale: "Context.",
                triggers: ["Market or operational drivers.", "What the study aims to answer."]
            },
            {
                title: "Technical Feasibility",
                required: true,
                rationale: "Can it be built?",
                triggers: ["Technology readiness level (TRL).", "Physical space constraints.", "Utility/Power availability."]
            },
            {
                title: "Commercial / Economic Feasibility",
                required: true,
                rationale: "Does it make money?",
                triggers: ["Order of Magnitude cost estimate (+/- 50%).", "Market demand or internal savings.", "High-level ROI."]
            },
            {
                title: "Operational Feasibility",
                required: false,
                rationale: "Can we run it?",
                triggers: ["Impact on current operations during build.", "Maintenance requirements.", "Staff training needed."]
            },
            {
                title: "Legal & Regulatory Feasibility",
                required: false,
                rationale: "Are we allowed to build it?",
                triggers: ["Planning permissions.", "Environmental permits.", "Patent/IP conflicts."]
            },
            {
                title: "Schedule Feasibility",
                required: false,
                rationale: "Can it be done in time?",
                triggers: ["Critical path analysis.", "Supply chain bottlenecks."]
            },
            {
                title: "Risk Assessment",
                required: false,
                rationale: "Showstoppers.",
                triggers: ["Top 5 project risks.", "Fatal flaw analysis."]
            },
            {
                title: "Conclusion & Recommendations",
                required: true,
                rationale: "The verdict.",
                triggers: ["Clear statement of viability.", "Recommendation to proceed to Concept Design or abandon."]
            }
        ]
    }
};