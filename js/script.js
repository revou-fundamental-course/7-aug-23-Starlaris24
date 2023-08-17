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


document.getElementById(totalArea).addEventListener('click',function displayChange() {
    console.log(this.value)
    if (button:click)
}

function inputValidation(input) {
    const intergerRegex = /^-?\d+$/;
    return intergerRegex.test(input)
}

function totalArea() {
    let alas = document.getElementById("alas-input").value;
    let tinggi = document.getElementById("tinggi-input").value;
    let hasil = 1/2 * parseInt (alas) * parseInt (tinggi)
    console.log("totalArea");
}
