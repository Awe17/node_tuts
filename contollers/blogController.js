//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog');

const blog_index = (req,res) =>{
    Blog.find().sort({createdAt: 'desc'})
        .then((result)=>{
            res.render('index.ejs',{title:'All Blogs',blogs: result});
        })
        .catch(err=>{
            console.log(err);
        })
}

const blog_details = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('details.ejs',{title: 'Details', blog: result});
        })
        .catch(err=>{
            console.log(err);
        })

}

const blog_create_get = (req,res)=>{
    res.render('create.ejs',{title:'Create a new blog'});
}

const blog_delete = (req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.json({redirect: '/blogs'});
    })
    .catch(err=>{
        console.log(err);
    })
}

const blog_create_post = (req, res) =>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_delete,
    blog_create_post
}