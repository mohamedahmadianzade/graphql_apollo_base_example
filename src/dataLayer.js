import { uuid } from 'uuidv4';
export class DataLayer {
    authors = [
        {

            id: 1, fname: "Mohamed", lname: "ahmadian", age: 32,
            books: [
                { title: "book", price: "1000" }
            ]
        },
        {
            id: 2, fname: "Mohamed1", lname: "ahmadian1", age: 30,
            books: [
                { title: "book1", price: "1000" }
            ]
        },
        {
            id: 3, fname: "Mohamed2", lname: "ahmadian2", age: 33,
            books: [
                { title: "book2", price: "1000" },
                { title: "book3", price: "2000" },
                { title: "book4", price: "3000" },
            ]

        }
    ]


    books = [
        { title: "book", price: "1000" },
        { title: "book1", price: "1000" },
        { title: "book2", price: "1000" },
        { title: "book3", price: "2000" },
        { title: "book4", price: "3000" },

    ]
    getAuthors() {
        return this.authors
    }


    addAuthor({fname, lname, age}) {
        let newAuthor={ id: uuid(), fname, lname, age }
        this.authors.push(newAuthor)
        return newAuthor
    }
    
    addBook({title,price}) {
        let newBook={ title , price }
        this.books.push(newBook)
        return newBook
    }


    getBooks({title}) {
        if(title)
           return this.books.filter(item=>item.title.includes(title))
        return this.books
    }
}