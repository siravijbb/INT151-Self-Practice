// copied some code from assignment
// logic written by me with help of advice of chatgpt and stackoverflow
class Book  {
    constructor(id,title,author="",yearPublished=null,isAvailable=true) {
        if(!id || !title){
            throw  ("Book must have id and title")
        }

        this.id = id
        this.title = title
        this.author = author
        this.yearPublished = yearPublished
        this.Available = isAvailable
    }
    getInfo(){
        return (`${this.title} by ${this.author} (${this.yearPublished})`)
    }
    toggleAvailability(){
        this.Available = !this.Available
    }
    isAvailable(){
        return this.Available
    }


}
module.exports = { Book }
// // Example usage:
// const book1 = new Book('B1', 'Clean Code', 'Robert C. Martin', 2008)
// console.log(book1.getInfo()) // "Clean Code by Robert C. Martin (2008)"
// console.log(book1.isAvailable()) // true
// book1.toggleAvailability()
// console.log(book1.isAvailable()) // false

let listofBook = {}

function createBook(id, title, author, yearPublished, isAvailable){
    return new Book(id, title, author, yearPublished, isAvailable)
}

function addListofBook(bookObj){
    listofBook = {  ...listofBook,
        [bookObj.id]: bookObj }
    return bookObj.id
}
addListofBook(createBook('B1', 'Clean Code', 'Robert C. Martin', 2008))
addListofBook(createBook('B2', 'Clean Code', 'Robert C. Martin', 2008))
console.log(listofBook)

function deletebook(key){
    delete listofBook[key];
    return true
}
function editbook(id,title,author,year){
    if (!(id in listofBook)){
        throw "No book with id found"
    }
    // TODO:
}