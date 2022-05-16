const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudy_db'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

module.exports = {
  product: {
  post: function(newItem, callback){
    console.log('new product', newItem);
    var productId = newItem.productId;
    var name = newItem.name;
    var description = newItem.description;
    var quantity = newItem.quantity;

     var queryString = `INSERT into product (productId, name, description, quantity) VALUES ('${productId}', '${name}', '${description}', '${quantity}');`

    connection.query(queryString, (err, result) => {
      if (err){
        callback(err, null);
      } else {
        callback(null, err);
      }
    })
  }
  }
}