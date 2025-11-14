document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        // Open the great-page.html in a new tab with the correct relative path
        window.open('../Pages/G-Home-Great-Page/great-page.html', '_blank');
    });
});
