const books = [
    'The Definitive Guide',
    'Eloquent JavaScript',
    'The Good Parts',
    'JavaScript & JQuery',
    'A Playful Introduction to Programming',
    ' JavaScript The Good Parts',
    ' Learn JavaScript VISUALLY',

]
const find = 'javascript'
const search = [];
/* for (const book of books) {
    if (book.toLowerCase().indexOf(find.toLowerCase()) != -1) {
        search.push(book);

    }
} */

for (const book of books) {
    if (book.toLowerCase().includes(find.toLowerCase()) != -1) {
        search.push(book);

    }
}
console.log(search);