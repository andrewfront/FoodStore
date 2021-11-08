const sendmail = () => {
    const phoneMaskSelector = document.querySelector(".cart__footer-phone")
    const phoneMask = new Inputmask("+93 (xxx) xxx xx xx", { showMaskOnHover: false })
    phoneMask.definitions.x = phoneMask.definitions['9'];
    delete phoneMask.definitions[9];
    phoneMask.mask(phoneMaskSelector)
    let emailValidate = document.querySelectorAll('input[type="email"]')
    let validateForms = function(selector, rules, successModal, yaGoal) {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function(form) {
                let formData = new FormData(form)
                let xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log('Your phone has been send')
                        }
                    }
                }
                xhr.open("POST", "mail.php", true)
                xhr.send(formData)
                form.reset()
                // fileInput.closest('label').querySelector('span').textContent = 'choose file'
            }
        });
    }
    validateForms('.cart__footer-form', {email: {required: true, email: true}, tel: {required: true, tel: true}}, '.thanks-popup', '.send goal')
    validateForms('.footer__form', {email: {required: true, email: true}}, '.thanks-popup', '.send goal')
    // const fileInput = document.querySelector('input[type="file"]')
    // fileInput.addEventListener('change', (e) => {
    //     let files = e.currentTarget.files
    //     console.log(files)
    //     if (files.length) {
    //         fileInput.closest('label').querySelector('span').textContent = files[0].name
    //     } else {
    //         fileInput.closest('label').querySelector('span').textContent = 'choose file'
    //     }
    //     use if files need name near button
    // })
}
export default sendmail