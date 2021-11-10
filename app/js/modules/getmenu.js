const getmenu = () => {
const cartItself = document.querySelector('.cart')
const cardCenter = document.querySelector('.menu__inner')
let cartAmount = document.querySelector('.amount')
let cartTotal = document.querySelector('.total')
let headerSum = document.querySelector('.headersum')
const cartContent = document.querySelector('.cart__content')
const cartOverlay = document.querySelector('.cart__overlay')
const clearCart = document.querySelector('.cart__footer-reset')
const headerCartBtn = document.querySelector('.header__cart-center')
const cartText = document.querySelector('.cart__text')
let cartCounter = document.querySelector('.header__cart-count')
let cart = []
let buttonsDOM = []
let productArray = []
class Products {
async getProducts() {
    try {
        let result = await fetch('products.json')
        let data = await result.json()
        let products = data.items
        products = products.map(item => {
            const {id} = item.sys
            const {category, title, price} = item.fields
            const image = item.fields.image.fields.file.url
            return {category, title, price, id, image}
        })
        return products
    } catch (error) {
        console.log(error);
    }
}
}
class UI {
    displayProducts(products) {
        let result = ''
        products.forEach(product => {
            result += `
            <div class="menu__item ${product.category}">
            <img class="menu__img" data-src=${product.image} src="images/plug.png"  alt="menu">
            <div class="menu__content">
                <div class="menu__name">${product.title}</div>
                <div class="menu__price">$${product.price}</div>
            </div>
            <button class="menu__addtocart" data-id=${product.id}>Add To Cart</button>
        </div>
            `
        })
        cardCenter.innerHTML = result
    }
    filterProducts() {
        const menuBtns = document.querySelectorAll('.menu__btn')
        const menuItems = [...document.querySelectorAll('.menu__item')]
        menuBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let btnCategory = e.currentTarget.dataset.id
                menuItems.forEach(elem => {
                    elem.classList.remove('.hideItem')
                    elem.classList.add('showItem', 'fadeIn')
                    if (!elem.classList.contains(btnCategory) && btnCategory!== 'all') {
                        elem.classList.add('hideItem')
                        elem.classList.remove('showItem', 'fadeIn')
                    }
                })
            })
        })
    }
    lazyLoadImages() {
        const lazyImages = document.querySelectorAll('img[data-src]')
        const windowHeight = document.documentElement.clientHeight
        let lazyImagesPositions = []
        if (lazyImages.length > 0) {
            lazyImages.forEach(img => {
                if (img.dataset.src) {
                    lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)
                    lazyScrollCheck()
                }
            })
        }
        window.addEventListener('scroll', lazyScroll)
        function lazyScroll() {
            if (document.querySelectorAll('img[data-src]').length > 0) {
                lazyScrollCheck()
            }
        }

        function lazyScrollCheck() {
            let imgIndex = lazyImagesPositions.findIndex(
                item => pageYOffset > item - windowHeight
            )
            if (imgIndex >= 0) {
                if (lazyImages[imgIndex].dataset.src) {
                    lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src
                    lazyImages[imgIndex].removeAttribute('data-src')
                }
                delete lazyImagesPositions[imgIndex]
            }
        }
    }
    getBagButtons() {
        const cardBtns = [...document.querySelectorAll('.menu__addtocart')]
        buttonsDOM = cardBtns
        cardBtns.forEach(button => {
            let id = button.dataset.id
            let inCart = cart.find(item => item.id === id)
            if (inCart) {
                button.innerText = 'In Cart'
                button.disabled = true
                button.style.backgroundColor = '#ff715b63'
            }
            button.addEventListener('click', (e) => {
                e.target.innerText = 'In Cart'
                button.disabled = true
                button.style.backgroundColor = '#ff715b63'
                //get product from products
                let cartItem = {...Storage.getProduct(id), amount: 1}
                cart = [...cart, cartItem]
                Storage.saveCart(cart)
                this.setCartValues(cart)
                this.addCartItem(cartItem)
                //add product to the cart
                //save cart in local storage
                //set cart values
                //display cart item
                //show the cart
            })
        })
    }
    setCartValues(cart) {
        let tempTotal = 0
        let itemsTotal = 0
        cart.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
        headerSum.innerText = parseFloat(tempTotal.toFixed(2))
        cartAmount.innerText = itemsTotal
        cartCounter.innerText = itemsTotal
        if (cartCounter.innerText > 0) {
            cartText.style.display = 'none'
            clearCart.disabled = false
            clearCart.style.backgroundColor = '#000000'
        } else {
            cartText.style.display = 'block'
            clearCart.disabled = true
            clearCart.style.backgroundColor = '#0000004a'
        }
    }
    addCartItem(item) {
cartContent.innerHTML += `
<div class="cart__item">
<img src=${item.image} alt="cart" class="cart__image">
<div class="cart__info">
    <div class="cart__product-title">${item.title}</div>
    <div class="cart__product-price">${item.price}$</div>
    <div class="cart__product-sum">
        <img src="images/cart/decrease.svg" alt="cart" class="cart__product-decrease" data-id=${item.id}>
        <div class="cart__product-number">1</div>
        <img src="images/cart/increase.svg" alt="cart" class="cart__product-increase" data-id=${item.id}>
    </div>
    <div class="cart__product-remove" data-id=${item.id}>remove</div>
</div>
</div>
`
    }
    setupAPP() {
        cart = Storage.getCart()
        this.setCartValues(cart)
        this.populateCart(cart)

    }
    populateCart() {
        cart.forEach(item => this.addCartItem(item))
    }
    animateCart() {
        const menuItem = document.querySelectorAll('.menu__item')
        menuItem.forEach(item => {
            let getButton = item.querySelector('.menu__addtocart')
            getButton.addEventListener('click', (e) => {
                e.preventDefault()
                let productImage = item.querySelector(".menu__img")
                let productImageFly = productImage.cloneNode(true)
                let imageFlyWidth = productImage.offsetWidth
                let imageFlyHeight = productImage.offsetHeight
                let imageFlyTop = productImage.getBoundingClientRect().top
                let imageFlyLeft = productImage.getBoundingClientRect().left
                productImageFly.setAttribute('class', 'flyImage')
                productImageFly.style.cssText = `
                width: ${imageFlyWidth}px;
                height: ${imageFlyHeight}px;
                left: ${imageFlyLeft}px;
                top: ${imageFlyTop}px;
                `
                document.body.append(productImageFly)
                const cartFlyLeft = cartCounter.getBoundingClientRect().left
                const cartFlyTop = cartCounter.getBoundingClientRect().top
                productImageFly.style.cssText = `
                left: ${cartFlyLeft}px;
                top: ${cartFlyTop}px;
                width: 0px;
                height: 0px;
                opacity: 0;
                `
                productImageFly.addEventListener('transitionend', () => {
                    if (getButton.disabled = true) {
                        productImageFly.remove()
                    }
                })
            })
        })

    }
    removeItem(id) {
        cart = cart.filter(item => item.id !==id)
        this.setCartValues(cart)
        Storage.saveCart(cart)
        let button = this.getSingleButton(id)
        button.disabled = false
        button.innerText = 'Add to cart'
        button.style.backgroundColor = '#ff715b'
        document.body.style.overflow = ''
    }
    clearCart() {
        let cartItems = cart.map(item => item.id)
        cartItems.forEach(id => this.removeItem(id))
        while(cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }
    }
    getSingleButton(id) {
        return buttonsDOM.find(button => button.dataset.id === id)
        }
    cartLogic() {
        clearCart.addEventListener('click', (e) => {
            e.preventDefault()
            this.clearCart()
            cartItself.classList.remove('showcart')
        })
        cartContent.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart__product-increase')) {
                let addAmount = e.target
                let id = addAmount.dataset.id
                let tempItem = cart.find(item => item.id === id)
                tempItem.amount = tempItem.amount + 1
                Storage.saveCart(cart)
                this.setCartValues(cart)
                addAmount.previousElementSibling.innerText = tempItem.amount
            } else if (e.target.classList.contains('cart__product-decrease')) {
                let lowerAmount = e.target
                let id = lowerAmount.dataset.id
                let tempItem = cart.find(item => item.id === id)
                tempItem.amount = tempItem.amount - 1
                lowerAmount.nextElementSibling.innerText = tempItem.amount
                if (tempItem.amount > 0) {
                    Storage.saveCart(cart)
                    this.setCartValues(cart)
                    lowerAmount.nextElementSibling.innerText = tempItem.amount
                } else {
                    cartContent.removeChild(lowerAmount.parentElement.parentElement.parentElement)
                    this.removeItem(id)
                }
            }
            if (e.target.classList.contains('cart__product-remove')) {
                let removeItem = e.target
                let id = removeItem.dataset.id
                cartContent.removeChild(removeItem.parentElement.parentElement)
                this.removeItem(id)
                if (cartContent.children.length <= 0) {
                    cartItself.classList.remove('showcart')
                }
            }
        })
    }
}
class Storage {
static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products))
}
static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'))
    return products.find(product => product.id === id)
}
static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
static getCart() {
    return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}
}
const ui = new UI()
const products = new Products()
ui.setupAPP()
products.getProducts().then(products => {
    ui.displayProducts(products)
    ui.animateCart(products)
    ui.filterProducts(products)
    ui.lazyLoadImages(products)
    Storage.saveProducts(products)

})
.then(() => {
    ui.getBagButtons()
    ui.cartLogic()
})
}
export default getmenu