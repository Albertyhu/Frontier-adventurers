const slides = document.querySelectorAll(".slide");


// select next slide button
const nextSlide = document.querySelector(".btn-next");


// maximum number of slides
let maxSlide = slides.length - 1;
// current slide counter
//let curSlide = 0;
let curSlide = Math.round(maxSlide / 2);
// add event listener and navigation functionality
// loop through slides and set each slides translateX
//slides.forEach((slide, indx) => {
//    slide.style.transform = `translateX(${indx * 100}%)`;
//});

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${(indx - curSlide) * 100}%)`;
});

nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});