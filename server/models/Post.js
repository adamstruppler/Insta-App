const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {type: String, required: true},
  img: String,
  caption: String,
  userName: {type: String, required: true}
})

module.exports = mongoose.model('Post', PostSchema)
