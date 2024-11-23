// JavaScript for the image carousel (background slider)
let carouselIndex = 0;
const carouselImages = document.querySelectorAll('.carousel img');
const totalImages = carouselImages.length;

function showNextImage() {
    carouselIndex = (carouselIndex + 1) % totalImages;
    const newOffset = -carouselIndex * 100 + '%';
    document.querySelector('.carousel').style.transform = `translateX(${newOffset})`;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

let currentIndex = 0;
const slides = document.querySelectorAll('.slideshow');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === currentIndex ? 1 : 0; // Show current slide
    });
    currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
}

// Show the first slide immediately
showSlides();
// Change slide every 3 seconds
setInterval(showSlides, 3000);