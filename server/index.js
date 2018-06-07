const express = require('express');
const bodyParser = require('body-parser');
const bookCtrl = require('./controllers/bookCtrl');

const app = express();

app.use(bodyParser.json());

app.get('/api/books', bookCtrl.getBooks);

app.get('/api/books/:id', bookCtrl.getSpecificBook);

app.post('/api/books', bookCtrl.addBook);

app.delete('/api/books/:id', bookCtrl.deleteSpecificBook);

//make update endpoint

const port = 3001;

app.listen(port, () => {
  console.log(`Server is now listening to port ${port}`);
});
