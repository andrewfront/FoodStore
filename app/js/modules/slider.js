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
    var goodsSlider = new KeenSlider("#goodsslider", {
        controls: false,
        vertical: true,
        spacing: 20,
        slidesPerView: 3,
        created: function (instance) {
            document
                .getElementById("arrow-left")
                .addEventListener("click", function () {
                    instance.prev()
                })

            document
                .getElementById("arrow-right")
                .addEventListener("click", function () {
                    instance.next()
                })
            updateClasses(instance)
        },
        slideChanged(instance) {
            updateClasses(instance)
        },
    })

    function updateClasses(instance) {
        var slide = instance.details().relativeSlide
        var arrowLeft = document.querySelector(".goods__arrow-left--first")
        var arrowRight = document.querySelector(".goods__arrow-right--first")
        slide === 0 ?
            arrowLeft.classList.add("arrow--disabled") :
            arrowLeft.classList.remove("arrow--disabled")
        slide === instance.details().size - 1 ?
            arrowRight.classList.add("arrow--disabled") :
            arrowRight.classList.remove("arrow--disabled")
    }
    var goodsSliderSecond = new KeenSlider("#goodsslider-second", {
        controls: false,
        vertical: true,
        spacing: 20,
        slidesPerView: 3,
        created: function (instance) {
            document
                .getElementById("prev")
                .addEventListener("click", function () {
                    instance.prev()
                })

            document
                .getElementById("next")
                .addEventListener("click", function () {
                    instance.next()
                })
            updateClasses(instance)
        },
        slideChanged(instance) {
            updateClasses(instance)
        },
    })

    function updateClasses(instance) {
        var slide = instance.details().relativeSlide
        var arrowLeft = document.querySelector(".goods__arrow-left--second")
        var arrowRight = document.querySelector(".goods__arrow-right--second")
        slide === 0 ?
            arrowLeft.classList.add("arrow--disabled") :
            arrowLeft.classList.remove("arrow--disabled")
        slide === instance.details().size - 1 ?
            arrowRight.classList.add("arrow--disabled") :
            arrowRight.classList.remove("arrow--disabled")
    }
    var goodsSliderThird = new KeenSlider("#goodsslider-third", {
        controls: false,
        vertical: true,
        spacing: 20,
        slidesPerView: 3,
        created: function (instance) {
            document
                .getElementById("prev-arrow")
                .addEventListener("click", function () {
                    instance.prev()
                })

            document
                .getElementById("next-arrow")
                .addEventListener("click", function () {
                    instance.next()
                })
            updateClasses(instance)
        },
        slideChanged(instance) {
            updateClasses(instance)
        },
    })

    function updateClasses(instance) {
        var slide = instance.details().relativeSlide
        var arrowLeft = document.getElementById("arrow-left")
        var arrowRight = document.getElementById("arrow-right")
        slide === 0 ?
            arrowLeft.classList.add("arrow--disabled") :
            arrowLeft.classList.remove("arrow--disabled")
        slide === instance.details().size - 1 ?
            arrowRight.classList.add("arrow--disabled") :
            arrowRight.classList.remove("arrow--disabled")
    }
}
export default slider