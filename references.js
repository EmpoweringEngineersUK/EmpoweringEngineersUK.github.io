// EMPOWERING ENGINEERS UK - REFERENCE LIBRARY DATABASE
// Curated list of "Gold Standard" textbooks, websites, standards, channels, and tools.

const refDb = [
    // =========================================================================
    // MECHANICAL & PIPING
    // =========================================================================
    { 
        disc: "Mechanical", 
        topic: "General Reference", 
        title: "Machinery's Handbook", 
        type: "Book", 
        desc: "The 'Black Book'. The absolute bible for machining, tolerances, and mechanical standards since 1914.",
        link: "https://www.amazon.co.uk/s?k=Machinery%27s+Handbook" 
    },
    { 
        disc: "Mechanical", 
        topic: "Design & Analysis", 
        title: "Shigley's Mechanical Engineering Design", 
        type: "Book", 
        desc: "The gold standard for machine design, fatigue analysis, and component sizing.",
        link: "https://www.amazon.co.uk/s?k=Shigley%27s+Mechanical+Engineering+Design" 
    },
    { 
        disc: "Mechanical", 
        topic: "Reference", 
        title: "Marks' Standard Handbook for Mechanical Engineers", 
        type: "Book", 
        desc: "A comprehensive resource covering everything from thermodynamics to machine elements.",
        link: "https://www.amazon.co.uk/s?k=Marks%27+Standard+Handbook+for+Mechanical+Engineers" 
    },
    { 
        disc: "Mechanical", 
        topic: "Stress Analysis", 
        title: "Roark's Formulas for Stress and Strain", 
        type: "Book", 
        desc: "The definitive collection of beam, plate, and shell formulas. Essential for FEA validation.",
        link: "https://www.amazon.co.uk/s?k=Roark%27s+Formulas+for+Stress+and+Strain" 
    },
    { 
        disc: "Mechanical", 
        topic: "Stress Analysis", 
        title: "Peterson's Stress Concentration Factors", 
        type: "Book", 
        desc: "The visual guide to 'Kt' factors for notches, grooves, and holes.",
        link: "https://www.amazon.co.uk/s?k=Peterson%27s+Stress+Concentration+Factors" 
    },
    { 
        disc: "Mechanical", 
        topic: "GD&T", 
        title: "ASME Y14.5 (GD&T Standard)", 
        type: "Standard", 
        desc: "The global standard for Geometric Dimensioning and Tolerancing.",
        link: "https://www.asme.org/codes-standards/y14-5-dimensioning-tolerancing" 
    },
    { 
        disc: "Mechanical", 
        topic: "General Reference", 
        title: "RoyMech", 
        type: "Website", 
        desc: "An incredible UK-based repository of BS standards, thread data, and gearing formulas.",
        link: "https://roymech.org/" 
    },
    { 
        disc: "Mechanical", 
        topic: "Tribology", 
        title: "Tribology-ABC", 
        type: "Website", 
        desc: "Calculators for Hertzian contact stress, bearings, and lubrication.",
        link: "https://www.tribology-abc.com/" 
    },
    { 
        disc: "Mechanical", 
        topic: "Piping", 
        title: "ASME B31.3 Process Piping", 
        type: "Standard", 
        desc: "The primary code for process piping design (USA/Global).",
        link: "https://www.asme.org/codes-standards/find-codes-standards/b31-3-process-piping" 
    },

    // =========================================================================
    // AEROSPACE
    // =========================================================================
    { 
        disc: "Mechanical", 
        topic: "Aerodynamics", 
        title: "Fundamentals of Aerodynamics (Anderson)", 
        type: "Book", 
        desc: "The introductory bible for aerodynamics, covering lift, drag, and compressible flow.",
        link: "https://www.amazon.co.uk/s?k=Fundamentals+of+Aerodynamics+Anderson" 
    },
    { 
        disc: "Mechanical", 
        topic: "Structures", 
        title: "Bruhn: Analysis & Design of Flight Vehicle Structures", 
        type: "Book", 
        desc: "Known simply as 'Bruhn'. The ultimate reference for aircraft stress analysis.",
        link: "https://www.amazon.co.uk/s?k=Bruhn+Analysis+and+Design" 
    },
    { 
        disc: "Mechanical", 
        topic: "Propulsion", 
        title: "Mechanics and Thermodynamics of Propulsion (Hill & Peterson)", 
        type: "Book", 
        desc: "The standard text for jet engines, rockets, and gas turbines.",
        link: "https://www.amazon.co.uk/s?k=Mechanics+and+Thermodynamics+of+Propulsion" 
    },

    // =========================================================================
    // ELECTRICAL, ELECTRONICS & C&I
    // =========================================================================
    { 
        disc: "Electrical", 
        topic: "Regulations", 
        title: "BS 7671:2018 (The Wiring Regs)", 
        type: "Standard", 
        desc: "The IET Wiring Regulations (18th Edition). Mandatory for UK low voltage design.",
        link: "https://electrical.theiet.org/bs-7671/" 
    },
    { 
        disc: "Electrical", 
        topic: "Electronics", 
        title: "The Art of Electronics (Horowitz & Hill)", 
        type: "Book", 
        desc: "Widely accepted as the best book on analog circuit design ever written.",
        link: "https://artofelectronics.net/" 
    },
    { 
        disc: "Electrical", 
        topic: "Circuits", 
        title: "Microelectronic Circuits (Sedra & Smith)", 
        type: "Book", 
        desc: "The standard university text for understanding MOSFETs, BJTs, and amplifiers.",
        link: "https://www.amazon.co.uk/s?k=Microelectronic+Circuits+Sedra+Smith" 
    },
    { 
        disc: "Electrical", 
        topic: "Power", 
        title: "Power System Analysis (Grainger & Stevenson)", 
        type: "Book", 
        desc: "The classic text for grid analysis, load flow, and fault calculations.",
        link: "https://www.amazon.co.uk/s?k=Power+System+Analysis+Grainger" 
    },
    { 
        disc: "Electrical", 
        topic: "Control", 
        title: "Modern Control Engineering (Ogata)", 
        type: "Book", 
        desc: "The go-to reference for PID control, transfer functions, and state-space analysis.",
        link: "https://www.amazon.co.uk/s?k=Modern+Control+Engineering+Ogata" 
    },
    { 
        disc: "Electrical", 
        topic: "Theory", 
        title: "All About Circuits", 
        type: "Website", 
        desc: "Free, high-quality textbook and forum for EE theory and projects.",
        link: "https://www.allaboutcircuits.com/" 
    },

    // =========================================================================
    // CIVIL & STRUCTURAL
    // =========================================================================
    { 
        disc: "Civil", 
        topic: "Structural", 
        title: "IStructE Standard Method of Detailing", 
        type: "Book", 
        desc: "The go-to manual for concrete and steel detailing in the UK.",
        link: "https://www.istructe.org/resources/guidance/standard-method-of-detailing-structural-concrete/" 
    },
    { 
        disc: "Civil", 
        topic: "Analysis", 
        title: "Structural Analysis (Hibbeler)", 
        type: "Book", 
        desc: "Comprehensive guide to trusses, beams, and frames.",
        link: "https://www.amazon.co.uk/s?k=Structural+Analysis+Hibbeler" 
    },
    { 
        disc: "Civil", 
        topic: "Concrete", 
        title: "Reinforced Concrete Design (Mosley & Bungey)", 
        type: "Book", 
        desc: "The standard text for Eurocode 2 concrete design in the UK.",
        link: "https://www.amazon.co.uk/s?k=Reinforced+Concrete+Design+Mosley" 
    },
    { 
        disc: "Civil", 
        topic: "Steel", 
        title: "SteelConstruction.info (The Blue Book)", 
        type: "Website", 
        desc: "The definitive online encyclopedia for UK steel construction data.",
        link: "https://www.steelconstruction.info/The_Blue_Book" 
    },
    { 
        disc: "Civil", 
        topic: "Geotech", 
        title: "Craig's Soil Mechanics", 
        type: "Book", 
        desc: "The classic textbook for geotechnical engineering and soil analysis.",
        link: "https://www.amazon.co.uk/s?k=Craig%27s+Soil+Mechanics" 
    },
    { 
        disc: "Civil", 
        topic: "Costing", 
        title: "Spon's Architects' and Builders' Price Book", 
        type: "Book", 
        desc: "Essential for commercial awareness (Competency E). Real-world UK construction costs.",
        link: "https://www.amazon.co.uk/s?k=Spon%27s+Price+Book" 
    },

    // =========================================================================
    // PROCESS, CHEMICAL & MATERIALS
    // =========================================================================
    { 
        disc: "Process", 
        topic: "General", 
        title: "Perry's Chemical Engineers' Handbook", 
        type: "Book", 
        desc: "The 'Chemical Engineer's Bible'. Covers everything from thermodynamics to reactors.",
        link: "https://www.amazon.co.uk/s?k=Perry%27s+Chemical+Engineers%27+Handbook" 
    },
    { 
        disc: "Process", 
        topic: "Fluids", 
        title: "Crane Technical Paper 410", 
        type: "Book", 
        desc: "The quintessential guide to flow of fluids through valves, fittings, and pipe.",
        link: "https://www.flowoffluids.com/tp410.aspx" 
    },
    { 
        disc: "Process", 
        topic: "Safety", 
        title: "The Purple Book (CCPS)", 
        type: "Book", 
        desc: "Guidelines for Chemical Process Quantitative Risk Analysis (QRA).",
        link: "https://www.aiche.org/ccps" 
    },
    { 
        disc: "Process", 
        topic: "Materials", 
        title: "Materials Science and Engineering (Callister)", 
        type: "Book", 
        desc: "The definitive introduction to materials properties, failure, and selection.",
        link: "https://www.amazon.co.uk/s?k=Callister+Materials+Science" 
    },
    { 
        disc: "Process", 
        topic: "Data", 
        title: "MatWeb", 
        type: "Website", 
        desc: "Searchable database of material properties for thousands of metals, plastics, and ceramics.",
        link: "http://www.matweb.com/" 
    },

    // =========================================================================
    // SYSTEMS, SOFTWARE & COMPUTING
    // =========================================================================
    { 
        disc: "Systems", 
        topic: "Algorithms", 
        title: "Introduction to Algorithms (CLRS)", 
        type: "Book", 
        desc: "Known as 'CLRS'. The bible of computer algorithms and data structures.",
        link: "https://www.amazon.co.uk/s?k=Introduction+to+Algorithms+CLRS" 
    },
    { 
        disc: "Systems", 
        topic: "Practice", 
        title: "The Pragmatic Programmer", 
        type: "Book", 
        desc: "Essential reading for software craftsmanship and career development.",
        link: "https://www.amazon.co.uk/s?k=The+Pragmatic+Programmer" 
    },
    { 
        disc: "Systems", 
        topic: "Code Quality", 
        title: "Clean Code (Robert C. Martin)", 
        type: "Book", 
        desc: "How to write code that is readable, maintainable, and robust.",
        link: "https://www.amazon.co.uk/s?k=Clean+Code+Robert+Martin" 
    },
    { 
        disc: "Systems", 
        topic: "Management", 
        title: "The Mythical Man-Month (Brooks)", 
        type: "Book", 
        desc: "Classic essays on software engineering management. 'Adding manpower to a late project makes it later.'",
        link: "https://www.amazon.co.uk/s?k=The+Mythical+Man+Month" 
    },
    { 
        disc: "Systems", 
        topic: "SE", 
        title: "INCOSE Systems Engineering Handbook", 
        type: "Book", 
        desc: "The definitive guide to the systems engineering lifecycle (V-Model).",
        link: "https://www.incose.org/products-and-publications/se-handbook" 
    },

    // =========================================================================
    // LEADERSHIP & MANAGEMENT (UK-SPEC C & D)
    // =========================================================================
    { 
        disc: "Management", 
        topic: "Strategy", 
        title: "The Alignment Trap", 
        type: "Book", 
        desc: "Why best leaders may work against each other. Essential for understanding systemic organizational alignment.",
        link: "https://www.amazon.co.uk/s?k=The+Alignment+Trap" 
    },
    { 
        disc: "Management", 
        topic: "Team Dynamics", 
        title: "The Five Dysfunctions of a Team (Lencioni)", 
        type: "Book", 
        desc: "The standard text for understanding team conflict, accountability, and results.",
        link: "https://www.amazon.co.uk/s?k=Five+Dysfunctions+of+a+Team" 
    },
    { 
        disc: "Management", 
        topic: "Productivity", 
        title: "High Output Management (Andy Grove)", 
        type: "Book", 
        desc: "The definitive guide to engineering management, metrics, and meetings by the former Intel CEO.",
        link: "https://www.amazon.co.uk/s?k=High+Output+Management" 
    },
    { 
        disc: "Management", 
        topic: "Project Mgmt", 
        title: "APM Body of Knowledge", 
        type: "Standard", 
        desc: "The UK standard for Project Management (Association for Project Management).",
        link: "https://www.apm.org.uk/book-shop/apm-body-of-knowledge-7th-edition/" 
    },

    // =========================================================================
    // PROFESSIONAL INSTITUTIONS (PEIs) & REGULATORS
    // =========================================================================
    { 
        disc: "General", 
        topic: "Regulator", 
        title: "The Engineering Council (EngC)", 
        type: "Institution", 
        desc: "The UK regulatory body for the engineering profession. Holds the official register of CEng/IEng.",
        link: "https://www.engc.org.uk/" 
    },
    { 
        disc: "General", 
        topic: "Directory", 
        title: "Full List of Licensed PEIs", 
        type: "Institution", 
        desc: "The official directory of all 40+ licensed institutions tailored to specific disciplines.",
        link: "https://www.engc.org.uk/our-role-as-regulator/licensing-professional-engineering-institutions" 
    },
    { 
        disc: "Mechanical", 
        topic: "PEI", 
        title: "IMechE (Mechanical Engineers)", 
        type: "Institution", 
        desc: "Institution of Mechanical Engineers. Focus: Auto, Rail, Power, Manufacturing.",
        link: "https://www.imeche.org/" 
    },
    { 
        disc: "Electrical", 
        topic: "PEI", 
        title: "IET (Engineering & Technology)", 
        type: "Institution", 
        desc: "Institution of Engineering and Technology. Focus: Electrical, Software, Telecoms.",
        link: "https://www.theiet.org/" 
    },
    { 
        disc: "Civil", 
        topic: "PEI", 
        title: "ICE (Civil Engineers)", 
        type: "Institution", 
        desc: "Institution of Civil Engineers. Focus: Infrastructure, Bridges, Tunnels.",
        link: "https://www.ice.org.uk/" 
    },
    { 
        disc: "Civil", 
        topic: "PEI", 
        title: "IStructE (Structural Engineers)", 
        type: "Institution", 
        desc: "The world's leading professional body for structural engineering.",
        link: "https://www.istructe.org/" 
    },
    { 
        disc: "Process", 
        topic: "PEI", 
        title: "IChemE (Chemical Engineers)", 
        type: "Institution", 
        desc: "Institution of Chemical Engineers. Focus: Process, Pharma, Energy.",
        link: "https://www.icheme.org/" 
    },
    { 
        disc: "General", 
        topic: "PEI", 
        title: "CIBSE (Building Services)", 
        type: "Institution", 
        desc: "Chartered Institution of Building Services Engineers. HVAC, Lighting, Ventilation.",
        link: "https://www.cibse.org/" 
    },
    { 
        disc: "General", 
        topic: "PEI", 
        title: "BCS (The Chartered Institute for IT)", 
        type: "Institution", 
        desc: "The professional body for computing and IT professionals.",
        link: "https://www.bcs.org/" 
    },
    { 
        disc: "General", 
        topic: "PEI", 
        title: "IOM3 (Materials, Minerals & Mining)", 
        type: "Institution", 
        desc: "Focus on materials science, mining, and extraction.",
        link: "https://www.iom3.org/" 
    },
    { 
        disc: "General", 
        topic: "PEI", 
        title: "RAeS (Royal Aeronautical Society)", 
        type: "Institution", 
        desc: "Multidisciplinary professional body for the aerospace community.",
        link: "https://www.aerosociety.com/" 
    },
    { 
        disc: "General", 
        topic: "PEI", 
        title: "The Energy Institute (EI)", 
        type: "Institution", 
        desc: "For engineers working in oil, gas, renewables, and nuclear energy.",
        link: "https://www.energyinst.org/" 
    },
    { 
        disc: "General", 
        topic: "PEI", 
        title: "IMarEST (Marine)", 
        type: "Institution", 
        desc: "Institute of Marine Engineering, Science and Technology.",
        link: "https://www.imarest.org/" 
    },
    { 
        disc: "General", 
        topic: "PEI", 
        title: "Nuclear Institute (NI)", 
        type: "Institution", 
        desc: "Professional body for the nuclear industry.",
        link: "https://www.nuclearinst.com/" 
    },

    // =========================================================================
    // YOUTUBE CHANNELS
    // =========================================================================
    { 
        disc: "Civil", 
        topic: "Infrastructure", 
        title: "Practical Engineering (Grady Hillhouse)", 
        type: "YouTube", 
        desc: "The absolute gold standard for civil engineering explainer videos. Dams, concrete, and grids.",
        link: "https://www.youtube.com/c/PracticalEngineeringChannel" 
    },
    { 
        disc: "Civil", 
        topic: "Construction", 
        title: "The B1M", 
        type: "YouTube", 
        desc: "The world's largest video channel for construction and architecture projects.",
        link: "https://www.youtube.com/c/TheB1M" 
    },
    { 
        disc: "Mechanical", 
        topic: "Analysis", 
        title: "The Efficient Engineer", 
        type: "YouTube", 
        desc: "Beautifully visualized explanations of Stress, Strain, FEA, and Fluid Dynamics.",
        link: "https://www.youtube.com/c/TheEfficientEngineer" 
    },
    { 
        disc: "Mechanical", 
        topic: "Automotive", 
        title: "Engineering Explained", 
        type: "YouTube", 
        desc: "Deep technical dives into combustion engines, aerodynamics, and EVs.",
        link: "https://www.youtube.com/user/EngineeringExplained" 
    },
    { 
        disc: "Mechanical", 
        topic: "Aerospace", 
        title: "Real Engineering", 
        type: "YouTube", 
        desc: "High-quality documentaries on planes, materials, and engineering history.",
        link: "https://www.youtube.com/channel/CR1IuLEqb6UEA_zQ81kwXjg" 
    },
    { 
        disc: "Electrical", 
        topic: "Electronics", 
        title: "EEVblog (Dave Jones)", 
        type: "YouTube", 
        desc: "No-nonsense teardowns, tutorials, and rants. The bible for electronics lab work.",
        link: "https://www.youtube.com/c/EevblogDave" 
    },
    { 
        disc: "Electrical", 
        topic: "Education", 
        title: "ElectroBOOM", 
        type: "YouTube", 
        desc: "Learning electrical safety and theory through painful (comedic) mistakes.",
        link: "https://www.youtube.com/c/Electroboom" 
    },
    { 
        disc: "Process", 
        topic: "Safety", 
        title: "USCSB (Chemical Safety Board)", 
        type: "YouTube", 
        desc: "World-class forensic animations of major industrial accidents. Essential for safety engineering.",
        link: "https://www.youtube.com/user/USCSB" 
    },
    { 
        disc: "Systems", 
        topic: "Software", 
        title: "Computerphile", 
        type: "YouTube", 
        desc: "Deep dives into algorithms, security, and computing history from experts.",
        link: "https://www.youtube.com/user/Computerphile" 
    },
    { 
        disc: "General", 
        topic: "Science", 
        title: "Veritasium", 
        type: "YouTube", 
        desc: "High-concept science and engineering videos exploring physics and mathematics.",
        link: "https://www.youtube.com/c/veritasium" 
    },

    // =========================================================================
    // SIMULATION & CALCULATION TOOLS (New Category)
    // =========================================================================
    { 
        disc: "General", 
        topic: "Math", 
        title: "Wolfram Alpha", 
        type: "Tool", 
        desc: "Computational intelligence. Solves complex calculus, algebra, and physics problems instantly.",
        link: "https://www.wolframalpha.com/" 
    },
    { 
        disc: "General", 
        topic: "Graphing", 
        title: "Desmos", 
        type: "Tool", 
        desc: "Advanced online graphing calculator. Excellent for visualizing functions and data.",
        link: "https://www.desmos.com/calculator" 
    },
    { 
        disc: "Mechanical", 
        topic: "CFD / FEA", 
        title: "SimScale", 
        type: "Tool", 
        desc: "Cloud-based simulation platform for CFD, FEA, and Thermodynamics. (Has free tier).",
        link: "https://www.simscale.com/" 
    },
    { 
        disc: "Mechanical", 
        topic: "CAD", 
        title: "Onshape", 
        type: "Tool", 
        desc: "Full-featured cloud CAD system. Great for collaborative design and prototyping.",
        link: "https://www.onshape.com/" 
    },
    { 
        disc: "Electrical", 
        topic: "Simulation", 
        title: "Falstad Circuit Simulator", 
        type: "Tool", 
        desc: "The best free interactive circuit simulator. Visualize current flow and voltage in real-time.",
        link: "https://www.falstad.com/circuit/" 
    },
    { 
        disc: "Electrical", 
        topic: "Design", 
        title: "EasyEDA", 
        type: "Tool", 
        desc: "Web-based EDA tool for circuit design, simulation, and PCB layout.",
        link: "https://easyeda.com/" 
    },
    { 
        disc: "Systems", 
        topic: "Math / Coding", 
        title: "Octave Online", 
        type: "Tool", 
        desc: "Free online interface for Octave (MATLAB compatible). Run scripts without installing anything.",
        link: "https://octave-online.net/" 
    },
    { 
        disc: "General", 
        topic: "Utility", 
        title: "WebPlotDigitizer", 
        type: "Tool", 
        desc: "Extract raw data (X,Y coordinates) from images of graphs and plots.",
        link: "https://automeris.io/WebPlotDigitizer/" 
    },
    { 
        disc: "Process", 
        topic: "Thermodynamics", 
        title: "NIST Chemistry WebBook", 
        type: "Tool", 
        desc: "Standard reference data for thermophysical properties of fluids.",
        link: "https://webbook.nist.gov/chemistry/" 
    },
	// =========================================================================
    // HIGH-END ENGINEERING SOFTWARE (CAD / CAE / PLM)
    // =========================================================================
    { 
        disc: "General", 
        topic: "Simulation", 
        title: "Ansys", 
        type: "Tool", 
        desc: "The industry heavyweight for multiphysics engineering simulation (FEA, CFD, Electromagnetics).",
        link: "https://www.ansys.com/" 
    },
    { 
        disc: "General", 
        topic: "Simulation", 
        title: "COMSOL Multiphysics", 
        type: "Tool", 
        desc: "Advanced platform for modeling coupled physics phenomena (e.g., thermal-electric, fluid-structure).",
        link: "https://www.comsol.com/" 
    },
    { 
        disc: "Mechanical", 
        topic: "CAD / CAM", 
        title: "Autodesk Fusion & Inventor", 
        type: "Tool", 
        desc: "Professional product design, manufacturing, and engineering tools. Fusion is cloud-integrated.",
        link: "https://www.autodesk.com/solutions/manufacturing" 
    },
    { 
        disc: "Mechanical", 
        topic: "CAD", 
        title: "SOLIDWORKS", 
        type: "Tool", 
        desc: "The standard 3D CAD software for mechanical engineering and product design.",
        link: "https://www.solidworks.com/" 
    },
    { 
        disc: "Systems", 
        topic: "PLM / CAD", 
        title: "CATIA (Dassault Systèmes)", 
        type: "Tool", 
        desc: "High-end multi-platform suite for CAD, CAM, and PLM. The standard in Aerospace and Automotive.",
        link: "https://www.3ds.com/products/catia" 
    },
    { 
        disc: "Systems", 
        topic: "PLM / CAD", 
        title: "Siemens NX", 
        type: "Tool", 
        desc: "Advanced high-end CAD/CAM/CAE software. Dominant in complex assembly sectors (Aero/Auto).",
        link: "https://plm.sw.siemens.com/en-US/nx/" 
    },
    { 
        disc: "Process", 
        topic: "Simulation", 
        title: "Aspen HYSYS", 
        type: "Tool", 
        desc: "The market-leading process simulation tool for energy and chemical engineering.",
        link: "https://www.aspentech.com/en/products/engineering/aspen-hysys" 
    },
	// [ADD THESE NEW AR/VR & AI TOOLS]
    { 
        disc: "Civil", 
        topic: "AR / VR", 
        title: "Enscape", 
        type: "Tool", 
        desc: "Real-time rendering and VR plugin for Revit/SketchUp. Essential for immersive design reviews.",
        link: "https://enscape3d.com/" 
    },
    { 
        disc: "Civil", 
        topic: "AR / VR", 
        title: "Arkio", 
        type: "Tool", 
        desc: "Collaborative spatial design tool. Model buildings and infrastructure together in VR/AR.",
        link: "https://www.arkio.is/" 
    },
    { 
        disc: "General", 
        topic: "AI / Coding", 
        title: "GitHub Copilot", 
        type: "Tool", 
        desc: "AI pair programmer. Essential for accelerating code writing and debugging.",
        link: "https://github.com/features/copilot" 
    },
    // =========================================================================
    // STRATEGY, LEADERSHIP & INSPIRATION
    // =========================================================================
    { 
        disc: "Management", 
        topic: "Strategy", 
        title: "The Book of Five Rings (Miyamoto Musashi)", 
        type: "Book", 
        desc: "A classic text on Kenjutsu and martial arts, widely applied to engineering strategy and conflict resolution.",
        link: "https://www.amazon.co.uk/s?k=The+Book+of+Five+Rings" 
    },
    { 
        disc: "Management", 
        topic: "Strategy", 
        title: "The Art of War (Sun Tzu)", 
        type: "Book", 
        desc: "The definitive ancient treatise on competitive strategy, planning, and leadership.",
        link: "https://www.amazon.co.uk/s?k=The+Art+of+War" 
    },
    { 
        disc: "Management", 
        topic: "Culture", 
        title: "Work Rules! (Laszlo Bock)", 
        type: "Book", 
        desc: "Insights from inside Google that will transform how you live and lead. Essential for modern HR and People Ops.",
        link: "https://www.amazon.co.uk/s?k=Work+Rules+Laszlo+Bock" 
    },
    { 
        disc: "General", 
        topic: "Education", 
        title: "The Great Courses (Wondrium)", 
        type: "Website", 
        desc: "University-level lecture series. Recommended: 'Understanding Modern Electronics' and 'Everyday Engineering'.",
        link: "https://www.wondrium.com/" 
    },
	// =========================================================================
    // PROGRAMMING & DATA SCIENCE FOR ENGINEERS
    // =========================================================================
    { 
        disc: "Systems", 
        topic: "Python", 
        title: "Automate the Boring Stuff with Python", 
        type: "Book", 
        desc: "The best practical guide for engineers to start automating spreadsheets, PDFs, and emails.",
        link: "https://automatetheboringstuff.com/" 
    },
    { 
        disc: "Systems", 
        topic: "Python", 
        title: "Real Python", 
        type: "Website", 
        desc: "High-quality tutorials and articles for learning Python, from basics to data science.",
        link: "https://realpython.com/" 
    },
    { 
        disc: "Systems", 
        topic: "Data", 
        title: "Kaggle", 
        type: "Website", 
        desc: "The world's largest data science community. Free datasets and competitions to practice ML.",
        link: "https://www.kaggle.com/" 
    },
    { 
        disc: "Systems", 
        topic: "Courses", 
        title: "freeCodeCamp", 
        type: "Website", 
        desc: "Completely free, certification-based learning for Web Dev, Python, and Machine Learning.",
        link: "https://www.freecodecamp.org/" 
    },
    { 
        disc: "Systems", 
        topic: "Reference", 
        title: "Stack Overflow", 
        type: "Website", 
        desc: "The essential Q&A site for every programmer. If you have an error, the answer is here.",
        link: "https://stackoverflow.com/" 
    },
	// =========================================================================
    // ENGINEERING PODCASTS (New Category)
    // =========================================================================
    { 
        disc: "General", 
        topic: "Stories", 
        title: "99% Invisible (Roman Mars)", 
        type: "Podcast", 
        desc: "Beautifully produced stories about the unnoticed architecture and design that shape our world.",
        link: "https://99percentinvisible.org/" 
    },
    { 
        disc: "General", 
        topic: "News", 
        title: "Engineering Matters", 
        type: "Podcast", 
        desc: "Award-winning podcast covering vital engineering innovations and their impact on the world.",
        link: "https://engineeringmatters.reby.media/" 
    },
    { 
        disc: "General", 
        topic: "Career", 
        title: "The Engineering Career Coach Podcast", 
        type: "Podcast", 
        desc: "Strategies for engineers to develop soft skills, leadership, and career advancement.",
        link: "https://engineeringmanagementinstitute.org/the-podcast/" 
    },
    { 
        disc: "Management", 
        topic: "Leadership", 
        title: "The Engineering Leadership Podcast", 
        type: "Podcast", 
        desc: "Insights for engineering managers and executives on building high-performing technical teams.",
        link: "https://sfelc.com/podcast/" 
    },
    { 
        disc: "Management", 
        topic: "Soft Skills", 
        title: "Soft Skills Engineering", 
        type: "Podcast", 
        desc: "A weekly advice show for software developers and engineers about the non-technical stuff.",
        link: "https://softskills.audio/" 
    },
    { 
        disc: "Mechanical", 
        topic: "Industry", 
        title: "Being An Engineer", 
        type: "Podcast", 
        desc: "Explores the 'how' and 'why' of engineering with industry professionals.",
        link: "https://teampipeline.us/podcast/" 
    },
    { 
        disc: "Mechanical", 
        topic: "Casual", 
        title: "Unprofessional Engineering", 
        type: "Podcast", 
        desc: "A fun, laid-back look at how things work, from cars to space stations.",
        link: "https://www.unprofessionalengineering.com/" 
    },
    { 
        disc: "Civil", 
        topic: "Career", 
        title: "The Civil Engineering Podcast", 
        type: "Podcast", 
        desc: "Dedicated to helping civil engineers create an extraordinary career and life.",
        link: "https://engineeringmanagementinstitute.org/tcep/" 
    },
    { 
        disc: "Civil", 
        topic: "Construction", 
        title: "The B1M Podcast", 
        type: "Podcast", 
        desc: "Audio companion to the world's most subscribed video channel for construction.",
        link: "https://www.theb1m.com/video-category/podcast" 
    },
    { 
        disc: "Electrical", 
        topic: "Industry", 
        title: "The Amp Hour", 
        type: "Podcast", 
        desc: "The world's largest and most respected electronics podcast. Discussions on chips, PCBs, and design.",
        link: "https://theamphour.com/" 
    },
    { 
        disc: "Electrical", 
        topic: "Hardware", 
        title: "MacroFab Engineering Podcast", 
        type: "Podcast", 
        desc: "Weekly discussions on electrical engineering, DIY projects, and manufacturing.",
        link: "https://macrofab.com/podcasts/" 
    },
    { 
        disc: "Systems", 
        topic: "Software", 
        title: "Software Engineering Radio", 
        type: "Podcast", 
        desc: "Deep dives into software topics. Targeted at professional developers.",
        link: "https://www.se-radio.net/" 
    },
    { 
        disc: "Systems", 
        topic: "Security", 
        title: "Darknet Diaries", 
        type: "Podcast", 
        desc: "True stories from the dark side of the internet. Hacking, breaches, and cybercrime.",
        link: "https://darknetdiaries.com/" 
    },
    { 
        disc: "Systems", 
        topic: "Tech", 
        title: "CoRecursive", 
        type: "Podcast", 
        desc: "The stories behind the code. Interviews with software engineers about their careers and lives.",
        link: "https://corecursive.com/" 
    },
    { 
        disc: "Process", 
        topic: "Energy", 
        title: "The Energy Transition Show", 
        type: "Podcast", 
        desc: "Geeky, deep analysis of the transition from fossil fuels to renewables.",
        link: "https://xenetwork.org/ets/" 
    },
    { 
        disc: "General", 
        topic: "Automation", 
        title: "SimStack (Evotech CAE)", 
        type: "Podcast", 
        desc: "A simplified workflow automation platform for complex multi-physics simulation processes.",
        link: "https://evotechcae.com/simstack/" 
    },
	// [ADD TO "HIGH-END ENGINEERING SOFTWARE" SECTION]
    { 
        disc: "General", 
        topic: "Simulation", 
        title: "NAFEMS", 
        type: "Institution", 
        desc: "The International Association for the Engineering Modelling, Analysis and Simulation Community.",
        link: "https://www.nafems.org/" 
    },

    // =========================================================================
    // ENGINEERING MAGAZINES & JOURNALS (New Category)
    // =========================================================================
    { 
        disc: "Mechanical", 
        topic: "Industry", 
        title: "Professional Engineering (PE)", 
        type: "Magazine", 
        desc: "The official magazine of the IMechE. Covers manufacturing, energy, and transport innovation.",
        link: "https://www.imeche.org/news/professional-engineering-magazine" 
    },
    { 
        disc: "Electrical", 
        topic: "Tech", 
        title: "E&T Magazine", 
        type: "Magazine", 
        desc: "Engineering & Technology. The award-winning magazine from the IET covering global tech trends.",
        link: "https://eandt.theiet.org/" 
    },
    { 
        disc: "Civil", 
        topic: "Construction", 
        title: "New Civil Engineer (NCE)", 
        type: "Magazine", 
        desc: "The official magazine of the ICE. Essential news on infrastructure projects and geotechnical events.",
        link: "https://www.newcivilengineer.com/" 
    },
    { 
        disc: "Civil", 
        topic: "Structural", 
        title: "The Structural Engineer", 
        type: "Magazine", 
        desc: "The flagship publication of the IStructE. Features technical papers and project case studies.",
        link: "https://www.istructe.org/thestructuralengineer/" 
    },
    { 
        disc: "Process", 
        topic: "Chemical", 
        title: "The Chemical Engineer", 
        type: "Magazine", 
        desc: "The official publication of the IChemE. Focus on process safety, biotech, and emissions.",
        link: "https://www.thechemicalengineer.com/" 
    },
    { 
        disc: "General", 
        topic: "Innovation", 
        title: "Ingenia", 
        type: "Magazine", 
        desc: "The flagship magazine of the Royal Academy of Engineering (RAEng). High-level policy and innovation.",
        link: "https://www.ingenia.org.uk/" 
    },
    { 
        disc: "General", 
        topic: "News", 
        title: "The Engineer", 
        type: "Magazine", 
        desc: "UK-based engineering news and analysis since 1856. Covers all technology sectors.",
        link: "https://www.theengineer.co.uk/" 
    },
    { 
        disc: "General", 
        topic: "Science", 
        title: "New Scientist", 
        type: "Magazine", 
        desc: "The world's most popular weekly science and technology publication.",
        link: "https://www.newscientist.com/" 
    },
	{ 
        disc: "Mechanical", 
        topic: "Aerospace", 
        title: "AEROSPACE Magazine", 
        type: "Magazine", 
        desc: "The flagship publication of the Royal Aeronautical Society (RAeS). News and features from the aviation sector.",
        link: "https://www.aerosociety.com/news-expertise/aerospace-magazine/" 
    },
    { 
        disc: "Process", 
        topic: "Nuclear", 
        title: "Nuclear Future", 
        type: "Magazine", 
        desc: "The official journal of the Nuclear Institute. Covers reactor operations, decommissioning, and safety cases.",
        link: "https://www.nuclearinst.com/Nuclear-Future" 
    },
	{ 
        disc: "General", 
        topic: "Safety", 
        title: "The Hazards Forum", 
        type: "Institution", 
        desc: "Interdisciplinary body focused on major hazard management, safety leadership, and disaster prevention.",
        link: "https://hazardsforum.org/" 
    },
    { 
        disc: "Process", 
        topic: "Skills", 
        title: "Cogent Skills", 
        type: "Institution", 
        desc: "The UK strategic skills body for the science industries, covering Nuclear, Petrochemical, and Polymers.",
        link: "https://cogentskills.com/" 
    },
	{ 
        disc: "Process", 
        topic: "Hydrogen", 
        title: "Engineering Hydrogen Solutions", 
        type: "Magazine", 
        desc: "The leading trade journal for hydrogen technology, fuel cells, and the renewable energy transition.",
        link: "https://www.engineeringhydrogensolutions.com/" 
    },
    { 
        disc: "Process", 
        topic: "Hydrogen", 
        title: "Hydrogen & Fuel Cell Innovation", 
        type: "Magazine", 
        desc: "Latest news on hydrogen economy, policy, and technical innovation.",
        link: "https://hydrogen-innovation.co.uk/" 
    }
];