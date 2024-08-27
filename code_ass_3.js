document.getElementById("book_form").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = document.getElementById("book_form");
    const data = new FormData(form);
    const rollNumber = '26100396';

    fetch(`https://api.assignment3.rohanhussain.com/books/${rollNumber}`, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(() => {
        alert("Book added successfully.");
        form.reset();
        loadBooks(); 
    })
    .catch(() => {
        alert("Error adding book.");
    });
});

function loadBooks() {
    const rollNumber = '26100396';

    fetch(`https://api.assignment3.rohanhussain.com/books/${rollNumber}`)
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById("book_list");
        bookList.innerHTML = '';

        data.books.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.innerHTML = `
                <p>Title: ${book.title}</p>
                <p>Author: ${book.author}</p>
                <p>Price: ${book.price}</p>`;
            bookList.appendChild(bookDiv);
        });
    })
    .catch(() => {
        alert("Error fetching books.");
    });
}

document.addEventListener('DOMContentLoaded', loadBooks);
