let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'prev', 'next');
    }
    slides[slideIndex - 1].classList.add('active');
    if (slideIndex > 1) {
        slides[slideIndex - 2].classList.add('prev');
    } else {
        slides[slides.length - 1].classList.add('prev');
    }
    if (slideIndex < slides.length) {
        slides[slideIndex].classList.add('next');
    } else {
        slides[0].classList.add('next');
    }
}