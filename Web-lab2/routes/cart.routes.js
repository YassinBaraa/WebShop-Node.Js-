var express = require('express');
var router = express.Router();

function isProductInCart(cart,id){
    for(let i=0;i<cart.length;i++){
        if(cart[i].id ==id){
            return true;
        }
    }
    return false;
};

router.get('/', function(req, res, next) {
    var cart = req.session.cart;
    res.render('cart', {
        title: 'Cart',
        session: req.session,
        cart:cart,
    },);
});

router.get('/cart', function(req, res, next) {

    var cart = req.session.cart;
    res.render('cart', {
        title: 'Cart',
        session: req.session,
        cart:cart,
    });
});

router.post("/add/:id", function (req, res, next) {
let id = req.body.id;
let quantity = parseInt(req.body.quantity) +1;
var product = {id:id, quantity:quantity}

if(req.session.cart){
    var cart = req.session.cart;
    if(!isProductInCart(cart,id)){
        cart.push(product);
    }
}
else{
    req.session.cart = [product];
    var cart = req.session.cart;
}

res.redirect('/cart');

});

router.post("/remove/:id", function (req, res, next) {
let id = req.body.id;
let quantity = parseInt(req.body.quantity) - 1;
var product = {id:id, quantity:quantity}

if(req.session.cart){
    var cart = req.session.cart;
    if(!isProductInCart(cart,id)){
        cart.push(product);
    }
}
else{
    req.session.cart = [product];
    var cart = req.session.cart;
}

res.redirect('/cart');

});

router.get("/getAll", function (req, res, next) {
return res.render("cart",{ 
    
    });
});

module.exports = router;