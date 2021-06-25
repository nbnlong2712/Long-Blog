const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/test_my_database', {useNewUrlParser: true});

BlogPost.create({
    title: 'We are one',
    body: 'Put your flags up in the sky'
}, (err, blogpost) => {
    console.log(err, blogpost);
});

BlogPost.find({}, (err, blogpost) => {
    console.log(err, blogpost);
});

BlogPost.find({
    title: 'We are one'
}, (err, blogpost) => {
    console.log(err, blogpost);
});

var id = "60d559617bd2d844281c1c6d";
BlogPost.findByIdAndUpdate(id, {
    title: 'WE ARE ONE',
    body: 'Put your flags up in the sky - say oh yeah!'
}, (err, blogpost) => {
    console.log(err, blogpost)
});

BlogPost.collection.deleteMany({
    title: 'We are one'
}, (err, blogpost)=>{
    console.log(err, blogpost)
});