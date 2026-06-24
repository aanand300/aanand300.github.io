// config.js
// ─────────────────────────────────────────────────────────────────────────────
// Design / layout knobs — tweak these, save, and refresh the page (the local
// server picks up the change instantly) to play with the look.
//
// Values are plain CSS:
//   • sizes   → "1rem", "16px", "1.1em", "0.9rem"
//   • colors  → "#333", "#000", "#999", "rgb(51,51,51)"
//   • weight  → "400" (normal / like Rishub), "500", "600", "700" (bold)
//   • family  → a font-family stack string
// These override the default Tailwind classes baked into index.html / main.js.
// ─────────────────────────────────────────────────────────────────────────────
const theme = {

    // ── HEADER nav links ("About", "Interests", "Publications") ─────────────
    // (Hover still brightens the link via the site theme — this sets the
    //  resting style.)
    header: {
        fontFamily: "'Helvetica'",
        fontSize:   "20px", // size of the nav link text
        fontWeight: "700",
        color:      "#4b5563",  // resting link colour
    },

    // ── SECTION TITLES (the headings "Interests", "News", "Recent publications") ─
    // The thick underline under each heading is left as-is; this styles the text.
    sectionTitles: {
        fontFamily: "'Helvetica'",
        fontSize:   "22px",   // heading text size
        fontWeight: "700",      // bold
        color:      "#000000",  // near-black
    },

    // Vertical rhythm between the big page sections.
    layout: {
        sectionSpacing: "2rem",     // space below each section (gap between sections)
        headingSpacing: "0.75rem",  // gap between a section heading and its content
        tagSpacing: "0.75rem",      // gap between the Interests tags
    },

    // ── NEWS bullet points ──────────────────────────────────────────────────
    // Styled to match the clean Helvetica bullet style on Rishub Jain's site
    // (e.g. "Backstory: Improving the Information Quality of the Internet").
    // Tweak any line below and refresh. (Links inside a news item stay blue —
    // that colour comes from content.js, not from here.)
    news: {
        // fontFamily: "'Times'",
        fontFamily: "'Times'",
        fontSize:   "16px",     // original (good) news size; bump to "1.05rem" etc. to taste
        lineHeight: "1.4",      // line spacing within a single bullet
        color:      "#333",     // text colour of the news lines
        fontWeight: "400",      // 400 = normal, like Rishub's bullets
        itemSpacing: "0.5rem",  // vertical gap BETWEEN bullets
    },

    // ── BIO paragraphs (the "About" intro) ──────────────────────────────────
    bio: {
        fontFamily: "'Times'",
        fontSize:   "16px",
        // lineHeight: "1.4",      // smaller = more compact
        color:      "#000",     // black
        paragraphSpacing: "0.5rem", // vertical gap between bio paragraphs
    },

    // ── INTERESTS tags (the pill chips under "Interests") ───────────────────
    interests: {
        fontFamily: "'Times'",
        fontSize:   "16px",     // size of the text inside each tag
        fontWeight: "500",
        color:      "#000000",  // tag text colour (dark grey)
        background:  "#f3f4f6", // tag pill background (light grey)
    },

    // ── RECENT PUBLICATIONS list ────────────────────────────────────────────
    // (The coloured link pills — arXiv / PDF / BibTeX — stay blue; that style
    //  lives in main.js, not here.)
    publications: {
        fontFamily: "'Times'",
        fontSize:   "14px", // original size (small / compact)
        // lineHeight: "1.625",    // line spacing within one entry
        titleColor: "#111827",  // paper title colour (near-black)
        metaColor:  "#000000",  // authors + venue colour
        itemSpacing: "1rem",    // vertical gap BETWEEN publications
    },
};
