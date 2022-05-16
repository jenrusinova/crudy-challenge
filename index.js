const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
const helpers = require('./helpers.js');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }))

app.get('/products', (req, res) => {
  helpers.getProductList()
  .then(result => {
    console.log(result);
    res.send(result);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
});

app.post('/addNewProduct', (req, res) => {
  let newProductData = req.body;

  helpers.createNewProduct(newProductData)
  .then(helpers.getProductList)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
});

app.put('/products/:id', (req, res) => {
  let id = req.params.id;
  let newQuantity = req.body.newQuantity;

  helpers.updateQuantity(id, newQuantity)
  .then(helpers.getProductList)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
});

app.delete('/products/:id', (req, res) => {
  let id = req.params.id;

  helpers.deleteProduct(id)
  .then(helpers.getProductList)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});