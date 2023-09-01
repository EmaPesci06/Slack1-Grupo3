document.getElementById('formAccount').addEventListener('submit', (event) => {
    event.preventDefault();

    const inputNumberAccount = document.getElementById('numberAccount').value;
    const inputAccount = document.getElementById('nameAccount').value.trim();
    const balance = document.getElementById('balance').value;
    const selectedChoice = document.getElementById('choices').value

    // Expresión regular para verificar si inputAccount contiene solo letras (sin números ni caracteres especiales)
    const regex = /^[A-Za-z\s]+$/;

    if (inputNumberAccount.length = 9 && regex.test(inputAccount) && !isNaN(balance) && balance >= 0) {
        // Las condiciones se cumplen, puedes agregar una fila al tbody de la tabla

        // Obtener el tbody de la tabla
        const tbody = document.getElementById('table').getElementsByTagName('tbody')[0];

        // Crear una nueva fila y celdas
        const newTr = document.createElement('tr');
        const newTd1 = document.createElement('td');
        const newTd2 = document.createElement('td');
        const newTd3 = document.createElement('td');
        const newTd4 = document.createElement('td');

        // Asignar valores a las celdas
        newTd1.textContent = inputNumberAccount;
        newTd2.textContent = inputAccount;
        newTd3.textContent = `$ ${balance}`
        newTd4.textContent = selectedChoice


        // Agregar las celdas a la fila
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTr.appendChild(newTd4);

        // Agregar la fila al tbody
        tbody.appendChild(newTr);

        // Limpiar los campos del formulario
        document.getElementById('numberAccount').value = '';
        document.getElementById('nameAccount').value = '';
        document.getElementById('balance').value = '';
        document.getElementById('choices').value = 'Cuenta de Ahorro';
    } else {
        alert('Verifica los campos. El número de cuenta debe tener al menos 9 dígitos, el nombre debe contener solo letras y el saldo no puede estar vacio.');
    }
});
