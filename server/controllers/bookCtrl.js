let books = [
  {
    id: 0,
    title: 'Hello',
    author: 'Brandon'
  },
  {
    id: 1,
    title: 'World',
    author: 'Eric'
  },
  {
    id: 2,
    title: 'Express for Dummies',
    author: 'Brandon'
  }
];
let id = 3;

const getBooks = (req, res) => {
  res.status(200).send(books);
};

const getSpecificBook = (req, res) => {
  let selectedBookIndex = books.findIndex(book => book.id == req.params.id);
  res.status(200).send(books[selectedBookIndex]);
};

const addBook = (req, res) => {
  const { title, author } = req.body;
  books.push({
    title,
    author,
    id
  });
  id++;
  res.status(200).send(books[books.length - 1]);
};

const deleteSpecificBook = (req, res) => {
  const idOfBookToDelete = req.params.id;
  let selectedBookIndex = books.findIndex(book => book.id == req.params.id);
  books.splice(selectedBookIndex, 1);
  res.status(200).send(books);
};

module.exports = {
  getBooks,
  getSpecificBook,
  addBook,
  deleteSpecificBook
};
