document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        window.open('../G-Home-Great-Page/great-page.html', '_blank');
    });
});

// JavaScript to make all links open in a new tab 
        document.querySelectorAll('a').forEach(function(link) {
            link.setAttribute('target', '_blank');
        });