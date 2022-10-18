import * as fs from 'fs';

class Book {
    private title: string;
    private author: string;
    private editorial: string;
    private identificationCode: number;

    constructor(pTitle: string, pAuthor: string, pEditorial: string, pidentificationCode: number) {
        this.title = pTitle;
        this.author = pAuthor;
        this.editorial = pEditorial;
        this.identificationCode = pidentificationCode;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(name: string): void {
        this.title = name;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(nameAuthor: string): void {
        this.author = nameAuthor;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(nameEditorial: string): void {
        this.editorial = nameEditorial;
    }

    public getIdentificationCode(): number {
        return this.identificationCode;
    }

    public setIdentificationCode(id: number): void {
        this.identificationCode = id;
    }
}

class BookManager {
    private bookList: Book[];

    constructor(pList: Book[]) {
        this.bookList = pList;
    }

    public insertBook(book: Book): void {
        this.bookList.push(book);
        console.log(`"Id Book Code: "${book.getIdentificationCode()}" Book title: "${book.getTitle()}" from "${book.getAuthor()}" publish by "${book.getEditorial()}`);
    }

    public consultBook(book: Book): void {
        for (let i: number = 0; i < this.bookList.length; i++) {
            if (book.getTitle() === this.bookList[i].getTitle()) {
                return console.log(this.bookList[i]);
            }
        }
    }

    public delete(book: Book): any {
        for (let i: number = 0; i < this.bookList.length; i++) {
            if (book.getTitle() === this.bookList[i].getTitle()) {
                this.bookList.splice(i, 1);
                return console.log(`Removed ${book.getTitle()} from the list`);
            }
        }
        return console.log(`Error trying to delete ${book.getTitle()} please contact suport`);
    }


    /*esta funcion la considero redundante, porque ya existe un setter para cada variable, pero era parte de la consigna*/
    public modifyData(book: Book, newTitle: string, newAuthor: string, newEditorial: string, newIdCode: number): void {
        /*ver si de esta forma puedo llamarlo al libro y al encontrarlo: modificarlo*/
        for (let i: number = 0; i < this.bookList.length; i++) {
            if (book.getTitle() === this.bookList[i].getTitle()) {
                this.bookList[i].setTitle(newTitle);
                this.bookList[i].setAuthor(newAuthor);
                this.bookList[i].setEditorial(newEditorial);
                this.bookList[i].setIdentificationCode(newIdCode);
                return console.log(`New Title set: "${newTitle}" from "${newAuthor}" publish by "${newEditorial}" and new Identification Code asign: "${newIdCode}"`);
            }
        }
    }
}

let b1 = new Book("Poema de Gilgamesh", "Anonimous", "unknown", 1);
let b2 = new Book("Libro de Job", "Anonimous", "unknown", 2);
let b3 = new Book("Las mil y una noches", "Anonimous", "unknown", 3);
let b4 = new Book("Saga de Njál", "Anonimous", "unknown", 4);
let b5 = new Book("Todo se desmorona", "Chinua Achebe", "unknown", 5);
let b6 = new Book("test", "Anonimous", "unknown", 6);

let bookListTest: Book[] = [b1, b2, b3, b4, b5];
/*con qué método yo puedo saber si existe un libro declarado que yo no haya incluído en mi lista simplemente por haberlo olvidado*/
let bm1 = new BookManager(bookListTest);

/*
bm1.delete(b2);
bm1.delete(b2);

bm1.insertBook(b6);
console.log(bm1);

bm1.consultBook(b1);
bm1.modifyData(b3,"blanco","Negro","xx",44);
console.log(b3); */



let texto: string = fs.readFileSync('readme.txt', 'utf8');

console.log(texto);
