import { DataLayer } from "./dataLayer.js"
let dataLayer = new DataLayer();
export const resolvers = {
    Query: {

        // Static DataSource to get data from an array
        authors: (parent,args,context,info) => {
            console.log("--------------------------");
            console.log("Access-token" , context.accessToken );
            console.log("--------------------------");
            return dataLayer.getAuthors()
        } , 
        books: (_,params,context,info) => {
            return dataLayer.getBooks(params)
        } ,



        // Using RestDatasource to get data from rest api
        products:(parent,param,context,info)=>{
            return context.dataSources.productDataSource.getProducts(param)
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

    //Advanced - resolver chain -- implement bussines for each object field 
    // in this example we hava author object which has books property of type object
    // so we define that for each author, how we should get related books
    Author:{
        books(parent)
        {
            return dataLayer.getBooks({authorId:parent.id})
        }
    },

}