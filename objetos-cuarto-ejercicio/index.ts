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

    constructor(pList:Book[]) {
        this.bookList = pList;
    }

    public insertBook(book: Book): void {
        this.bookList.push(book);
        console.log(`"Id Book Code: "${book.getIdentificationCode()}" Book title: "${book.getTitle()}" from "${book.getAuthor()}" publish by "${book.getEditorial()}`);
    }

    
    public consultBook(: string): void {
    }

    public delete(: string): void {
    }

    public modifyData(: string): void {
    }
}
