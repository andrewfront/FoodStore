import fixBlock from "./fixBlock"

const showcart = () => {
const headerFixed = document.querySelector('.header')
const cartBtn = document.querySelector('.header__cart-center')
const cartModal = document.querySelector('.cart')
const closeModalBtn = document.querySelector('.cart__close')
let paddingOffset = window.innerWidth - document.body.offsetWidth + `px`
let calcScroll = paddingOffset
let fixBlocks = document.querySelectorAll('.fix-block')
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('showcart')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = calcScroll
    if (headerFixed.classList.contains('fixed')) {
        fixBlocks.forEach(el => {
            el.style.paddingRight = calcScroll
        })
    }
})
closeModalBtn.addEventListener('click', (e) => {
    cartModal.classList.remove('showcart')
    document.body.style.overflow = ''
    fixBlocks.forEach(el => {
        el.style.paddingRight = '0'
    })
    document.body.style.paddingRight = '0'
})
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('showcart')
        document.body.style.overflow = ''
        fixBlocks.forEach(el => {
            el.style.paddingRight = '0'
        })
        document.body.style.paddingRight = '0'
    }
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && cartModal.classList.contains('showcart')) {
        cartModal.classList.remove('showcart')
        document.body.style.overflow = ''
        fixBlocks.forEach(el => {
            el.style.paddingRight = '0'
        })
        document.body.style.paddingRight = '0'
    }
})
}
export default showcart