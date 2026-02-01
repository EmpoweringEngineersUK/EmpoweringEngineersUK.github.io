/* -----------------------------------------------------------
   hardware_db.js
   Database of Engineering Components for "The Component Atlas"
   
   Structure:
   - id: Unique key
   - name: Display name
   - discipline: Mechanical, Electrical, Civil, Automotive, Aerospace, Naval, Nuclear
   - tag: Sub-category
   - design: Principles of operation (Design)
   - manufacture: How it is made (Mfg)
   - app: Where it is used (Application)
   - failure: Common failure modes
   ----------------------------------------------------------- */

const hardwareDb = [
    // --- MECHANICAL ENGINEERING ---
    {
        id: "mech_01",
        name: "Involute Spur Gear",
        discipline: "Mechanical",
        tag: "Transmission",
        design: "Defined by Module (m) and Pressure Angle (usually 20°). The involute profile ensures constant velocity ratio even if center distance varies slightly due to vibration or tolerance stack-up.",
        manufacture: "Hobbing (roughing) followed by Carburising (heat treatment) and Grinding (finishing) for high-precision applications requiring low NVH.",
        app: "Used in parallel-shaft gearboxes (e.g., lathe headstocks). Not suitable for high speeds due to noise; helical gears are preferred there.",
        failure: "Macropitting (surface fatigue) typically at the pitch line, or Root Bending Fatigue."
    },
    {
        id: "mech_02",
        name: "Rolling Element Bearing (Deep Groove)",
        discipline: "Mechanical",
        tag: "Tribology",
        design: "Designed to handle radial loads and moderate axial loads. Life is calculated using the L10 standard (90% survival probability) based on dynamic load rating (C).",
        manufacture: "Rings are machined from chrome steel (SAE 52100), through-hardened, and super-finished. Balls are precision ground to varying ISO grades.",
        app: "Electric motors, automotive wheels, pumps. The ubiquitous 'workhorse' of rotational support.",
        failure: "Brinelling (impact damage) or Spalling (sub-surface fatigue)."
    },
    {
        id: "mech_03",
        name: "Socket Head Cap Screw (Class 12.9)",
        discipline: "Mechanical",
        tag: "Fasteners",
        design: "High-tensile fastener. Preload is critical; torque must stretch the bolt to 70-90% of yield strength (Sy) to prevent loosening under vibration.",
        manufacture: "Cold heading (forming the head) followed by Thread Rolling, which creates stronger threads than cutting by preserving the grain flow.",
        app: "High-stress machinery clamping where space is limited (head sits in a counterbore).",
        failure: "Fatigue failure at the thread root or the head-shank fillet (stress concentration points)."
    },
    {
        id: "mech_04",
        name: "Mechanical Seal",
        discipline: "Mechanical",
        tag: "Fluid Power",
        design: "Uses two flat faces (one rotating, one stationary) pressed together by a spring. A fluid film lubricates the interface while preventing leakage.",
        manufacture: "Faces are lapped to within light-band flatness. Materials include Silicon Carbide (SiC) or Tungsten Carbide.",
        app: "Centrifugal pumps handling hazardous or clean fluids where packing glands would leak too much.",
        failure: "Dry running (thermal cracking of faces) or chemical attack of the secondary O-ring seals."
    },
    {
        id: "mech_05",
        name: "Belleville Washer (Disc Spring)",
        discipline: "Mechanical",
        tag: "Springs",
        design: "Conical shell spring providing high load in small spaces. Can be stacked in series (for deflection) or parallel (for load).",
        manufacture: "Stamped from high-yield spring steel and shot-peened to induce compressive residual stresses.",
        app: "Heavy equipment breaking systems, clutch mechanisms, or maintaining tension in bolted joints due to thermal expansion.",
        failure: "Fatigue cracking or permanent set (yielding) if over-compressed."
    },

    // --- ELECTRICAL ENGINEERING ---
    {
        id: "elec_01",
        name: "IGBT (Insulated-Gate Bipolar Transistor)",
        discipline: "Electrical",
        tag: "Power Electronics",
        design: "Combines the high input impedance of a MOSFET with the low saturation voltage of a BJT. Ideal for high-voltage, high-current switching.",
        manufacture: "Complex silicon wafer fabrication using photolithography, doping, and metallisation processes.",
        app: "Variable Frequency Drives (VFDs) for motor control, Electric Vehicle (EV) traction inverters, and HVDC transmission.",
        failure: "Thermal runaway or Latch-up due to parasitic thyristor action."
    },
    {
        id: "elec_02",
        name: "Differential Pressure Transmitter",
        discipline: "Electrical",
        tag: "Instrumentation",
        design: "Uses a diaphragm and piezoelectric or capacitive sensors to measure the difference (Delta P) between High (HP) and Low (LP) ports.",
        manufacture: "Precision machining of stainless steel (316L) body with gold-plated or Hastelloy sensing diaphragms for corrosion resistance.",
        app: "Flow measurement (across an orifice plate) or level measurement in pressurised vessels.",
        failure: "Diaphragm rupture due to overpressure or impulse line blockage causing false readings."
    },
    {
        id: "elec_03",
        name: "Current Transformer (CT)",
        discipline: "Electrical",
        tag: "Protection",
        design: "Steps down high AC currents to a manageable value (e.g., 5A) for metering. Must never be open-circuited while primary flows.",
        manufacture: "Toroidal core wound with copper wire, encapsulated in epoxy resin for insulation.",
        app: "Substation protection relays and energy metering panels.",
        failure: "Saturation (distorted waveform) or catastrophic explosion if secondary is open-circuited (generating infinite voltage)."
    },
    {
        id: "elec_04",
        name: "PLC (Programmable Logic Controller)",
        discipline: "Electrical",
        tag: "Control Systems",
        design: "Industrial digital computer ruggedised for harsh environments. Executes logic based on Inputs (I) to control Outputs (Q).",
        manufacture: "PCB assembly with conformal coating to resist dust/moisture, housed in EMI-shielded casing.",
        app: "Automation of assembly lines, robotic cells, and process plants.",
        failure: "I/O card burnout due to voltage spikes or memory corruption due to battery failure."
    },
    {
        id: "elec_05",
        name: "Zener Diode",
        discipline: "Electrical",
        tag: "Components",
        design: "Designed to operate in the reverse breakdown region. Provides a stable reference voltage across a circuit.",
        manufacture: "Doped silicon PN junction with precise impurity levels to control breakdown voltage.",
        app: "Voltage regulation, over-voltage protection (clamping), and reference voltage generation.",
        failure: "Short circuit due to excessive power dissipation (overheating)."
    },

    // --- CIVIL / STRUCTURAL ENGINEERING ---
    {
        id: "civ_01",
        name: "Universal Beam (UB)",
        discipline: "Civil",
        tag: "Structural Steel",
        design: "I-shaped cross-section. The flanges resist the Bending Moment, while the web resists Shear Force. Optimised for major axis bending.",
        manufacture: "Hot rolling from a steel bloom. The steel passes through a series of rollers to shape the 'I' profile while red-hot.",
        app: "Main load-bearing members in steel-framed buildings and bridges.",
        failure: "Lateral Torsional Buckling (LTB) if the compression flange is unrestrained."
    },
    {
        id: "civ_02",
        name: "Shear Stud",
        discipline: "Civil",
        tag: "Composite",
        design: "Headed steel anchor. Connects the concrete slab to the steel beam, forcing them to act as a single composite unit (Composite Action).",
        manufacture: "Cold forged steel with a flux tip included for the welding process.",
        app: "Composite metal decks in high-rise buildings. Studs are welded through the decking onto the beam.",
        failure: "Shear failure at the weld collar or concrete crushing around the stud."
    },
    {
        id: "civ_03",
        name: "Reinforced Concrete (RC) Rebar",
        discipline: "Civil",
        tag: "Materials",
        design: "Steel bars embedded in concrete to carry Tensile loads (as concrete is strong in compression but weak in tension).",
        manufacture: "Hot rolled steel with ribbed deformation patterns to ensure mechanical interlock with the concrete.",
        app: "Foundations, columns, beams, and slabs in almost all built infrastructure.",
        failure: "Corrosion of rebar (spalling concrete) or bond failure if development length is insufficient."
    },
    {
        id: "civ_04",
        name: "High Strength Friction Grip (HSFG) Bolt",
        discipline: "Civil",
        tag: "Connections",
        design: "Relies on friction between clamped plates to transfer load, rather than the shear strength of the bolt shank.",
        manufacture: "Heat-treated high-tensile steel (Grade 8.8 or 10.9).",
        app: "Primary structural connections in bridges and seismic-resistant structures where slip cannot be tolerated.",
        failure: "Slip at the joint interface due to insufficient preload torque."
    },
    {
        id: "civ_05",
        name: "Gabion Basket",
        discipline: "Civil",
        tag: "Geotechnical",
        design: "Wire mesh cages filled with rock. They act as a gravity retaining wall that is permeable (allows drainage) and flexible.",
        manufacture: "Double-twisted hexagonal wire mesh, often galvanised or PVC coated for longevity.",
        app: "Retaining walls, erosion control along river banks, and noise barriers.",
        failure: "Wire mesh corrosion leading to basket rupture and loss of containment."
    },

    // --- AUTOMOTIVE ENGINEERING ---
    {
        id: "auto_01",
        name: "Variable Geometry Turbocharger (VGT)",
        discipline: "Automotive",
        tag: "Powertrain",
        design: "Uses adjustable vanes to direct exhaust gas onto the turbine wheel. At low RPM, vanes close to accelerate gas (reducing lag); at high RPM, they open to prevent over-boost.",
        manufacture: "Turbine housing cast from Ni-Resist or Stainless Steel to withstand 900°C+. Vane mechanisms are precision machined Inconel.",
        app: "Modern Diesel and high-performance Petrol engines to broaden the torque curve.",
        failure: "Vane mechanism seizing due to carbon buildup (soot) or thermal distortion."
    },
    {
        id: "auto_02",
        name: "MacPherson Strut",
        discipline: "Automotive",
        tag: "Suspension",
        design: "Combines a shock absorber and coil spring into a single unit. It acts as a structural member, eliminating the need for an upper control arm.",
        manufacture: "Stamped steel housings welded to forged steering knuckles. Springs are cold-wound oil-tempered steel.",
        app: "Front suspension of most mass-production vehicles (FWD) due to simplicity and low cost.",
        failure: "Seal failure in the damper causing oil leaks, or top mount bearing wear."
    },
    {
        id: "auto_03",
        name: "Three-Way Catalytic Converter",
        discipline: "Automotive",
        tag: "Emissions",
        design: "Uses a honeycomb structure coated in precious metals (Pt, Pd, Rh) to convert CO, NOx, and HC into CO2, N2, and H2O. Requires stoichiometric air-fuel ratio.",
        manufacture: "Ceramic monolith substrate coated with a washcoat containing catalysts, wrapped in an intumescent mat and canned in stainless steel.",
        app: "Exhaust systems of all petrol passenger vehicles to meet Euro 6 / EPA standards.",
        failure: "Poisoning by lead/silicone or thermal sintering (melting) due to engine misfires."
    },
    {
        id: "auto_04",
        name: "Dual Mass Flywheel (DMF)",
        discipline: "Automotive",
        tag: "Drivetrain",
        design: "Splits the flywheel into two masses connected by arc springs. Damps torsional vibrations from the engine before they reach the gearbox.",
        manufacture: "Primary and secondary masses are cast iron or stamped steel. Internal springs are high-fatigue steel grease-packed for life.",
        app: "Manual and DSG transmissions, especially with torquey diesel engines.",
        failure: "Spring fatigue leads to excessive free play and rattling noises, eventually causing drive loss."
    },
    {
        id: "auto_05",
        name: "Common Rail Injector (Piezo)",
        discipline: "Automotive",
        tag: "Fuel System",
        design: "Uses a piezoelectric stack that expands when charged to open the needle valve. Allows for multiple injection events (pilot, main, post) per combustion cycle.",
        manufacture: "Micro-machined nozzle holes (using EDM) and clean-room assembly of the piezo stack.",
        app: "Modern diesel engines for precise control of combustion noise and emissions.",
        failure: "Nozzle erosion from poor fuel quality or electrical failure of the piezo stack."
    },

    // --- AEROSPACE ENGINEERING ---
    {
        id: "aero_01",
        name: "Single Crystal Turbine Blade",
        discipline: "Aerospace",
        tag: "Propulsion",
        design: "Cast as one continuous crystal to eliminate grain boundaries, which are weak points for Creep at high temperatures and stresses.",
        manufacture: "Investment casting using the Bridgman technique (directional solidification) with a pigtail selector to isolate a single crystal seed.",
        app: "High Pressure Turbine (HPT) stages of modern jet engines (e.g., Trent XWB, LEAP).",
        failure: "Creep rupture (elongation over time) or Thermal Barrier Coating (TBC) spallation."
    },
    {
        id: "aero_02",
        name: "Honeycomb Sandwich Panel",
        discipline: "Aerospace",
        tag: "Structures",
        design: "Two thin, strong face sheets bonded to a lightweight hexagonal core. Offers exceptionally high bending stiffness-to-weight ratio.",
        manufacture: "Core made from Nomex or Aluminium foil. Face sheets (CFRP or Al) are bonded using film adhesives in an autoclave.",
        app: "Floor panels, control surfaces (flaps, rudders), and interior cabinetry.",
        failure: "Face sheet delamination or water ingress causing core corrosion/freeze-thaw damage."
    },
    {
        id: "aero_03",
        name: "Pitot-Static Tube",
        discipline: "Aerospace",
        tag: "Avionics",
        design: "Measures Total Pressure (ram air) and Static Pressure to calculate Indicated Airspeed (IAS) and Altitude.",
        manufacture: "Nickel-plated copper or stainless steel tube with integrated heating elements to prevent icing.",
        app: "External fuselage of all aircraft. Primary input for the Air Data Computer (ADC).",
        failure: "Blockage by ice (heater failure) or insects, leading to erroneous airspeed readings."
    },
    {
        id: "aero_04",
        name: "Hydraulic Servo Valve",
        discipline: "Aerospace",
        tag: "Flight Control",
        design: "Electro-hydraulic valve that converts a small electrical signal into a high-power hydraulic movement to drive actuators.",
        manufacture: "Lapped spool and sleeve assembly with tolerances in the microns. Often uses a torque motor and flapper-nozzle pilot stage.",
        app: "Actuation of primary flight controls (Ailerons, Elevators, Rudder).",
        failure: "Spool jamming due to fluid contamination (FOD) or coil burnout."
    },
    {
        id: "aero_05",
        name: "Blind Rivet (CherryMAX)",
        discipline: "Aerospace",
        tag: "Fasteners",
        design: "Allows fastening where only one side of the structure is accessible. A pulling stem expands a sleeve to form a bulb on the blind side.",
        manufacture: "Stem made of alloy steel; sleeve made of aluminium or Monel. Includes a locking collar to retain the stem.",
        app: "Closing out box structures, wing leading edges, or repairs where rear access is impossible.",
        failure: "Improper installation (stem break high/low) or galvanic corrosion if materials are mismatched."
    },

    // --- NAVAL / MARINE ENGINEERING ---
    {
        id: "nav_01",
        name: "Sacrificial Anode",
        discipline: "Naval",
        tag: "Corrosion",
        design: "Galvanic protection. Made of a metal (Zinc or Aluminium) that is more electrically active (anodic) than the steel hull, so it corrodes first.",
        manufacture: "Cast blocks with steel inserts for welding or bolting to the structure.",
        app: "Ship hulls, ballast tanks, and offshore platforms to prevent rusting.",
        failure: "Passivation (anode stops working due to oxide layer) or complete consumption leading to hull corrosion."
    },
    {
        id: "nav_02",
        name: "Fixed Pitch Propeller",
        discipline: "Naval",
        tag: "Propulsion",
        design: "Blades are permanently attached to the hub. Simple and robust, but engine RPM must change to alter speed; engine must reverse to go astern.",
        manufacture: "Sand casting of Nickel-Aluminium-Bronze (NAB) alloy, followed by CNC machining of blade surfaces.",
        app: "Container ships, tankers, and bulk carriers where cruising speed is constant.",
        failure: "Cavitation erosion on blade tips or bent blades due to debris impact."
    },
    {
        id: "nav_03",
        name: "Thrust Bearing (Tilting Pad)",
        discipline: "Naval",
        tag: "Drivetrain",
        design: "Transmits the propulsive force from the propeller shaft to the ship's hull. Uses pivoting pads to create a hydrodynamic oil wedge.",
        manufacture: "White metal (Babbitt) lined steel pads, precision lapped for flatness.",
        app: "Main propulsion shaft line of all large vessels.",
        failure: "Wiping of the white metal due to oil film breakdown (low RPM or overload)."
    },
    {
        id: "nav_04",
        name: "Oily Water Separator (OWS)",
        discipline: "Naval",
        tag: "Auxiliary",
        design: "Separates oil from bilge water before discharge overboard to meet MARPOL regulations (<15 ppm). Uses gravity separation and coalescing filters.",
        manufacture: "Stainless steel vessels with oleophilic (oil-attracting) filter media and electronic monitoring (OCM).",
        app: "Engine room bilges of all commercial vessels.",
        failure: "Filter fouling or sensor tampering (a major legal compliance risk)."
    },
    {
        id: "nav_05",
        name: "Butterfly Valve",
        discipline: "Naval",
        tag: "Fluid Systems",
        design: "Quarter-turn valve used for isolating or regulating flow. Lightweight and compact compared to gate valves.",
        manufacture: "Cast iron or bronze body with an EPDM or Nitrile rubber seat.",
        app: "Ballast systems, seawater cooling lines, and fire mains.",
        failure: "Seat degradation causing passing (leaking) or disc corrosion."
    },

    // --- NUCLEAR ENGINEERING ---
    {
        id: "nuc_01",
        name: "Fuel Rod (Zircaloy Clad)",
        discipline: "Nuclear",
        tag: "Core",
        design: "Contains Uranium Dioxide (UO2) pellets. The Zircaloy cladding has a low neutron absorption cross-section but high strength and corrosion resistance.",
        manufacture: "Zirconium alloy tubes filled with sintered ceramic pellets, pressurised with Helium, and welded shut.",
        app: "The core of PWR and BWR reactors (generation of heat via fission).",
        failure: "Cladding creep collapse or Pellet-Cladding Interaction (PCI) causing stress corrosion cracking."
    },
    {
        id: "nuc_02",
        name: "Control Rod (Ag-In-Cd)",
        discipline: "Nuclear",
        tag: "Control",
        design: "Made of materials with a very high neutron absorption cross-section (Silver-Indium-Cadmium or Boron Carbide). Absorbs neutrons to stop the chain reaction.",
        manufacture: "Absorber material enclosed in stainless steel tubes (cladding).",
        app: "inserted into the core to regulate power or SCRAM (emergency shutdown) the reactor.",
        failure: "Swelling of absorber material or wear of the cladding due to vibration (flow-induced).",
    },
    {
        id: "nuc_03",
        name: "Pressuriser",
        discipline: "Nuclear",
        tag: "Primary Circuit",
        design: "Maintains system pressure in a PWR to prevent water from boiling in the core. Contains a steam bubble at the top and water at the bottom.",
        manufacture: "Thick-walled carbon steel vessel clad internally with stainless steel. Equipped with heaters and spray nozzles.",
        app: "Primary coolant loop of Pressurised Water Reactors (PWR).",
        failure: "Heater element failure or spray valve leakage causing pressure control instability."
    },
    {
        id: "nuc_04",
        name: "Steam Generator (U-Tube)",
        discipline: "Nuclear",
        tag: "Heat Exchange",
        design: "Heat exchanger where hot radioactive primary water flows through tubes to boil non-radioactive secondary water into steam.",
        manufacture: "Thousands of Inconel 690 tubes welded to a thick tube sheet. The shell is high-strength steel.",
        app: "Interface between primary and secondary loops in PWRs.",
        failure: "Tube corrosion (SCC) or fretting wear leading to primary-to-secondary leakage."
    },
    {
        id: "nuc_05",
        name: "HEPA Filter (Nuclear Grade)",
        discipline: "Nuclear",
        tag: "Safety",
        design: "High Efficiency Particulate Air filter designed to trap 99.97% of particles (including radioactive dust) down to 0.3 microns.",
        manufacture: "Glass fibre media folded into pleats with aluminium separators, sealed in a steel frame.",
        app: "HVAC systems in containment buildings and fuel handling areas to prevent release of activity.",
        failure: "Media rupture due to high differential pressure or moisture loading."
    }
];