// Oprindelig kode hentet fra https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Egne tilføjelser herfra

var slideshowRunning = 1;

// Skift billede med jævne mellemrum hvis slideshowet kører
setInterval(function () {
    if (slideshowRunning === 1) {
        slideIndex++;
        showSlides(slideIndex);
    }
}, 4000);

// Stop slideshowet hvis musen føres ind over det
document.getElementsByClassName("slideshow-container")[0].addEventListener("mouseenter", function () {
    slideshowRunning = 0;
});

// Start slideshowet når musen føres ud igen
document.getElementsByClassName("slideshow-container")[0].addEventListener("mouseleave", function () {
    slideshowRunning = 1;
});