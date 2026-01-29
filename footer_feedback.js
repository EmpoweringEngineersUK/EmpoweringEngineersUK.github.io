// EMPOWERING ENGINEERS UK - SMART FEEDBACK SYSTEM
// v2.0 (Robust Mode - Runs immediately, ignores external script errors)

(function() {
    try {
        // 1. CONFIGURATION
        const formBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc8g6JE5pn6R-XtRND7NuUkPG0l2LQTuPQnJw4NrBNNecoWgA/viewform";
        const entryId = "entry.608015682"; // The field ID for "Which Tool?"
        
        // 2. PAGE MAPPING
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
            "reference_tool.html": "Library",
            "dap_tool.html": "DAP",
			"interview_tool.html": "Interview",
            "guide.html": "Manual",
            "about.html": "General",
            "contact.html": "General",
            "terms.html": "General",
            "privacy.html": "General"
        };

        // 3. DETECT CURRENT PAGE
        const path = window.location.pathname;
        let currentPage = path.split("/").pop(); 
        
        // Handle root path or clean URLs (e.g. /about instead of /about.html)
        if (!currentPage) currentPage = "index.html";
        // Strip query params if any
        if (currentPage.includes("?")) currentPage = currentPage.split("?")[0];

        // Get the corresponding Form Option (Default to "General")
        // Check for exact match, then try appending .html if missing
        let formOption = pageMap[currentPage] || pageMap[currentPage + ".html"] || "General";

        // 4. CONSTRUCT URL
        const finalUrl = `${formBaseUrl}?usp=pp_url&${entryId}=${encodeURIComponent(formOption)}`;

        // 5. INJECT INTO FOOTER
        const footer = document.querySelector("footer");
        
        if (footer) {
            // Check if link already exists to prevent duplicates
            if (document.getElementById("ee-feedback-link")) return;

            const p = document.createElement("p");
            p.style.marginTop = "20px";
            p.style.fontSize = "0.85rem";
            p.style.borderTop = "1px dashed #30363d";
            p.style.paddingTop = "15px";

            const link = document.createElement("a");
            link.id = "ee-feedback-link"; // ID to prevent duplicates
            link.href = finalUrl;
            link.target = "_blank"; 
            link.innerHTML = "⚠️ Feedback & Bug Report ↗"; 
            
            // Styling
            link.style.color = "#FF8C42"; 
            link.style.textDecoration = "none";
            link.style.fontWeight = "bold";
            link.style.fontFamily = "'Courier Prime', monospace";
            
            link.onmouseover = function() { this.style.textDecoration = "underline"; };
            link.onmouseout = function() { this.style.textDecoration = "none"; };

            p.appendChild(link);
            footer.appendChild(p);
            
            console.log("Feedback link injected for context:", formOption);
        } else {
            console.warn("Footer element not found. Feedback link skipped.");
        }
    } catch (e) {
        console.error("EmpoweringEngineers Feedback Script Error:", e);
    }
})();