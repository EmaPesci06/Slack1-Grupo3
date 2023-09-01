document.getElementById('calculateButton').addEventListener('click', function () {
    const cantidadPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
    const tasaDeInteres = parseFloat(document.getElementById('tasa').value) / 100;
    const loanTerm = parseFloat(document.getElementById('años').value);

    const interesMensual = tasaDeInteres / 12;
    const años = loanTerm * 12;

    const pagoMensual = (cantidadPrestamo * interesMensual) / (1 - Math.pow(1 + interesMensual, -años));

    const resultElement = document.getElementById('result');

    if (isNaN(pagoMensual)) {
        resultElement.innerHTML = `Complete todos los campos`
    }
    else {
        resultElement.innerHTML = `Pago Mensual: $${pagoMensual.toFixed(2)}`;
    }
});
