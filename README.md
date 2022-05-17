# crudy-challenge

### Used technologies:
- Node.js with Express and nodemon for server
- mySQL for database

### Installation instructions:
- Run 'npm install'
- Run 'npm start'

### Instructions (for POSTMAN):
1)Creating new product

Make sure that application is running.

After opening POSTMAN, choose POST as request type and insert url 'http://localhost:3000/addNewProduct'.
Under the url choose 'Body' tab, under this tab choose 'raw' and 'JSON' in the most right tab.
Insert this example data in main text field:
{"productId": "578",
"name":"test name",
"description":"test description",
"quantity": 42}

Press on 'Send' button.
You should see list of all created products including the one that you've just created.

2)Get list of all products

Choose GET as request type, insert url 'http://localhost:3000/products'.
Press on 'Send' button.

You should see the list of all products.

3)Editing quantity of the product

Choose PUT as request type and insert url 'http://localhost:3000/products/' and id of the product.
Example: if you want to update the quantity of the product with the id '123', the url should be 'http://localhost:3000/products/123'.
Under the url choose 'Body' tab, under this tab choose 'raw' and 'JSON' in the most right tab.

Insert this example data in the main text field
{"newQuantity": 43}

Press on 'Send' button.
You should see list of all products, and the product with the chosen id should have updated quantity.

4)Deleting the product

Choose 'DELETE' ad request type, insert url 'http://localhost:3000/products/' and id of the product which you want to delete.
For example, if you want to delete product with id '571', url should be 'http://localhost:3000/products/571'.

Press on 'Send' button.
You should see the list of all product without the one that you've just deleted.






