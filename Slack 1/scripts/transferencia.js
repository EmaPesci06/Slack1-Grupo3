document.getElementById('formTransfer').addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const origin = document.getElementById('origin').value;
    const destiny = document.getElementById('destiny').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const selectedChoice = document.getElementById('choices').options[document.getElementById('choices').selectedIndex].text;

    if (date && origin && destiny && !isNaN(amount) && amount >= 0) {
        // Obtener el cuerpo de la tabla
        const tbody = document.querySelector('.table tbody');

        // Crear una nueva fila
        const newRow = document.createElement('tr');

        // Crear celdas para la nueva fila
        const newDateCell = document.createElement('td');
        const newOriginCell = document.createElement('td');
        const newDestinyCell = document.createElement('td');
        const newAmountCell = document.createElement('td');
        const newDescriptionCell = document.createElement('td');

        // Asignar valores a las celdas
        newDateCell.textContent = date;
        newOriginCell.textContent = origin;
        newDestinyCell.textContent = destiny;
        newAmountCell.textContent = `$${amount.toFixed(2)}`;
        newDescriptionCell.textContent = selectedChoice;

        // Agregar las celdas a la nueva fila
        newRow.appendChild(newDateCell);
        newRow.appendChild(newOriginCell);
        newRow.appendChild(newDestinyCell);
        newRow.appendChild(newAmountCell);
        newRow.appendChild(newDescriptionCell);

        // Agregar la nueva fila al cuerpo de la tabla
        tbody.appendChild(newRow);

        // Limpiar los campos del formulario
        document.getElementById('date').value = '';
        document.getElementById('origin').value = '';
        document.getElementById('destiny').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('choices').selectedIndex = 0; // Restablecer la opción seleccionada

    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
});