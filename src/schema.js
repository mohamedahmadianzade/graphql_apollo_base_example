export const typeDefs = `#graphql
type Author{
    id:ID
    fname:String
    lname:String
    age:Int
    books:[Book]
}

type Book{
    title:String
    price:Int
    author:[Author]
}

type Query{
    authors:[Author]
    books:[Book]
}

type Mutation{
    addAuthor(fname:String , lname:String , age:Int):Author
    addBook(title:String , price:Int):Book
}

`