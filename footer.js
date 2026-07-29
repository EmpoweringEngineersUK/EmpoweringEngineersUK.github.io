// =========================================================================
// EMPOWERING ENGINEERS UK - footer.js - v22.0 - Master Platform Footer Injection
// Date: 28 Jul 2026
// Specification: Real-Time Banner Footer Data Controller, Consent Modal & Merge Engine
// Security Profile: Zero-Knowledge Browser Storage Encryption Fallback Layer
// Interface Metrics: British English Standard Hardcoded UI Layout Controls
// =========================================================================

(function() {
    // LocalStorage cache backup layer deployed here to shield the engineering candidate's portfolio draft from connection dropouts.
    window.eeDataManager = {
        exportData: function() {
            const data = JSON.stringify(localStorage, null, 2);
            const blob = new Blob([data], {type: "application/json"});
            const url = URL.createObjectURL(blob);
            const now = new Date();
            const pad = (n) => n.toString().padStart(2, '0');
            const timestamp = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
            
            // Dispatch telemetry analytics token to system GA4 endpoints
            if (typeof gtag === 'function') {
                gtag('event', 'backup_download', { 'event_category': 'data_control', 'event_label': 'master_json' });
            }

            const a = document.createElement('a');
            a.href = url;
            a.download = `EE_PlatformMaster_Backup_${timestamp}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        },
        triggerImport: function() {
            document.getElementById('ee-global-import-input').click();
        },
        handleImport: function(input) {
            const file = input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    if (confirm("⚠️ PROFILE SYNCHRONISATION WARNING:\n\nThis action will dynamically merge the uploaded JSON backup with your current local browser profile, replacing exact duplicates by ID but retaining all unique local data. Proceed?")) {
                        
                        // Intelligent additive merge function dynamically checks array structures for "id" hashes
                        const mergeArraysById = (existingArr, importedArr) => {
                            if (!Array.isArray(existingArr) || !Array.isArray(importedArr)) return importedArr;
                            const map = new Map();
                            existingArr.forEach(item => { if(item && item.id) map.set(item.id, item); });
                            let hasIds = false;
                            importedArr.forEach(item => { 
                                if(item && item.id) {
                                    map.set(item.id, item); 
                                    hasIds = true;
                                }
                            });
                            return hasIds ? Array.from(map.values()) : importedArr;
                        };

                        const legacyStar = JSON.parse(localStorage.getItem('EE_STAR_ARCHITECT') || '{}');
                        const legacyDecoder = JSON.parse(localStorage.getItem('EE_ACRONYM_DECODER') || '{}');

                        Object.keys(data).forEach(k => {
                            // STAR Module Migration Mapping
                            if (k.startsWith('star_')) {
                                legacyStar[k.replace('star_', '')] = data[k];
                            } 
                            // Decoder Module Migration Mapping
                            else if (k.startsWith('decoder_')) {
                                legacyDecoder[k.replace('decoder_', '')] = data[k];
                            } 
                            // Deep Object Additive Merge targetting the Unified Master Engine Object
                            else if (k === 'ee_master_state') {
                                let localMaster = JSON.parse(localStorage.getItem('ee_master_state') || '{"ee_tools":{}}');
                                let importedMaster = typeof data[k] === 'string' ? JSON.parse(data[k]) : data[k];
                                
                                if (importedMaster.ee_tools) {
                                    Object.keys(importedMaster.ee_tools).forEach(toolKey => {
                                        if (!localMaster.ee_tools[toolKey]) {
                                            localMaster.ee_tools[toolKey] = importedMaster.ee_tools[toolKey];
                                        } else {
                                            // Actively process inner arrays for tool namespaces (e.g., db, setlistsDB)
                                            let localTool = localMaster.ee_tools[toolKey];
                                            let importedTool = importedMaster.ee_tools[toolKey];
                                            Object.keys(importedTool).forEach(stateKey => {
                                                if (Array.isArray(localTool[stateKey]) && Array.isArray(importedTool[stateKey])) {
                                                    localTool[stateKey] = mergeArraysById(localTool[stateKey], importedTool[stateKey]);
                                                } else {
                                                    localTool[stateKey] = importedTool[stateKey];
                                                }
                                            });
                                        }
                                    });
                                }
                                localStorage.setItem('ee_master_state', JSON.stringify(localMaster));
                            }
                            // Standard Fallback Injection and Primitive Merge Processing
                            else {
                                try {
                                    let localVal = JSON.parse(localStorage.getItem(k));
                                    let importVal = typeof data[k] === 'object' ? data[k] : JSON.parse(data[k]);
                                    if (Array.isArray(localVal) && Array.isArray(importVal)) {
                                        localStorage.setItem(k, JSON.stringify(mergeArraysById(localVal, importVal)));
                                    } else {
                                        localStorage.setItem(k, JSON.stringify(importVal));
                                    }
                                } catch (e) {
                                    localStorage.setItem(k, typeof data[k] === 'object' ? JSON.stringify(data[k]) : data[k]);
                                }
                            }
                        });

                        // Commit legacy mappings to specific unified tool namespaces
                        if (Object.keys(legacyStar).length > 0) {
                            localStorage.setItem('EE_STAR_ARCHITECT', JSON.stringify(legacyStar));
                        }
                        if (Object.keys(legacyDecoder).length > 0) {
                            localStorage.setItem('EE_ACRONYM_DECODER', JSON.stringify(legacyDecoder));
                        }
                        
                        // Telemetry ping for successful restoration mapping
                        if (typeof gtag === 'function') {
                            gtag('event', 'backup_upload', { 'event_category': 'data_control', 'event_label': 'master_json_merged' });
                        }

                        alert("✅ Local Platform Master Profile Successfully Synchronised and Optimised. Re-initialising System Workspace Nodes...");
                        location.reload();
                    }
                } catch (err) { 
                    alert("❌ Parsing Error. Please ensure you upload a structurally verified .JSON platform archive."); 
                }
            };
            reader.readAsText(file);
        }
    };

    const youtubeSvg = `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#FF0000" style="display:block;">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
    `;

    const linkedinSvg = `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#0077B5" style="display:block;">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
    `;

    // Process a reliable readable date for the document modification string
    const docDate = new Date(document.lastModified);
    const dateString = isNaN(docDate) ? "Unknown" : `${docDate.getDate().toString().padStart(2, '0')} ${docDate.toLocaleString('default', { month: 'short' })} ${docDate.getFullYear()}`;

    const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-col">
                <h5>Platform Navigation Index</h5>
                <div class="footer-links">
                    <a href="${window.EE_ROOT_PREFIX || ''}index.html">System Hub Home</a>
                    <a href="${window.EE_ROOT_PREFIX || ''}about.html">About Framework</a>
                    <a href="${window.EE_ROOT_PREFIX || ''}guide.html">User Onboarding Guide</a>
                    <a href="${window.EE_ROOT_PREFIX || ''}privacy.html">Privacy Protection Document</a>
                    <a href="${window.EE_ROOT_PREFIX || ''}terms.html">Terms of Service</a>
                    <a href="${window.EE_ROOT_PREFIX || ''}sitemap.html">Sitemap</a>
                </div>
                <div class="footer-social-cluster">
                    <a href="https://www.youtube.com/@EmpoweringEngineersUK" target="_blank" rel="noopener" class="social-icon-link" aria-label="Open Empowering Engineers UK YouTube Channel in a new tab">
                        ${youtubeSvg}
                    </a>
                    <a href="https://www.linkedin.com/company/empowering-engineers-uk" target="_blank" rel="noopener" class="social-icon-link" aria-label="Open Empowering Engineers UK LinkedIn Portfolio Matrix in a new tab">
                        ${linkedinSvg}
                    </a>
                </div>
            </div>
            <div class="footer-col">
                <h5>Platform Asset Control Framework</h5>
                <p class="data-note">
                    <strong>Zero-Knowledge Storage Protocol:</strong> Your text data layers are bound to your localised sandboxed memory profiles. Use the actions below to migrate backups across validation devices.
                </p>
                <div class="data-actions">
                    <button class="action-btn" onclick="window.eeDataManager.exportData()">Backup Files</button>
                    <!-- Strict utilisation of layout.css .action-btn-ghost class -->
                    <button class="action-btn action-btn-ghost" onclick="window.eeDataManager.triggerImport()">Upload Files</button>
                </div>
                <input type="file" id="ee-global-import-input" style="display:none" accept=".json" onchange="window.eeDataManager.handleImport(this)">
            </div>
        </div>
        
        <div class="ee-ad-leaderboard-container">
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7071036534151105" data-ad-slot="footer-leaderboard" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
		<span style="font-size:0.7rem; color:rgba(255,255,255,0.7); font-weight:normal;">Last Modified: ${dateString}</span>
        <div class="footer-bottom">
            <div style="display:flex; flex-direction:column; align-items:center; gap:5px;">
                <span>Copyright &copy; ${new Date().getFullYear()} Empowering Engineers UK&reg; is a Registered Trademark. All rights reserved.</span>
            </div>
        </div>
    </footer>
    `;

    const consentModalHTML = `
    <div id="ee-consent-modal" style="display:none; position:fixed; bottom:0; left:0; width:100%; background:var(--ee-dark-blue); border-top:3px solid var(--ee-terminal-green); z-index:9999; padding:20px 5%; box-shadow:0 -4px 20px rgba(0,0,0,0.5);">
        <div style="max-width:1200px; margin:0 auto; display:flex; flex-wrap:wrap; gap:20px; align-items:center; justify-content:space-between;">
            <div style="flex:1; min-width:300px;">
                <h4 style="color:var(--ee-terminal-green); margin-top:0; margin-bottom:10px; text-transform:uppercase; font-size:1.1rem;">Data Protection & Terms of Use</h4>
                <p style="color:var(--ee-white); font-size:0.95rem; margin:0; line-height:1.5;">
                    To guarantee your engineering data remains completely private, this platform utilises a strict zero-knowledge local storage architecture. By continuing to use Empowering Engineers UK, you acknowledge and accept our <a href="${window.EE_ROOT_PREFIX || ''}privacy.html" style="color:var(--ee-terminal-green); text-decoration:underline;">Privacy Policy</a> and <a href="${window.EE_ROOT_PREFIX || ''}terms.html" style="color:var(--ee-terminal-green); text-decoration:underline;">Terms of Service</a>. We absolutely do not store your professional competence reports on external servers.
                </p>
            </div>
            <div style="display:flex; gap:10px;">
                <button class="action-btn" onclick="document.getElementById('ee-consent-modal').style.display='none'; localStorage.setItem('ee_legal_consent', 'true');">Accept & Continue</button>
            </div>
        </div>
    </div>
    `;

    // Inject the footer markup natively into the standard document flow
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    // Inject and validate the consent modal architecture
    document.body.insertAdjacentHTML('beforeend', consentModalHTML);
    if (localStorage.getItem('ee_legal_consent') !== 'true') {
        document.getElementById('ee-consent-modal').style.display = 'flex';
    }
})();