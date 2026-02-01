// EMPOWERING ENGINEERS UK - DYNAMIC FOOTER
// INJECTS: Standard Footer + Feedback Script

(function() {
    // 1. Calculate Current Year
    const year = new Date().getFullYear();

    // 2. Build Footer HTML
    const footerHTML = `
    <footer>
        <p>&copy; ${year} Empowering Engineers UK. All rights reserved.</p>
        <p>
            <a href="about.html">About Us</a> | 
            <a href="contact.html">Contact Us</a> | 
            <a href="terms.html">Terms of Use</a> | 
            <a href="privacy.html">Privacy Policy</a>
        </p>
    </footer>
    `;

    // 3. Inject Footer at the bottom of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // 4. Load footer_feedback.js dynamically
    // We create the script element programmatically to ensure it executes correctly
    const script = document.createElement('script');
    script.src = 'footer_feedback.js';
    document.body.appendChild(script);

})();