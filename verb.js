/**
 * Empowering Engineers UK - Intelligence Database [v10.0]
 * GRANULAR MAPPING UPDATE:
 * - strongVerbMap is now broken down into A1, A2... E5 for precise context checking.
 * - This allows the tool to validate if a specific verb fits the specific sub-competency.
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

    // 2. PASSIVE/WEAK STEMS
    passiveStems: [
        "we", "us", "our", "team", "group", "help", "assist", "support", "involv", 
        "participat", "observ", "monitor", "overs", "aid", "contribut", "attend", 
        "assign", "told", "ask", "respons", "handl", "tri", "attempt", "various",
        "many", "some", "a bit", "helped out", "was given", "was part of", "think",
        "felt", "seemed", "looked at", "maybe", "perhaps", "etc", "and so on",
        "dealt with", "talked", "meeting", "involved in", "worked on"
    ],
    
    // 3. STRONG ACTION STEMS (General Pool for Tier Estimation)
    strongStems: {
        EngTech: ["maintain", "operat", "install", "assembl", "inspect", "configur", "identif", "repair", "adjust", "check", "report", "resolv", "conduct", "demonstrat", "calibrat", "diagnos", "document", "setup", "test", "replac", "solder", "wire", "commission", "debug", "deploy", "patch", "safeguard", "align", "drill", "fabricat", "measur", "refit"],
        IEng: ["manag", "design", "implement", "improv", "verif", "budget", "supervis", "optimis", "review", "standardis", "coordinat", "deliv", "execut", "specif", "validat", "program", "commiss", "develop", "mentor", "schedul", "procur", "quantif", "refin", "audit", "refactor", "integrat", "automat", "negotiat", "forecast", "adapt", "classif", "distribut", "facilitat", "generat", "modifi", "overhaul"],
        CEng: ["pioneer", "innovat", "authoris", "strateg", "formulat", "apprais", "steer", "synthes", "conceptual", "transform", "justif", "mitigat", "negotiat", "author", "govern", "adjudicat", "critiqu", "envision", "structur", "champion", "architect", "orchestrat", "rational", "re-engineer", "speculat", "sanction", "advocat", "arbitrat", "consolidat", "diversifi", "investigat", "reconstruct", "rejuvenat", "spearhead", "underpin"]
    },

    // 4. GRANULAR MAPPING (A1-E5)
    // Used to validate if a strong verb fits the SPECIFIC sub-section.
// 2. STRICT GRANULAR MAPPING (A1-E5) - SCORING SOURCE
    strongVerbMap: {
        // A1: Maintain/Extend Knowledge
        "A1": ["maintain", "extend", "broaden", "deepen", "research", "investigat", "study", "learn", "master", "absorb", "develop", "keep up-to-date", "knowledge"],
        // A2: Application of Knowledge
        "A2": ["pioneer", "innovat", "analy", "diagnos", "simulat", "calculat", "deriv", "math", "physic", "root-cause", "solve", "predict", "apply", "engineer"],

        // B1: Identify Problems/Specifications
        "B1": ["identif", "defin", "specif", "requir", "determin", "assess", "scope", "investigat", "survey", "evaluat", "brief", "problem"],
        // B2: Design & Development
        "B2": ["design", "develop", "architect", "model", "draft", "prototyp", "concept", "create", "construct", "engin", "formulat", "solution"],
        // B3: Implementation
        "B3": ["implement", "install", "commission", "deploy", "rollout", "construct", "build", "execut", "realis", "deliver", "operation"],

        // C1: Planning
        "C1": ["plan", "schedul", "organis", "coordinat", "strateg", "prepar", "estimat", "forecas", "program", "allocat", "timeline"],
        // C2: Budget & Resources
        "C2": ["budget", "cost", "financ", "contract", "procur", "tender", "negotiat", "purchas", "bill", "quantif", "resourc", "commercial"],
        // C3: Leadership & Teams
        "C3": ["lead", "manag", "supervis", "mentor", "coach", "direct", "delegat", "recruit", "apprais", "chair", "guid", "team"],
        // C4: Quality
        "C4": ["audit", "improv", "optimis", "refin", "standardis", "assur", "control", "inspect", "rectifi", "enhanc", "quality", "complianc"],

        // D1: Written Communication
        "D1": ["write", "report", "document", "author", "draft", "correspond", "record", "log", "submit", "publish", "email", "communication"],
        // D2: Presentation & Negotiation
        "D2": ["present", "discuss", "negotiat", "persuad", "convinc", "propos", "brief", "pitch", "explain", "justif", "presentation"],
        // D3: Interpersonal
        "D3": ["collaborat", "liais", "mediat", "resolv", "relat", "interact", "network", "partner", "cooperat", "diversity", "inclusion"],

        // E1: Codes of Conduct
        "E1": ["compli", "adher", "follow", "uphold", "respec", "regulat", "legislat", "law", "standard", "mandat", "conduct", "profession"],
        // E2: Safety
        "E2": ["safeguard", "risk", "mitigat", "assess", "protect", "secur", "ensur", "audit", "investigat", "alert", "safety", "hazard"],
        // E3: Sustainability
        "E3": ["sustain", "recycl", "conserv", "reduc", "minim", "impact", "environ", "efficien", "renew", "carbon"],
        // E4: CPD
        "E4": ["develop", "record", "reflect", "plan", "learn", "attend", "participat", "member", "fellow", "regist", "cpd"],
        // E5: Ethics
        "E5": ["ethic", "honest", "integr", "trust", "principl", "moral", "declar", "transparen", "corrupt", "bribe"]
    },

    // 5. UK-SPEC CONTEXT KEYWORDS (For prompting/suggestions in the UI)
    ukSpecStems: {
        "A1": ["maintain", "extend", "theor", "technolog", "research", "emerging", "study", "learn", "course", "cpd", "literatur"],
        "A2": ["apply", "analy", "calculat", "model", "simulat", "first-principl", "deriv", "evidence-bas", "solve", "diagnos"],
        "B1": ["identify", "defin", "requir", "specif", "scope", "brief", "constraint", "opportunit", "problem-solv", "needs"],
        "B2": ["design", "develop", "architect", "draft", "prototyp", "concept", "solution", "create", "model", "innovat"],
        "B3": ["implement", "install", "commission", "construct", "build", "deploy", "rollout", "evaluat", "validat", "verif"],
        "C1": ["plan", "schedul", "organis", "coordinat", "project", "timelin", "gantt", "resource", "prepar", "strateg"],
        "C2": ["budget", "cost", "financ", "contract", "procur", "tender", "variat", "commerci", "control", "monitor"],
        "C3": ["lead", "manag", "supervis", "mentor", "coach", "train", "direct", "delegat", "team", "recruit", "apprais"],
        "C4": ["quality", "audit", "standard", "iso", "improv", "continuous", "assur", "control", "complianc"],
        "D1": ["write", "report", "document", "email", "specif", "draft", "record", "log", "communicat"],
        "D2": ["present", "discuss", "negotiat", "persuad", "argu", "convinc", "propos", "meeting", "brief"],
        "D3": ["relation", "colleagu", "client", "stakehold", "diversity", "inclusion", "conflict", "resolv", "mediat"],
        "E1": ["code", "conduct", "legal", "legislat", "regulat", "complianc", "rule", "law", "standard"],
        "E2": ["safe", "risk", "hazard", "rams", "assess", "protect", "danger", "permit", "loto", "incident"],
        "E3": ["sustain", "environment", "carbon", "waste", "recycl", "energy", "efficienc", "pollut", "impact"],
        "E4": ["develop", "record", "plan", "learn", "activit", "goal", "object", "reflect", "career"],
        "E5": ["ethic", "integr", "honest", "moral", "principl", "corrupt", "bribe", "conflict", "interest"]
    }
};