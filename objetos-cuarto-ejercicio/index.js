"use strict";
exports.__esModule = true;
var fs = require("fs");
var Book = /** @class */ (function () {
    function Book(pTitle, pAuthor, pEditorial, pidentificationCode) {
        this.title = pTitle;
        this.author = pAuthor;
        this.editorial = pEditorial;
        this.identificationCode = pidentificationCode;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (name) {
        this.title = name;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (nameAuthor) {
        this.author = nameAuthor;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (nameEditorial) {
        this.editorial = nameEditorial;
    };
    Book.prototype.getIdentificationCode = function () {
        return this.identificationCode;
    };
    Book.prototype.setIdentificationCode = function (id) {
        this.identificationCode = id;
    };
    return Book;
}());
var BookManager = /** @class */ (function () {
    function BookManager(pList) {
        this.bookList = pList;
    }
    BookManager.prototype.insertBook = function (book) {
        this.bookList.push(book);
        console.log("\"Id Book Code: \"".concat(book.getIdentificationCode(), "\" Book title: \"").concat(book.getTitle(), "\" from \"").concat(book.getAuthor(), "\" publish by \"").concat(book.getEditorial()));
    };
    BookManager.prototype.consultBook = function (book) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (book.getTitle() === this.bookList[i].getTitle()) {
                return console.log(this.bookList[i]);
            }
        }
    };
    BookManager.prototype["delete"] = function (book) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (book.getTitle() === this.bookList[i].getTitle()) {
                this.bookList.splice(i, 1);
                return console.log("Removed ".concat(book.getTitle(), " from the list"));
            }
        }
        return console.log("Error trying to delete ".concat(book.getTitle(), " please contact suport"));
    };
    /*esta funcion la considero redundante, porque ya existe un setter para cada variable, pero era parte de la consigna*/
    BookManager.prototype.modifyData = function (book, newTitle, newAuthor, newEditorial, newIdCode) {
        /*ver si de esta forma puedo llamarlo al libro y al encontrarlo: modificarlo*/
        for (var i = 0; i < this.bookList.length; i++) {
            if (book.getTitle() === this.bookList[i].getTitle()) {
                this.bookList[i].setTitle(newTitle);
                this.bookList[i].setAuthor(newAuthor);
                this.bookList[i].setEditorial(newEditorial);
                this.bookList[i].setIdentificationCode(newIdCode);
                return console.log("New Title set: \"".concat(newTitle, "\" from \"").concat(newAuthor, "\" publish by \"").concat(newEditorial, "\" and new Identification Code asign: \"").concat(newIdCode, "\""));
            }
        }
    };
    return BookManager;
}());
var b1 = new Book("Poema de Gilgamesh", "Anonimous", "unknown", 1);
var b2 = new Book("Libro de Job", "Anonimous", "unknown", 2);
var b3 = new Book("Las mil y una noches", "Anonimous", "unknown", 3);
var b4 = new Book("Saga de Njál", "Anonimous", "unknown", 4);
var b5 = new Book("Todo se desmorona", "Chinua Achebe", "unknown", 5);
var b6 = new Book("test", "Anonimous", "unknown", 6);
var bookListTest = [b1, b2, b3, b4, b5];
/*con qué método yo puedo saber si existe un libro declarado que yo no haya incluído en mi lista simplemente por haberlo olvidado*/
var bm1 = new BookManager(bookListTest);
/*
bm1.delete(b2);
bm1.delete(b2);

bm1.insertBook(b6);
console.log(bm1);

bm1.consultBook(b1);
bm1.modifyData(b3,"blanco","Negro","xx",44);
console.log(b3); */
var texto = fs.readFileSync('readme.txt', 'utf8');
console.log(texto);
