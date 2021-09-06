const popularSlider = document.querySelector('.popular__slider')
const sliderBtns = popularSlider.querySelectorAll('.slider__button')

sliderBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const slideActive = popularSlider.querySelector('.slide_active')
    const slideInactive = popularSlider.querySelector('.slide:not(.slide_active)')

    slideActive.classList.remove('slide_active')
    slideInactive.classList.add('slide_active')
  })
})