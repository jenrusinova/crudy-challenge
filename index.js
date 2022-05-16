const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/addNewProduct', (req, res) => {
  res.sendStatus(201);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});