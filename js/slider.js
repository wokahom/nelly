// SLIDER JAVASCRIPT STARTS HERE //
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}

// Auto-play slider every 10 seconds
setInterval(() => moveSlide(1), 3000);
// SLIDER JAVASCRIPT ENDS HERE //