/*
 * EMPOWERING ENGINEERS UK - CPD INTELLIGENCE DATABASE [v5.1]
 * Aligned with UK-SPEC 4th Edition
 * Disciplines: General, Mechanical, Electrical, Civil, Software, Process, Building Services, Structural
 */

const cpdDb = {
    // --- A: KNOWLEDGE & UNDERSTANDING ---
    "a1": {
        "CEng": {
            "General": "Lead a review of emerging industry standards and integrate them into company policy.",
            "Mechanical": "Evaluate emerging thermodynamics or materials research for future product lines.",
            "Civil": "Critique changes to Eurocodes/ISO standards and brief the design team.",
            "Software": "Research new architectural patterns (e.g. Microservices) for scalability.",
            "BuildingServices": "Evaluate Part L/Z building regulation changes and impact on HVAC strategy.",
            "Structural": "Review latest research on low-carbon concrete alternatives and update specs."
        },
        "IEng": {
            "General": "Identify a new technology and pilot its application in a specific area.",
            "Mechanical": "Learn and apply a new CAD module or simulation technique.",
            "Software": "Master a new framework (e.g. React/Angular) and apply to a module.",
            "BuildingServices": "Apply CIBSE Guide A standards to a specific ventilation calculation.",
            "Structural": "Master a new analysis software module (e.g. Robot/Tekla) for connection design."
        },
        "EngTech": {
            "General": "Deepen knowledge of current equipment manuals and troubleshooting guides.",
            "Mechanical": "Complete advanced training on CNC operation or pump maintenance.",
            "BuildingServices": "Learn the specific maintenance schedule for a new AHU unit.",
            "Structural": "Understand the detailing requirements for standard rebar arrangements."
        }
    },
    "a2": {
        "CEng": {
            "General": "Use first principles to solve a novel problem.",
            "Mechanical": "Derive a custom stress formula for a non-standard part.",
            "Civil": "Model complex soil-structure interaction.",
            "Software": "Design a custom algorithm for data compression.",
            "BuildingServices": "Model complex thermal movements using dynamic simulation (IES/Tas).",
            "Structural": "Derive a solution for a complex load path transfer structure."
        },
        "IEng": {
            "General": "Adapt an existing solution to a new context.",
            "Mechanical": "Modify a gearbox for a different RPM.",
            "Software": "Port a legacy module to a new language.",
            "BuildingServices": "Resize an existing ductwork layout for a fit-out change.",
            "Structural": "Adapt a standard steel connection detail for a unique geometry."
        },
        "EngTech": {
            "General": "Troubleshoot a fault using diagnostic tools.",
            "Mechanical": "Replace worn bearings based on vibration data.",
            "BuildingServices": "Diagnose a fault in a VAV box using a multimeter.",
            "Structural": "Identify a discrepancy between the drawing and site rebar."
        }
    },

    // --- B: DESIGN & SOLUTION ---
    "b1": {
        "CEng": {
            "General": "Identify a systemic risk or commercial opportunity.",
            "Mechanical": "Identify a fatigue risk in a fleet-wide asset.",
            "Software": "Identify a scalability bottleneck in the architecture.",
            "BuildingServices": "Identify a risk of overheating in a façade design early in Stage 2.",
            "Structural": "Identify a potential disproportionate collapse risk in the concept phase."
        },
        "IEng": {
            "General": "Identify a bottleneck in the production/construction process.",
            "Mechanical": "Spot a recurring pump failure pattern.",
            "BuildingServices": "Identify a clash between pipework and structural beams.",
            "Structural": "Identify a constructability issue with a proposed foundation detail."
        },
        "EngTech": {
            "General": "Report a hazard or defect immediately.",
            "Mechanical": "Report a leaking seal during inspection.",
            "BuildingServices": "Report a blocked filter or noisy fan.",
            "Structural": "Report honeycombing in concrete after formwork removal."
        }
    },
    "b2": {
        "CEng": {
            "General": "Approve a complex design change.",
            "Mechanical": "Sign off on a high-pressure vessel modification.",
            "Software": "Approve the API schema for external partners.",
            "BuildingServices": "Approve the site-wide energy strategy and BMS logic.",
            "Structural": "Sign off on the global stability analysis model."
        },
        "IEng": {
            "General": "Design a modification to an existing system.",
            "Mechanical": "Design a new mounting bracket for a sensor.",
            "BuildingServices": "Design a secondary duct run or lighting circuit.",
            "Structural": "Design a temporary propping sequence for a wall removal."
        },
        "EngTech": {
            "General": "Contribute to the design review process.",
            "Mechanical": "Suggest a better location for a grease nipple.",
            "BuildingServices": "Suggest a more accessible location for a valve.",
            "Structural": "Suggest a change to rebar spacing for easier pouring."
        }
    },
    "b3": {
        "CEng": {
            "General": "Oversee the commissioning of a major asset.",
            "Mechanical": "Lead the FAT for a gas turbine.",
            "Software": "Manage the rollout of v2.0 to production.",
            "BuildingServices": "Witness the integration testing of the fire alarm and HVAC systems.",
            "Structural": "Oversee the load testing of a pile or structural element."
        },
        "IEng": {
            "General": "Supervise the installation team.",
            "Mechanical": "Supervise the alignment of a compressor train.",
            "BuildingServices": "Supervise the pressure testing of pipework.",
            "Structural": "Inspect the reinforcement pre-pour against the schedule."
        },
        "EngTech": {
            "General": "Perform the installation task.",
            "Mechanical": "Torque the flange bolts to spec.",
            "BuildingServices": "Install the sensor and terminate the cable.",
            "Structural": "Install the resin anchor bolts to the correct depth."
        }
    },

    // --- C: LEADERSHIP & MANAGEMENT ---
    "c1": {
        "CEng": {
            "General": "Develop the project strategy and master schedule.",
            "Mechanical": "Plan the 5-year asset lifecycle strategy.",
            "BuildingServices": "Develop the phasing strategy for a live-building plant replacement.",
            "Structural": "Define the construction sequence for a complex high-rise."
        },
        "IEng": {
            "General": "Plan the resource allocation for the week.",
            "Mechanical": "Schedule the shutdown maintenance tasks.",
            "BuildingServices": "Schedule the commissioning activities for a specific floor.",
            "Structural": "Coordinate the delivery of steelwork with the crane availability."
        },
        "EngTech": {
            "General": "Organise your own workspace and tools.",
            "Mechanical": "Prepare tools before the permit is issued.",
            "BuildingServices": "Ensure ladders and permits are ready for the job.",
            "Structural": "Ensure the correct fixing kits are on site."
        }
    },
    "c2": {
        "CEng": {
            "General": "Secure budget for a major CAPEX project.",
            "Mechanical": "Build the business case for a new CNC machine.",
            "BuildingServices": "Negotiate the variation account for the M&E package.",
            "Structural": "Manage the commercial risk of steel price fluctuations."
        },
        "IEng": {
            "General": "Manage the project budget to avoid overspend.",
            "Mechanical": "Track spare parts costs against budget.",
            "BuildingServices": "Track cable containment usage against the tender allowance.",
            "Structural": "Monitor concrete volume usage against the estimate."
        },
        "EngTech": {
            "General": "Minimise waste of consumables.",
            "Mechanical": "Reuse workable gaskets where safe.",
            "BuildingServices": "Don't waste copper pipe or cable offcuts.",
            "Structural": "Ensure resin cartridges are not wasted."
        }
    },
    "c3": {
        "CEng": {
            "General": "Mentor staff and define team culture.",
            "Mechanical": "Lead the mechanical discipline team.",
            "BuildingServices": "Lead the MEP coordination meetings with architects.",
            "Structural": "Lead the structural discipline review meetings."
        },
        "IEng": {
            "General": "Supervise a small team of technicians.",
            "Mechanical": "Lead the night-shift maintenance crew.",
            "BuildingServices": "Supervise the electrical sub-contractors on site.",
            "Structural": "Supervise the steel erection gang."
        },
        "EngTech": {
            "General": "Help a new apprentice learn the ropes.",
            "Mechanical": "Show the apprentice how to use a micrometer.",
            "BuildingServices": "Teach an apprentice how to terminate a panel.",
            "Structural": "Show a labourer how to install a rawlbolt."
        }
    },
    "c4": {
        "CEng": {
            "General": "Audit the Quality Management System (QMS).",
            "Mechanical": "Rewrite the welding quality specs.",
            "BuildingServices": "Implement a new QA process for commissioning data.",
            "Structural": "Define the quality specification for exposed concrete."
        },
        "IEng": {
            "General": "Implement a continuous improvement (Kaizen).",
            "Mechanical": "Improve the lockout procedure to save time.",
            "BuildingServices": "Improve the snagging process using digital tools.",
            "Structural": "Improve the rebar checking checklist."
        },
        "EngTech": {
            "General": "Follow the SOPs strictly.",
            "Mechanical": "Complete the inspection sheet accurately.",
            "BuildingServices": "Label all cables and panels clearly.",
            "Structural": "Ensure torque settings are checked and marked."
        }
    },

    // --- D: COMMUNICATION ---
    "d1": {
        "CEng": {
            "General": "Author complex technical reports for clients.",
            "Mechanical": "Write the Failure Investigation Report.",
            "BuildingServices": "Author the Stage 4 Technical Design Report.",
            "Structural": "Write the Structural Feasibility Study."
        },
        "IEng": {
            "General": "Write clear operational procedures.",
            "Mechanical": "Write the Pump Start-up Procedure.",
            "BuildingServices": "Write the Operation & Maintenance (O&M) manual sections.",
            "Structural": "Write the Site Inspection Report."
        },
        "EngTech": {
            "General": "Complete work logs clearly.",
            "Mechanical": "Fill out the maintenance card legibly.",
            "BuildingServices": "Complete the testing certificate accurately.",
            "Structural": "Record site measurements clearly."
        }
    },
    "d2": {
        "CEng": {
            "General": "Present to the Board or Client.",
            "Mechanical": "Present the design defence to the client.",
            "BuildingServices": "Present the sustainability strategy to the planning committee.",
            "Structural": "Present the structural scheme options to the architect."
        },
        "IEng": {
            "General": "Brief the team at the toolbox talk.",
            "Mechanical": "Brief the fitters on the lift plan.",
            "BuildingServices": "Brief the site team on the cable route strategy.",
            "Structural": "Brief the gang on the temporary works sequence."
        },
        "EngTech": {
            "General": "Explain a technical issue to a supervisor.",
            "Mechanical": "Explain why the bearing failed.",
            "BuildingServices": "Explain why the sensor isn't reading correctly.",
            "Structural": "Explain why the bolt won't fit."
        }
    },
    "d3": {
        "CEng": {
            "General": "Negotiate with difficult stakeholders.",
            "Mechanical": "Resolve a dispute with the supplier.",
            "BuildingServices": "Resolve a coordination conflict between HVAC and structures.",
            "Structural": "Negotiate column locations with the architect."
        },
        "IEng": {
            "General": "Resolve conflict within the team.",
            "Mechanical": "Settle a dispute between shifts.",
            "BuildingServices": "Coordinate access between wet trades and electricians.",
            "Structural": "Coordinate the crane lift with the site manager."
        },
        "EngTech": {
            "General": "Maintain good working relationships.",
            "Mechanical": "Work safely with the electrical tech.",
            "BuildingServices": "Communicate effectively with other trades.",
            "Structural": "Work collaboratively with the steel fixers."
        }
    },

    // --- E: PROFESSIONAL COMMITMENT ---
    "e1": {
        "CEng": {
            "General": "Champion the Code of Conduct.",
            "Mechanical": "Ensure all suppliers meet ethical standards.",
            "BuildingServices": "Ensure compliance with Part L regarding carbon emissions.",
            "Structural": "Ensure the design meets the intent of the Building Safety Act."
        },
        "IEng": {
            "General": "Work within the Code of Conduct.",
            "Mechanical": "Refuse to use non-spec parts.",
            "BuildingServices": "Refuse to install non-compliant insulation.",
            "Structural": "Refuse to allow a pour without inspection."
        },
        "EngTech": {
            "General": "Be honest and reliable.",
            "Mechanical": "Don't hide a mistake; report it.",
            "BuildingServices": "Don't falsify test results.",
            "Structural": "Don't cover up poor workmanship."
        }
    },
    "e2": {
        "CEng": {
            "General": "Manage the Safety Management System.",
            "Mechanical": "Approve the HAZOP study actions.",
            "BuildingServices": "Act as Principal Designer (CDM) for services.",
            "Structural": "Eliminate risks through design (ERIC) principles."
        },
        "IEng": {
            "General": "Produce Risk Assessments (RAMS).",
            "Mechanical": "Write the lift plan for the crane.",
            "BuildingServices": "Write the RAMS for working at height (ductwork).",
            "Structural": "Approve the temporary works permit."
        },
        "EngTech": {
            "General": "Work safely at all times.",
            "Mechanical": "Use LOTO (Lock Out Tag Out).",
            "BuildingServices": "Safe isolation before touching live wires.",
            "Structural": "Wear harness when working at height."
        }
    },
    "e3": {
        "CEng": {
            "General": "Drive sustainability strategy.",
            "Mechanical": "Specify high-efficiency motors (IE4).",
            "BuildingServices": "Champion Heat Pump technology over gas boilers.",
            "Structural": "Prioritise timber or low-carbon concrete."
        },
        "IEng": {
            "General": "Reduce waste in processes.",
            "Mechanical": "Fix leaks to save energy.",
            "BuildingServices": "Optimise the BMS schedule to reduce runtime.",
            "Structural": "Minimise material wastage on site."
        },
        "EngTech": {
            "General": "Dispose of waste correctly.",
            "Mechanical": "Put oil rags in the hazardous bin.",
            "BuildingServices": "Recycle cable offcuts and packaging.",
            "Structural": "Separate timber and steel waste."
        }
    },
    "e4": {
        "CEng": {
            "General": "Set the CPD strategy for the team.",
            "Mechanical": "Organise a department lunch & learn.",
            "BuildingServices": "Organise a CIBSE technical seminar.",
            "Structural": "Arrange a site visit for the grads."
        },
        "IEng": {
            "General": "Actively record and reflect on CPD.",
            "Mechanical": "Log the gearbox training course.",
            "BuildingServices": "Log the manufacturer training on new heat pumps.",
            "Structural": "Log the temporary works coordinator course."
        },
        "EngTech": {
            "General": "Attend training and learn.",
            "Mechanical": "Attend the abrasive wheels course.",
            "BuildingServices": "Attend the tool-box talk.",
            "Structural": "Complete the slinger/signaller training."
        }
    },
    "e5": {
        "CEng": {
            "General": "Lead on ethical dilemmas.",
            "Mechanical": "Whistleblow on unsafe practices.",
            "BuildingServices": "Challenge a client asking to bypass energy regs.",
            "Structural": "Refuse to sign off an unsafe structure under pressure."
        },
        "IEng": {
            "General": "Identify ethical conflicts.",
            "Mechanical": "Question a supplier's labour practices.",
            "BuildingServices": "Question a spec change that reduces fire safety.",
            "Structural": "Question the quality of rebar delivered."
        },
        "EngTech": {
            "General": "Do the right thing.",
            "Mechanical": "Don't sign off unchecked work.",
            "BuildingServices": "Don't skip the earth continuity test.",
            "Structural": "Don't use damaged lifting gear."
        }
    }
};

// --- HELPER FUNCTION ---
function getAdvice(id, level, disc) {
    if (cpdDb[id] && cpdDb[id][level]) {
        // Try exact discipline match
        if (cpdDb[id][level][disc]) {
            return cpdDb[id][level][disc];
        }
        // Fallback to General for that level
        if (cpdDb[id][level]["General"]) {
            return cpdDb[id][level]["General"];
        }
    }
    return "Undertake specific training or seek mentorship in this area.";
}