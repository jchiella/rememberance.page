const express = require('express');

const { Card } = require('./models');

const cardsApp = express();

cardsApp.get('/', async (req, res) => {
  const cards = await Card.find({});
  res.json(cards);
});

cardsApp.get('/:pageId', async (req, res) => {
  const cards = await Card.find({page: req.params.pageId});
  res.json(cards);
});

module.exports = cardsApp;