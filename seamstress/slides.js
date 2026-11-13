const slides = document.querySelectorAll('.slides');



slides.forEach(eachSlide => {
    const slidesImages = eachSlide.querySelectorAll('img')
    const numberOfSlidesImages = slidesImages.length
    let currentSlideImageIndex = 3

    // Intro animation for slides
    const intro_tl = gsap.timeline();
    intro_tl.set(slidesImages, { rotate: () => 100 * Math.random() - 50 }).to(slidesImages, { y: 0, stagger: 0.15, ease: 'back.out(1)' }).to(slidesImages, { rotate: () => 30 * Math.random() - 15 })


    eachSlide.addEventListener('click', () => {
        const click_tl = gsap.timeline();
        const current_image = slidesImages[currentSlideImageIndex]
        const comparison_index = Math.round(Math.random())

        click_tl.to(current_image, {
            xPercent: () => comparison_index ? 120 : -120, ease: 'power3.inOut',
            rotate: () => comparison_index ? 15 * Math.random() : -15 * Math.random(),
            onComplete: () => {
                current_image.classList.add('visible-slide');
                currentSlideImageIndex = (currentSlideImageIndex - 1) % numberOfSlidesImages
                if (currentSlideImageIndex < 0) {
                    currentSlideImageIndex = 3;
                    slidesImages.forEach((slide) => slide.classList.remove('visible-slide'))
                }
            }
        })
            .to(current_image, { xPercent: 0, ease: 'power3.out' })


    })
})
