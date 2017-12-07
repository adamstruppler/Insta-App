import React, {Component} from 'react'
import PostList from './PostList'
import Form from './Form'
import $ from 'jquery'

class App extends Component {
  state = {
    posts: undefined,
    title: undefined,
    img: undefined,
    caption: undefined,
    userName: undefined
  }

  componentDidMount () {
    this.loadPostFromServer()
  }

loadPostFromServer = () => {
  $.ajax({
    url: '/api/posts',
    method: 'GET'
  }).done((response) => {
    this.setState({posts: response.posts})
  })
}

submitNewPost = (e) => {
  e.preventDefault()
  const newPost = {
    title: this.state.title,
    caption: this.state.caption,
    img: this.state.img,
    userName: this.state.userName
  }
  $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: newPost
  }).done(response => {
    console.log(response)
    this.loadPostFromServer()
  })
}

deletePost = (post) => {
  $.ajax({
    url: `/api/posts/${post._id}`,
    method: 'DELETE'
  }).done(response => {
    console.log(response)
    this.loadPostFromServer()
  })
}

onCaptionChange = (e) => this.setState({caption: e.target.value})
onImageChange = (e) => this.setState({img: e.target.value})
onTitleChange = (e) => this.setState({title: e.target.value})
onUsernameChange = (e) => this.setState({userName: e.target.value})

render () {
  return (
    <div>
      <h1>Instagram [ o*]</h1>
      <form>
        <label>Title:</label>
        <input type='text' onChange={this.onTitleChange} />

        <label>Image</label>
        <input type='text' onChange={this.onImageChange} />

        <label>Caption</label>
        <input type='text' onChange={this.onCaptionChange} />

        <label>Username</label>
        <input type='text' onChange={this.onUsernameChange} />

        <button onClick={this.submitNewPost}>Submit</button>
      </form>
      {
        this.state.posts
          ? <PostList posts={this.state.posts} deletePost={this.deletePost} />
          : 'No Post'
      }
    </div>
  )
}
}

export default App
