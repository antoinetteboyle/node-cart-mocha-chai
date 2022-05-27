const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
let carts = require('../../Carts');
let products = require('../../Products');


//GET cart
router.get('/', (req,res) => {
    // calculate total price
    let total = 0
    if(Object.entries(carts).length === 0) {
        res.json({msg: 'No items in Cart update', carts});
    } else {
            carts.forEach(cart => {
            const price = cart.price;
            const quantity = cart.quantity;
            tot = price * quantity;
            total = total + tot;
            return total
            });
        res.json({msg: 'Cart total',total,carts});   
        };
    res.json();   
});

// GET Welcome
router.get('/welcome', (req,res) => {
    res.status(200).send({message:"Welcome to the Cart!"});
})


router.get('/:id', (req,res) => {
    const found = carts.some(cart => cart.id === parseInt(req.params.id));
    if(found) {
        res.json(carts.filter(cart => cart.id === parseInt(req.params.id))) 
    } else {
        res.sendStatus(400)
    }
});

//CREATE A NEW cart product

router.post('/:id',(req,res) => {
    const found = products.some(product => product.id === parseInt(req.params.id)); 
        if(found) {
            newCart = req.body
            products.forEach(product => {
                if(product.id === parseInt(req.params.id)) {
                    newCart.id = parseInt(req.params.id);
                    newCart.name = product.name
                    newCart.price = product.price
                    newCart.quantity = req.body.quantity
                carts.push(newCart)
                res.json({msg: 'Cart new item',newCart,carts})}    
            })
        } else {
            res.json({msg: 'No Cart new item added',carts})}
    if(!newCart.name || !newCart.price || !newCart.quantity) {
        return res.sendStatus(400)
    }
    // res.json(carts)
})

//UPDATE existing cart
router.put('/:id',(req,res) => {
    const found = carts.some(cart => cart.id === parseInt(req.params.id));
    if(found) {
        const updateCart = req.body;
        carts.forEach(cart => {
            if(cart.id === parseInt(req.params.id)) {
                // cart.name = updateCart.name ? updateCart.name: cart.name
                // cart.price = updateCart.price ? updateCart.price: cart.price
                cart.quantity = updateCart.quantity ? updateCart.quantity: cart.quantity
                res.json({msg: 'Cart quantity update', cart})}    
        })
    }    
})

//delete cart
router.delete('/:id',(req,res) => {
    const found = carts.some(cart => cart.id === parseInt(req.params.id))
    if(found) {
        carts = carts.filter(cart => cart.id !== parseInt(req.params.id)) 
        res.json({
            msg: 'cart product deleted',
            carts
        })
    } else {
        res.sendStatus(400)
    }
})

module.exports = router;