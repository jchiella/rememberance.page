const express = require('express');
const cors = require('cors');

const pagesApp = require('./pagesApp');
const cardsApp = require('./cardsApp');

const app = express();
const port = 3001;

app.use(cors());

app.get('/test', (req, res) => {
  res.send('test successful');
});

app.use('/pages', pagesApp);
app.use('/cards', cardsApp);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});