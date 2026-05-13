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

const searchBar = document.getElementById("searchBar");
const clearButton = document.getElementById("clearSearch");
const searchSection = document.querySelector(".search-section");

const sections = Array.from(
    document.querySelectorAll("section")
).filter(section =>
    section.querySelector("a") &&
    !section.classList.contains("search-section")
);

const noResults = document.createElement("section");

noResults.id = "noResults";

noResults.innerHTML = `
    <h2>No links found</h2>
    <p>Try searching something else.</p>
`;

noResults.style.display = "none";

searchSection.insertAdjacentElement("afterend", noResults);

function normalizeText(str) {
    return (str || "")
        .toLowerCase()
        .replace(/[\s-]/g, "");
}

const counter = document.createElement("div");
counter.id = "linkCounter";
counter.style.margin = "10px 0";
counter.style.fontWeight = "600";

searchSection.appendChild(counter);
const totalLinks = sections.length;
function updateCounter(visible) {
    counter.textContent = `${visible} / ${totalLinks}`;
}
updateCounter(totalLinks);
searchBar.addEventListener("keyup", searchLinks);
function searchLinks() {
    let filter = normalizeText(searchBar.value.trim());
    let visibleCount = 0;
    sections.forEach(section => {
        let paragraph = section.querySelector("p");
        if (!paragraph) return;
        let rawText = paragraph.childNodes[0]?.textContent || "";
        let text = normalizeText(rawText);
        if (filter === "") {
            section.style.display = "flex";
            visibleCount++;
            return;
        }
        if (text.includes(filter)) {
            section.style.display = "flex";
            visibleCount++;
        } else {
            section.style.display = "none";
        }
    });
    noResults.style.display = visibleCount === 0 ? "flex" : "none";
    updateCounter(visibleCount);
}
clearButton.addEventListener("click", () => {
    searchBar.value = "";
    sections.forEach(section => {
        section.style.display = "flex";
    });
    noResults.style.display = "none";
    updateCounter(totalLinks);
    searchBar.focus();
});
