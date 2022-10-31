export class DataLayer {
    getPerson() {
        return [
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
    }
}