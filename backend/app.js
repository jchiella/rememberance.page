const express = require('express');
const { Page, Card } = require('./models');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  return 'Hello!';
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  Page.findOne({name: 'John Doe'}, (err, page) => {
    console.log(page);

    Card.find({page: page._id}, (err, card) => {
      console.log(card);
    });
  });
});