// This object holds all your site content.
// Edit this file to update your website's content.


const siteDetails = {
    name: "Aniket Anand",
    lastUpdated: "June 2026", // <-- shown in the footer; bump this when you update the site
    year: "third", // <-- YOU CAN CHANGE THIS VALUE (e.g., "4th")
    program: "PhD Student",
    department: "Computer Science",
    university: "<a href='https://computerscience.uchicago.edu/' target='_blank' class='text-blue-400 hover:underline font-medium'>UChicago</a>",
    advisor: "<a href='https://people.cs.uchicago.edu/~grantho/' target='_blank' class='text-blue-400 hover:underline font-medium'>Grant Ho</a>",
    field: "[Your Specific Field, e.g., computer vision, natural language processing, systems]",
    interests: "capabilities and security limitations of LLMs - how they can be exploited and how to build robust defenses against misuse",
    currentProject: "[A brief, 1-2 sentence description of your current project, e.g., 'self-supervised learning for medical imaging' or 'optimizing GPU performance for large-scale training']",
    past: "In the past I've worked on Internet measurements with <a href='https://websites.umich.edu/~mgkallit/' target='_blank' class='text-blue-400 hover:text-primary-700 hover:underline font-medium'>Michalis Kallitsis</a> and wonderful members of <a href='https://inetintel.notion.site/About-Us-ea34427db70e4109a7a80e316c4e7a65' target='_blank' class='text-blue-400 hover:text-primary-700 hover:underline font-medium'>Internet Intelligence Lab</a> during my time at Georgia Tech, and on a few networks and security topics as an undergrad at IIT (BHU)."
};

const contentData = {
    // General site info
    site: {
        title: "",
        name: "",
    },
    
    // About Me Section
    about: {
        name: siteDetails.name,
        title: "CS Ph.D. student",
        photo: "./assets/profile.jpg", // Make sure this path is correct
        bio: [
            `I am a ${siteDetails.year} year ${siteDetails.program} at ${siteDetails.university}.
            Recently, I have explored the applications of machine learning on security problems. I'm broadly excited about ${siteDetails.interests}.`,
            // `advised by ${siteDetails.advisor}.`, 
            `I'm always happy to discuss ideas about machine learning for AI safety. If you're working on related questions, I'd love to hear from you.`,
            `${siteDetails.past}`
        ],
        links: [
            { label: "Email", icon: "mail", url: "mailto:aanand300@uchicago.edu" },
            { label: "Google Scholar", iconType: "academicon", icon: "ai-google-scholar", url: "https://scholar.google.com/citations?hl=en&user=yXzKvLUAAAAJ&view_op=list_works&sortby=pubdate" },
            { label: "GitHub", icon: "github", url: "https://github.com/aanand300" },
            { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/aanand300/" },
            { label: "Twitter", icon: "twitter", url: "https://x.com/AniketA01541569" },
            { label: "CV", iconType: "academicon", icon: "ai-cv", url: "./assets/cvv.pdf" }
        ]
    },

    // Research Interests Section
    researchInterests: [
        { name: "Machine Learning", type: "primary" },
        { name: "Large Language Models", type: "primary" },
        { name: "Interpretability", type: "primary" },
        { name: "AI Safety", type: "primary" },
        // { name: "PyTorch", type: "secondary" },
        // { name: "GPU Optimization", type: "secondary" },
        // { name: "Explainable AI (XAI)", type: "secondary" }
    ],

    // Publications Section
    publications: [
        {
            title: "Measuring, Localizing, and Ablating Alignment Signatures in LLMs",
            authors: "<strong>Aniket Anand</strong><sup>*</sup>, Janvijay Singh<sup>*</sup>, Zhewei Sun, Dilek Hakkani-Tür, Nick Feamster",
            year: "2026",
            venue: "arXiv, May 2026",
            note: "<sup>*</sup>Equal contribution",
            links: [
                { name: "arXiv", url: "https://arxiv.org/abs/2605.30526" },
                { name: "PDF", url: "https://arxiv.org/pdf/2605.30526" }
            ]
        },
        {
            title: "Benchmarking and Exploring the Capabilities of LLMs for Attack Investigations",
            authors: "<strong>Aniket Anand</strong>, Yiwei Hou, Daniel Fields, Alex Kantchelian, David Tao, Kurt Thomas, Grant Ho",
            year: "2026",
            venue: "Under review",
            links: [
                { name: "arXiv", url: "https://arxiv.org/abs/2606.10281" },
                { name: "PDF", url: "https://arxiv.org/pdf/2606.10281" }
            ]
        },
        {
            title: "Aggressive internet-wide scanners: Network impact and longitudinal characterization",
            authors: "<strong>Aniket Anand</strong>, Michalis Kallitsis, Jackson Sippe, Alberto Dainotti",
            year: "2023",
            venue: "CoNEXT 2023: Companion of the 19th International Conference on emerging Networking EXperiments and Technologies",
            links: [
                { name: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3624354.3630583" },
                // { name: "Code", url: "#" },
                { name: "BibTeX", url: "https://scholar.googleusercontent.com/scholar.bib?q=info:DNPndqKrxD4J:scholar.google.com/&output=citation&scisdr=ChV7hYtJENDl3Ngz8ng:ABGrvjIAAAAAaRo16niy9t2ibDTi2B91X8cpMWk&scisig=ABGrvjIAAAAAaRo16oWpEltvV01GJkOnq4YM7bc&scisf=4&ct=citation&cd=-1&hl=en" }
            ]
        },
        // {
        //     title: "Self-Supervision for Medical Image Segmentation",
        //     authors: "Co-author One, <strong>Your Name</strong>, Your Advisor",
        //     venue: "Workshop on Medical Computer Vision @ Conference on Computer Vision and Pattern Recognition (CVPR), 2023.",
        //     links: [
        //         { name: "PDF", url: "#" },
        //         { name: "Project Page", url: "#" }
        //     ]
        // }
    ],

    // News Section (short bullet points shown on the homepage)
    news: [
        "June 2026: Excited to join <a href='https://www.ttic.edu/' target='_blank' class='text-blue-400 hover:text-blue-600 hover:underline font-medium'>TTIC</a> as a Visiting Student Researcher, continuing my research in NLP and AI safety.",
        "Sept 2025: Completed SWE internship with BrainAuth team at Google.",
        "Aug 2025: Contributed to <a href='https://github.com/google/facade/' target='_blank' class='text-blue-400 hover:text-blue-600 hover:underline font-medium'>OSS-Facade</a>",
        "June 2025: Joined Google as a Ph.D. SWE Intern, working with Dr. <a href='https://scholar.google.com/citations?hl=en&user=jZCCpsIAAAAJ&view_op=list_works&sortby=pubdate' target='_blank' class='text-blue-400 hover:text-blue-600 hover:underline font-medium'>Alex Kantchelian</a>.",
        // "Presented my paper at CoNext 2023 (Dec 2023).",
        // "Started Ph.D. at UChicago (Sept 2023)."
    ],

    // Projects Section
    projects: [
        {
            title: "Personal CUDA Kernel Library",
            description: "An implementation of common deep learning operations (like convolution and attention) in CUDA C++ for performance analysis.",
            url: "#"
        },
        {
            title: "Real-Time Object Detection App",
            description: "A lightweight web application using TensorFlow.js to run a custom-trained YOLOv8 model in the browser.",
            url: "#"
        }
    ]
};