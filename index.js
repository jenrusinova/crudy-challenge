const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
let db = require('./database.js');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }))

app.get('/products', (req, res) => {
  res.sendStatus(200);
});

app.post('/addNewProduct', (req, res) => {
let newProductData = req.body;

  function createNewProduct(data){
    return new Promise((resolve, reject) =>{
     db.product.post(data, (err, result) =>{
       if(err){
         console.log(' line 27');
         reject(err);
       } else {
         console.log('result line 30');
         resolve(result);
       }
     })
    })
  }

  createNewProduct(newProductData);
  res.sendStatus(201);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});