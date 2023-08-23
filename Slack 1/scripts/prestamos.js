document.getElementById('calculateButton').addEventListener('click', function () {
    const cantidadPrestamo = parseFloat(document.getElementById('loanAmount').value);
    const tasaDeInteres = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    const interesMensual = tasaDeInteres / 12;
    const años = loanTerm * 12;

    const pagoMensual = (cantidadPrestamo * interesMensual) / (1 - Math.pow(1 + interesMensual, -años));
    if (pagoMensual !== NaN) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Pago Mensual: $${pagoMensual.toFixed(2)}`;
    }
    else {

        resultElement.textContent = `Debe completar todos los campos`;
    }
});
