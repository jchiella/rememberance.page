const express = require('express');

const { Page } = require('./models');

const pagesApp = express();

pagesApp.get('/', async (req, res) => {
  const pages = await Page.find({});
  res.json(pages);
});

pagesApp.get('/:id', async (req, res) => {
  const page = await Page.findOne({_id: req.params.id});
  res.json(page);
});

module.exports = pagesApp;