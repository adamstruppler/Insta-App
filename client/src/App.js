import React, {Component} from 'react'
import Header from './Header'
import Form from './Form'
import PostList from './PostList'
import $ from 'jquery'

class App extends Component {
  state = {
    posts: undefined,
    title: undefined,
    img: undefined,
    caption: undefined
  }

componentDidMount() {
  this.loadPostsFromServer()
}

loadPostsFromServer = () => {
  $.ajax({
    url: '/api/post',
    method: 'GET'
  }).done((response) => {
    this.setState({posts: response.posts})
  })
}


submitPostsToServer = () => {
  const newPost = {
    title: this.state.title,
    img: this.state.img,
    caption: this.state.caption
  }
  $.ajax({
    url: '/api/post',
    method: 'POST',
    data: newPost
  }).done((response) => {
    this.loadPostsFromServer()
  })
}

updateTitle = (e) => this.setState({title: e.target.value})
updateImg = (e) => this.setState({img: e.target.value})
updateCaption = (e) => this.setState({caption: e.target.value})

render() {
  return (
    <div>
       <Header />
       <Form />
    {
      this.state.posts
      ? <PostList posts={this.state.post} />
      :'No Post'
    }
    </div>
   
  )
}

}

export default App
