// This object holds all your site content.
// Edit this file to update your website's content.


const siteDetails = {
    name: "Aniket Anand",
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
            `I am a ${siteDetails.year} year ${siteDetails.program} at ${siteDetails.university}, advised by ${siteDetails.advisor}. Recently, I have explored the applications of machine learning on security problems. I'm broadly excited about ${siteDetails.interests}.`,
            `${siteDetails.past}`,
            `I'm always excited to collaborate on cutting-edge projects in security and machine learning. Feel free to reach out—I'd love to hear from you!`
        ],
        links: [
            { label: "Email", icon: "mail", url: "mailto:aanand300@uchicago.edu" },
            { label: "Google Scholar", icon: "book-open", url: "https://scholar.google.com/citations?user=zU3RxU0AAAAJ&hl=en&oi=sra" },
            { label: "GitHub", icon: "github", url: "https://github.com/aanand300" },
            { label: "CV", icon: "file-text", url: "" },
            // { label: "Twitter", icon: "twitter", url: "https://x.com/AniketA01541569" }
        ]
    },

    // Research Interests Section
    researchInterests: [
        { name: "LLMs", type: "primary" },
        { name: "Data and Security", type: "primary" },
        { name: "Measurements", type: "primary" },
        // { name: "PyTorch", type: "secondary" },
        // { name: "GPU Optimization", type: "secondary" },
        // { name: "Explainable AI (XAI)", type: "secondary" }
    ],

    // Publications Section
    publications: [
        {
            title: "Aggressive internet-wide scanners: Network impact and longitudinal characterization",
            authors: "<strong>Aniket Anand</strong>, Michalis Kallitsis, Jackson Sippe, Alberto Dainotti",
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
        "Nov 2025: Actively seeking Summer 2026 internship opportunities in projects involving LLMs and security—reach out if your team is hiring!",
        "Nov 2025: Stay tuned for the latest research on LLMs and log analysis!",
        "Sept 2025: Completed SWE internship with BrainAuth team at Google.",
        "Aug 2025: Contributed to <a href='https://github.com/google/facade/' target='_blank' class='text-primary-500 hover:text-primary-700 hover:underline font-medium'>OSS-Facade</a>",
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