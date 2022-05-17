let db = require('./database.js');

function createNew(data){
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

function getList(){
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
  createNew,
  getList,
  updateQuantity,
  deleteProduct
}