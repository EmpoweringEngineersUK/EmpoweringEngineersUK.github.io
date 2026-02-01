// EMPOWERING ENGINEERS UK - SMART FEEDBACK SYSTEM
// v2.2 (Arial Font Update)

(function() {
    try {
        // 1. CONFIGURATION
        const formBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc8g6JE5pn6R-XtRND7NuUkPG0l2LQTuPQnJw4NrBNNecoWgA/viewform";
        const entryId = "entry.608015682"; 
        
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
            "privacy.html": "General",
            "hardware_tool.html": "Atlas",
            "linkedin_banner_gen.html": "Banner",
            "logo_tool.html": "Logo"
        };

        // 3. DETECT CURRENT PAGE
        const path = window.location.pathname;
        let currentPage = path.split("/").pop(); 
        if (!currentPage) currentPage = "index.html";
        if (currentPage.includes("?")) currentPage = currentPage.split("?")[0];

        let formOption = pageMap[currentPage] || pageMap[currentPage + ".html"] || "General";

        // 4. CONSTRUCT URL
        const finalUrl = `${formBaseUrl}?usp=pp_url&${entryId}=${encodeURIComponent(formOption)}`;

        // 5. INJECT INTO FOOTER
        const footer = document.querySelector("footer");
        
        if (footer) {
            if (document.getElementById("ee-feedback-link")) return;

            const p = document.createElement("p");
            p.style.marginTop = "20px";
            p.style.fontSize = "0.85rem";
            
            p.style.borderTop = "1px dashed var(--border-color)"; 
            p.style.paddingTop = "15px";

            const link = document.createElement("a");
            link.id = "ee-feedback-link"; 
            link.href = finalUrl;
            link.target = "_blank"; 
            link.innerHTML = "⚠️ Feedback & Bug Report ↗"; 
            
            link.style.color = "var(--burnt-orange)"; 
            link.style.textDecoration = "none";
            link.style.fontWeight = "bold";
            // UPDATE: Removed 'Courier Prime', used global standard
            link.style.fontFamily = '"Arial", "Helvetica Neue", "Helvetica", sans-serif';
            
            link.onmouseover = function() { this.style.textDecoration = "underline"; };
            link.onmouseout = function() { this.style.textDecoration = "none"; };

            p.appendChild(link);
            footer.appendChild(p);
        }
    } catch (e) {
        console.error("EmpoweringEngineers Feedback Script Error:", e);
    }
})();