import { DataLayer } from "./dataLayer.js"
let dataLayer = new DataLayer();
export const resolvers = {
    Query: {
        authors: () => {
            return dataLayer.getAuthors()
        } , 
        books: () => {
            return dataLayer.getBooks()
        }
    } ,
    Mutation:{
        addAuthor(_,params,context,info)
        {
            return dataLayer.addAuthor(params)
        } , 
        addBook(_,params,context,info)
        {
            return dataLayer.addBook(params)
        }
    }

}