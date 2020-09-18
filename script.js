let myLibrary = [];
const button = document.getElementById("button");
var bookTable = document.getElementById("book-list");
button.addEventListener("click", createBook);

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibary(book){
    myLibrary.push(book);
    console.log(myLibrary);
}


function displayBooks(){
    for(var i = 0; i < myLibrary.length; i++){
        console.log("hi");
        console.log(myLibrary.length);
        var books = document.createElement("tr");
        var title1 = document.createElement("td");
        title1.innerHTML = myLibrary[i].title;
        var author1 = document.createElement("td");
        author1.innerHTML = myLibrary[i].author;
        var pages1 = document.createElement("td");
        pages1.innerHTML = myLibrary[i].pages;
        var avail1 = document.createElement("td");
        avail1.innerHTML = myLibrary[i].status;
        var del = document.createElement("td");
        var a = document.createElement("a");
        a.href="#";
        a.className = "btn btn-danger but";
        a.innerHTML = "X";
        del.appendChild(a);

        books.appendChild(title1);
        books.appendChild(author1);
        books.appendChild(pages1);
        books.appendChild(avail1);
        books.appendChild(del);
        console.log(books);
        bookTable.appendChild(books);
    }
}

function createBook(){
    let title = prompt("Name of Book?");
    let author = prompt("What is the name of the Author?");
    let pages = prompt("How many pages?");
    let status = "Yes";
    let book = new Book(title, author, pages, status);
    addBookToLibary(book);
    displayBooks();
}

