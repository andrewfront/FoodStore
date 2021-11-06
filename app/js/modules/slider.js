import KeenSlider from 'keen-slider'
const slider = () => {
    var headerSlider = document.querySelector('.reviews__slider')
    var interval = 0

    function autoplay(run) {
        clearInterval(interval)
        interval = setInterval(() => {
            if (run && reviewsSlider) {
                reviewsSlider.next()
            }
        }, 3000)
    }
    var reviewsSlider = new KeenSlider(headerSlider, {
        loop: true,
        slidesPerView: 4,
        spacing: 20,
        breakpoints: {
            '(min-width: 280px)': {
                slidesPerView: 1
            },
            '(min-width: 575px)': {
                slidesPerView: 2
            },
            '(min-width: 896px)': {
                slidesPerView: 3
            },
            '(min-width: 1240px)': {
                slidesPerView: 4
            },
        },
        dragStart: () => {
            autoplay(false)
        },
        dragEnd: () => {
            autoplay(true)
        },
    })
    headerSlider.addEventListener("mouseover", () => {
        autoplay(false)
    })
    headerSlider.addEventListener("mouseout", () => {
        autoplay(true)
    })
    autoplay(true)
}
export default slider