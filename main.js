document.getElementById('add-book-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('book-title').value;
    const number = document.getElementById('book-number').value;
    const price = document.getElementById('book-price').value;

    const table = document.getElementById('book-table');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${number}</td>
        <td>${price}</td>
    `;
    table.appendChild(newRow);

    // Reset form and close modal
    document.getElementById('add-book-form').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addBookModal'));
    modal.hide();
});