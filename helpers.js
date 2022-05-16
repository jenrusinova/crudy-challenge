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

function getProductList(){
  return new Promise((resolve, reject) =>{
   db.product.get((err, result) =>{
    if(err){
     reject(err);
    } else {
     resolve(result);
    }
   })
  })
}

function updateQuantity(id, quantity){
  return new Promise((resolve, reject) => {
   db.product.update(id, quantity, (err, result) => {
     if(err){
       reject(err);
     } else {
       resolve(result);
     }
   })
  })
}

function deleteProduct(id){
  return new Promise((resolve, reject) => {
    db.product.delete(id, (err, result) => {
      if(err){
        reject(err);
      } else {
        resolve(result);
      }
    })
   })
}

module.exports = {
  createNewProduct,
  getProductList,
  updateQuantity,
  deleteProduct
}