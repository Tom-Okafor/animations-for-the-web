const slides = document.querySelectorAll('.slides');



slides.forEach(eachSlide => {
    const slidesImages = eachSlide.querySelectorAll('img')
    const numberOfSlidesImages = slidesImages.length
    let currentSlideImageIndex = 3


    imagesLoaded(slidesImages, function () {
        // Intro animation for slides
        const intro_tl = gsap.timeline();
        intro_tl.set(slidesImages, { rotate: () => 100 * Math.random() - 50 }).to(slidesImages, { y: 0, stagger: 0.15, ease: 'back.out(1)' }).to(slidesImages, { rotate: () => 30 * Math.random() - 15 })

    })


    eachSlide.addEventListener('click', () => {
        const click_tl = gsap.timeline();
        const comparison_index = Math.round(Math.random())

        // const current_image = slidesImages[currentSlideImageIndex]


        click_tl.to(slidesImages[currentSlideImageIndex], {
            xPercent: () => comparison_index ? 120 : -120, ease: 'power3.inOut',
            rotate: () => comparison_index ? 15 * Math.random() : -15 * Math.random(),
            scale: 1.15,
            onComplete: () => {
                slidesImages[currentSlideImageIndex].classList.add('visible-slide');
                currentSlideImageIndex = currentSlideImageIndex ? (currentSlideImageIndex - 1) % numberOfSlidesImages : 3
                if (currentSlideImageIndex == 3) {
                    slidesImages.forEach((slide) => slide.classList.remove('visible-slide'))
                }
            }
        })
            .to(slidesImages[currentSlideImageIndex], { xPercent: 0, ease: 'power3.out', scale: 1 })


    })
})
