// Display an alert after 3 seconds
setTimeout(function() {
    alert("Selamat datang di situs gabut!");
}, 1000);

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", () => { // Fixed syntax
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});