//1. Import
//express
const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = new express()

//path
const path = require('path')

//ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')   //api thông báo với ejs rằng các file UI chuyển đuôi thành ejs (giống như trước đây đuôi handlebars)

//mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

const BlogPost = require('./models/BlogPost')

//body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

//2. Initialize public file to save images, videos,...
app.use(express.static('public'))

//3. Create server and listen port
app.listen(4000, () => {
    console.log("Listening on port 4000...")
})

app.get('/', (request, response) => {
    BlogPost.find({}, (err, post) => {
        console.log(post)
        response.render('index', {
            blogpost: post
        })
    })
})

app.get('/about', (request, response) => {
    response.render('about')
})

app.get('/contact', (request, response) => {
    response.render('contact')
})

app.get('/post/new', (request, response) => {
    response.render('create')
})

app.get('/post/:id', (request, response) => {
    BlogPost.findById(request.params.id, (err, detailpost) => {
        response.render('post', {       //post này không phải là link /post mà là file post.ejs
            blogpost: detailpost
        })
    })
})

//Form có method="POST" sẽ route đến link post/store này, với method="POST", 
//khi submit, những dữ liệu trong form sẽ được post lên server (tức là title
//và content mà chúng ta nhập), nếu muốn xem dữ liệu lúc post lên có gặp lỗi 
//hay sai sót gì không, chúng ta sẽ lấy chúng ra bằng thư viện body-parse 
//(thư viện này giúp chúng ta lấy ra body, chính là những dữ liệu gửi lên)
app.post('/post/store', (request, response) => {
    BlogPost.create(request.body, (err, post) => {
        response.redirect('/')  
    })
})