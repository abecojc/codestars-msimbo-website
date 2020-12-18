const regForm = document.getElementById('sign')

const email = document.getElementById('email')

const password = document.getElementById('password')

const password2 = document.getElementById('password2')

// Function to execute when 'Register Now' button is clicked
regForm.addEventListener('submit', function (e) {
    e.preventDefault()

    validEmpty(email)
    validEmpty(password)
    validEmpty(password2)

})

// This function checks if input was entered and calls for showError or showSuccess and displays relative massages
function validEmpty(input) {
    const inputName = input.name
    //compares the input entered with an empty string
    if (input.value ==='') {
        //calls for the showError function and displays a message
        showError(input,`${inputName} field is empty`)
    } else {
        //calls for the showSuccess function and displays a message
        showSuccess(input,`${inputName} is entered`)
    }
    if (password.value===password2.value && password.value==="" && password2.value===""){
        showSuccess(password2,'Match')
    }
}

// displays a message box next to the empty input field
function showError(input, msg){
    // uses styling from tailwind.css file
    input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
}

// displays a message box next to the completed input field
function showSuccess(input,msg) {
    input.nextElementSibling.innerHTML =`<small class="success">${msg}</small>`
}