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
    }

}