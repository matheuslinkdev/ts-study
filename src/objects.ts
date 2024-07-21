//Type//
type Order = {
    productId: string
    price: number
}

type User = {
   firstName: string 
   age: number
   email?: string
   password?: string
   orders: Order[]
   register() : string
}

const user : User ={
    firstName: "Matheus",
    age: 18,
    email: "matheuslink@gmail.com",
    orders: [{productId: "3", price: 200}],
    register(){
        return "Olá"
    },
}

//this can only be used with type, not with interface
type Grade = number | string
const grade: Grade = 7


// Unions
//Unite two different types in one
type Author = {
    books: string[]
}

const author: Author & User = {
    firstName: "Michael",
    age: 78,
    email: "author@gmail.com",
    books: ["1"],
    orders: [],
    register() {
        return "A"
    },
}



//INTERFACES//
interface UserInterface{
    readonly firstName: string
    email: string
}

const emailUser: UserInterface={
    firstName: "Matheus",
    email: "matheus@gmail.com"
}

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "author@gmail.com",
    firstName: "Author",
    books: []
}