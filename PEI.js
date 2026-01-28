/*
 * EMPOWERING ENGINEERS UK - OFFICIAL PEI DATABASE [v2026.1]
 * Source: Engineering Council UK Licensed Institutions
 * * Usage: 
 * - Use 'acronym' for matching user input
 * - Use 'sectors' to tag relevant content
 */

const peiDatabase = [
    // --- LICENSED PROFESSIONAL ENGINEERING INSTITUTIONS (PEIs) ---
    {
        acronym: "BCS",
        name: "BCS, The Chartered Institute for IT",
        sectors: ["IT", "Software", "Cyber Security", "Data Science", "Digital"]
    },
    {
        acronym: "BINDT",
        name: "British Institute of Non-Destructive Testing",
        sectors: ["Materials", "Inspection", "Quality", "Testing"]
    },
    {
        acronym: "CABE",
        name: "Chartered Association of Building Engineers",
        sectors: ["Construction", "Built Environment", "Building Services"]
    },
    {
        acronym: "CIBSE",
        name: "Chartered Institution of Building Services Engineers",
        sectors: ["Construction", "Built Environment", "HVAC", "Sustainability"]
    },
    {
        acronym: "CICES",
        name: "Chartered Institution of Civil Engineering Surveyors",
        sectors: ["Construction", "Civil", "Surveying", "Geospatial"]
    },
    {
        acronym: "CIHT",
        name: "Chartered Institution of Highways & Transportation",
        sectors: ["Transport", "Civil", "Infrastructure", "Highways"]
    },
    {
        acronym: "CIPHE",
        name: "Chartered Institute of Plumbing and Heating Engineering",
        sectors: ["Construction", "Building Services", "Water"]
    },
    {
        acronym: "CIWEM",
        name: "Chartered Institution of Water and Environmental Management",
        sectors: ["Water", "Environment", "Sustainability", "Civil"]
    },
    {
        acronym: "EI",
        name: "Energy Institute",
        sectors: ["Energy", "Oil & Gas", "Renewables", "Sustainability", "Nuclear"]
    },
    {
        acronym: "IAgrE",
        name: "Institution of Agricultural Engineers",
        sectors: ["Agriculture", "Environment", "Mechanical", "Land Management"]
    },
    {
        acronym: "ICE",
        name: "Institution of Civil Engineers",
        sectors: ["Civil", "Infrastructure", "Construction", "Water", "Transport"]
    },
    {
        acronym: "IChemE",
        name: "Institution of Chemical Engineers",
        sectors: ["Chemical", "Process", "Energy", "Pharma", "Food & Drink"]
    },
    {
        acronym: "ICorr",
        name: "Institute of Corrosion",
        sectors: ["Materials", "Asset Integrity", "Oil & Gas", "Infrastructure"]
    },
    {
        acronym: "IED",
        name: "Institution of Engineering Designers",
        sectors: ["Design", "Product Design", "Mechanical", "Manufacturing"]
    },
    {
        acronym: "IExpE",
        name: "Institute of Explosives Engineers",
        sectors: ["Defence", "Mining", "Safety", "Demolition"]
    },
    {
        acronym: "IFE",
        name: "Institution of Fire Engineers",
        sectors: ["Safety", "Built Environment", "Risk Management"]
    },
    {
        acronym: "IGEM",
        name: "Institution of Gas Engineers and Managers",
        sectors: ["Energy", "Oil & Gas", "Utilities", "Hydrogen"]
    },
    {
        acronym: "IHE",
        name: "Institute of Highway Engineers",
        sectors: ["Transport", "Civil", "Infrastructure"]
    },
    {
        acronym: "IHEEM",
        name: "Institute of Healthcare Engineering and Estate Management",
        sectors: ["Healthcare", "Facilities Management", "Built Environment"]
    },
    {
        acronym: "ILP",
        name: "Institution of Lighting Professionals",
        sectors: ["Built Environment", "Electrical", "Design", "Highways"]
    },
    {
        acronym: "IMarEST",
        name: "Institute of Marine Engineering, Science & Technology",
        sectors: ["Marine", "Offshore", "Naval Architecture", "Defence"]
    },
    {
        acronym: "IMechE",
        name: "Institution of Mechanical Engineers",
        sectors: ["Mechanical", "Automotive", "Aerospace", "Manufacturing", "Power", "Rail"]
    },
    {
        acronym: "InstMC",
        name: "Institute of Measurement and Control",
        sectors: ["Control", "Automation", "Instrumentation", "Cyber Security"]
    },
    {
        acronym: "InstRE",
        name: "Institution of Royal Engineers",
        sectors: ["Defence", "Civil", "Military"]
    },
    {
        acronym: "IOA",
        name: "Institute of Acoustics",
        sectors: ["Physics", "Built Environment", "Environmental"]
    },
    {
        acronym: "IOM3",
        name: "Institute of Materials, Minerals and Mining",
        sectors: ["Materials", "Mining", "Metallurgy", "Packaging", "Geology"]
    },
    {
        acronym: "IOP",
        name: "Institute of Physics",
        sectors: ["Physics", "Research", "Education", "Nuclear"]
    },
    {
        acronym: "IPEM",
        name: "Institute of Physics and Engineering in Medicine",
        sectors: ["Healthcare", "Medical Devices", "Physics"]
    },
    {
        acronym: "IRSE",
        name: "Institution of Railway Signal Engineers",
        sectors: ["Rail", "Electrical", "Control", "Telecommunications"]
    },
    {
        acronym: "IStructE",
        name: "Institution of Structural Engineers",
        sectors: ["Civil", "Structural", "Construction", "Built Environment"]
    },
    {
        acronym: "IWater",
        name: "Institute of Water",
        sectors: ["Water", "Utilities", "Environment"]
    },
    {
        acronym: "NI",
        name: "Nuclear Institute",
        sectors: ["Nuclear", "Energy", "Safety", "Defence"]
    },
    {
        acronym: "PWI",
        name: "Permanent Way Institution",
        sectors: ["Rail", "Infrastructure", "Civil"]
    },
    {
        acronym: "RAeS",
        name: "Royal Aeronautical Society",
        sectors: ["Aerospace", "Aviation", "Defence", "Space"]
    },
    {
        acronym: "RINA",
        name: "Royal Institution of Naval Architects",
        sectors: ["Marine", "Naval Architecture", "Offshore"]
    },
    {
        acronym: "SaRS",
        name: "Safety and Reliability Society",
        sectors: ["Safety", "Risk Management", "Reliability", "All Sectors"]
    },
    {
        acronym: "SOE",
        name: "Society of Operations Engineers",
        sectors: ["Operations", "Maintenance", "Transport", "Plant"]
    },
    {
        acronym: "TWI",
        name: "The Welding Institute",
        sectors: ["Materials", "Manufacturing", "Welding", "Joining"]
    },

    // --- SELECTED PROFESSIONAL AFFILIATES (Commonly Requested) ---
    {
        acronym: "IET",
        name: "Institution of Engineering and Technology",
        sectors: ["Electrical", "Electronic", "IT", "Manufacturing", "Power", "Telecoms"]
    },
    {
        acronym: "CQI",
        name: "Chartered Quality Institute",
        sectors: ["Quality", "Management", "Manufacturing"]
    },
    {
        acronym: "RICS",
        name: "Royal Institution of Chartered Surveyors",
        sectors: ["Construction", "Surveying", "Property", "Land"]
    },
    {
        acronym: "INCOSE UK",
        name: "International Council on Systems Engineering (UK Chapter)",
        sectors: ["Systems Engineering", "Defence", "Aerospace", "Rail"]
    }
];

// Helper to get grouped list for dropdowns
function getPEIGrouped() {
    // Sort alphabetically by Acronym
    return peiDatabase.sort((a, b) => a.acronym.localeCompare(b.acronym));
}