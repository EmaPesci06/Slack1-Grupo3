const convertirValor = (moneda, divisa) => {

    let resultado = ""

    if (divisa === "DOLAR BLUE" && moneda >= 0) {
        let newValue = moneda / 725
        return resultado = newValue.toFixed(2)
    }
    else if (divisa === "DOLAR" && moneda >= 0) {
        let newValue = moneda / 365.5
        return resultado = newValue.toFixed(2)
    }
    else if (divisa === "EUR" && moneda >= 0) {
        let newValue = moneda / 799
        return resultado = newValue.toFixed(2)
    }
    else if (divisa === "RENMIBINI" && moneda >= 0) {
        let newValue = moneda / 48.69
        return resultado = newValue.toFixed(2)
    }
    else if (divisa === "RUBLO" && moneda >= 0) {
        let newValue = moneda / 3.68
        return resultado = newValue.toFixed(2)
    }
    else {
        return resultado = "La conversion no se pudo realizar"
    }
}


document.getElementById('result').addEventListener('click', function () {
    const inputValor = parseFloat(document.getElementById('moneda').value);
    const selectValue = document.getElementById("currency").value

    const resultado = convertirValor(inputValor, selectValue);

    if (isNaN(resultado)) {
        document.getElementById('resultBox').innerHTML = `${resultado}`;
    }
    else {
        document.getElementById('resultBox').innerHTML = `La cantidad es: $ ${resultado}`;
    }
});
