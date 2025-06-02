document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");
    if (menuToggle && navUl) {
        menuToggle.addEventListener("click", () => {
            navUl.classList.toggle("active");
        });
    }

    // Tab switching
    const tabLinks = document.getElementsByClassName("tab-links");
    const tabContents = document.getElementsByClassName("tab-content");

    function openTab(tabname) {
        for (let tabLink of tabLinks) {
            tabLink.classList.remove("active-link");
            tabLink.setAttribute("aria-selected", "false");
        }
        for (let tabContent of tabContents) {
            tabContent.classList.remove("active-tab");
            tabContent.setAttribute("aria-hidden", "true");
        }
        event.currentTarget.classList.add("active-link");
        event.currentTarget.setAttribute("aria-selected", "true");
        document.getElementById(tabname).classList.add("active-tab");
        document.getElementById(tabname).setAttribute("aria-hidden", "false");
    }

    for (let tabLink of tabLinks) {
        tabLink.addEventListener("click", function (event) {
            openTab(this.dataset.tab);
        });
    }
});