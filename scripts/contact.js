const bindContactForm = () => {
    const form = document.querySelector('.contact-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(isValidInput()) {
            submitForm()
        } else {
            displayError()
        }
    })
}

const isValidInput = () => {
    const form = document.querySelector('.contact-form')
    const name = document.getElementById('contact-input-name').value
    const email = document.getElementById('contact-input-email').value
    const subject = document.getElementById('contact-input-subject').value
    const message = document.getElementById('contact-input-message').value
    const regex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')

    return name !== '' && email !== '' && subject !== '' && message !== '' && regex.test(email)
}

const submitForm = () => {
    document.querySelector('.contact-form').submit()
}

const displayError = () => {
    const email = document.getElementById('contact-input-email')
    email.setCustomValidity("Please Enter A Valid Email")
    email.addEventListener('change', (e) => {
        email.setCustomValidity("")
    },{ once: true })
}


export { bindContactForm }