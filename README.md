# node-cart-mocha-chai
Node.js and express shopping cart using POSTMAN with a mocha/chai test

This application uses basic node.js and express to create a shopping cart with no HTML or CSS. Postman is used to check the API routes. The code is run from this folder's terminal with "node index.js". The main app for the carts is found at  [Cart.js](.\node_shopper\Carts.js). The products list had CRUD operations found at  [Products.js](.\node_shopper\Products.js)
A short mocha test is run on the welcome message. [Test folder](.\node_shopper\test\cartsTest.js)

![1. Welcome route](./images/welcome-route.png)
![2. Postman GET cart route](./images/get-cart-postman.png)
![3. Postman GET 1 cart item route](./images/get-1-cart-item.png)
![4. Post a new cart item](./images/post-new-cart.png)
![5. Total updates with new cart item](./images/total-updates-with-newcart.png)
![6. Put update](./images/put-update-quantity.png)
![7. Total updates after put quanity changes](./images/total-updates-after-put.png)
![8. Delete update](./images/cart-item-deleted.png)
![9. Delete total update](./images/total-updates-after-delete.png)
![10. Mocha Chai test update](./images/mocha-chai-test-result.png)
