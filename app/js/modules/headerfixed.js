const headerfixed = () => {
window.addEventListener('scroll', () => {
    const navBar = document.querySelector('#header')
    const headerLine = document.querySelector('.header__line')
    const scrollHeight = window.pageYOffset
    if (scrollHeight > 500) {
        navBar.classList.add('fixed')
        headerLine.style.marginBottom = `74px`
    } else {
        navBar.classList.remove('fixed')
        headerLine.style.marginBottom = `0px`
    }
})
const menuLinks = document.querySelectorAll('[data-scroll]')
if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
        link.addEventListener('click', menuLinkClick)
    })
}
function menuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
        const goToBlock = document.querySelector(menuLink.dataset.scroll)
        const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
        window.scrollTo({
            top: goToBlockValue,
            behavior: 'smooth'
        })
        e.preventDefault()
    }
}
const headerLogo = document.querySelectorAll('.header__logo')
headerLogo.forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: (0, 0),
            behavior: 'smooth'
        })
    })
})
}
export default headerfixed