// =========================================================================
// EMPOWERING ENGINEERS UK - comingsoon.js - v21.7 - Development Overlay Engine
// Date: 13 Jul 2026
// Specification: Dynamic Page Construction & System Dependency Injection
// Security Profile: Zero-Knowledge Browser Storage Encryption Fallback Layer
// Interface Metrics: British English Standard Hardcoded UI Layout Controls
// =========================================================================

(function() {
    // Proactive Commenting: Execute logic only when the DOM is fully interactive to prevent race conditions
    function initialiseComingSoonState() {
        // 1. Initialise and enforce document title for indexing
        document.title = "404 File not found > Please check the page URL<br>The site configured at this address does not contain the requested file | Empowering Engineers UK";

        // 2. Ensure core layout CSS is present to support the injection of UI classes
        if (!document.querySelector('link[href*="layout.css"]')) {
            const linkCSS = document.createElement('link');
            linkCSS.rel = 'stylesheet';
            linkCSS.href = 'layout.css?v=21.7';
            document.head.appendChild(linkCSS);
        }

        // 3. Enforce the requested EE_banner.webp as the full background asset for the document
        document.body.style.backgroundImage = "url('assets/EE_banner.webp')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center top";
        document.body.style.backgroundColor = "var(--ee-dark-blue)";

        // 4. Architect the main container, injecting Thick Content, AdSense, and the Coming Soon Hero Block
        const overlayHTML = `
            <main class="container" style="position: relative; z-index: 10; background: rgba(13, 27, 42, 0.94); padding: 40px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 12px 40px rgba(0,0,0,0.8); margin-top: 40px; margin-bottom: 40px; backdrop-filter: blur(4px);">
                
                <!-- SEO/AEO "Thick Content" Anti-Penalty Block -->
                <article class="thick-content" style="border-bottom: 1px solid var(--border-color); margin-bottom: 30px; padding-bottom: 20px;">
                    <h1 style="color: var(--ee-terminal-green); text-transform: uppercase; margin-top: 0; margin-bottom: 15px;">Strategic Blueprinting and Platform Expansion</h1>
                    <p style="color: var(--ee-white); font-size: 1.05rem; line-height: 1.7; margin-bottom: 15px;">At Empowering Engineers UK, our fundamental operational philosophy is heavily grounded in standardisation, rigorous quality assurance, and the democratisation of high-tier professional development resources. The engineering sector thrives on continuous improvement; therefore, our digital infrastructure must evolve in tandem with the stringent demands of the Engineering Council. The module you are attempting to access is currently undergoing a comprehensive architectural overhaul by our lead developers to ensure it meets our exacting usability and performance thresholds.</p>
                    
                    <h2 style="color: var(--ee-terminal-green); text-transform: uppercase; margin-top: 25px; margin-bottom: 15px;">Aligning with UK-SPEC Competency Frameworks</h2>
                    <p style="color: var(--ee-white); font-size: 1.05rem; line-height: 1.7; margin-bottom: 15px;">Whether you are strategically targeting an Engineering Technician (EngTech), Incorporated Engineer (IEng), or Chartered Engineer (CEng) registration, the integrity of the evidence you submit is paramount. Our future interactive workbenches are being meticulously mapped directly against the latest UK-SPEC A-E competency criteria. We are designing these incoming toolsets to force candidates into deploying robust, quantifiable narratives—optimising every response through the proven STAR (Situation, Task, Action, Result) methodology.</p>
                    
                    <h3 style="color: var(--ee-terminal-green); text-transform: uppercase; margin-top: 25px; margin-bottom: 15px;">Quality Assurance and Lifecycle Validation</h3>
                    <p style="color: var(--ee-white); font-size: 1.05rem; line-height: 1.7; margin-bottom: 15px;">We do not deploy beta tools lightly. The programming lifecycle of this impending module is subjected to the very same PDCA (Plan, Do, Check, Act) continuous improvement loops and DMAIC problem-solving matrices that we coach our engineering management candidates to utilise. By stress-testing the cognitive load of our user interfaces and ensuring absolute fluid responsiveness across all mobile and desktop viewports, we guarantee that when this tool is brought online, it will function flawlessly under pressure.</p>
                    
                    <h3 style="color: var(--ee-terminal-green); text-transform: uppercase; margin-top: 25px; margin-bottom: 15px;">Data Sovereignty and Zero-Knowledge Architecture</h3>
                    <p style="color: var(--ee-white); font-size: 1.05rem; line-height: 1.7; margin-bottom: 15px;">Furthermore, as we architect this new digital workbench, we are fiercely prioritising candidate privacy. We understand that documenting professional engineering experience often involves handling commercially sensitive, highly classified corporate data. We rigidly adhere to our Zero-Knowledge Storage Protocol across our entire platform. When this module is formally initialised, all data structures, text string inputs, and strategic frameworks will be processed entirely client-side. Your intellectual property will remain tightly sandboxed within your local browser memory layer, completely insulated from external server transmission.</p>
                </article>

                <!-- Core Monetisation Integration: AdSense Backfill for B2B MPU Slot -->
                <div class="ad-slot ad-mpu" style="border-top:1px solid var(--border-color); padding-top:20px; text-align:center; padding-bottom: 30px; margin-bottom: 30px;">
                    <ins class="adsbygoogle"
                         style="display:inline-block;width:300px;height:250px"
                         data-ad-client="ca-pub-7071036534151105"
                         data-ad-slot="4413012282"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>

                <!-- Interactive Placeholder: The Coming Soon Terminal -->
                <div style="background: rgba(0, 0, 0, 0.4); border: 2px dashed var(--ee-terminal-green); border-radius: 8px; padding: 60px 20px; text-align: center; box-shadow: inset 0 0 20px rgba(3, 247, 160, 0.05);">
                    <h2 style="color: var(--ee-terminal-green); font-size: 4rem; text-transform: uppercase; letter-spacing: 4px; font-weight: 700; text-shadow: 0 4px 15px rgba(3, 247, 160, 0.4); margin: 0 0 20px 0; line-height: 1.1;">Coming Soon</h2>
                    <div style="font-size: 3rem; letter-spacing: 12px; margin-bottom: 25px; user-select: none;">👩‍🔧👨‍🔧🛠️♻️🎭🪫🔌🏗️👷‍♂️👷‍♀️</div>
                    <p style="color: var(--ee-white); font-size: 1.25rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0;">System Architecture & Logic Pathways Under Construction</p>
                </div>
                
            </main>
        `;

        // Inject the constructed HTML structure into the body securely
        document.body.innerHTML = overlayHTML;

        // 5. Inject dependencies: Safely bind the standard Header and Footer routing modules to the document
        const dependencies = ['header_nav.js', 'footer.js'];
        dependencies.forEach(src => {
            if (!document.querySelector(`script[src^="${src}"]`)) {
                const scriptNode = document.createElement('script');
                scriptNode.src = `${src}?v=21.7`;
                scriptNode.defer = true;
                document.body.appendChild(scriptNode);
            }
        });
    }

    // Event listener binding to guarantee the DOM is ready for structural overrides
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiseComingSoonState);
    } else {
        initialiseComingSoonState();
    }
})();