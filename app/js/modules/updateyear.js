const updateYear = () => {
const currentYear = document.querySelectorAll('.year')
currentYear.forEach(elem => {
    elem.textContent = new Date().getFullYear()
})
}
export default updateYear