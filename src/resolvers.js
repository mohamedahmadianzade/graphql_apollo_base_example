import { DataLayer } from "./dataLayer.js"
let dataLayer = new DataLayer();
export const resolvers = {
    Query: {
        authors: (parent,args,context,info) => {
            console.log("--------------------------");
            console.log("Access-token" , context.accessToken );
            console.log("--------------------------");
            return dataLayer.getAuthors()
        } , 
        books: (_,params,context,info) => {
            return dataLayer.getBooks(params)
        }
    } ,
    Mutation:{
        addAuthor(_,params,context,info)
        {
 

            return dataLayer.addAuthor(params)
        } , 
        addBook(_,params,context,info)
        {
            return dataLayer.addBook(params.book)
        }
    },
    Author:{
        books(parent)
        {
            return dataLayer.getBooks({authorId:parent.id})
        }
    },

}