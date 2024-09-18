// Get the button
var backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 200px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}