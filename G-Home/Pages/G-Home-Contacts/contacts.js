document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-button");

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            window.location.href = "../G-Home-Great-Page/great-page.html";
        });
    }

    document.querySelectorAll("a[href]").forEach(link => {
        const href = link.getAttribute("href");

        if (!href) return;

        // External links (http, https, mailto, tel)
        const isExternal =
            /^https?:\/\//i.test(href) ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:");

        // Logo detection
        const isLogo =
            link.querySelector("img") && link.classList.contains("logo");

        // Internal page links
        const isInternalPage =
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