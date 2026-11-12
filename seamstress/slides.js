const slides = document.querySelectorAll('.slides')


slides.forEach(eachSlide => {
    const slidesImages = eachSlide.querySelectorAll('img')
    const numberOfSlidesImages = slidesImages.length
    let currentSlideImageIndex = 3
    eachSlide.addEventListener('click', () => {
        slidesImages[currentSlideImageIndex].classList.add('visible-slide')
        currentSlideImageIndex = (currentSlideImageIndex - 1) % numberOfSlidesImages
        if (currentSlideImageIndex < 0) {
            currentSlideImageIndex = 3;
            slidesImages.forEach((slide) => slide.classList.remove('visible-slide'))
        }
    })
})
