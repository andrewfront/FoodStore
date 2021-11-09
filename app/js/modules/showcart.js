const showcart = () => {
const cartBtn = document.querySelector('.header__cart-center')
const cartModal = document.querySelector('.cart')
const closeModalBtn = document.querySelector('.cart__close')
let scroll = calcScroll()
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('showcart')
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = `${scroll}px`
})
closeModalBtn.addEventListener('click', (e) => {
    cartModal.classList.remove('showcart')
    document.body.style.overflow = ''
    document.body.style.marginRight = `0px`
})
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('showcart')
        document.body.style.overflow = ''
        document.body.style.marginRight = `0px`
    }
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && cartModal.classList.contains('showcart')) {
        cartModal.classList.remove('showcart')
        document.body.style.overflow = ''
        document.body.style.marginRight = `0px`
    }
})
function calcScroll() {
    let div = document.createElement('div')
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()
    return scrollWidth
}
}
export default showcart