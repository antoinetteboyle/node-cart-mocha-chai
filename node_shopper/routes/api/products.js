const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let products = require('../../Products');

// GET products
router.get('/', (req,res) => {
     res.json(products);
});
router.get('/:id', (req,res) => {
    const found = products.some(product => product.id === parseInt(req.params.id));
    if(found) {
        res.json(products.filter(product => product.id === parseInt(req.params.id))) 
    } else {
        res.sendStatus(400)
    }
});

//CREATE A NEW product
router.post('/',(req,res) => {
    const newProduct = {
        id: uuid.v4(),
        name: req.body.name,
        price: req.body.price
    }
    if(!newProduct.name || !newProduct.price) {
        return res.sendStatus(400)
    }
    products.push(newProduct)
    res.json(products)
})

//UPDATE product
router.put('/:id',(req,res) => {
    const found = products.some(product => product.id === parseInt(req.params.id));
    if(found) {
        const updateProduct = req.body;
        products.forEach(product => {
            if(product.id === parseInt(req.params.id)) {
                product.name = updateProduct.name ? updateProduct.name: product.name
                product.price = updateProduct.price ? updateProduct.price: product.price
                res.json({msg: 'Product update', product})
            }    
        })
    }    
})

//delete product
router.delete('/:id',(req,res) => {
    const found = products.some(product => product.id === parseInt(req.params.id))
    if(found) {
        products = products.filter(product => product.id !== parseInt(req.params.id)) 
        res.json({
            msg: 'use deleted',
            products
        })
    } else {
        res.sendStatus(400)
    }
})
module.exports = router;
