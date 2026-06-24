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

    // --- Style header nav links (About / Interests / Publications) from theme.header ---
    // Injected as a stylesheet rule (not inline) so the theme's hover colour still wins.
    if (typeof theme !== 'undefined' && theme.header) {
        const h = theme.header;
        const rule = [
            h.fontFamily && `font-family:${h.fontFamily}`,
            h.fontSize   && `font-size:${h.fontSize}`,
            h.fontWeight && `font-weight:${h.fontWeight}`,
            h.color      && `color:${h.color}`,
        ].filter(Boolean).join(';');
        if (rule) {
            const styleEl = document.createElement('style');
            styleEl.textContent = `.nav-link{${rule}}`;
            document.head.appendChild(styleEl);
        }
    }

    // --- Style section titles (Interests / News / Recent publications) from theme.sectionTitles ---
    if (typeof theme !== 'undefined' && theme.sectionTitles) {
        const s = theme.sectionTitles;
        document.querySelectorAll('main > section > h2').forEach(h => {
            if (s.fontFamily) h.style.fontFamily = s.fontFamily;
            if (s.fontSize)   h.style.fontSize = s.fontSize;
            if (s.fontWeight) h.style.fontWeight = s.fontWeight;
            if (s.color)      h.style.color = s.color;
        });
    }

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

    // Apply bio typography from theme.bio (config.js) so it can be tweaked in one place.
    if (typeof theme !== 'undefined' && theme.bio) {
        const b = theme.bio;
        ['bio-p1', 'bio-p2', 'bio-p3'].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            if (b.fontFamily)       el.style.fontFamily = b.fontFamily;
            if (b.fontSize)         el.style.fontSize = b.fontSize;
            if (b.lineHeight)       el.style.lineHeight = b.lineHeight;
            if (b.color)            el.style.color = b.color;
            if (b.paragraphSpacing) el.style.marginBottom = b.paragraphSpacing;
        });
    }

    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.innerHTML = about.links.map(link => `
        <a href="${link.url}" target="_blank" class="text-secondary-500 hover:text-primary-600 flex items-center" aria-label="${link.label}">
            ${link.iconType === 'academicon'
                ? `<i class="ai ${link.icon}" style="font-size: 24px; line-height: 1;"></i>`
                : `<i data-feather="${link.icon}"></i>`}
        </a>
    `).join('');

    // --- Populate Research Interests (only if container and data exist) ---
    const researchTagsContainer = document.getElementById('research-tags-container');
    if (researchTagsContainer && Array.isArray(contentData.researchInterests) && contentData.researchInterests.length > 0) {
        const t = (typeof theme !== 'undefined' && theme.interests) ? theme.interests : {};
        const tagStyle = [
            t.fontFamily && `font-family:${t.fontFamily}`,
            t.fontSize   && `font-size:${t.fontSize}`,
            t.fontWeight && `font-weight:${t.fontWeight}`,
            t.color      && `color:${t.color}`,
            t.background && `background:${t.background}`,
        ].filter(Boolean).join(';');
        researchTagsContainer.innerHTML = contentData.researchInterests.map(tag =>
            `<span class="px-4 py-2 rounded-full" style="${tagStyle}">${tag.name}</span>`
        ).join('');
    } else if (researchTagsContainer) {
        researchTagsContainer.innerHTML = '';
    }


    // --- Populate News (bullet list) ---
    // Typography (font, size, colour, spacing) is driven by theme.news in config.js.
    const newsList = document.getElementById('news-list');
    if (newsList && Array.isArray(contentData.news) && contentData.news.length > 0) {
        const n = (typeof theme !== 'undefined' && theme.news) ? theme.news : {};
        const ulStyle = [
            n.fontFamily && `font-family:${n.fontFamily}`,
            n.fontSize   && `font-size:${n.fontSize}`,
            n.lineHeight && `line-height:${n.lineHeight}`,
            n.color      && `color:${n.color}`,
            n.fontWeight && `font-weight:${n.fontWeight}`,
        ].filter(Boolean).join(';');
        newsList.innerHTML = `<ul class="list-disc ml-6" style="${ulStyle}">` + contentData.news.map(item =>
            `<li${n.itemSpacing ? ` style="margin-bottom:${n.itemSpacing}"` : ''}>${item}</li>`
        ).join('') + '</ul>';
    } else if (newsList) {
        newsList.innerHTML = '';
    }

    // --- Populate Publications (compact list) ---
    // Typography (font, size, colours, spacing) is driven by theme.publications in config.js.
    const publicationsList = document.getElementById('publications-list');
    const p = (typeof theme !== 'undefined' && theme.publications) ? theme.publications : {};
    const pubLiStyle = [
        p.fontFamily  && `font-family:${p.fontFamily}`,
        p.fontSize    && `font-size:${p.fontSize}`,
        p.lineHeight  && `line-height:${p.lineHeight}`,
        p.itemSpacing && `margin-bottom:${p.itemSpacing}`,
    ].filter(Boolean).join(';');
    const pubMetaStyle = p.metaColor ? `color:${p.metaColor}` : '';
    const pubTitleStyle = `font-weight:600${p.titleColor ? `;color:${p.titleColor}` : ''}`;
    publicationsList.innerHTML = `
        <ul class="list-none">` + contentData.publications.map(pub => `
            <li style="${pubLiStyle}">
                <i data-feather="file-text" class="inline-block w-4 h-4 mr-1 text-secondary-400 align-text-bottom"></i>
                <span style="${pubMetaStyle}">${pub.authors}${pub.year ? ` (${pub.year}).` : '.'}</span>
                <span style="${pubTitleStyle}">${pub.title}</span>.
                <em style="${pubMetaStyle}">${pub.venue}</em>.
                ${pub.links.map(link => (!link.url || link.url === '#')
                    ? `<span class="inline-block px-2 py-0.5 border border-secondary-300 text-secondary-400 italic rounded text-xs ml-1 align-middle">${link.name}</span>`
                    : `<a href="${link.url}" target="_blank" class="inline-block px-2 py-0.5 border border-blue-400 text-blue-500 rounded text-xs ml-1 align-middle hover:bg-blue-500 hover:text-white transition-colors">${link.name}</a>`).join('')}
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
                    <a href="${proj.url}" target="_blank" class="text-blue-500 font-medium hover:underline flex items-center">
                        View on GitHub <i data-feather="arrow-right" class="w-4 h-4 ml-1"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // --- Final Setup ---
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Set "Last updated" in footer (manually maintained via siteDetails.lastUpdated)
    const lastUpdatedEl = document.getElementById('last-updated');
    if (lastUpdatedEl && typeof siteDetails !== 'undefined' && siteDetails.lastUpdated) {
        lastUpdatedEl.textContent = `Last updated: ${siteDetails.lastUpdated}`;
    }

    // --- Apply layout config (from config.js) ---
    // Overrides the default spacing classes in index.html so the layout can be
    // tweaked from one place. Inline styles take precedence over the classes.
    if (typeof theme !== 'undefined' && theme.layout) {
        document.querySelectorAll('main > section').forEach(section => {
            if (theme.layout.sectionSpacing) section.style.marginBottom = theme.layout.sectionSpacing;
        });
        document.querySelectorAll('main > section > h2').forEach(heading => {
            if (theme.layout.headingSpacing) heading.style.marginBottom = theme.layout.headingSpacing;
        });
        const tagsContainer = document.getElementById('research-tags-container');
        if (tagsContainer && theme.layout.tagSpacing) tagsContainer.style.gap = theme.layout.tagSpacing;
    }

    // Run Feather Icons AFTER new content is injected
    // Check if feather is loaded before calling replace()
    if (typeof feather !== 'undefined') {
        feather.replace();
    } else {
        console.error("Error: feather-icons script not loaded.");
    }
});