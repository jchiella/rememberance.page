const express = require('express');
const bodyParser = require('body-parser');

const { Card } = require('./models');

const cardsApp = express();
cardsApp.use(bodyParser.json());

cardsApp.get('/', async (req, res) => {
  const cards = await Card.find({});
  res.json(cards);
});

cardsApp.get('/:pageId', async (req, res) => {
  const cards = await Card.find({page: req.params.pageId});
  res.json(cards);
});

cardsApp.post('/', async (req, res) => {
  const card = new Card(req.body);
  card.save();
  res.sendStatus(200);
});

module.exports = cardsApp;