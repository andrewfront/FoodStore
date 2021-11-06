const tabs = () => {
const tabs = document.querySelectorAll('.products__btn__item')
const tabsContent = document.querySelectorAll('.products__tabcontent')
const tabsParent = document.querySelector('.products__tabitems')
function hideTabsContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide')
        item.classList.remove('show', 'entrance')
    })
    tabs.forEach(item => {
        item.classList.remove('products__btn__item-active')
    })
}
function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'entrance')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('products__btn__item-active')
}
hideTabsContent()
showTabsContent()
tabsParent.addEventListener('click', (e) => {
    const target = e.target
    if (target && target.classList.contains('products__btn__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabsContent()
                showTabsContent(i)
            }
        })
    }
})
}
export default tabs