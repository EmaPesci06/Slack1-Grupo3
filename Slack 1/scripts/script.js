document.getElementById('loginForm').addEventListener('submit', () => {
    event.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value


    const userValidation = '@'
    const userValidation2 = '.com'

    if (user.includes(userValidation) && user.includes(userValidation2) && password.length >= 8) {
        window.location.href = 'pages/inicio.html'
    } else {
        const divError = document.createElement('div')

        divError.textContent = 'EL usuario no es valido'
        divError.className = 'form-text text-danger'

        const form = document.getElementById('loginForm');
        form.appendChild(divError);
    }

})

