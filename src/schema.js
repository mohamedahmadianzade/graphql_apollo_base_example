export const typeDefs = `#graphql
type Person{
    id:ID
    fname:String
    lname:String
    age:Int
}

type Query{
    person:[Person]
}
`