

 const department = document.getElementById('management')

// const department = document.querySelector('management')

const execOffice = document.getElementById('execOffice')

const workDev = document.getElementById('workDev')

const violence = document.getElementById('violence')

department.addEventListener('submit', function (e) {
    e.preventDefault()

    selectDepartment(execOffice)
    selectDepartment(workDev)
    selectDepartment(violence)

})


function selectDepartment(input) {
    console.log(input.value)

    function selectDepartment() {
        document.getElementById("myDropdown").classList.toggle("show");
    }




    const inputName = input.name

    if (input.value ==='') {

        showError(input,`${inputName} field is empty`)
    } else {

        showSuccess(input,`${inputName} is entered`)
    }
}


