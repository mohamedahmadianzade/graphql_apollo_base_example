import { uuid } from 'uuidv4';
import { GraphQLError } from "graphql";
export class DataLayer {
    authors = [
        {

            id: 1, fname: "Mohamed", lname: "ahmadian", age: 32
        },
        {
            id: 2, fname: "Mohamed1", lname: "ahmadian1", age: 30
        },
        {
            id: 3, fname: "Mohamed2", lname: "ahmadian2", age: 33

        }
    ]


    books = [
        { title: "book", price: "1000", authorId: 1 },
        { title: "book1", price: "1000", authorId: 2 },
        { title: "book2", price: "1000", authorId: 3 },
        { title: "book3", price: "2000", authorId: 3 },
        { title: "book4", price: "3000", authorId: 3 },

    ]
    getAuthors() {
        try {
            return this.authors
        } catch (error) {
            throw new GraphQLError("Error happae")

        }
    }


    addAuthor({ fname, lname, age }) {
        let newAuthor = { id: uuid(), fname, lname, age }
        this.authors.push(newAuthor)
        return newAuthor
    }

    addBook({ title, price }) {
        let newBook = { title, price }
        this.books.push(newBook)
        return newBook
    }


    getBooks({ title, authorId }) {
        if (title)
            return this.books.filter(item => item.title.includes(title))
        if (authorId)
            return this.books.filter(item => item.authorId == authorId)

        return this.books
    }

}