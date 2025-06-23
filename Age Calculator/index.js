const inpDate = document.getElementById('date-input')
let today = new Date()


function calc(){
    let dob = new Date(inpDate.value);
    let dobYear = dob.getFullYear()
    let currentYear = today.getFullYear()

    let age = currentYear - dobYear

    document.getElementById('result').innerText = `You are ${age} years old`
}

