const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
const products = require('./products.js');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }))

app.get('/products', (req, res) => {
  products.getList()
  .then(result => {
    //console.log(result);
    res.send(result);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
});

app.post('/addNewProduct', (req, res) => {
  let newProductData = req.body;

  products.createNew(newProductData)
  .then(products.getList)
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

  products.updateQuantity(id, newQuantity)
  .then(products.getList)
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
  let comment = req.body.comment;

  products.deleteProduct(id, comment)
  .then(products.getList)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  })
})

app.post('/products/undelete/:id', (req, res) => {
  let id = req.params.id;
  console.log('server 74');
  products.undeleteProduct(id)
  .then(products.getList)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});