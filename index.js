const express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

app.use(express.static(__dirname + '/build'));
app.get('/*', (req, res) => {
  res.redirect('http://localhost:3002');
});

app.listen(3002, () => {
  console.log('sever is listening at 3002');
});
