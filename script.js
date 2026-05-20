const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const messageBtn = document.getElementById("messageBtn");
const year = document.getElementById("year");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("show");
});

messageBtn.addEventListener("click", () => {
    window.location.href = "mailto:shekhar@example.com";
});

year.textContent = new Date().getFullYear();
