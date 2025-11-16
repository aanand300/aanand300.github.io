/* =====================================================================
   PAGE POPULATION SCRIPT
   This script reads the contentData object (from content.js)
   and builds the HTML.
   You shouldn't need to edit this file.
   =====================================================================
*/
document.addEventListener('DOMContentLoaded', () => {
    
    // Check if contentData exists
    if (typeof contentData === 'undefined') {
        console.error("Error: content.js is not loaded or contentData is not defined.");
        // Display a user-friendly error on the page
        document.body.innerHTML = '<div style="font-family: sans-serif; text-align: center; padding: 40px;"><h1>Error: Content Not Found</h1><p>The website content (content.js) failed to load. Please ensure the file is in the same directory as index.html.</p></div>';
        return;
    }

    // --- Populate General Site Info ---
    document.title = contentData.site.title;
    document.getElementById('header-name').textContent = contentData.site.name;
    document.getElementById('footer-name').textContent = contentData.site.name;

    // --- Populate About Section ---
    const about = contentData.about;
    document.getElementById('profile-img').src = about.photo;
    document.getElementById('profile-name').textContent = about.name;
    document.getElementById('profile-title').textContent = about.title;
    
    // --- UPDATED LINES ---
    // Switched from .textContent to .innerHTML to allow links in the bio
    document.getElementById('bio-p1').innerHTML = about.bio[0];
    document.getElementById('bio-p2').innerHTML = about.bio[1];
    if (about.bio[2]) {
        document.getElementById('bio-p3').innerHTML = about.bio[2];
    }
    // --- END OF UPDATE ---

    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.innerHTML = about.links.map(link => `
        <a href="${link.url}" target="_blank" class="text-secondary-500 hover:text-primary-600" aria-label="${link.label}">
            <i data-feather="${link.icon}"></i>
        </a>
    `).join('');

    // --- Populate Research Interests (only if container and data exist) ---
    const researchTagsContainer = document.getElementById('research-tags-container');
    if (researchTagsContainer && Array.isArray(contentData.researchInterests) && contentData.researchInterests.length > 0) {
        researchTagsContainer.innerHTML = contentData.researchInterests.map(tag => {
            const a = tag.type === 'primary' ? 'primary' : 'secondary';
            const b = tag.type === 'primary' ? 'primary' : 'secondary';
            return `<span class="bg-${a}-100 text-${b}-800 text-md font-medium px-4 py-2 rounded-full">${tag.name}</span>`;
        }).join('');
    } else if (researchTagsContainer) {
        researchTagsContainer.innerHTML = '';
    }


    // --- Populate News (bullet list) ---
    const newsList = document.getElementById('news-list');
    if (newsList && Array.isArray(contentData.news) && contentData.news.length > 0) {
        newsList.innerHTML = '<ul class="list-disc ml-6 space-y-2">' + contentData.news.map((item, index) => {
            const textColor = index < 2 ? 'text-gray-900 font-medium' : 'text-secondary-700';
            return `<li class="${textColor}">${item}</li>`;
        }).join('') + '</ul>';
    } else if (newsList) {
        newsList.innerHTML = '';
    }

    // --- Populate Publications (compact list) ---
    const publicationsList = document.getElementById('publications-list');
    publicationsList.innerHTML = `
        <ul class="list-none space-y-2">` + contentData.publications.map(pub => `
            <li class="flex flex-col md:flex-row md:items-baseline md:justify-between text-sm py-1">
                <div class="pr-4">
                    <span class="font-semibold text-gray-900">${pub.title}</span>
                    <span class="text-secondary-600"> — ${pub.authors}</span>
                    <div class="text-secondary-600 italic text-xs">${pub.venue}</div>
                </div>
                <div class="mt-1 md:mt-0 flex items-center space-x-2">
                    ${pub.links.map(link => `<a href="${link.url}" class="text-primary-500 hover:text-primary-700 hover:underline text-sm">[${link.name}]</a>`).join(' ')}
                </div>
            </li>
        `).join('') + `
        </ul>`;

    // --- Populate Projects (only if the container exists) ---
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && Array.isArray(contentData.projects) && contentData.projects.length > 0) {
        projectsGrid.innerHTML = contentData.projects.map(proj => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div class="p-6 flex-grow">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${proj.title}</h3>
                    <p class="text-secondary-700 mb-4">${proj.description}</p>
                </div>
                <div class="p-6 bg-secondary-50 pt-4">
                    <a href="${proj.url}" target="_blank" class="text-primary-600 font-medium hover:underline flex items-center">
                        View on GitHub <i data-feather="arrow-right" class="w-4 h-4 ml-1"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // --- Final Setup ---
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Run Feather Icons AFTER new content is injected
    // Check if feather is loaded before calling replace()
    if (typeof feather !== 'undefined') {
        feather.replace();
    } else {
        console.error("Error: feather-icons script not loaded.");
    }
});