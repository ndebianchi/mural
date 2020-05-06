const carouselCards = document.querySelectorAll('.carousel .card')

const prevBtn = document.querySelector('.previous-wrapper');
const nextBtn = document.querySelector('.next-wrapper');

let counter = 0;
// const size = carouselCards[0].clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter < carouselCards.length - 1) {
        counter++;
        for (let i = 0; i < carouselCards.length; i++) {
            carouselCards[i].style.transition = "transform 0.4s ease-in-out";
            carouselCards[i].style.transform = `translateX(${-103 * counter}%)`;
        }
    }
    
});

prevBtn.addEventListener('click', () => {
    if (counter) {
        counter--;
        for (let i = 0; i < carouselCards.length; i++) {
            carouselCards[i].style.transition = "transform 0.4s ease-in-out";
            carouselCards[i].style.transform = `translateX(${-103 * counter}%)`;
        }
    } 
});