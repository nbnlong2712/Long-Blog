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

//2. Initialize public file to save images, videos,...
app.use(express.static('public'))

//3. Create server and listen port
app.listen(4000, () => {
    console.log("Listening on port 4000...")
})

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/about', (request, response) => {
    response.render('about')
})

app.get('/contact', (request, response) => {
    response.render('contact')
})

app.get('/post', (request, response) => {
    response.render('post')
})