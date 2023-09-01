document.getElementById('formTransfer').addEventListener('submit', (event) => {
    event.preventDefault();

    console.log("aaaa");
    // Obtener los valores de los campos de entrada
    const choice = document.getElementById('choices').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    // Validación de datos
    const regex = /^[A-Za-z\s]+$/;

    if (choice && date && !isNaN(amount) && amount >= 0 && regex.test(description)) {
        // Crear un nuevo elemento div y elementos hijos
        const newDiv = document.createElement('div');
        newDiv.classList.add('payment-item');

        const newh4 = document.createElement('h4');
        newh4.classList.add('paymentTitle');
        newh4.textContent = choice;

        const pDate = document.createElement('p');
        pDate.classList.add('paragraphDate');
        pDate.textContent = `Fecha de Pago: ${date}`;

        const pAmount = document.createElement('p');
        pAmount.classList.add('paragraphAmount');
        pAmount.textContent = `Monto: $${amount}`;

        const pDescription = document.createElement('p');
        pDescription.classList.add('paragraphDescription');
        pDescription.textContent = `Descripción: ${description}`;

        // Agregar elementos al nuevo div
        newDiv.appendChild(newh4);
        newDiv.appendChild(pDate);
        newDiv.appendChild(pAmount);
        newDiv.appendChild(pDescription);

        // Agregar el nuevo div al contenedor existente
        const containerDiv = document.querySelector('.payment-grid');
        containerDiv.appendChild(newDiv);

        // Limpiar los campos del formulario
        document.getElementById('choices').value = 'Pago Mensual';
        document.getElementById('date').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
});
