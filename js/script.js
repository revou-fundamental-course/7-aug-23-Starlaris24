function luas() {
    const alas = document.getElementById("inputAlas").value;
    const tinggi = document.getElementById("inputTinggi").value;
    const hasilLuas = document.getElementById("hasilLuas");
    if (alas=="" || tinggi=="") {
        hasilLuas.innerHTML = "Please enter valid number for both value.";
    }
    else {
        hasilLuas.innerHTML = "Luas Segitiga" + "<br>" + "= 1/2 x alas x tinggi" + "<br>" + "= 1/2 " + " x " + alas + " x " + tinggi + "<br>" + "= " + 1/2*alas*tinggi;
    }
}

function keliling() {
    const sisiA = document.getElementById("inputA").value;
    const sisiB = document.getElementById("inputB").value;
    const sisiC = document.getElementById("inputC").value;
    const hasilKeliling = document.getElementById("hasilKeliling");
    if (sisiA=="" || sisiB=="" || sisiC=="") {
        hasilKeliling.innerHTML = "Please enter valid number for both value.";
    }
    else {
        hasilKeliling.innerHTML = "Keliling Segitiga" + "<br>" + "= sisi A + sisi B + sisi C" + "<br>" + "= " + sisiA + " + " + sisiB + " + " + sisiC + "<br>" + "= " + sisiA+sisiB+sisiC;
    }
}