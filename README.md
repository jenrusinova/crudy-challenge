# crudy-challenge

### General info
This is simple CRUDy app, allowing user to create, update, delete product and receive list of all products.

The additional feature is product undelition and allowing to add deletion comment.


### Used technologies:
- Node.js with Express and nodemon for server
- mySQL for database

### Installation instructions:
- In the terminal window type 'mysql -u root  < schema.sql'
(this will initialize the database)

- Run 'npm install'

- Run 'npm start'


### Instructions (for POSTMAN):
1)Creating a new product

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

2)Get the list of all products

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

Choose 'DELETE' as request type, insert url 'http://localhost:3000/products/' and id of the product which you want to delete.
For example, if you want to delete product with id '571', url should be 'http://localhost:3000/products/571'.

Under the url choose 'Body' tab, under this tab choose 'raw' and 'JSON' in the most right tab.
Enter in the main textfield an example:
{"comment" : "this is deletion comment"}

Press on 'Send' button.
You should see the list of all product without the one that you've just deleted.

5)Undeleting the product
Choose POST as a request type, and insert url 'http://localhost:3000/products/undelete/' and the id of the product that you want to undelete.
For example, if you want to undelete the product with id '123', url should be 'http://localhost:3000/products/undelete/123'.

Press on 'Send' button.

You should see the list of all product includint the one that you've just undeleted.



