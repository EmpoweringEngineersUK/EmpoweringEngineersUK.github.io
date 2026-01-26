/**
 * Empowering Engineers UK - Global Competency Database [v4.1]
 * Segmented by Level, UK-SPEC 4.0, and Multi-Industry Technical Clusters.
 * Added: Software, IT & Digital Infrastructure.
 */

const verbDb = {
    // PASSIVE VOICE / RISK MARKERS (Gatekeeper Rejection Risk)
    passiveWeak: [
        "we", "us", "our", "team", "group", "helped", "assisted", "supported", "involved", "participated", "observed", 
        "monitored", "oversaw", "worked with", "checked", "aided", "contributed", "attended", "was part of", "various", 
        "many", "some", "helped out", "managed by", "led by", "directed by", "was assigned", "was told", "asked to",
        "was responsible for", "dealt with", "handled", "looked after", "tried to", "attempted"
    ],
    
    // STRONG ACTION VERBS (By Registration Level)
    strongVerbs: {
        EngTech: [
            "maintained", "operated", "installed", "assembled", "inspected", "configured", "identified", "repaired", 
            "adjusted", "checked", "monitored", "reported", "resolved", "conducted", "demonstrated", "calibrated",
            "diagnosed", "documented", "fault-found", "setup", "tested", "replaced", "soldered", "wired", "commissioned",
            "debugged", "deployed", "patched"
        ],
        IEng: [
            "managed", "designed", "implemented", "improved", "verified", "budgeted", "supervised", "optimised", 
            "reviewed", "standardised", "coordinated", "delivered", "executed", "specified", "validated", "programmed",
            "commissioned", "developed", "mentored", "scheduled", "procured", "quantified", "refined", "audited",
            "refactored", "integrated", "automated"
        ],
        CEng: [
            "pioneered", "innovated", "authorised", "strategised", "formulated", "appraised", "steered", "synthesised", 
            "conceptualised", "transformed", "justified", "mitigated", "negotiated", "authored", "governed",
            "adjudicated", "critiqued", "envisioned", "integrated", "structured", "championed", "architected",
            "orchestrated", "rationalised"
        ]
    },

    // UK-SPEC COMPETENCY MARKERS (Level Sensitive)
    ukSpecMarkers: {
        "A: Knowledge & Understanding": {
            EngTech: ["manuals", "procedures", "tools", "equipment", "instructions"],
            IEng: ["standards", "methodology", "calculations", "codes", "application", "patterns"],
            CEng: ["emerging tech", "research", "theoretical", "complex problem", "innovation", "new methods", "limitations", "paradigm"]
        },
        "B: Design & Development": {
            EngTech: ["tasks", "safety", "operation", "output"],
            IEng: ["design", "specification", "testing", "validation", "user needs", "prototyping", "iteration"],
            CEng: ["mitigation", "strategy", "holistic", "risk-based design", "feasibility analysis", "originality", "scalability"]
        },
        "C: Responsibility & Leadership": {
            EngTech: ["teamwork", "reliability", "attendance"],
            IEng: ["budget", "supervision", "quality assurance", "resource planning", "coaching", "agile", "scrum"],
            CEng: ["commercial leadership", "mentoring", "governance", "contractual", "financial oversight", "strategic objectives", "product-roadmap"]
        },
        "D: Communication & Diversity": {
            EngTech: ["clear reporting", "colleagues", "updates"],
            IEng: ["presentations", "client liaison", "stakeholders", "effective writing", "user-stories"],
            CEng: ["negotiation", "influence", "corporate diversity", "conflict resolution", "advisory", "inclusion", "mentorship"]
        },
        "E: Professional Commitment": {
            EngTech: ["PPE", "safety rules", "CPD log", "conduct"],
            IEng: ["risk assessment", "ethical conduct", "sustainability", "environmental impact", "gdpr", "data-privacy"],
            CEng: ["integrity", "legislative framework", "net zero leadership", "public safety", "corporate ethics", "professional code", "cyber-security"]
        }
    },

    // INDUSTRY-SPECIFIC TECHNICAL CLUSTERS
    industryClusters: {
        "Civil & Infrastructure": ["eurocodes", "bim", "geotechnical", "structural", "hydrology", "survey", "loading", "drainage", "pavement", "asce", "ice", "jct", "nec4"],
        "Mechanical & Manufacturing": ["cad", "fea", "lean", "six sigma", "tolerances", "machining", "thermodynamics", "fabrication", "prototyping", "pdm", "solidworks", "ansys", "cfd"],
        "Electrical & Power": ["plc", "telemetry", "scada", "high-voltage", "grid", "circuit", "transformers", "atex", "wiring-regs", "iet", "18th edition", "iec", "inverter"],
        "Aerospace & Defence": ["avionics", "airworthiness", "propulsion", "orbital", "composite", "flight-test", "mod", "as9100", "esa", "nasa", "faa", "easa"],
        "Renewables & Sustainability": ["photovoltaic", "wind-load", "decarbonisation", "lifecycle", "circular-economy", "energy-storage", "hydrogen", "breeam", "epc", "grid-tie"],
        "Chemical & Process": ["hazop", "stoichiometric", "distillation", "reactor", "feedstock", "fluid-dynamics", "sil", "p&id", "icheme", "ex-rated", "mass-balance"],
        "Materials & Mining": ["alloys", "metallurgy", "fatigue-testing", "crystalline", "extraction", "smelting", "heat-treatment", "iom3", "corrosion", "microstructure"],
        "Software, IT & Digital": ["agile", "scrum", "devops", "ci/cd", "microservices", "api", "cloud", "latency", "scalability", "full-stack", "unit-testing", "git", "refactoring", "cyber-security", "bcs", "firmware"]
    }
};