let db = require('./database.js');

function createNewProduct(data){
  return new Promise((resolve, reject) =>{
   db.product.post(data, (err, result) =>{
     if(err){
       reject(err);
     } else {
       resolve(result);
     }
   })
  })
}

module.exports = {
  createNewProduct
}