const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

//   let titles = ['title'];

  const getTheTitles = function(books) {
    return books.map( book => book.title )
 }

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;