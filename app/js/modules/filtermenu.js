const filtermenu = () => {
    function filterProducts() {
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
    filterProducts()
}
export default filtermenu