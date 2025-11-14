// JavaScript to make all links open in a new tab 
        document.querySelectorAll('a').forEach(function(link) {
            link.setAttribute('target', '_blank');
        });

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        // Open the great-page.html in a new tab with the correct relative path
        window.open('great-page.html', '_blank');
    });
});
