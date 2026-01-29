// EMPOWERING ENGINEERS UK - SMART FEEDBACK SYSTEM
// Automatically appends a context-aware feedback link to the footer of every page.

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. CONFIGURATION
    const formBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc8g6JE5pn6R-XtRND7NuUkPG0l2LQTuPQnJw4NrBNNecoWgA/viewform";
    const entryId = "entry.608015682"; // The field ID for "Which Tool?"
    
    // 2. PAGE MAPPING (Filename -> Form Option)
    // Keys must match your URL filenames. Values must match your Google Form Dropdown EXACTLY.
    const pageMap = {
        "index.html": "General",
        "career_tool.html": "Career",
        "cpd_tool.html": "CPD",
        "raci_tool.html": "RACI",
        "STAR_engine.html": "STAR-Gen",
        "ethics_tool.html": "Ethics",
        "feedback_tool.html": "Coach",
        "glossary_tool.html": "Decoder",
        "report_tool.html": "Report",
        "interview_tool.html": "Interview",
        "guide.html": "Manual",
        "about.html": "General",
        "contact.html": "General",
        "terms.html": "General",
        "privacy.html": "General"
    };

    // 3. DETECT CURRENT PAGE
    const path = window.location.pathname;
    let currentPage = path.split("/").pop(); // Get filename (e.g. "raci_tool.html")
    
    // Handle root/empty path
    if (currentPage === "" || currentPage === undefined) currentPage = "index.html";

    // Get the corresponding Form Option (Default to "General" if not found)
    const formOption = pageMap[currentPage] || "General";

    // 4. CONSTRUCT URL
    // We use encodeURIComponent to handle spaces/special characters safely
    const finalUrl = `${formBaseUrl}?usp=pp_url&${entryId}=${encodeURIComponent(formOption)}`;

    // 5. INJECT INTO FOOTER
    const footer = document.querySelector("footer");
    
    if (footer) {
        // Create the container paragraph
        const p = document.createElement("p");
        p.style.marginTop = "20px";
        p.style.fontSize = "0.85rem";
        p.style.borderTop = "1px dashed #30363d";
        p.style.paddingTop = "15px";

        // Create the link
        const link = document.createElement("a");
        link.href = finalUrl;
        link.target = "_blank"; // Open in new tab
        link.innerHTML = "⚠️ Feedback & Bug Report ↗"; //Why: Simple, fits on mobile, and covers everything.
        
        // Add styling classes (using layout.css styles)
        link.style.color = "#FF8C42"; // Burnt Orange to stand out
        link.style.textDecoration = "none";
        link.style.fontWeight = "bold";
        link.style.fontFamily = "'Courier Prime', monospace";
        
        // Hover effect logic
        link.onmouseover = function() { this.style.textDecoration = "underline"; };
        link.onmouseout = function() { this.style.textDecoration = "none"; };

        p.appendChild(link);
        footer.appendChild(p);
    }
});