require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes');


// connect to mongodb
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rogld.mongodb.net/node_tuts?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
.then((result)=> app.listen(3000,()=>console.log('listening for a request')))
.catch((err)=>console.log(err));


//register view engine
app.set('view engine' ,'ejs');

// reassign view folder
app.set('views','pages');


//middleware && static files
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


// routes
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about.ejs',{title: 'About'});
})

// Blog routes
app.use('/blogs',blogRouter);



// download file
app.get('/download',(req,res)=>{
    res.download('./files/fileone.pdf','new.pdf'); // download the file as new.pdf
})

//404
app.use((req,res)=>{
    res.status(404).render('404.ejs',{title: '404'});
});
