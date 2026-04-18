const fs = require('fs')
// const book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('book.json', bookJSON)

// const dataBuffer = fs.readFileSync('book.json')
// console.log(dataBuffer.toString())

// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = 'Damon'
user.age = 48
fs.writeFileSync('1-json.json', JSON.stringify(user))

console.log(user.name, user.age)