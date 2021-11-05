const burger = () => {
const burgerBtn = document.querySelector('.hamburger')
const navBurger = document.querySelector('.nav')
const navBurgerBtn = document.querySelectorAll('.header__nav-item')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open')
    if (burgerBtn.classList.contains('open')) {
        navBurger.classList.add('active')
        document.body.style.overflow = 'hidden'
    } else {
        navBurger.classList.remove('active')
        document.body.style.overflow = ' '
    }
})
navBurgerBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        navBurger.classList.remove('active')
        burgerBtn.classList.remove('open')
    })
})
}
export default burger