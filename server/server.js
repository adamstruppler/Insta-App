const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Post = require('./post/Post')
const app = express()

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/insta-app_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

const post = {title: 'Post', img: 'https://dog.jpg', caption: 'picture caption'}

app.post('/api.post', (req, res) => {
  const {title, img, caption} = req.body
  const newPost = {title, img, caption}
  Post(newPost).save((err, savedPost) => {
    if(err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Uploaded', data: savedPost})
    }
  })
})

app.get('/api.post', (req,res) => {
  Post.find((err, posts) => {
    if(err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Uploaded', posts})
    }
  })
})

const server = app.listen(port, () => console.log(`:( Running on port: ${port}`))

module.exports = server
