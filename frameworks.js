// EMPOWERING ENGINEERS UK - FRAMEWORK DATABASE (v2.2 - FIXED)
// Fixed syntax errors (unescaped quotes). Comprehensive list.

const frameworks = {
    // =========================================================================
    // 1. STRATEGIC ANALYSIS (For Direction & Planning)
    // =========================================================================
    SWOT: {
        cat: "strategy",
        fields: [
            { id: "S", label: "STRENGTHS (Internal)", hint: "What advantages does your team or technology have right now?", example: "e.g. 'We have an in-house proprietary algorithm for load balancing that reduces server costs by 20%.'" },
            { id: "W", label: "WEAKNESSES (Internal)", hint: "What internal barriers are slowing you down?", example: "e.g. 'Our testing team is currently understaffed, leading to a 3-week bottleneck on every release cycle.'" },
            { id: "O", label: "OPPORTUNITIES (External)", hint: "What market trends or regulatory changes could you exploit?", example: "e.g. 'The new EU Green Deal legislation provides grants for the exact type of technology we are prototyping.'" },
            { id: "T", label: "THREATS (External)", hint: "What external obstacles exist?", example: "e.g. 'A key competitor has just released a cheaper version of our product that may erode our market share.'" }
        ]
    },
    PESTLE: {
        cat: "strategy",
        fields: [
            { id: "P", label: "POLITICAL", hint: "Government stability, tax policy, trade restrictions.", example: "e.g. 'Upcoming general elections may freeze decision-making on major infrastructure projects for 6 months.'" },
            { id: "E", label: "ECONOMIC", hint: "Inflation, interest rates, exchange rates.", example: "e.g. 'Rising inflation is increasing the cost of raw steel by 12%, impacting our fixed-price tender margins.'" },
            { id: "S", label: "SOCIAL", hint: "Demographics, lifestyle attitudes, education.", example: "e.g. 'Local community opposition to greenfield construction is high; we need a robust stakeholder engagement plan.'" },
            { id: "T", label: "TECHNOLOGICAL", hint: "New innovations, automation, R&D incentives.", example: "e.g. 'The rapid maturity of LiDAR scanning drones allows us to survey the site in 2 hours instead of 2 days.'" },
            { id: "L", label: "LEGAL", hint: "Employment law, health & safety, industry standards.", example: "e.g. 'New Building Safety Act requirements demand a Golden Thread of digital information for high-rise work.'" },
            { id: "ENV", label: "ENVIRONMENTAL", hint: "Carbon footprint, waste disposal, sustainability.", example: "e.g. 'Client has mandated Net Zero concrete for all foundations, requiring us to source alternative suppliers.'" }
        ]
    },
    PORTER5: {
        cat: "strategy",
        fields: [
            { id: "SUP", label: "SUPPLIER POWER", hint: "How easy is it for suppliers to drive up prices?", example: "e.g. 'High. There are only two certified vendors globally for aerospace-grade titanium.'" },
            { id: "BUY", label: "BUYER POWER", hint: "How easy is it for buyers to drive down prices?", example: "e.g. 'Low. We are the sole provider of this specialized control system; switching costs are prohibitive.'" },
            { id: "RIV", label: "COMPETITIVE RIVALRY", hint: "How intense is the competition?", example: "e.g. 'Intense. Five major engineering firms are bidding for the same rail franchise, driving profit margins down to 3%.'" },
            { id: "SUB", label: "THREAT OF SUBSTITUTION", hint: "Can customers find a different way of doing this?", example: "e.g. 'Moderate. Clients may choose to refurbish existing pumps instead of buying our new high-efficiency models.'" },
            { id: "ENT", label: "NEW ENTRANTS", hint: "How easy is it for new competitors to enter?", example: "e.g. 'Low. The barrier to entry is high due to strict regulatory certifications and high capital startup costs.'" }
        ]
    },
    VRIO: {
        cat: "strategy",
        fields: [
            { id: "V", label: "VALUE", hint: "Does this resource allow you to exploit an opportunity?", example: "e.g. 'Yes. Our patent allows us to reduce energy consumption by 15%, which is a key client demand.'" },
            { id: "R", label: "RARITY", hint: "Is this resource controlled by only a few competitors?", example: "e.g. 'Yes. We hold the exclusive UK license for this specific material composition.'" },
            { id: "I", label: "IMITABILITY", hint: "Is it difficult or expensive for others to copy?", example: "e.g. 'No. A determined competitor could reverse-engineer our code within 6-9 months.'" },
            { id: "O", label: "ORGANIZATION", hint: "Is your firm organized to exploit this resource?", example: "e.g. 'Partially. Our sales team needs more technical training to effectively sell this new capability.'" }
        ]
    },
    BCG: {
        cat: "strategy",
        fields: [
            { id: "ST", label: "STARS (High Growth, High Share)", hint: "Market leaders in high-growth sectors.", example: "e.g. 'Our new EV Battery division. Revenue is doubling annually, but it requires heavy CAPEX for new factories.'" },
            { id: "CC", label: "CASH COWS (Low Growth, High Share)", hint: "Established products generating cash.", example: "e.g. 'Our legacy diesel generator maintenance contracts. Low growth, but steady, high-margin income.'" },
            { id: "QM", label: "QUESTION MARKS (High Growth, Low Share)", hint: "Opportunities. Invest or Divest?", example: "e.g. 'Hydrogen Fuel Cell prototype unit. Market is exploding, but we are a small player struggling to scale.'" },
            { id: "DG", label: "DOGS (Low Growth, Low Share)", hint: "Low share in slow markets.", example: "e.g. 'The analog meter manufacturing line. Demand has flatlined and we are barely breaking even.'" }
        ]
    },
    ANSOFF: {
        cat: "strategy",
        fields: [
            { id: "MP", label: "MARKET PENETRATION", hint: "Sell MORE of existing products to existing markets.", example: "e.g. 'Launch a Summer Service Discount campaign to get current utility clients to book more maintenance.'" },
            { id: "PD", label: "PRODUCT DEVELOPMENT", hint: "Create NEW products for existing markets.", example: "e.g. 'Develop an IoT-enabled remote monitoring sensor to sell to our existing installed base of pumps.'" },
            { id: "MD", label: "MARKET DEVELOPMENT", hint: "Sell EXISTING products to NEW markets.", example: "e.g. 'Take our proven water filtration skid (used in municipal water) and market it to the brewing industry.'" },
            { id: "DIV", label: "DIVERSIFICATION", hint: "Sell NEW products to NEW markets (Highest Risk).", example: "e.g. 'Leverage our gearbox expertise to start manufacturing wind turbine transmissions for the renewable sector.'" }
        ]
    },
    BALANCED: {
        cat: "strategy",
        fields: [
            { id: "FIN", label: "FINANCIAL", hint: "To succeed financially, how should we appear to shareholders?", example: "e.g. 'Objective: Increase gross margin on projects to 15% by reducing waste.'" },
            { id: "CUST", label: "CUSTOMER", hint: "To achieve our vision, how should we appear to customers?", example: "e.g. 'Objective: Reduce average technical support response time to <4 hours.'" },
            { id: "PROC", label: "INTERNAL PROCESSES", hint: "What processes must we excel at?", example: "e.g. 'Objective: Achieve ISO 9001 recertification with zero non-conformances.'" },
            { id: "LEARN", label: "LEARNING & GROWTH", hint: "How will we sustain our ability to change?", example: "e.g. 'Objective: Train 50% of engineering staff in Python/Data Analytics.'" }
        ]
    },
    SCENARIO: {
        cat: "strategy",
        fields: [
            { id: "S1", label: "SCENARIO A (Optimistic)", hint: "Best case future.", example: "e.g. 'Supply chain stabilizes, steel prices drop 10%, we win the HS2 tender.'" },
            { id: "S2", label: "SCENARIO B (Status Quo)", hint: "Trends continue as they are now.", example: "e.g. 'Prices remain volatile but manageable. We maintain current market share.'" },
            { id: "S3", label: "SCENARIO C (Pessimistic)", hint: "Worst case future. Major disruption.", example: "e.g. 'Key supplier goes bust, new regulatory fine imposed, project delayed 6 months.'" },
            { id: "IMP", label: "STRATEGIC IMPLICATIONS", hint: "Common strategy for all scenarios.", example: "e.g. 'We must diversify our supplier base immediately regardless of the outcome to mitigate risk.'" }
        ]
    },
    VALUECHAIN: {
        cat: "strategy",
        fields: [
            { id: "PRI", label: "PRIMARY ACTIVITIES", hint: "Inbound logistics, Ops, Outbound, Marketing, Service.", example: "e.g. 'Bottleneck identified in Outbound Logistics: Warehousing layout causes 20% delay in picking.'" },
            { id: "SUP", label: "SUPPORT ACTIVITIES", hint: "Procurement, HR, Tech Dev, Infrastructure.", example: "e.g. 'Procurement system is outdated, causing delays in raw material ordering.'" },
            { id: "VAL", label: "VALUE CREATION", hint: "Where is the most margin made?", example: "e.g. 'Our bespoke design service commands the highest premium, not the manufacturing itself.'" }
        ]
    },
    BLUEOCEAN: {
        cat: "strategy",
        fields: [
            { id: "EL", label: "ELIMINATE", hint: "Which factors should be eliminated?", example: "e.g. 'Eliminate on-site paper documentation completely. Go 100% digital.'" },
            { id: "RD", label: "REDUCE", hint: "Which factors should be reduced well below industry standard?", example: "e.g. 'Reduce complexity of the user manual. Make it a simple 1-page guide.'" },
            { id: "RS", label: "RAISE", hint: "Which factors should be raised well above industry standard?", example: "e.g. 'Raise the durability/lifespan of the component from 5 to 10 years.'" },
            { id: "CR", label: "CREATE", hint: "Which factors should be created that the industry has never offered?", example: "e.g. 'Create a subscription model for predictive maintenance alerts.'" }
        ]
    },
    BUSCANVAS: {
        cat: "strategy",
        fields: [
            { id: "VP", label: "VALUE PROPOSITION", hint: "What problem are we solving?", example: "e.g. 'A zero-emission, silent urban logistics solution for night deliveries.'" },
            { id: "CS", label: "CUSTOMER SEGMENTS", hint: "Who are we solving it for?", example: "e.g. 'Last-mile delivery firms in London and Paris LEZ zones.'" },
            { id: "RS", label: "REVENUE STREAMS", hint: "How do we make money?", example: "e.g. 'Leasing hardware + Monthly software subscription for tracking.'" },
            { id: "KS", label: "KEY RESOURCES/ACTIVITIES", hint: "What do we need to deliver it?", example: "e.g. 'Fleet of electric vans, Charging hubs, proprietary Routing software.'" }
        ]
    },
    SOAR: {
        cat: "strategy",
        fields: [
            { id: "S", label: "STRENGTHS", hint: "What are we great at?", example: "e.g. 'Technical expertise in complex hydraulic modelling.'" },
            { id: "O", label: "OPPORTUNITIES", hint: "What are the possibilities in the market?", example: "e.g. 'Expand into flood defense consulting due to climate change demand.'" },
            { id: "A", label: "ASPIRATIONS", hint: "What do we care about deeply?", example: "e.g. 'To be the UK leader in sustainable urban drainage systems (SuDS).'" },
            { id: "R", label: "RESULTS", hint: "How will we know we succeeded?", example: "e.g. 'Win 3 major framework contracts with Water Companies by 2025.'" }
        ]
    },

    // =========================================================================
    // 2. PROCESS & QUALITY (For Optimization & Defects)
    // =========================================================================
    PDCA: {
        cat: "process",
        fields: [
            { id: "P", label: "PLAN", hint: "Identify problem, analyze root causes, plan fix.", example: "e.g. 'Objective: Reduce drawing approval time. Plan: Trial a parallel review workflow on Project X.'" },
            { id: "D", label: "DO", hint: "Implement plan on a small scale.", example: "e.g. 'Executed the parallel workflow for 4 weeks on the Minor Mods package.'" },
            { id: "C", label: "CHECK", hint: "Analyze results.", example: "e.g. 'Average time dropped to 6 days. Improvement achieved, but Checking phase is still a bottleneck.'" },
            { id: "A", label: "ACT", hint: "Standardize solution or adjust.", example: "e.g. 'Adopt parallel review as standard SOP. Launch new PDCA cycle targeting the Checking phase.'" }
        ]
    },
    DMAIC: {
        cat: "process",
        fields: [
            { id: "D", label: "DEFINE", hint: "Define the problem statement and goal.", example: "e.g. 'PCB assembly yield has dropped to 92%. Goal: Return to 98% yield within 3 months.'" },
            { id: "M", label: "MEASURE", hint: "Collect baseline data.", example: "e.g. 'Collected 2 weeks of data. 80% of failures are Cold Solder Joints.'" },
            { id: "A", label: "ANALYZE", hint: "Identify root cause.", example: "e.g. 'Fishbone analysis revealed reflow oven temperature fluctuates by +/- 10C on the night shift.'" },
            { id: "I", label: "IMPROVE", hint: "Implement solution.", example: "e.g. 'Installed a voltage stabilizer on the oven. Calibrated profile. Yield improved to 97%.'" },
            { id: "C", label: "CONTROL", hint: "Controls to sustain gains.", example: "e.g. 'Implemented continuous thermal monitoring with auto-shutdown if temp deviates by >2C.'" }
        ]
    },
    VSM: {
        cat: "process",
        fields: [
            { id: "CS", label: "CURRENT STATE", hint: "Map current flow and waste.", example: "e.g. 'Raw material sits for 4 days before cutting. WIP sits for 2 days between Welding and Painting.'" },
            { id: "FS", label: "FUTURE STATE", hint: "Map ideal flow.", example: "e.g. 'Continuous flow from Weld to Paint via conveyor. Reduce total WIP to 4 hours.'" },
            { id: "KA", label: "KAIZEN EVENTS", hint: "Projects to bridge the gap.", example: "e.g. '1. Move painting booth closer to weld shop. 2. Balance line speed to eliminate buffers.'" }
        ]
    },
    "5WHYS": {
        cat: "process",
        fields: [
            { id: "P", label: "PROBLEM STATEMENT", hint: "Describe the issue.", example: "e.g. 'The hydraulic motor overheated and failed.'" },
            { id: "W1", label: "WHY 1", hint: "Direct cause.", example: "e.g. 'Because the cooling oil flow was insufficient.'" },
            { id: "W2", label: "WHY 2", hint: "Cause of W1.", example: "e.g. 'Because the intake filter was clogged with debris.'" },
            { id: "W3", label: "WHY 3", hint: "Cause of W2.", example: "e.g. 'Because the oil was contaminated with metal shavings.'" },
            { id: "W4", label: "WHY 4", hint: "Cause of W3.", example: "e.g. 'Because the reservoir cap gasket degraded and fell in.'" },
            { id: "W5", label: "WHY 5 (ROOT CAUSE)", hint: "Systemic cause.", example: "e.g. 'Because the maintenance schedule does not include checking or replacing reservoir gaskets.'" }
        ]
    },
    FISHBONE: {
        cat: "process",
        fields: [
            { id: "PR", label: "PROBLEM (HEAD)", hint: "The defect being analyzed.", example: "e.g. 'High reject rate on Injection Molding Line #2.'" },
            { id: "M1", label: "MAN (People)", hint: "Training, fatigue.", example: "e.g. 'New operators not trained on temperature profile setup. Shift fatigue.'" },
            { id: "M2", label: "MACHINE (Equipment)", hint: "Maintenance, calibration.", example: "e.g. 'Nozzle heater band fluctuating. Mold clamp pressure inconsistent.'" },
            { id: "M3", label: "METHOD (Process)", hint: "SOPs, workflow.", example: "e.g. 'Cooling cycle time set too short to meet quota. SOP allows too much variance.'" },
            { id: "M4", label: "MATERIAL (Inputs)", hint: "Quality, variability.", example: "e.g. 'Batch 405 polymer has higher moisture content than spec.'" },
            { id: "M5", label: "ENVIRONMENT", hint: "Conditions.", example: "e.g. 'High humidity in factory floor is affecting polymer drying.'" }
        ]
    },
    PARETO: {
        cat: "process",
        fields: [
            { id: "D", label: "DATA COLLECTION", hint: "List defects/costs and frequency.", example: "e.g. 'Defects: Scratch (50), Dent (10), Paint (5), Dimension (2). Total: 67.'" },
            { id: "A", label: "ANALYSIS (80/20)", hint: "Which few causes produce most effects?", example: "e.g. 'Scratches alone account for 75% of total defects. Dents are 15%.'" },
            { id: "ACT", label: "ACTION", hint: "Where to focus?", example: "e.g. 'Focus entirely on handling procedures to prevent scratches. Ignore dimensional issues for now.'" }
        ]
    },
    KANBAN: {
        cat: "process",
        fields: [
            { id: "TD", label: "TO DO (Backlog)", hint: "Pending items, prioritized.", example: "e.g. 'Draft Spec for Pump A, Vendor Selection for Motor B, CAD Layout for Skid.'" },
            { id: "IP", label: "IN PROGRESS (WIP)", hint: "Active items (Limit number).", example: "e.g. 'FEA Simulation (WIP), Hydraulic Calcs (WIP - Blocked by material data).'" },
            { id: "DN", label: "DONE", hint: "Completed items.", example: "e.g. 'Concept Review Meeting, Budget Approval Form.'" }
        ]
    },
    POKAYOKE: {
        cat: "process",
        fields: [
            { id: "ERR", label: "POTENTIAL ERROR", hint: "What mistake is likely?", example: "e.g. 'Operator connects the positive cable to the negative terminal.'" },
            { id: "MECH", label: "MECHANISM", hint: "Physical stop/guide.", example: "e.g. 'Design the connectors with different shapes (Keyed) so they physically cannot fit incorrectly.'" },
            { id: "RES", label: "RESULT", hint: "Outcome.", example: "e.g. 'Zero polarity faults in assembly. Reduced rework time.'" }
        ]
    },
    SIPOC: {
        cat: "process",
        fields: [
            { id: "S", label: "SUPPLIERS", hint: "Who provides inputs?", example: "e.g. 'Steel Vendor, Structural Design Team, Client.'" },
            { id: "I", label: "INPUTS", hint: "Materials/data needed.", example: "e.g. 'Raw Steel Beams, Approved CAD Drawings, Welding Consumables.'" },
            { id: "P", label: "PROCESS", hint: "High-level steps (5-7).", example: "e.g. 'Cut -> Fit Up -> Weld -> NDT Inspect -> Paint -> Dispatch.'" },
            { id: "O", label: "OUTPUTS", hint: "What is produced?", example: "e.g. 'Fabricated Steel Column, QA Inspection Report, Delivery Note.'" },
            { id: "C", label: "CUSTOMERS", hint: "Who receives outputs?", example: "e.g. 'Site Installation Team, Quality Manager, Client Representative.'" }
        ]
    },

    // =========================================================================
    // 3. DECISION MAKING (For Risk & Options)
    // =========================================================================
    MONTE: {
        cat: "decision",
        fields: [
            { id: "VAR", label: "VARIABLES", hint: "Uncertain inputs.", example: "e.g. 'Steel Price (£/ton), Installation Time (days), Weather delay risk (days).'" },
            { id: "DIS", label: "DISTRIBUTIONS", hint: "Range (Min/Max/Likely).", example: "e.g. 'Steel: £500-£700 (Normal). Time: 10-20 days (Triangular).'" },
            { id: "OUT", label: "DESIRED OUTPUT", hint: "What to forecast?", example: "e.g. 'The probability of the total project cost exceeding £1M.'" }
        ]
    },
    DECTREE: {
        cat: "decision",
        fields: [
            { id: "DEC", label: "DECISION POINT", hint: "The choice.", example: "e.g. 'Repair vs Replace the old centrifugal pump.'" },
            { id: "OPA", label: "OPTION A (Repair)", hint: "Costs and Probabilities.", example: "e.g. 'Cost £5k. 60% chance it fails again in 1 year (Costing another £5k).'" },
            { id: "OPB", label: "OPTION B (Replace)", hint: "Costs and Probabilities.", example: "e.g. 'Cost £20k. 99% reliability for 10 years. Zero maintenance cost for Year 1.'" },
            { id: "CON", label: "CONCLUSION", hint: "Expected Value (EV).", example: "e.g. 'EV of Repair is poor due to downtime risk. Strategic decision: Replace.'" }
        ]
    },
    CBA: {
        cat: "decision",
        fields: [
            { id: "COST", label: "COSTS (Direct & Indirect)", hint: "CAPEX and OPEX.", example: "e.g. 'New Software License: £50k. Staff Training: £10k. Server Upgrades: £5k. TOTAL: £65k.'" },
            { id: "BEN", label: "BENEFITS (Tangible & Intangible)", hint: "Savings/Revenue.", example: "e.g. 'Saves 500 engineer hours/year @ £50/hr = £25k/year saving. Reduces data error risk.'" },
            { id: "ROI", label: "ROI / PAYBACK", hint: "Compare Costs vs Benefits.", example: "e.g. 'Year 1 Saving: £25k. Payback Period = £65k / £25k = 2.6 Years. 5-Year ROI is positive.'" }
        ]
    },
    RISKMAT: {
        cat: "decision",
        fields: [
            { id: "HAZ", label: "HAZARD IDENTIFICATION", hint: "What could go wrong?", example: "e.g. 'Scaffolding collapse during high winds on site.'" },
            { id: "INIT", label: "INITIAL RISK (Probability x Impact)", hint: "Score before controls.", example: "e.g. 'Probability (3 - Possible) x Impact (5 - Catastrophic) = Risk Score 15 (High).'" },
            { id: "MIT", label: "MITIGATION / CONTROLS", hint: "How to reduce risk?", example: "e.g. 'Stop work if wind > 20mph. Daily scaffold tag inspections. Netting removal.'" },
            { id: "RES", label: "RESIDUAL RISK", hint: "Score after controls.", example: "e.g. 'Probability (1 - Rare) x Impact (5 - Catastrophic) = Risk Score 5 (Medium/ALARP).'" }
        ]
    },
    FORCEFIELD: {
        cat: "decision",
        fields: [
            { id: "CHANGE", label: "PROPOSED CHANGE", hint: "Goal or decision.", example: "e.g. 'Move to 100% remote working for the design team.'" },
            { id: "FOR", label: "DRIVING FORCES (For)", hint: "Pushing change.", example: "e.g. 'Reduced office rent (£50k/yr), happier staff, access to wider talent pool.'" },
            { id: "AG", label: "RESTRAINING FORCES (Against)", hint: "Resisting change.", example: "e.g. 'Collaboration difficulties, IT security risks, management fear of lost productivity.'" },
            { id: "STRAT", label: "STRATEGY", hint: "How to tip the balance?", example: "e.g. 'Invest in better collaboration tools (Slack/Teams) to mitigate the resistance.'" }
        ]
    },
    OODA: {
        cat: "decision",
        fields: [
            { id: "OBS", label: "OBSERVE", hint: "Gather raw data.", example: "e.g. 'Server latency has suddenly spiked by 300%. Customer complaints are flooding in.'" },
            { id: "ORI", label: "ORIENT", hint: "Contextualize data.", example: "e.g. 'This coincides exactly with the new patch release 10 mins ago. It looks like a memory leak.'" },
            { id: "DEC", label: "DECIDE", hint: "Choose action.", example: "e.g. 'We cannot debug live. The decision is to Rollback the patch immediately to restore service.'" },
            { id: "ACT", label: "ACT", hint: "Execute.", example: "e.g. 'Executed rollback script. Observing server metrics to confirm latency returns to normal.'" }
        ]
    },
    WRAP: {
        cat: "decision",
        fields: [
            { id: "W", label: "WIDEN OPTIONS", hint: "What else is possible?", example: "e.g. 'Instead of just Hire vs Dont Hire, consider Outsourcing, Interns, or Automation.'" },
            { id: "R", label: "REALITY TEST", hint: "Test assumptions.", example: "e.g. 'Ask the freelancer to do a paid trial task before signing the full contract.'" },
            { id: "A", label: "ATTAIN DISTANCE", hint: "Emotion check.", example: "e.g. 'If I was fired today, the new manager would likely cancel this project immediately.'" },
            { id: "P", label: "PREPARE TO BE WRONG", hint: "Set tripwire.", example: "e.g. 'If the freelancer misses the first deadline by >2 days, we terminate the contract immediately.'" }
        ]
    },

    // =========================================================================
    // 4. FEEDBACK & COACHING (For Leadership & People)
    // =========================================================================
    GROW: {
        cat: "feedback",
        fields: [
            { id: "G", label: "GOAL", hint: "What do they want to achieve?", example: "e.g. 'I want to lead the Hydraulic Pump package design for the next project phase.'" },
            { id: "R", label: "REALITY", hint: "Current skill/situation.", example: "e.g. 'You handle component-level designs well, but you have not managed a supplier interface or a budget before.'" },
            { id: "O", label: "OPTIONS", hint: "How to bridge gap?", example: "e.g. 'Could you shadow the Senior Engineer on the upcoming tender? Or take a short course on NEC3 contracts?'" },
            { id: "W", label: "WILL / WAY FORWARD", hint: "Actions/Timeline.", example: "e.g. 'I will schedule a weekly 30-min catch-up with the Project Manager starting this Monday to review the specs.'" }
        ]
    },
    SBI: {
        cat: "feedback",
        fields: [
            { id: "S", label: "SITUATION", hint: "When/where?", example: "e.g. 'During the client design review meeting yesterday afternoon...'" },
            { id: "B", label: "BEHAVIOR", hint: "Observable action (Facts).", example: "e.g. 'You interrupted the clients Lead Engineer three times while he was explaining the safety requirement.'" },
            { id: "I", label: "IMPACT", hint: "Result.", example: "e.g. 'It made us look defensive and the client became visibly frustrated, potentially risking the approval.'" }
        ]
    },
    SBIBI: {
        cat: "feedback",
        fields: [
            { id: "S", label: "SITUATION", hint: "Context.", example: "e.g. 'During the client design review meeting yesterday afternoon...'" },
            { id: "B", label: "BEHAVIOR", hint: "Action (Facts).", example: "e.g. 'You interrupted the clients Lead Engineer three times.'" },
            { id: "I", label: "IMPACT", hint: "Result.", example: "e.g. 'It made us look defensive and the client became frustrated.'" },
            { id: "BD", label: "BEHAVIOR DESIRED", hint: "Future action.", example: "e.g. 'Next time, please write down your objections and wait until they finish speaking before responding.'" },
            { id: "ID", label: "IMPACT DESIRED", hint: "Future benefit.", example: "e.g. 'This will demonstrate we are active listeners and value their input, building long-term trust.'" }
        ]
    },
    SBII: {
        cat: "feedback",
        fields: [
            { id: "S", label: "SITUATION", hint: "Context.", example: "e.g. 'During the code review this morning.'" },
            { id: "B", label: "BEHAVIOR", hint: "Action.", example: "e.g. 'You rewrote Marks module completely without discussing it with him first.'" },
            { id: "I", label: "IMPACT", hint: "Result.", example: "e.g. 'Mark feels undermined and discouraged from contributing.'" },
            { id: "INT", label: "INTENT", hint: "Ask why. Uncover motive.", example: "e.g. 'I assume you wanted to optimize the efficiency, but we need to balance that with team cohesion.'" }
        ]
    },
    CEDAR: {
        cat: "feedback",
        fields: [
            { id: "C", label: "CONTEXT", hint: "Why is this important?", example: "e.g. 'We need to discuss the site safety audit schedule. Compliance is our license to operate.'" },
            { id: "E", label: "EXAMPLES", hint: "Specific evidence.", example: "e.g. 'You have missed submitting the weekly safety observation reports for the last two Fridays (Dates X and Y).'" },
            { id: "D", label: "DIAGNOSIS", hint: "Root cause.", example: "e.g. 'Is the current workload preventing you from accessing the portal? Or is the system timing out?'" },
            { id: "A", label: "ACTION", hint: "Steps to fix.", example: "e.g. 'I will block out 15:00-15:30 on Fridays specifically for reporting. You will prioritize this over email.'" },
            { id: "R", label: "REVIEW", hint: "Check-in.", example: "e.g. 'Let us review the submission log in our next 1-to-1 in two weeks time.'" }
        ]
    },
    PENDLETON: {
        cat: "feedback",
        fields: [
            { id: "P1", label: "WHAT WENT WELL? (Ask Receiver)", hint: "Positives.", example: "e.g. 'The logic behind your FEA analysis was robust and the mesh quality was excellent.'" },
            { id: "P2", label: "WHAT COULD BE IMPROVED? (Ask Receiver)", hint: "Growth areas.", example: "e.g. 'The conclusion was a bit vague. It did not explicitly state the safety margin against yield.'" },
            { id: "P3", label: "AGREED ACTION", hint: "Takeaway.", example: "e.g. 'For the next report, include a summary table on Page 1 listing Pass/Fail status for all load cases.'" }
        ]
    },
    COIN: {
        cat: "feedback",
        fields: [
            { id: "C", label: "CONTEXT", hint: "Circumstance.", example: "e.g. 'When we are close to a deadline like yesterday...'" },
            { id: "O", label: "OBSERVATION", hint: "What I saw.", example: "e.g. 'I noticed you stopped updating the shared tracker and worked offline.'" },
            { id: "I", label: "IMPACT", hint: "Effect.", example: "e.g. 'I could not report accurate progress to the Board, which caused panic about the schedule.'" },
            { id: "N", label: "NEXT STEPS", hint: "Agreed change.", example: "e.g. 'Even during crunch time, please update the tracker status by 9am daily.'" }
        ]
    },
    OKRS: {
        cat: "feedback",
        fields: [
            { id: "OBJ", label: "OBJECTIVE", hint: "Ambitious goal.", example: "e.g. 'Become the safest and most reliable manufacturing site in the region.'" },
            { id: "KR1", label: "KEY RESULT 1", hint: "Measurable outcome.", example: "e.g. 'Reduce Lost Time Injury Frequency Rate (LTIFR) from 1.5 to 0.0 by Q4.'" },
            { id: "KR2", label: "KEY RESULT 2", hint: "Measurable outcome.", example: "e.g. 'Achieve 100% staff training completion on the new Machinery Safety Standard.'" },
            { id: "KR3", label: "KEY RESULT 3", hint: "Measurable outcome.", example: "e.g. 'Conduct 50 leadership safety walks per month.'" }
        ]
    }
};