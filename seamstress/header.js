

const carousels = document.querySelectorAll('header h1, header h2')



gsap.to(carousels, { opacity: 1,  stagger: 0.5, ease: 'power2.in', })

carousels.forEach(carousel => {
    for (let i = 0; i < 20; i++) {
        carousel.appendChild(carousel.querySelector('span').cloneNode(true))
    }
    gsap.to(carousel, { x: -(carousel.querySelector('span').clientWidth), ease: 'none', duration: 4, repeat: -1 })
})
