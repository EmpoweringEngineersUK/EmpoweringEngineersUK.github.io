// =========================================================================
// EMPOWERING ENGINEERS UK - frameworks.js - v22.0 - Master Framework Database
// Date: 25 Jul 2026
// Specification: Unified Strategic Analytics & Goal Optimization Registry
// Security Profile: Zero-Knowledge Browser Storage Isolation Architecture
// Language Metric: British English Hardcoded UI Layout Controls
// =========================================================================

const frameworks = {
 // =========================================================================
 // 1. STRATEGIC ANALYSIS (For Direction & Planning)
 // =========================================================================
 SWOT: {
 name: "SWOT Analysis (Strengths, Weaknesses, Opps, Threats)",
 cat: "strategy",
 fields: [
 { id: "S", label: "STRENGTHS (Internal)", hint: "What advantages does your team or technology have right now?", example: "e.g. 'We have an in-house proprietary algorithm for load balancing that reduces server costs by 20%.'" },
 { id: "W", label: "WEAKNESSES (Internal)", hint: "What internal barriers are slowing you down?", example: "e.g. 'Our testing team is currently understaffed, leading to a 3-week bottleneck on every release cycle.'" },
 { id: "O", label: "OPPORTUNITIES (External)", hint: "What market trends or regulatory changes could you exploit?", example: "e.g. 'The new EU Green Deal legislation provides grants for the exact type of technology we are prototyping.'" },
 { id: "T", label: "THREATS (External)", hint: "What external obstacles exist?", example: "e.g. 'A key competitor has just released a cheaper version of our product that may erode our market share.'" }
 ]
 },
 PESTLE: {
 name: "PESTLE Analysis (External Market Factors)",
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
 name: "Porter's Five Forces (Industry Competition)",
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
 name: "VRIO Framework (Resource Capability)",
 cat: "strategy",
 fields: [
 { id: "V", label: "VALUE", hint: "Does this resource allow you to exploit an opportunity?", example: "e.g. 'Yes. Our patent allows us to reduce energy consumption by 15%, which is a key client demand.'" },
 { id: "R", label: "RARITY", hint: "Is this resource controlled by only a few competitors?", example: "e.g. 'Yes. We hold the exclusive UK license for this specific material composition.'" },
 { id: "I", label: "IMITABILITY", hint: "Is it difficult or expensive for others to copy?", example: "e.g. 'No. A determined competitor could reverse-engineer our code within 6-9 months.'" },
 { id: "O", label: "ORGANIZATION", hint: "Is your firm organized to exploit this resource?", example: "e.g. 'Partially. Our sales team needs more technical training to effectively sell this new capability.'" }
 ]
 },
 BCG: {
 name: "BCG Matrix (Product Portfolio/Market Share)",
 cat: "strategy",
 fields: [
 { id: "ST", label: "STARS (High Growth, High Share)", hint: "Market leaders in high-growth sectors.", example: "e.g. 'Our new EV Battery division. Revenue is doubling annually, but it requires heavy CAPEX for new factories.'" },
 { id: "CC", label: "CASH COWS (Low Growth, High Share)", hint: "Established products generating cash.", example: "e.g. 'Our legacy diesel generator maintenance contracts. Low growth, but steady, high-margin income.'" },
 { id: "QM", label: "QUESTION MARKS (High Growth, Low Share)", hint: "Opportunities. Invest or Divest?", example: "e.g. 'Hydrogen Fuel Cell prototype unit. Market is exploding, but we are a small player struggling to scale.'" },
 { id: "DG", label: "DOGS (Low Growth, Low Share)", hint: "Low share in slow markets.", example: "e.g. 'The analog meter manufacturing line. Demand has flatlined and we are barely breaking even.'" }
 ]
 },
 ANSOFF: {
 name: "Ansoff Matrix (Growth Strategy Risks)",
 cat: "strategy",
 fields: [
 { id: "MP", label: "MARKET PENETRATION", hint: "Sell MORE of existing products to existing markets.", example: "e.g. 'Launch a Summer Service Discount campaign to get current utility clients to book more maintenance.'" },
 { id: "PD", label: "PRODUCT DEVELOPMENT", hint: "Create NEW products for existing markets.", example: "e.g. 'Develop an IoT-enabled remote monitoring sensor to sell to our existing installed base of pumps.'" },
 { id: "MD", label: "MARKET DEVELOPMENT", hint: "Sell EXISTING products to NEW markets.", example: "e.g. 'Take our proxy water filtration skid (used in municipal water) and market it to the brewing industry.'" },
 { id: "DIV", label: "DIVERSIFICATION", hint: "Sell NEW products to NEW markets (Highest Risk).", example: "e.g. 'Leverage our gearbox expertise to start manufacturing wind turbine transmissions for the renewable sector.'" }
 ]
 },
 BALANCED: {
 name: "Balanced Scorecard (Performance Metrics)",
 cat: "strategy",
 fields: [
 { id: "FIN", label: "FINANCIAL PERSPECTIVE", hint: "To succeed financially, how should we appear to shareholders?", example: "e.g. 'Objective: Increase gross margin on infrastructure deliverables to 15% by reducing material scrap overheads.'" },
 { id: "CUST", label: "CUSTOMER PERSPECTIVE", hint: "To achieve our vision, how should we appear to customers?", example: "e.g. 'Objective: Suppress client-reported engineering drawing non-conformances down to zero occurrences.'" },
 { id: "PROC", label: "INTERNAL BUSINESS PROCESSES", hint: "What tactical operational processes must we excel at?", example: "e.g. 'Objective: Achieve complete ISO 9001 recertification loop compliance with zero major omissions.'" },
 { id: "LEARN", label: "LEARNING & GROWTH", hint: "How will we sustain our strategic ability to adapt and innovate?", example: "e.g. 'Objective: Standardise continuous professional development (CPD) metrics across 100% of junior staff.'" }
 ]
 },
 SCENARIO: {
 name: "Scenario Planning (Future Forecasting)",
 cat: "strategy",
 fields: [
 { id: "S1", label: "SCENARIO A (Optimistic)", hint: "Best case future projection.", example: "e.g. 'Supply chain fully stabilises, asset raw material prices drop 10%, we secure the primary framework tender.'" },
 { id: "S2", label: "SCENARIO B (Status Quo)", hint: "Trends continue seamlessly as they are configured now.", example: "e.g. 'Market pressures remain volatile but manageable. We maintain standard regional utility layout margins.'" },
 { id: "S3", label: "SCENARIO C (Pessimistic)", hint: "Worst case disruption matrix.", example: "e.g. 'Key component vendor defaults on delivery, new statutory penalties imposed, asset installation delayed 6 months.'" },
 { id: "IMP", label: "STRATEGIC IMPLICATIONS", hint: "Common mitigation strategy across all scenarios.", example: "e.g. 'We must diversify our supplier allocation index immediately to de-risk baseline technical execution.'" }
 ]
 },
 VALUECHAIN: {
 name: "Value Chain Analysis (Internal Activities)",
 cat: "strategy",
 fields: [
 { id: "PRI", label: "PRIMARY ACTIVITIES", hint: "Inbound logistics, operations, outbound logistics, marketing, support services.", example: "e.g. 'Bottleneck identified in outbound validation checks: tracking database latency expands processing cycles by 20%.'" },
 { id: "SUP", label: "SUPPORT ACTIVITIES", hint: "Procurement parameters, human resources, technological updates, heavy infrastructure.", example: "e.g. 'Legacy script verification mechanisms are outdated, expanding calculation review times by 48 hours.'" },
 { id: "VAL", label: "VALUE CREATION", hint: "Where is the maximum commercial margin safely isolated?", example: "e.g. 'Our bespoke computational design scripts command the highest market premium, not standard fabrication cycles.'" }
 ]
 },
 BLUEOCEAN: {
 name: "Blue Ocean Strategy (Market Innovation Canvas)",
 cat: "strategy",
 fields: [
 { id: "EL", label: "ELIMINATE", hint: "Which systemic industry variables should be eliminated completely?", example: "e.g. 'Eliminate local physical engineering paper trails entirely. Enforce 100% digital trace compliance.'" },
 { id: "RD", label: "REDUCE", hint: "Which operational parameters should be reduced well below baseline market constraints?", example: "e.g. 'Reduce the complexity layers of final drawing sign-off approvals down to a single automated verification check.'" },
 { id: "RS", label: "RAISE", hint: "Which configuration factors must be elevated far above standard performance averages?", example: "e.g. 'Elevate structural design lifespan parameters on component stress tests from 5 to 12 years.'" },
 { id: "CR", label: "CREATE", hint: "Which elements should be built that the market sector has never offered?", example: "e.g. 'Create an automated, subscription-driven remote telemetry alert system for predictive failure tracking.'" }
 ]
 },
 BUSCANVAS: {
 name: "Business Model Canvas (Value Proposition Matrix)",
 cat: "strategy",
 fields: [
 { id: "VP", label: "VALUE PROPOSITION", hint: "What core structural problem are we resolving for the sector?", example: "e.g. 'An insulated, zero-emission, completely silent urban fluid delivery skid for restricted industrial zones.'" },
 { id: "CS", label: "CUSTOMER SEGMENTS", hint: "Who are we optimizing this specific technology solution for?", example: "e.g. 'Tier-1 infrastructure asset developers and local municipality utility networks in high-density locations.'" },
 { id: "RS", label: "REVENUE STREAMS", hint: "How does this asset configuration actively yield commercial revenue?", example: "e.g. 'Natively leasing structural hardware modules combined with a monthly software licensing metric for analytics access.'" },
 { id: "KS", label: "KEY RESOURCES & ACTIVITIES", hint: "What critical inputs and validation cycles are mandatory to execute delivery?", example: "e.g. 'A verified fleet of automated transport assets, local charging grids, and proprietary route optimisation control scripts.'" }
 ]
 },
 SOAR: {
 name: "SOAR Analysis (Strengths, Aspirations, Results)",
 cat: "strategy",
 fields: [
 { id: "S", label: "STRENGTHS", hint: "What advantages does your technical group control right now?", example: "e.g. 'Extensive internal expertise in high-fidelity finite element analysis and thermodynamic modelling scripts.'" },
 { id: "O", label: "OPPORTUNITIES", hint: "What market trends or regulatory changes can be safely leveraged?", example: "e.g. 'Expand our structural engineering consulting footprint due to updated government flood defense mandates.'" },
 { id: "A", label: "ASPIRATIONS", hint: "What long-term visionary status defines your technical purpose?", example: "e.g. 'To become the premier UK partner for sustainable, climate-resilient urban drainage systems (SuDS).'" },
 { id: "R", label: "RESULTS", hint: "What quantitative data points confirm full operational success?", example: "e.g. 'Secure three independent long-term framework allocation contracts with major water authorities by Q4.'" }
 ]
 },
 BUDGETS: {
 name: "Financial & Budget Control Workbench",
 cat: "strategy",
 fields: [
 { id: "FA", label: "FINANCIAL ANALYSIS", hint: "Assess valuation multiples, liquidity, and revenue concentration.", example: "e.g. 'Current EV/EBITDA multiple is 8.5x. Regional ARR indicates heavy customer concentration.'" },
 { id: "OA", label: "OPERATIONS ANALYSIS", hint: "Evaluate COGS, OpEx efficiency, and DevSecOps scalability.", example: "e.g. 'COGS increased by 4%. DevSecOps infrastructure allows scaling up to 10k users seamlessly.'" },
 { id: "IP", label: "INTEGRATION PLANNING", hint: "Map post-merger synergy realization targets and leadership risk.", example: "e.g. 'Targeting £2M cost synergies via IT consolidation. Key risk is cultural misalignment.'" },
 { id: "VR", label: "VISUALISATION & REPORTING", hint: "Specify required charts and dashboards for the executive pack.", example: "e.g. 'EBITDA trend bar charts, DevSecOps infrastructure diagram, and a Phase 1 Integration Gantt chart.'" }
 ]
 },

 // =========================================================================
 // 2. PROCESS & QUALITY (For Optimization & Defects)
 // =========================================================================
 PDCA: {
 name: "PDCA Cycle (Plan-Do-Check-Act)",
 cat: "process",
 fields: [
 { id: "P", label: "PLAN", hint: "Identify the process deficiency, isolate root variables, and configure the optimization loop.", example: "e.g. 'Objective: Minimize drawing approval cycle times. Plan: Run parallel script checking routines on Project Alpha.'" },
 { id: "D", label: "DO", hint: "Deploy the newly configured optimization plan on a restricted testing track.", example: "e.g. 'Executed the updated parallel loop across 4 separate engineering documentation packages over a 30-day window.'" },
 { id: "C", label: "CHECK", hint: "Rigorously audit the output datasets against legacy baseline performance parameters.", example: "e.g. 'Average validation cycle dropped to 6 days. Target reached, but the final authorization phase is still a resource bottleneck.'" },
 { id: "A", label: "ACT", hint: "Permanently standardize the successful workflow changes or refine the metrics array.", example: "e.g. 'Adopt parallel script reviews as standard operating procedure. Initialise a new internal optimization loop targeting authorization latency.'" }
 ]
 },
 DMAIC: {
 name: "DMAIC (Six Sigma Process Optimization)",
 cat: "process",
 fields: [
 { id: "D", label: "DEFINE", hint: "Clearly articulate the manufacturing defect, process deviation, and commercial target.", example: "e.g. 'PCB assembly yields have degraded down to 92%. Operational Target: Restore yield bounds back to 98% within a 90-day window.'" },
 { id: "M", label: "MEASURE", hint: "Collect unvarnished baseline performance metrics across the active operations track.", example: "e.g. 'Logged 14 days of live production tracking metrics. Data indicates 80% of component anomalies trace to cold solder joints.'" },
 { id: "A", label: "ANALYZE", hint: "Deploy rigorous root-cause analysis loops to expose hidden process dependencies.", example: "e.g. 'Ishikawa and thermal monitoring revealed reflow oven temperature profiles fluctuate by +/-10C on late-night manufacturing shifts.'" },
 { id: "I", label: "IMPROVE", hint: "Design, validate, and execute targeted engineering modifications to eliminate the root cause.", example: "e.g. 'Installed an insulated voltage stabilizer on the oven control panel and recalibrated the profile. Yield performance recovered to 97%.'" },
 { id: "C", label: "CONTROL", hint: "Hardcode strict monitoring rules, automated safety checks, and compliance audits to safeguard the gains.", example: "e.g. 'Implemented continuous digital thermal tracking nodes with automated interlock cut-offs if temperature varies by >2C.'" }
 ]
 },
 VSM: {
 name: "Value Stream Mapping (Lean Flow Optimization)",
 cat: "process",
 fields: [
 { id: "CS", label: "CURRENT STATE MAP", hint: "Map the current material and information flows, explicitly noting non-value-added waste cycles.", example: "e.g. 'Raw steel beams store for 4 days before cutting loops. Work-in-progress components queue for 48 hours between welding and coating areas.'" },
 { id: "FS", label: "FUTURE STATE VISION", hint: "Design the streamlined, idealized workflow environment to minimize process lead times safely.", example: "e.g. 'Establish continuous manufacturing flow from welding to coating via an automated line. Compress maximum WIP storage bounds down to 4 hours.'" },
 { id: "KA", label: "KAIZEN OPTIMIZATION EVENTS", hint: "Isolate immediate, low-risk engineering deployment actions to close the process performance gap.", example: "e.g. '1. Physically reposition the coating installation cell closer to the welding layout. 2. Synchronise line step speeds to eliminate internal queues.'" }
 ]
 },
 "5WHYS": {
 name: "5 Whys (Root Cause Analysis)",
 cat: "process",
 fields: [
 { id: "P", label: "PROBLEM STATEMENT", hint: "State the empirical performance failure or structural anomaly concisely.", example: "e.g. 'The primary hydraulic motor overheating interlock tripped, shutting down production line tracking loops.'" },
 { id: "W1", label: "WHY 1", hint: "What direct, immediate physical cause produced the stated problem?", example: "e.g. 'Because the volume of cooling oil flowing through the internal manifold was severely insufficient.'" },
 { id: "W2", label: "WHY 2", hint: "What cause produced the physical state recorded in Why 1?", example: "e.g. 'Because the primary pump fluid intake filter mesh was completely clogged with metallic particle debris.'" },
 { id: "W3", label: "WHY 3", hint: "What cause produced the condition recorded in Why 2?", example: "e.g. 'Because the internal system oil had become heavily contaminated with abrasive structural shavings.'" },
 { id: "W4", label: "WHY 4", hint: "What cause produced the contamination recorded in Why 3?", example: "e.g. 'Because the main reservoir access cap safety gasket had degraded, fragmented, and shed particulate into the tank.'" },
 { id: "W5", label: "WHY 5 (ROOT CAUSE)", hint: "Expose the underlying systemic, procedural, or management framework omission.", example: "e.g. 'Because the active preventive maintenance schedule does not include mandatory inspection or replacement intervals for tank access gaskets.'" }
 ]
 },
 FISHBONE: {
 name: "Fishbone Diagram (Ishikawa Cause & Effect Matrix)",
 cat: "process",
 fields: [
 { id: "PR", label: "PROCESS DEFECT (HEAD)", hint: "The structural non-conformance or mechanical failure under analysis.", example: "e.g. 'High reject rates and component deformation on high-pressure injection molding Line 2.'" },
 { id: "M1", label: "MANPOWER (Personnel Roles)", hint: "Training metrics, personnel fatigue variables, shift change procedures.", example: "e.g. 'Newly onboarded operators lacking certified training on thermal profile configuration loops. Shift changeover fatigue.'" },
 { id: "M2", label: "MACHINERY (Equipment Conditions)", hint: "Asset maintenance logs, component wear factors, instrumentation calibration tolerances.", example: "e.g. 'Primary nozzle heater band output fluctuating wildly. Clamp pressure metrics indicating severe cylinder seal leakage.'" },
 { id: "M3", label: "METHODOLOGY (Process Workflow)", hint: "Standard operating procedures, quality assurance guidelines, cycle time targets.", example: "e.g. 'Cooling cycle duration compressed too short to satisfy unrealistic production quotas. SOP allows too much manual variance.'" },
 { id: "M4", label: "MATERIALS (System Inputs)", hint: "Raw material consistency, specification tracking, supplier variation variables.", example: "e.g. 'Recent batch of raw polymer granules exhibits significantly higher moisture absorption parameters than the engineering spec allows.'" },
 { id: "M5", label: "ENVIRONMENT (Site Conditions)", hint: "Ambient temperature, local relative humidity metrics, physical workspace constraints.", example: "e.g. 'High ambient humidity levels on the factory floor are exceeding the drying capacity of the existing hopper layout.'" }
 ]
 },
 PARETO: {
 name: "Pareto Analysis (80/20 Prioritization Loop)",
 cat: "process",
 fields: [
 { id: "D", label: "DATA COLLECTION LEDGER", hint: "Categorise and record individual non-conformances, component defects, or loss costs along with their frequency over a tracking window.", example: "e.g. 'Defect Tracking Log: Surface Scratch (50 occurrences), Body Dent (10), Paint Run (5), Dimensional Warp (2). Total Outages = 67.'" },
 { id: "A", label: "ANALYSIS (80/20 Breakdown)", hint: "Determine which vital few defect categories generate the vast majority of your operational quality losses.", example: "e.g. 'Surface scratches alone represent 74.6% of total quality rejects. Scratches combined with body dents account for 89.5% of total site rework costs.'" },
 { id: "ACT", label: "TARGETED CORRECTIVE ACTION", hint: "Isolate exactly where to focus capital resources and team engineering hours to maximize process recovery.", example: "e.g. 'Direct 100% of current quality hours to overhauling component handling procedures and protective transit packaging. Ignore minor dimensional warps for now.'" }
 ]
 },
 KANBAN: {
 name: "Kanban Board (WIP Workflow Control)",
 cat: "process",
 fields: [
 { id: "TD", label: "TO DO (Backlog Queue)", hint: "Pending engineering tasks, strictly prioritized by strategic value and dependency tracking.", example: "e.g. 'Draft structural specification for Pump Skid A, execute vendor technical selection matrix for Motor B, complete initial CAD routing.'" },
 { id: "IP", label: "IN PROGRESS (Active WIP Constraints)", hint: "Tasks currently undergoing active execution. Enforce a strict work-in-progress limit to optimize line throughput.", example: "e.g. 'Finite Element Stress Simulation (WIP), Hydraulic Validation Calculations (WIP - Blocked by lack of verified supplier material data sheets).'" },
 { id: "DN", label: "DONE (Verified Baseline)", hint: "Tasks that have successfully cleared all quality controls, checking scripts, and principal engineer sign-offs.", example: "e.g. 'Multi-disciplinary Concept Review Meeting Minutes signed, Phase 2 Capital Expenditure Authorization Form completed and locked.'" }
 ]
 },
 POKAYOKE: {
 name: "Poka-Yoke (Mistake Proofing Architecture)",
 cat: "process",
 fields: [
 { id: "ERR", label: "POTENTIAL REPEATABLE ERROR", hint: "What human operational error, assembly mistake, or data omission is highly probable?", example: "e.g. 'Field operators connecting the primary high-voltage direct current input cables to the negative terminals in low-visibility site conditions.'" },
 { id: "MECH", label: "PROOFING MECHANICAL METHOD", hint: "What physical configuration, geometric block, or automated control script can prevent the error?", example: "e.g. 'Redesign the component terminal sockets with asymmetric geometric slots (Keyed plugs) so they physically cannot interface incorrectly.'" },
 { id: "RES", label: "SYSTEMIC RISK REDUCTION", hint: "What is the direct outcome regarding process safety margins and rework costs?", example: "e.g. 'Zero polarity failure risks during field assembly. Complete elimination of downstream fuse blowouts and circuit component rework liabilities.'" }
 ]
 },
 SIPOC: {
 name: "SIPOC (Process Boundary Definition)",
 cat: "process",
 fields: [
 { id: "S", label: "SUPPLIERS", hint: "Who provides the critical data layers, materials, or permissions needed to initialize the process?", example: "e.g. 'Certified Steel Stockholders, Internal Structural Systems Analysts, Client Lead Systems Architect.'" },
 { id: "I", label: "INPUTS", hint: "What exact physical raw materials, design specifications, or digital records are required?", example: "e.g. 'Raw Structural Steel Sections, Approved CAD Assembly Files, Low-Hydrogen Welding Consumables, Quality Control Manifests.'" },
 { id: "P", label: "PROCESS CORE STEPS", hint: "Map the 5 to 7 high-level operational actions that transform the inputs into final deliverables.", example: "e.g. '1. Component Laser Cutting -> 2. Geometric Fit-Up -> 3. Automated Weld Cycle -> 4. NDT Ultrasonic Inspection -> 5. Protective Coating Application -> 6. Logistics Dispatch.'" },
 { id: "O", label: "OUTPUTS", hint: "What physical structures, quality records, or verified datasets are produced by the process?", example: "e.g. 'Fabricated Heavy Structural Column Assembly, Non-Destructive Testing Quality Sign-Off Certificate, Shipping Manifest.'" },
 { id: "C", label: "CUSTOMERS", hint: "Who is the direct downstream recipient or internal stakeholder utilizing the output block?", example: "e.g. 'Site Structural Erection Crew, Corporate Principal Quality Auditor, Client Operations Representative.'" }
 ]
 },

 // =========================================================================
 // 3. DECISION MAKING (For Risk & Options)
 // =========================================================================
 MONTE: {
 name: "Monte Carlo Simulation (Probabilistic Risk Modeler)",
 cat: "decision",
 fields: [
 { id: "VAR", label: "STOCHASTIC SYSTEM VARIABLES", hint: "List the uncertain project elements, raw material cost ranges, or timeline durations exhibiting high variability.", example: "e.g. 'Fluctuating Steel Material Surcharge (£/tonne), Field Installation Duration (days), Adverse Weather Event Windows (days).'" },
 { id: "DIS", label: "PROBABILITY DISTRIBUTIONS", hint: "Assign statistical boundaries (Minimum, Maximum, Most Likely) and distribution curves (Normal, Triangular, Uniform) to each variable.", example: "e.g. 'Steel Cost: £550 to £750/tonne (Normal Distribution curve). Installation Phase: 12 to 24 days (Triangular skew: 14 days likely).'" },
 { id: "OUT", label: "SIMULATION ACCURACY FORECAST", hint: "Define the specific target probability threshold or confidence interval required for capital investment authorization.", example: "e.g. 'Calculate the precise mathematical probability of total infrastructure project execution exceeding a strict £1.2M capital threshold.'" }
 ]
 },
 DECTREE: {
 name: "Decision Tree Analysis (Logic Vector Modeling)",
 cat: "decision",
 fields: [
 { id: "DEC", label: "CRITICAL DECISION NODE", hint: "State the primary technical choice or strategic option currently requiring engineering resolution.", example: "e.g. 'Determine whether to execute an extensive overhaul on legacy Centrifugal Pump Array 4 or purchase a complete replacement system.'" },
 { id: "OPA", label: "LOGIC BRANCH A (System Overhaul)", hint: "Detail the initial capital outlays, probability metrics for downstream failure modes, and subsequent penalty costs.", example: "e.g. 'Immediate Overhaul Cost: £15k. 40% probability of secondary seal failure within 18 months, generating £25k in downstream production losses.'" },
 { id: "OPB", label: "LOGIC BRANCH B (Full Replacement)", hint: "Detail the high capital outlays, expected energy efficiency gains, and high reliability thresholds.", example: "e.g. 'Immediate Purchase Cost: £45k. 99.8% confirmed reliability rating over a 5-year operating window. Zero maintenance overhead liabilities for Year 1.'" },
 { id: "CON", label: "EXPECTED VALUE CONCLUSION", hint: "Compute the statistical Expected Value (EV) to determine the path of maximum financial and operational resilience.", example: "e.g. 'The EV of Branch A reveals severe long-term downtime risk liabilities. Strategic engineering justification dictates selecting Branch B to secure long-term asset continuity.'" }
 ]
 },
 CBA: {
 name: "Cost-Benefit Analysis (Commercial Viability Ledger)",
 cat: "decision",
 fields: [
 { id: "COST", label: "TOTAL EXPENDITURE OVERHEADS (CapEx & OpEx)", hint: "Quantify all direct capital costs, software procurement fees, employee training loops, and ongoing operational maintenance liabilities.", example: "e.g. 'Advanced Control Software License: £60k. Staff Transition Modules: £12k. Server Infrastructure Upgrades: £8k. Total Immediate Investment = £80k.'" },
 { id: "BEN", label: "QUANTIFIABLE SYSTEM BENEFITS", hint: "Identify and calculate all direct engineering hour reductions, process waste elimination gains, and safety risk mitigations.", example: "e.g. 'Saves an audited 650 design engineering hours annually @ £60/hr = £39k/year commercial savings. Completely removes manual input data entry errors.'" },
 { id: "ROI", label: "FINANCIAL EXPRUPT METRICS & PAYBACK", hint: "Compare overall expenditures against project benefits to establish the formal Return on Investment timeline.", example: "e.g. 'Year 1 Savings: £39k. System Payback Horizon achieved at exactly 2.05 Years. Estimated 5-Year net commercial yield remains deeply positive.'" }
 ]
 },
 RISKMAT: {
 name: "Risk Assessment Matrix (Impact vs Probability)",
 cat: "decision",
 fields: [
 { id: "HAZ", label: "HAZARD SPECIFICATION", hint: "Identify the technical breakdown mode, onsite safety liability, or structural hazard.", example: "e.g. 'Heavy lifting crane outrigger collapse during high-velocity wind gusts during sector assembly operations on site.'" },
 { id: "INIT", label: "UNMITIGATED RISK SCORE", hint: "Evaluate baseline risk prior to control implementation using standard metrics: Probability (1-5) x Impact (1-5).", example: "e.g. 'Probability (3 - Likely/Possible) x Impact (5 - Critical/Catastrophic) = Initial Risk Factor 15 (Severe Hazard Boundary).'" },
 { id: "MIT", label: "ENGINEERING CONTROLS & MITIGATION", hint: "Hardcode specific safety procedures, physical constraints, automated interlocks, or monitoring regimes.", example: "e.g. 'Enforce immediate stop-work parameters if site wind velocities exceed 22 knots. Implement daily ultrasonic outrigger pad alignment logs.'" },
 { id: "RES", label: "RESIDUAL RISK MATRIX MARGINS", hint: "Re-evaluate the risk level after verifying control performance to guarantee alignment with ALARP principles.", example: "e.g. 'Probability (1 - Highly Improbable/Rare) x Impact (5 - Critical/Catastrophic) = Residual Risk Factor 5 (Medium Asset Margin - Safe to Proceed).'" }
 ]
 },
 FORCEFIELD: {
 name: "Force Field Analysis (Change Management Strategy)",
 cat: "decision",
 fields: [
 { id: "CHANGE", label: "PROPOSED ENGINEERING CONIGURATION", hint: "State the target workflow modification, tooling transition, or structural platform update.", example: "e.g. 'Transition 100% of internal piping stress calculation reviews from manual templates to a cloud-based automated check script.'" },
 { id: "FOR", label: "DRIVING ENFORCEMENT FORCES (+)", hint: "List the operational advantages, cost-saving vectors, compliance mandates, and efficiency gains pushing the change forward.", example: "e.g. 'Reduces engineering validation loops by 70%, standardises document control archives, eliminates single-point verification bottlenecks.'" },
 { id: "AG", label: "RESTRAINING RESISTANCE FORCES (-)", hint: "List the cultural blockages, legacy habits, training gaps, and software transition risks pushing against execution.", example: "e.g. 'Senior staff resistance to trusting automated script outputs, immediate project timeline disruption during onboarding, integration lag with old CAD files.'" },
 { id: "STRAT", label: "EQUILIBRIUM BALANCING STRATEGY", hint: "Formulate precise leadership interventions to safely reinforce driving forces while neutralizing restraining elements.", example: "e.g. 'Deploy a parallel verification period where legacy methods validate the code output for 30 days. Establish 1-on-1 peer optimization mentorship tracks.'" }
 ]
 },
 OODA: {
 name: "OODA Loop (Tactical Incident Response Cycle)",
 cat: "decision",
 fields: [
 { id: "OBS", label: "OBSERVE SYSTEM DATA", hint: "Monitor and capture raw operational diagnostics, telemetry drops, sensor spikes, or field anomaly manifests.", example: "e.g. 'Primary cooling loop telemetry monitors suddenly signal a massive 4.2 bar pressure drop. Field alerts verify fluid leakage flags.'" },
 { id: "ORI", label: "ORIENT INFRASTRUCTURE CONTEXT", hint: "Filter raw data through engineering principles, system schematics, local asset layouts, and operational physics.", example: "e.g. 'Pressure drop matches lines downstream of Valve Matrix 2. Correlating this layout with recent maintenance logs indicates a potential primary seal failure.'" },
 { id: "DEC", label: "DECIDE CORRECTIVE ROUTE", hint: "Formulate options rapidly and select the optimal mitigation action to protect process margins and preserve life safety.", example: "e.g. 'We cannot risk cavitation loops inside the main pumps. Decision: Isolate the Sector 3 line and reroute flow via Bypass Loop B instantly.'" },
 { id: "ACT", label: "ACT ON COMMAND SCRIPTS", hint: "Execute the selected command sequence, engage physical interlocks, run manual isolation, and audit the feedback loops.", example: "e.g. 'Fired automated close commands to pneumatic valve nodes V-203. Diverted pump outputs across Bypass B. Monitoring sensor logs to verify backpressure stabilization.'" }
 ]
 },
 WRAP: {
 name: "WRAP Technique (Advanced Decision Process Architecture)",
 cat: "decision",
 fields: [
 { id: "W", label: "WIDEN EXPLICIT OPTIONS", hint: "Avoid binary choice frameworks ('X or Y'). Force the group to consider multiple alternative configuration paths.", example: "e.g. 'Instead of just Outsource Software vs Develop Internally, evaluate: 1. Purchase open-access baseline scripts. 2. Jointly fund custom code with an infrastructure partner.'" },
 { id: "R", label: "REALITY-TEST ASSUMPTIONS", hint: "Design a limited, low-risk simulation, prototype track, or field test to verify theoretical performance claims.", example: "e.g. 'Run a limited 14-day field evaluation loop using a single beta license on a non-critical infrastructure node to audit real-world processing latency.'" },
 { id: "A", label: "ATTAIN COGNITIVE DISTANCE", hint: "Remove short-term emotional bias, corporate deadline panic, and career self-preservation fears from the logic loop.", example: "e.g. 'Evaluate the option strictly through a 10-year asset lifecycle perspective: if we were onboarded as external consulting engineers today, we would immediately cancel this legacy code track.'" },
 { id: "P", label: "PREPARE TO BE WRONG (Tripwires)", hint: "Hardcode explicit, quantitative operational metrics and deadline boundaries that instantly trigger termination or recovery procedures if missed.", example: "e.g. 'Set a firm performance tripwire: if software integration logic overruns our scheduled critical path by >7 days, terminate the contract immediately and revert to the baseline configuration.'" }
 ]
 },
 CONTRACTS: {
 name: "Supplier Contract Evaluation",
 cat: "decision",
 fields: [
 { id: "TERM", label: "TERMINATION CLAUSES", hint: "Detail notice periods and early exit conditions.", example: "e.g. 'The 90-day exit clause is too rigid. Needs amendment to 30 days.'" },
 { id: "VOL", label: "VOLUME SCALABILITY", hint: "Review price breaks and minimum order quantities.", example: "e.g. 'MOQ is fixed at 500 units. Needs sliding scale discount for overages.'" },
 { id: "COMP", label: "COMPLIANCE & AUDIT", hint: "Verify adherence to ISO or H&S standards.", example: "e.g. 'Requires formal audit rights to verify ISO 9001 compliance onsite.'" }
 ]
 },

 // =========================================================================
 // 4. FEEDBACK & COACHING (For Leadership & People)
 // =========================================================================
 GROW: {
 name: "GROW Model (Personnel Performance Development)",
 cat: "feedback",
 fields: [
 { id: "G", label: "GOAL SPECIFICATION", hint: "What explicit technical milestone, standard tracking capability, or professional credential does the coachee intend to reach?", example: "e.g. 'Achieve independent design validation authority on high-integrity piping stress analysis scripts within a 6-month window.'" },
 { id: "R", label: "REALITY VERIFICATION", hint: "What is the coachee's current baseline skill tier, audited error rate, and operational performance constraint?", example: "e.g. 'You execute basic structural checks accurately, but you currently require principal supervision on calculations involving dynamic fatigue loads under Eurocode 3.'" },
 { id: "O", label: "OPTIONS CONFIGURATION", hint: "What distinct capability progression paths, mentoring loops, or technical training blocks can close the professional gap safely?", example: "e.g. '1. Shadow the Principal Analyst during weekly complex code review sweeps. 2. Complete the institution-certified advanced finite element analysis masterclass.'" },
 { id: "W", label: "WAY FORWARD & WILL ACTIONS", hint: "Hardcode the explicit task milestones, regular review intervals, and tracking metrics the coachee commits to execute.", example: "e.g. 'Commit to complete the FEA masterclass modules by Week 8. Initialise a weekly 30-minute progress audit every Thursday to review your dynamic load calculation drafts.'" }
 ]
 },
 SBI: {
 name: "SBI (Situation-Behaviour-Impact Feedback)",
 cat: "feedback",
 fields: [
 { id: "S", label: "SITUATION", hint: "When/where?", example: "e.g. 'During the client design review meeting yesterday afternoon...'" },
 { id: "B", label: "BEHAVIOR", hint: "Observable action (Facts).", example: "e.g. 'You interrupted the clients Lead Engineer three times while he was explaining the safety requirement.'" },
 { id: "I", label: "IMPACT", hint: "Result.", example: "e.g. 'It made us look defensive and the client became visibly frustrated, potentially risking the approval.'" }
 ]
 },
 SBIBI: {
 name: "SBIBI (SBI + Desired Behavior)",
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
 name: "SBII (SBI + Intent Clarification)",
 cat: "feedback",
 fields: [
 { id: "S", label: "SITUATION", hint: "Context.", example: "e.g. 'During the code review this morning.'" },
 { id: "B", label: "BEHAVIOR", hint: "Action.", example: "e.g. 'You rewrote Marks module completely without discussing it with him first.'" },
 { id: "I", label: "IMPACT", hint: "Result.", example: "e.g. 'Mark feels undermined and discouraged from contributing.'" },
 { id: "INT", label: "INTENT", hint: "Ask why. Uncover motive.", example: "e.g. 'I assume you wanted to optimize the efficiency, but we need to balance that with team cohesion.'" }
 ]
 },
 CEDAR: {
 name: "CEDAR (Collaborative Performance Review)",
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
 name: "Pendleton's Rules (Balanced Dialogue)",
 cat: "feedback",
 fields: [
 { id: "P1", label: "WHAT WENT WELL? (Ask Receiver)", hint: "Positives.", example: "e.g. 'The logic behind your FEA analysis was robust and the mesh quality was excellent.'" },
 { id: "P2", label: "WHAT COULD BE IMPROVED? (Ask Receiver)", hint: "Growth areas.", example: "e.g. 'The conclusion was a bit vague. It did not explicitly state the safety margin against yield.'" },
 { id: "P3", label: "AGREED ACTION", hint: "Takeaway.", example: "e.g. 'For the next report, include a summary table on Page 1 listing Pass/Fail status for all load cases.'" }
 ]
 },
 COIN: {
 name: "COIN Model (Context-Observation-Impact-Next)",
 cat: "feedback",
 fields: [
 { id: "C", label: "CONTEXT", hint: "Circumstance.", example: "e.g. 'When we are close to a deadline like yesterday...'" },
 { id: "O", label: "OBSERVATION", hint: "What I saw.", example: "e.g. 'I noticed you stopped updating the shared tracker and worked offline.'" },
 { id: "I", label: "IMPACT", hint: "Effect.", example: "e.g. 'I could not report accurate progress to the Board, which caused panic about the schedule.'" },
 { id: "N", label: "NEXT STEPS", hint: "Agreed change.", example: "e.g. 'Even during crunch time, please update the tracker status by 9am daily.'" }
 ]
 },
 OKRS: {
 name: "OKRs (Objectives & Key Results)",
 cat: "feedback",
 fields: [
 { id: "OBJ", label: "OBJECTIVE", hint: "Ambitious goal.", example: "e.g. 'Become the safest and most reliable manufacturing site in the region.'" },
 { id: "KR1", label: "KEY RESULT 1", hint: "Measurable outcome.", example: "e.g. 'Reduce Lost Time Injury Frequency Rate (LTIFR) from 1.5 to 0.0 by Q4.'" },
 { id: "KR2", label: "KEY RESULT 2", hint: "Measurable outcome.", example: "e.g. 'Achieve 100% staff training completion on the new Machinery Safety Standard.'" },
 { id: "KR3", label: "KEY RESULT 3", hint: "Measurable outcome.", example: "e.g. 'Conduct 50 leadership safety walks per month.'" }
 ]
 },

 // =========================================================================
 // 5. GOAL SETTING CORE INJECTIONS (For Calibration & Scoping)
 // =========================================================================
 BACKWARD: {
 name: "Backward Goal Framework (Reverse Milestone Induction)",
 cat: "goals",
 fields: [
 { id: "DEST", label: "Ultimate Long-Term Destination", hint: "Define the final high-integrity engineering state or technical capability goal (e.g., 3-5 years out).", example: "e.g. Establish a fully carbon-neutral manufacturing line layout across Sector 4, compliant with ISO 14001 guidelines." },
 { id: "INT", label: "Intermediate Phase Milestones", hint: "What major steps or asset changes must happen right before reaching the final goal? (e.g., 1-2 years out).", example: "e.g. Complete multi-site integration tests for electric heat pump blocks and finish secondary validation loops." },
 { id: "FOUND", label: "Foundational Phase Triggers", hint: "What core capabilities, equipment installations, or team certifications are needed to start? (e.g., 6 months out).", example: "e.g. Procure high-spec telemetry sensors and ensure 100% of staff pass advanced safety calibration modules." },
 { id: "IMM", label: "Immediate Operational Actions", hint: "What specific engineering tasks or calculation checks must be executed within the next 14-30 days?", example: "e.g. Audit legacy flow calculation templates and wireframe a draft schematic for the updated bypass valve loop." }
 ]
 },
 GOLDENCIRCLE: {
 name: "The Golden Circle (Why, How, What Purpose Alignment)",
 cat: "goals",
 fields: [
 { id: "WHY", label: "The Why (Core Purpose)", hint: "What is the baseline purpose, safety mission, or commercial necessity driving this project cell?", example: "e.g. Protect national grid assets from unexpected thermal surges, ensuring zero down-time for regional utilities." },
 { id: "HOW", label: "The How (Process & Principles)", hint: "What unique engineering workflows, testing routines, or quality standards ensure safe delivery?", example: "e.g. Deploying automated thermal monitoring scripts and checking all code against strict ISO 9001 frameworks." },
 { id: "WHAT", label: "The What (Outputs & Deliverables)", hint: "What physical assets, data logs, structural drawings, or software modules are produced?", example: "e.g. A verified network layout schematic, automated stress-testing logs, and 12 calibrated telemetry nodes." }
 ]
 }
};