/**
 * Empowering Engineers UK - Intelligence Database [v11.0]
 * GRANULAR MAPPING UPDATE:
 * - strongVerbMap is now broken down by ROLE (EngTech/IEng/CEng) AND Sub-Competency (A1-E5).
 * - Ensures EngTech candidates aren't penalised for not using CEng-level strategic verbs.
 */

const verbDb = {
    // 1. SPELLING LOCALISER
    spellingMap: {
        "analyze": "analyse", "analyzed": "analysed", "analyzing": "analysing", "analysis": "analysis",
        "optimize": "optimise", "optimized": "optimised", "optimizing": "optimising",
        "modeling": "modelling", "modeled": "modelled", "program": "programme",
        "center": "centre", "behavior": "behaviour", "defense": "defence",
        "authorize": "authorise", "authorized": "authorised", "authorizing": "authorising",
        "standardize": "standardise", "standardized": "standardised", "standardizing": "standardising",
        "catalog": "catalogue", "aluminum": "aluminium", "prioritize": "prioritise",
        "prioritized": "prioritised", "prioritizing": "prioritising", "judgment": "judgement",
        "labor": "labour", "color": "colour", "meter": "metre", "fiber": "fibre",
        "recognize": "recognise", "summarize": "summarise", "characterize": "characterise",
        "synchronize": "synchronise", "visualize": "visualise", "utilize": "utilise"
    },

    // 2. PASSIVE/WEAK STEMS (Flags for Review)
    passiveStems: [
        "we", "us", "our", "team", "group", "help", "assist", "support", "involv", 
        "participat", "observ", "monitor", "overs", "aid", "contribut", "attend", 
        "assign", "told", "ask", "respons", "handl", "tri", "attempt", "various",
        "many", "some", "a bit", "helped out", "was given", "was part of", "think",
        "felt", "seemed", "looked at", "maybe", "perhaps", "etc", "and so on",
        "dealt with", "talked", "meeting", "involved in", "worked on"
    ],

    // 3. STRICT GRANULAR MAPPING BY ROLE & COMPETENCE (A1-E5)
    strongVerbMap: {
        "EngTech": {
            // A: Knowledge & Understanding
            "A1": ["review", "select", "identify", "interpret", "learn", "study", "maintain", "test"],
            "A2": ["apply", "use", "diagnos", "fault", "calculat", "measur", "test", "operat", "maintain"],
            // B: Design & Problem Solving
            "B1": ["identif", "diagnos", "define", "check", "inspect", "resolve", "troubleshoot"],
            "B2": ["contribut", "develop", "build", "solder", "wire", "fabricat", "repair", "assist", "manufactur"],
            "B3": ["install", "commission", "test", "operat", "maintain", "safeguard", "decommission", "achieved"],
            // C: Responsibility & Management
            "C1": ["plan", "organis", "gather", "prioritis", "schedul", "arrang"],
            "C2": ["resourc", "allocat", "equip", "tool", "material", "gather"],
            "C3": ["supervis", "oversee", "guid", "direct", "instruct"],
            "C4": ["rectifi", "report", "check", "qualit", "standard", "inspect"],
            // D: Communication
            "D1": ["report", "document", "record", "log", "write", "draft"],
            "D2": ["discuss", "communicat", "feedback", "tell", "recommend", "explain"],
            "D3": ["support", "work together", "colleagu", "resolv", "team", "assist"],
            // E: Commitment
            "E1": ["compli", "adher", "follow", "standard", "code", "rule", "procedure"],
            "E2": ["safe", "risk", "hazard", "protect", "prevent", "precaution", "rams", "loto", "incident"],
            "E3": ["sustain", "environ", "minim", "impact", "reduc", "recycl", "waste"],
            "E4": ["cpd", "learn", "train", "attend", "cours", "develop", "record"],
            "E5": ["ethic", "honest", "conduct", "challeng", "integr", "respect"]
        },
        "IEng": {
            // A: Knowledge & Understanding
            "A1": ["maintain", "extend", "broaden", "deepen", "research", "investigat", "develop"],
            "A2": ["apply", "analy", "simulat", "calculat", "root-cause", "solve", "predict", "engineer"],
            // B: Design & Problem Solving
            "B1": ["identif", "defin", "specif", "requir", "determin", "assess", "scope", "problem"],
            "B2": ["design", "develop", "model", "prototyp", "concept", "create", "construct", "solution"],
            "B3": ["implement", "commission", "deploy", "rollout", "build", "execut", "deliver", "operation"],
            // C: Responsibility & Management
            "C1": ["plan", "schedul", "organis", "coordinat", "prepar", "estimat", "program", "timeline"],
            "C2": ["budget", "cost", "financ", "contract", "procur", "tender", "negotiat", "purchas", "quantif"],
            "C3": ["manag", "supervis", "mentor", "coach", "direct", "delegat", "recruit", "apprais", "team"],
            "C4": ["audit", "improv", "optimis", "refin", "standardis", "assur", "control", "complianc"],
            // D: Communication
            "D1": ["write", "report", "document", "author", "correspond", "publish", "communication"],
            "D2": ["present", "discuss", "negotiat", "persuad", "convinc", "propos", "brief", "pitch"],
            "D3": ["collaborat", "liais", "mediat", "resolv", "relat", "interact", "partner", "diversity"],
            // E: Commitment
            "E1": ["compli", "adher", "uphold", "regulat", "legislat", "law", "mandat", "profession"],
            "E2": ["safeguard", "mitigat", "assess", "secur", "ensur", "audit", "investigat", "safety"],
            "E3": ["sustain", "conserv", "efficien", "renew", "carbon", "impact", "environ"],
            "E4": ["develop", "reflect", "plan", "participat", "member", "regist", "cpd"],
            "E5": ["ethic", "integr", "trust", "principl", "moral", "declar", "transparen"]
        },
        "CEng": {
             // A: Knowledge & Understanding
            "A1": ["pioneer", "research", "innovat", "advanc", "theor", "discover", "master"],
            "A2": ["conceptual", "formulat", "deriv", "synthes", "complex", "optimis", "predict"],
            // B: Design & Problem Solving
            "B1": ["strateg", "evaluat", "critiqu", "scop", "diagnos", "investigat", "apprais"],
            "B2": ["architect", "innovat", "design", "re-engineer", "transform", "invent", "formulat"],
            "B3": ["orchestrat", "spearhead", "deliver", "realis", "execut", "steer", "deploy"],
            // C: Responsibility & Management
            "C1": ["strateg", "forecast", "program", "direct", "govern", "consolidat", "orchestrat"],
            "C2": ["authoris", "sanction", "financ", "commercial", "negotiat", "adjudicat", "arbitrat"],
            "C3": ["lead", "champion", "direct", "empower", "steer", "vision", "mentor"],
            "C4": ["govern", "audit", "assur", "standardis", "policy", "framework", "complianc"],
            // D: Communication
            "D1": ["author", "publish", "policy", "directiv", "strateg", "report", "document"],
            "D2": ["advocat", "persuad", "negotiat", "pitch", "influenc", "convinc", "present"],
            "D3": ["collaborat", "partner", "mediat", "resolv", "network", "diversity", "inclusion"],
            // E: Commitment
            "E1": ["champion", "govern", "uphold", "legislat", "complianc", "policy", "standard"],
            "E2": ["safeguard", "mitigat", "strateg", "policy", "audit", "govern", "safety"],
            "E3": ["sustain", "carbon", "lifecycle", "circular", "renew", "strateg", "impact"],
            "E4": ["fellow", "cpd", "strateg", "mentor", "advocat", "profession", "reflect"],
            "E5": ["ethic", "integr", "transparen", "corrupt", "bribe", "moral", "principl"]
        }
    }
};