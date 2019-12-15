const express = require('express');

const feedRoutes = require('./routes/feed');
var bodyParser = require('body-parser')


const app = express();
app.use(express.bodyParser());
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','*'); 
    next();
});


app.use('/',(req,res) =>{
    res.send("Anasayfa");

})
app.use('/feed',feedRoutes);
app.listen(8080);
