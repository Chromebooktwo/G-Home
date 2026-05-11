document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-button");

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            window.location.href = "../G-Home-Great-Page/great-page.html";
        });
    }

    document.querySelectorAll("a[href]").forEach(link => {
        const href = link.getAttribute("href");

        const isExternal = /^https?:\/\//i.test(href);

        if (isExternal) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
});
