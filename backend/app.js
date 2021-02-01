const { Page, Card } = require('./models');

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/test', (req, res) => {
  res.send('test successful');
});

app.get('/pages', async (req, res) => {
  const pages = await Page.find({});
  res.json(pages);
});

app.get('/pages/:id', async (req, res) => {
  const page = await Page.findOne({_id: req.params.id});
  res.json(page);
});

app.get('/cards', async (req, res) => {
  const cards = await Card.find({});
  res.json(cards);
});

app.get('/cards/:pageId', async (req, res) => {
  const cards = await Card.find({page: req.params.pageId});
  res.json(cards);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});