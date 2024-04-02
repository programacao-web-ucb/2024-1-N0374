
let bookCollection = [
    { title: "Duna", author: "Frank Herbert", year: 1965, copies: 3 },
    { title: "E se?", author: "Randall Munroe", year: 2014, copies: 1 }
];

function addBookToList(book) {
    const bookList = document.getElementById('books');
    const listItem = document.createElement('li');
    const titleNode = document.createElement('strong');
    titleNode.textContent = book.title;
    listItem.appendChild(titleNode);
    listItem.innerHTML += ` - ${book.author} (${book.year}) [${book.copies} exemplar(es)]`;
    bookList.appendChild(listItem);
}

function registerBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const copies = document.getElementById('copies').value;

    addBookToList({ title, author, year, copies });
    bookCollection.push({ title, author, year, copies });
    addBookToBorrowSelect({ title, author, year, copies });
    console.log(bookCollection)

}

function addBookToBorrowSelect(book) {
    const rentBookSelect = document.getElementById('rentBookSelect');

    const option = document.createElement('option');
    option.textContent = book.title;
    rentBookSelect.appendChild(option);
}

function resetBookList() {
    const bookList = document.getElementById('books');
    bookList.innerHTML = "";
}

function resetBorrowSelect() {
    const rentBookSelect = document.getElementById('rentBookSelect');
    rentBookSelect.innerHTML = "";
}

function listBooks() {
    bookCollection.forEach(book => {
        addBookToList(book);
        if (book.copies) {
            addBookToBorrowSelect(book);
        }
    });
}

function borrowABook() {
    const rentBookSelect = document.getElementById('rentBookSelect');
    const selectedTitle = rentBookSelect.value;

    bookCollection = bookCollection.map(book => {
        if (book.title === selectedTitle && book.copies > 0) {
            return { ...book, copies: book.copies - 1 };
        }
        return book;
    });
    alert(`Voc&ecirc; alugou o livro: ${selectedTitle}`);
    resetBookList();
    resetBorrowSelect();
    listBooks();

}

listBooks(bookCollection);
