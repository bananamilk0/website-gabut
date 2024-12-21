// Add zoom effect to product images
const productImages = document.querySelectorAll(".product-card img"); // Fixed method name

productImages.forEach((image) => {
    image.addEventListener("click", () => {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s"; // Fixed typo
    });
    image.addEventListener("mouseleave", () => { // Fixed typo
        image.style.transform = "scale(1)";
    });
});

// Add click event to CTA buttons
document.querySelectorAll(".cta").forEach(function (button) { // Fixed method name
    button.addEventListener("click", function (event) { // Fixed syntax
        event.preventDefault(); // Fixed typo
        alert("Terima kasih telah membeli produk ini");
    });
});


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