/*
 * EMPOWERING ENGINEERS UK - UK-SPEC DATABASE [v2.1]
 * - Fixed: Main Category 'About' text restored to descriptive definitions.
 * - Retained: Detailed bullet points for sub-competencies.
 */

const ukSpecDb = {
    "EngTech": {
        title: "Engineering Technician (EngTech)",
        competencies: {
            "A": {
                title: "A. Knowledge and understanding",
                requirement: "Engineering Technicians shall use engineering knowledge and understanding to apply technical and practical skills.",
                about: "This competence is about having knowledge of the technologies, standards and practices relevant to the applicant’s area of work and having evidence of maintaining and applying this knowledge.",
                sub: {
                    "A1": {
                        text: "Review and select appropriate techniques, procedures and methods to undertake tasks.",
                        bullets: [
                            "Evaluating potential methods of carrying out an engineering task and selecting the most appropriate solution",
                            "Recognising a difficulty and then identifying an approach to resolve it",
                            "Identifying an improvement in a technique, procedure, process or method",
                            "Interpreting and carrying out test procedures"
                        ]
                    },
                    "A2": {
                        text: "Use appropriate scientific, technical or engineering principles.",
                        bullets: [
                            "Applying scientific and engineering principles to the successful completion of an engineering task",
                            "Understanding the ‘why’ as well as the ‘what’ and ‘how’",
                            "Distinguishing between an issue with the process and a flaw in the design",
                            "Performing calculations to resolve a problem"
                        ]
                    }
                }
            },
            "B": {
                title: "B. Design and development",
                requirement: "Engineering Technicians shall contribute to the design, development, manufacture, construction, commissioning, operation or maintenance of products, equipment, processes, systems or services.",
                about: "This competence is about the ability to apply engineering skills to identify and resolve problems and to contribute to the development and improvement of engineering products, processes, systems and services.",
                sub: {
                    "B1": {
                        text: "Identify problems and apply appropriate methods to identify causes and achieve satisfactory solutions.",
                        bullets: [
                            "Identifying a problem and resolving it by using a diagnostic technique",
                            "Identifying why a process or system has failed",
                            "Identifying and reporting a diversity or inclusion issue that is affecting the team’s ability to solve a problem",
                            "Learning from the resolution of a problem and identifying any necessary changes to prevent recurrence"
                        ]
                    },
                    "B2": {
                        text: "Identify, organise and use resources effectively to complete tasks, with consideration for cost, quality, safety, security and environmental impact.",
                        bullets: [
                            "Identifying the resources required to complete a task",
                            "Providing information to enable others to plan resources",
                            "Completing a task while minimising waste and/or energy usage",
                            "Identifying and disposing of hazardous waste in accordance with local regulations",
                            "Taking steps to secure the physical and digital infrastructure and/or data"
                        ]
                    },
                    "B3": { text: "N/A for EngTech (Covered in B1/B2)", bullets: ["This sub-competence is not applicable to EngTech registration."] }
                }
            },
            "C": {
                title: "C. Responsibility, management or leadership",
                requirement: "Engineering Technicians shall accept and exercise personal responsibility.",
                about: "This competence is about the ability to plan and organise work, manage resources and/or supervise others. It also involves taking responsibility for the quality and safety of the work and for the environment.",
                sub: {
                    "C1": {
                        text: "Work reliably and effectively without close supervision, to the appropriate codes of practice.",
                        bullets: [
                            "Completing a task to the required standard and deadline",
                            "Identifying and reporting any issues that may affect the completion of a task",
                            "Understanding and applying the relevant codes of practice and/or standards",
                            "Checking the work of others to ensure it meets the required standard"
                        ]
                    },
                    "C2": {
                        text: "Accept responsibility for the work of themselves or others.",
                        bullets: [
                            "Taking responsibility for the quality and safety of your own work",
                            "Taking responsibility for the quality and safety of the work of others",
                            "Supervising or guiding others",
                            "Accepting responsibility for the use of equipment and resources"
                        ]
                    },
                    "C3": {
                        text: "Accept, allocate and supervise technical and other tasks.",
                        bullets: [
                            "Planning and organising your own work and/or the work of others",
                            "Allocating tasks to others",
                            "Monitoring the progress of tasks and taking action to ensure they are completed on time",
                            "Ensuring that others have the necessary skills and resources to complete tasks"
                        ]
                    },
                    "C4": { text: "N/A for EngTech", bullets: ["This sub-competence is not applicable to EngTech registration."] }
                }
            },
            "D": {
                title: "D. Communication and interpersonal skills",
                requirement: "Engineering Technicians shall use effective communication and interpersonal skills.",
                about: "This competence is about the ability to work with others, to communicate effectively and to maintain professional relationships.",
                sub: {
                    "D1": {
                        text: "Communicate effectively with others, at all levels, in English.",
                        bullets: [
                            "Communicating technical information to a non-technical audience",
                            "Reporting on the progress of a task",
                            "Contributing to meetings and discussions",
                            "Writing technical reports, instructions or procedures",
                            "Using email and other digital communication methods effectively"
                        ]
                    },
                    "D2": {
                        text: "Work effectively with colleagues, clients, suppliers or the public.",
                        bullets: [
                            "Working as part of a team",
                            "Dealing with customers, clients or suppliers",
                            "Resolving conflicts or disagreements",
                            "Promoting a positive and inclusive working environment"
                        ]
                    },
                    "D3": {
                        text: "Demonstrate personal and social skills and awareness of diversity and inclusion.",
                        bullets: [
                            "Treating others with respect and courtesy",
                            "Being aware of and respecting the views and opinions of others",
                            "Recognising the value of diversity and inclusion",
                            "Adapting your behaviour to suit the situation or audience"
                        ]
                    }
                }
            },
            "E": {
                title: "E. Personal and professional commitment",
                requirement: "Engineering Technicians shall demonstrate a personal commitment to an appropriate code of professional conduct, recognising obligations to society, the profession and the environment.",
                about: "This competence is about maintaining and enhancing competence in your own area of practice through professional development activity, as well as adopting a set of values and behaviours that maintains and enhances the reputation of the profession.",
                sub: {
                    "E1": {
                        text: "Understand and comply with relevant codes of conduct.",
                        bullets: [
                            "Understanding and complying with your employer’s code of conduct",
                            "Understanding and complying with the code of conduct of your professional institution",
                            "Acting with integrity and honesty",
                            "Reporting any unethical behaviour"
                        ]
                    },
                    "E2": {
                        text: "Understand the safety implications of their role and apply safe systems of work.",
                        bullets: [
                            "Identifying hazards and risks",
                            "Following safe systems of work",
                            "Using personal protective equipment (PPE) correctly",
                            "Reporting accidents, incidents or near misses",
                            "Contributing to safety improvements"
                        ]
                    },
                    "E3": {
                        text: "Understand the principles of sustainable development and apply them in their work.",
                        bullets: [
                            "Minimising waste and energy usage",
                            "Using resources efficiently",
                            "Considering the environmental impact of your work",
                            "Contributing to sustainability improvements"
                        ]
                    },
                    "E4": {
                        text: "Carry out and record the Continuing Professional Development (CPD) necessary to maintain and enhance competence in their own area of practice.",
                        bullets: [
                            "Identifying your own development needs",
                            "Planning and carrying out CPD activities",
                            "Recording your CPD activities",
                            "Reflecting on your learning and development"
                        ]
                    },
                    "E5": {
                        text: "Understand the ethical issues that may arise in their role and carry out their responsibilities in an ethical manner.",
                        bullets: [
                            "Identifying ethical issues",
                            "Seeking advice on ethical issues",
                            "Making ethical decisions",
                            "Promoting ethical behaviour"
                        ]
                    }
                }
            }
        }
    },
    "IEng": {
        title: "Incorporated Engineer (IEng)",
        competencies: {
            "A": {
                title: "A. Knowledge and understanding",
                requirement: "Incorporated Engineers shall use a combination of general and specialist engineering knowledge and understanding to apply existing and emerging technology.",
                about: "This competence is about having knowledge of the technologies, standards and practices relevant to the applicant’s area of work and having evidence of maintaining and applying this knowledge.",
                sub: {
                    "A1": {
                        text: "Maintain and extend a sound theoretical approach to the application of technology in engineering practice.",
                        bullets: [
                            "Identifying the limits of your own personal knowledge and skills",
                            "Striving to extend your own technological capability",
                            "Broadening and deepening your engineering knowledge",
                            "Reviewing current and best practice",
                            "Reviewing and using relevant standards and codes of practice"
                        ]
                    },
                    "A2": {
                        text: "Use a sound evidence-based approach to problem-solving and contribute to continuous improvement.",
                        bullets: [
                            "Using market intelligence and knowledge of technological developments to promote and improve the effectiveness of engineering products, systems and services",
                            "Contributing to the evaluation and development of continuous improvement systems",
                            "Applying knowledge and experience to investigate and solve problems arising during engineering tasks and implementing corrective action"
                        ]
                    }
                }
            },
            "B": {
                title: "B. Design and development",
                requirement: "Incorporated Engineers shall apply appropriate theoretical and practical methods to design, develop, manufacture, construct, commission, operate, maintain, decommission and recycle engineering processes, systems, services and products.",
                about: "This competence is about the ability to apply engineering skills to identify and resolve problems and to contribute to the development and improvement of engineering products, processes, systems and services.",
                sub: {
                    "B1": {
                        text: "Identify, review and select techniques, procedures and methods to undertake engineering tasks.",
                        bullets: [
                            "Establishing a user’s requirements",
                            "Reviewing and selecting techniques, procedures and methods to undertake tasks",
                            "Identifying potential risks and implementing appropriate mitigation strategies",
                            "Identifying and reporting a diversity or inclusion issue that is affecting the team’s ability to solve a problem"
                        ]
                    },
                    "B2": {
                        text: "Contribute to the design and development of engineering solutions.",
                        bullets: [
                            "Contributing to the design and development of engineering solutions",
                            "Implementing design solutions and evaluating their effectiveness",
                            "Identifying and implementing improvements to engineering solutions",
                            "Ensuring that engineering solutions are safe, sustainable and cost-effective"
                        ]
                    },
                    "B3": {
                        text: "Implement engineering solutions and evaluate their effectiveness in the context of the whole project or life cycle.",
                        bullets: [
                            "Implementing engineering solutions",
                            "Evaluating the effectiveness of engineering solutions",
                            "Identifying and implementing improvements to engineering solutions",
                            "Ensuring that engineering solutions are safe, sustainable and cost-effective"
                        ]
                    }
                }
            },
            "C": {
                title: "C. Responsibility, management and leadership",
                requirement: "Incorporated Engineers shall provide technical and commercial leadership.",
                about: "This competence is about the ability to plan and organise work, manage resources and/or supervise others. It also involves taking responsibility for the quality and safety of the work and for the environment.",
                sub: {
                    "C1": {
                        text: "Plan for effective project implementation.",
                        bullets: [
                            "Identifying the factors affecting the project implementation",
                            "Preparing and agreeing implementation plans and method statements",
                            "Securing the necessary resources and confirming roles in project teams",
                            "Applying the necessary contractual arrangements with other stakeholders (client, subcontractors, suppliers, etc.)"
                        ]
                    },
                    "C2": {
                        text: "Plan, budget, organise, direct and control tasks, people and resources.",
                        bullets: [
                            "Operating appropriate management systems",
                            "Working to the agreed quality standards, programme and budget",
                            "Managing work teams, coordinating project activities",
                            "Identifying variations from quality standards, programme and budgets",
                            "Taking corrective action",
                            "Gathering and evaluating feedback and recommending improvements"
                        ]
                    },
                    "C3": {
                        text: "Lead teams and develop staff to meet changing technical and managerial needs.",
                        bullets: [
                            "Agreeing objectives and work plans with teams and individuals",
                            "Identifying team and individual needs and planning for their development",
                            "Reinforcing team commitment to professional standards",
                            "Leading and supporting team and individual development",
                            "Assessing team and individual performance and providing feedback"
                        ]
                    },
                    "C4": {
                        text: "Bring about continuous improvement through quality management.",
                        bullets: [
                            "Promoting quality throughout the organisation and its customer and supplier networks",
                            "Developing and maintaining operations to meet quality standards",
                            "Supporting and directing your team/s in the practical application of quality"
                        ]
                    }
                }
            },
            "D": {
                title: "D. Communication and interpersonal skills",
                requirement: "Incorporated Engineers shall demonstrate effective interpersonal skills.",
                about: "This competence is about the ability to work with others, to communicate effectively and to maintain professional relationships.",
                sub: {
                    "D1": {
                        text: "Communicate in English with others at all levels.",
                        bullets: [
                            "Contributing to, chairing and recording meetings and discussions",
                            "Preparing communications, documents and reports on technical matters",
                            "Exchanging information and providing advice to technical and non-technical colleagues"
                        ]
                    },
                    "D2": {
                        text: "Present and discuss proposals.",
                        bullets: [
                            "Preparing and delivering presentations on strategic matters",
                            "Leading and sustaining debates with audiences",
                            "Feeding the results back to improve the proposals",
                            "Raising the awareness of risk"
                        ]
                    },
                    "D3": {
                        text: "Demonstrate personal and social skills.",
                        bullets: [
                            "Knowing and managing your own emotions, strengths and weaknesses",
                            "Being aware of the needs and concerns of others, especially where related to diversity and inclusion",
                            "Being confident and flexible in dealing with new and changing interpersonal situations",
                            "Identifying, agreeing and working towards collective goals",
                            "Creating, maintaining and enhancing productive working relationships"
                        ]
                    }
                }
            },
            "E": {
                title: "E. Personal and professional commitment",
                requirement: "Incorporated Engineers shall demonstrate a personal commitment to professional standards, recognising obligations to society, the profession and the environment.",
                about: "This competence is about maintaining and enhancing competence in your own area of practice through professional development activity, as well as adopting a set of values and behaviours that maintains and enhances the reputation of the profession.",
                sub: {
                    "E1": {
                        text: "Comply with relevant codes of conduct.",
                        bullets: [
                            "Complying with the rules of professional conduct of your own professional body",
                            "Leading work within all relevant legislation and regulatory frameworks, including social and employment legislation"
                        ]
                    },
                    "E2": {
                        text: "Manage and apply safe systems of work.",
                        bullets: [
                            "Identifying and taking responsibility for your own obligations for health, safety and welfare issues",
                            "Managing systems that satisfy health, safety and welfare requirements",
                            "Developing and implementing appropriate hazard identification and risk management systems and culture",
                            "Managing, evaluating and improving these systems",
                            "Applying a ‘safety mind-set’"
                        ]
                    },
                    "E3": {
                        text: "Undertake engineering activities in a way that contributes to sustainable development.",
                        bullets: [
                            "Operating and acting responsibly, taking account of the need to progress environmental, social and economic outcomes simultaneously",
                            "Providing products and services that maintain and enhance the quality of the environment and community, and meet financial objectives",
                            "Understanding and encouraging stakeholder involvement in sustainable development",
                            "Using resources efficiently and effectively"
                        ]
                    },
                    "E4": {
                        text: "Carry out and record CPD necessary to maintain and enhance competence in their own area of practice.",
                        bullets: [
                            "Undertaking reviews of your own development needs",
                            "Planning how to meet personal and organisational objectives",
                            "Carrying out planned (and unplanned) CPD activities",
                            "Maintaining evidence of competence development",
                            "Evaluating CPD outcomes against any plans made",
                            "Assisting others with their own CPD"
                        ]
                    },
                    "E5": {
                        text: "Exercise responsibilities in an ethical manner.",
                        bullets: [
                            "Understanding the ethical issues that you may encounter in your role",
                            "Giving an example of where you have applied ethical principles",
                            "Giving an example of where you have applied or upheld ethical principles"
                        ]
                    }
                }
            }
        }
    },
    "CEng": {
        title: "Chartered Engineer (CEng)",
        competencies: {
            "A": {
                title: "A. Knowledge and understanding",
                requirement: "Chartered Engineers shall use a combination of general and specialist engineering knowledge and understanding to optimise the application of existing and emerging technology.",
                about: "This competence is about having knowledge of the technologies, standards and practices relevant to the applicant’s area of work and having evidence of maintaining and applying this knowledge.",
                sub: {
                    "A1": {
                        text: "Have maintained and extended a sound theoretical approach to enable them to develop their particular role",
                        bullets: [
                            "Formal training related to your role",
                            "Learning and developing new engineering knowledge in a different industry or role",
                            "Understanding the current and emerging technology and technical best practice in your area of expertise",
                            "Developing a broader and deeper knowledge base through research and experimentation",
                            "Learning and developing new engineering theories and techniques in the workplace"
                        ]
                    },
                    "A2": {
                        text: "Are developing technological solutions to unusual or challenging problems, using their knowledge and understanding and/or dealing with complex technical issues or situations with significant levels of risk.",
                        bullets: [
                            "Carrying out technical research and development",
                            "Developing new designs, processes or systems based on new or evolving technology",
                            "Carrying out complex and/or non-standard technical analyses",
                            "Developing solutions involving complex or multidisciplinary technology",
                            "Developing and evaluating continuous improvement systems",
                            "Developing solutions in safety-critical industries or applications"
                        ]
                    }
                }
            },
            "B": {
                title: "B. Design and development",
                requirement: "Chartered Engineers shall apply appropriate theoretical and practical methods to the analysis and solution of engineering problems.",
                about: "This competence is about the ability to apply engineering skills to identify and resolve problems and to contribute to the development and improvement of engineering products, processes, systems and services.",
                sub: {
                    "B1": {
                        text: "Take an active role in the identification and definition of project requirements, problems and opportunities.",
                        bullets: [
                            "Identifying projects and opportunities",
                            "Conducting appropriate research, and undertaking design and development of engineering solutions",
                            "Implementing design solutions and evaluating their effectiveness"
                        ]
                    },
                    "B2": {
                        text: "Identify the appropriate investigations and research needed to undertake the design and development of engineering solutions.",
                        bullets: [
                            "Identifying the appropriate investigations and research needed to undertake the design and development of engineering solutions",
                            "Evaluating the results of investigations and research",
                            "Using the results of investigations and research to inform the design and development of engineering solutions"
                        ]
                    },
                    "B3": {
                        text: "Implement engineering solutions and evaluate their effectiveness in the context of the whole project or life cycle.",
                        bullets: [
                            "Implementing engineering solutions",
                            "Evaluating the effectiveness of engineering solutions",
                            "Identifying and implementing improvements to engineering solutions",
                            "Ensuring that engineering solutions are safe, sustainable and cost-effective"
                        ]
                    }
                }
            },
            "C": {
                title: "C. Responsibility, management and leadership",
                requirement: "Chartered Engineers shall provide technical and commercial leadership.",
                about: "This competence is about the ability to plan and organise work, manage resources and/or supervise others. It also involves taking responsibility for the quality and safety of the work and for the environment.",
                sub: {
                    "C1": {
                        text: "Plan for effective project implementation.",
                        bullets: [
                            "Identifying the factors affecting the project implementation",
                            "Preparing and agreeing implementation plans and method statements",
                            "Securing the necessary resources and confirming roles in project teams",
                            "Applying the necessary contractual arrangements with other stakeholders (client, subcontractors, suppliers, etc.)"
                        ]
                    },
                    "C2": {
                        text: "Plan, budget, organise, direct and control tasks, people and resources.",
                        bullets: [
                            "Operating appropriate management systems",
                            "Working to the agreed quality standards, programme and budget",
                            "Managing work teams, coordinating project activities",
                            "Identifying variations from quality standards, programme and budgets",
                            "Taking corrective action",
                            "Gathering and evaluating feedback and recommending improvements"
                        ]
                    },
                    "C3": {
                        text: "Lead teams and develop staff to meet changing technical and managerial needs.",
                        bullets: [
                            "Agreeing objectives and work plans with teams and individuals",
                            "Identifying team and individual needs and planning for their development",
                            "Reinforcing team commitment to professional standards",
                            "Leading and supporting team and individual development",
                            "Assessing team and individual performance and providing feedback"
                        ]
                    },
                    "C4": {
                        text: "Bring about continuous improvement through quality management.",
                        bullets: [
                            "Promoting quality throughout the organisation and its customer and supplier networks",
                            "Developing and maintaining operations to meet quality standards",
                            "Supporting and directing your team/s in the practical application of quality"
                        ]
                    }
                }
            },
            "D": {
                title: "D. Communication and interpersonal skills",
                requirement: "Chartered Engineers shall demonstrate effective interpersonal skills.",
                about: "This competence is about the ability to work with others, to communicate effectively and to maintain professional relationships.",
                sub: {
                    "D1": {
                        text: "Communicate in English with others at all levels.",
                        bullets: [
                            "Contributing to, chairing and recording meetings and discussions",
                            "Preparing communications, documents and reports on technical matters",
                            "Exchanging information and providing advice to technical and non-technical colleagues"
                        ]
                    },
                    "D2": {
                        text: "Present and discuss proposals.",
                        bullets: [
                            "Preparing and delivering presentations on strategic matters",
                            "Leading and sustaining debates with audiences",
                            "Feeding the results back to improve the proposals",
                            "Raising the awareness of risk"
                        ]
                    },
                    "D3": {
                        text: "Demonstrate personal and social skills.",
                        bullets: [
                            "Knowing and managing your own emotions, strengths and weaknesses",
                            "Being aware of the needs and concerns of others, especially where related to diversity and inclusion",
                            "Being confident and flexible in dealing with new and changing interpersonal situations",
                            "Identifying, agreeing and working towards collective goals",
                            "Creating, maintaining and enhancing productive working relationships"
                        ]
                    }
                }
            },
            "E": {
                title: "E. Personal and professional commitment",
                requirement: "Chartered Engineers shall demonstrate a personal commitment to professional standards, recognising obligations to society, the profession and the environment.",
                about: "This competence is about maintaining and enhancing competence in your own area of practice through professional development activity, as well as adopting a set of values and behaviours that maintains and enhances the reputation of the profession.",
                sub: {
                    "E1": {
                        text: "Comply with relevant codes of conduct.",
                        bullets: [
                            "Complying with the rules of professional conduct of your own professional body",
                            "Leading work within all relevant legislation and regulatory frameworks, including social and employment legislation"
                        ]
                    },
                    "E2": {
                        text: "Manage and apply safe systems of work.",
                        bullets: [
                            "Identifying and taking responsibility for your own obligations for health, safety and welfare issues",
                            "Managing systems that satisfy health, safety and welfare requirements",
                            "Developing and implementing appropriate hazard identification and risk management systems and culture",
                            "Managing, evaluating and improving these systems",
                            "Applying a ‘safety mind-set’"
                        ]
                    },
                    "E3": {
                        text: "Undertake engineering activities in a way that contributes to sustainable development.",
                        bullets: [
                            "Operating and acting responsibly, taking account of the need to progress environmental, social and economic outcomes simultaneously",
                            "Providing products and services that maintain and enhance the quality of the environment and community, and meet financial objectives",
                            "Understanding and encouraging stakeholder involvement in sustainable development",
                            "Using resources efficiently and effectively"
                        ]
                    },
                    "E4": {
                        text: "Carry out and record CPD necessary to maintain and enhance competence in their own area of practice.",
                        bullets: [
                            "Undertaking reviews of your own development needs",
                            "Planning how to meet personal and organisational objectives",
                            "Carrying out planned (and unplanned) CPD activities",
                            "Maintaining evidence of competence development",
                            "Evaluating CPD outcomes against any plans made",
                            "Assisting others with their own CPD"
                        ]
                    },
                    "E5": {
                        text: "Exercise responsibilities in an ethical manner.",
                        bullets: [
                            "Understanding the ethical issues that you may encounter in your role",
                            "Giving an example of where you have applied ethical principles",
                            "Giving an example of where you have applied or upheld ethical principles"
                        ]
                    }
                }
            }
        }
    }
};