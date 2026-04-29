document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-button");

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            window.location.href = "great-page.html";
        });
    }

    document.querySelectorAll("a[href]").forEach(link => {
        const href = link.getAttribute("href");

        // External links = http(s)
        const isExternal = /^https?:\/\//i.test(href);

        // Logo detection (no HTML change needed)
        const isLogo =
            link.querySelector("img") && link.classList.contains("logo");

        // Optional: treat only true site pages as internal
        const isInternalPage =
            href &&
            !href.startsWith("#") &&
            !isExternal;

        if (isExternal || isLogo) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        } else if (isInternalPage) {
            link.removeAttribute("target");
        }
    });
});