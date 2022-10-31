export const typeDefs = `#graphql
type Person{
    id:ID
    fname:String
    lname:String
    age:Int
    books:[Book]
}

type Book{
    title:String
    price:Int
}

type Query{
    person:[Person]
}
`