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
    },
    get: function(callback){
      var queryString = 'SELECT * from product';
      connection.query(queryString, (err, result) => {
        if (err){
          callback(err, null);
        } else {
          callback(null, result);
        }
      })
    },
    update: function(receivedId, quantity, callback){
      var queryString = `UPDATE product SET quantity = '${quantity}' WHERE productId = ${receivedId}`;
      connection.query(queryString, (err, result) => {
      if (err){
        callback(err, null);
      } else {
        callback(null, err);
      }
    })
    },
    delete: function(receivedId, callback){
      var queryString = `DELETE from product WHERE productId = ${receivedId}`;
      connection.query(queryString, (err, result) => {
        if (err){
          callback(err, null);
        } else {
          callback(null, err);
        }
      })
    }
  },
  deletedProduct: {
    post : function (receivedId, comment, callback){
      var queryStringSelect = `SELECT * from product WHERE productId = ${receivedId}`;
      connection.query(queryStringSelect, (err, result) => {
        if (err){
          callback(err, null);
        } else {
          let productId = result[0].productId;
          let name = result[0].name;
          let description = result[0].description;
          let quantity = result[0].quantity;
          var queryStringInsert = `INSERT into deletedProduct (productId, name, description, quantity, comment) VALUES ('${productId}', '${name}', '${description}', '${quantity}', '${comment}');`
          connection.query(queryStringInsert, (err, result) => {
            if (err){
              callback(err, null);
            } else {
               callback(null, err);
            }
          });
        }
      })
    },
    delete : function (receivedId, callback) {
      var queryStringSelect = `SELECT * from deletedProduct WHERE productID =${receivedId}`;
      connection.query(queryStringSelect, (err, result) => {
        if(err){
          callback(err, null);
        } else {
          var productId = result[0].productId;
          var name = result[0].name;
          var description = result[0].description;
          var quantity = result[0].quantity;
          var queryStringInsert = `INSERT into product (productId, name, description, quantity) VALUES ('${productId}', '${name}', '${description}', '${quantity}');`
          connection.query(queryStringInsert, (err, result) => {
            if (err){
              callback(err, null);
            } else {
              var queryStringDelete = `DELETE from deletedProduct WHERE productId = ${receivedId}`;
              connection.query(queryStringDelete, (err, result) => {
                if (err){
                  callback(err, null);
                } else {
                  callback(null, result);
                }
              })
            }
          })
        }
      })
    }
  }
}



