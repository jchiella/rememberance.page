const express = require('express');
const bodyParser = require('body-parser');

const { Page } = require('./models');

const pagesApp = express();
pagesApp.use(bodyParser.json());

pagesApp.get('/', async (req, res) => {
  const pages = await Page.find({});
  res.json(pages);
});

pagesApp.get('/:id', async (req, res) => {
  const page = await Page.findOne({_id: req.params.id});
  res.json(page);
});

pagesApp.post('/', async (req, res) => {
  console.log('Body: ', req.body);
  const page = new Page(req.body);
  page.save();
  res.sendStatus(200);
});

module.exports = pagesApp;