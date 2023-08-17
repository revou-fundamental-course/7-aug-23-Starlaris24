const inputField = document.getElementById("tinggi-input")
const button = document.getElementById("totalArea")

inputField.addEventListener('input', function() {
    const inputValue = inputField.value

    if (inputValidation(inputValue)) {
        console.log("success")
        button.disabled = false

    } else {
        console.log("fail")
        button.disabled = true
    }
})
