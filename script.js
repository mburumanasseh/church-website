// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Scroll Fade-in Animation
const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFadeIn);
window.addEventListener("load", checkFadeIn);
