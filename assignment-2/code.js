function ClickHandler() {
    const newBookTitle = document.getElementById("bookTitle");
    const newBookAuthor = document.getElementById("bookAuthor")
const newTitle = newBookTitle.value;
const newAuthor=newBookAuthor.value


    const newBook = document.createElement("li");
    newBook.innerText = `${newTitle} by ${newAuthor}`;
    newBook.className = "list-group-item d-flex justify-content-between align-items-center";

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn btn-danger delete";
    deleteButton.addEventListener("click", deleteBooks); 

    newBook.appendChild(deleteButton);

    const list = document.getElementById("bookList");
    list.appendChild(newBook);

    newBookAuthor.value = "";

    newBookTitle.value = "";
}

const button = document.getElementById("save-btn");
button.addEventListener("click", ClickHandler);

function deleteBooks(e) {
    const clickedDelButton = e.target;
    clickedDelButton.parentElement.remove(); 
}
