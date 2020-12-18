
//
// const drop = document.getElementById("dropdown")
// console.log(drop)
// const items = document.getElementById("menu")
//
// const materials = document.getElementById("resources")
//
// selectMenu(drop)
// selectMenu(items)
// selectMenu(materials)
//
// function selectMenu(select){
//     console.log(select)
//     if(select){
//
//     }
// }

//----------------------------------------------
//
//  const department = document.getElementById('management')
//
// // const department = document.querySelector('management')
//
// const execOffice = document.getElementById('execOffice')
//
// const workDev = document.getElementById('workDev')
//
// const violence = document.getElementById('violence')
//
// department.addEventListener('submit', function (e) {
//     e.preventDefault()
//
//     selectDepartment(execOffice)
//     selectDepartment(workDev)
//     selectDepartment(violence)
//
// })
//
//
// function selectDepartment(select) {
//     console.log(select.value)
//
//     function selectDepartment() {
//         document.getElementById("myDropdown").classList.toggle("show");
//     }
//
//     if (select.value ==='') {
//
//         Error(select,`${selectName} field is empty`)
//     } else {
//
//         WellDone(select,`${selectName} is entered`)
//     }
// }


// //-=============================================

// Declaring variables
const contactForm = document.getElementById('entry')

const firstname = document.getElementById('first')

const lastname = document.getElementById('last')

const email = document.getElementById('email')

const comment = document.getElementById('message')

// Function to execute when 'Register Now' button is clicked
contactForm.addEventListener('submit', function (e) {
    e.preventDefault()

    validateEmpty(firstname)
    validateEmpty(lastname)
    validateEmpty(email)
    validateEmpty(comment)

})

// This function checks if input was entered and calls for showError or showSuccess and displays relative massages
function validateEmpty(input) {
    console.log(input.value)
    // declares and assign the name value to a new variable
    const inputName = input.name
    //compares the input entered with an empty string
    if (input.value ==='') {
        //calls for the showError function and displays a message
        showError(input,`${inputName} field is empty`)
    } else {
        //calls for the showSuccess function and displays a message
        showSuccess(input,`${inputName} is entered`)
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

// function ValidateEmail(email)
// {
//     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
//     {
//         return (true)
//     }
//     alert("Not a valid email address!")
//     return (false)}
