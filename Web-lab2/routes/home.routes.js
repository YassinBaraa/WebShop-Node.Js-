var express = require('express');
var router = express.Router();
const data = require('../data/mydata.js');
const counter = require('../scripts/script.js');

router.get('/', function(req, res, next) {
    let id = parseInt(req.params.id);
    let category = data.categories.find(category => category.id === id);
    res.render('home', {
        title: 'Home',
        session: req.session,
        req: req,
        categoryId: id,
        category: category,
        data: data,

    },);
});


router.get('/getCategories', function(req, res, next) {
    let id = parseInt(req.params.id);
    let category = data.categories.find(category => category.id === id);
    res.render('home', {
        title: 'Home',
        session: req.session,
        data: data,
        req: req,
        categoryId: id,
        category: category,
    },);
});

router.get ("/getProducts/:id", function (req, res, next) {
    const id = req.params.id;
    const category = data.categories.find((category) => category.name.toLowerCase() === id.toLowerCase());
    res.render("home", {
        session: req.session,
        data: data,
        categoryId: id,
        category: category,
        req: req,
    },);
});




module.exports = router;
