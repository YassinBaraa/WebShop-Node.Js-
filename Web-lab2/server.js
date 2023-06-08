const express = require('express');
const app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public/')));
app.use(session({secret:"secret", resave: false, saveUninitialized: true, }));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', homeRouter);
app.use('/getCategories', homeRouter);
app.use('/getProducts/:id', homeRouter);

app.use('/cart', cartRouter);
app.use('/cart/add/:id', cartRouter);
app.use('/cart/remove/:id', cartRouter);
app.use('/cart/getAll', cartRouter);


app.listen(3000);
