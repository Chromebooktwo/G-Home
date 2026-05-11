document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-button");

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            window.location.href = "/G-Home/Pages/G-Home-Great-Page/great-page.html";
        });
    }

    document.querySelectorAll("a[href]").forEach(link => {
        const href = link.getAttribute("href");

        // External links
        const isExternal = /^https?:\/\//i.test(href);

        // Logo
        const isLogo =
            link.querySelector("img") && link.classList.contains("logo");

        // Stack Game page
        const isStackGame =
            href.includes("/G-Home/Games/Stack-Game/stack-game.html");

        if (isExternal || isLogo || isStackGame) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        } else {
            link.removeAttribute("target");
        }
    });
});
