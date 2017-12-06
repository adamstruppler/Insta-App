import React, {Component} from 'react'
import PostList from './PostList'
import $ from 'jquery'

class App extends Component {
  state = {
    posts: undefined,
    title: undefined,
    img: undefined,
    caption: undefined,
    userName: undefined
  }

componentDidMount() {
  this.loadPostFromServer()
}

loadPostFromServer = () => {
  $.ajax({
    url:'/api/posts',
    method: 'GET'
  }).done((response) => {
    this.setState({posts: response.posts})
  })
}

render() {
  return (
    <div>
      <h1>Hello World :)</h1>
      {
        this.state.posts
        ? <PostList posts={this.state.posts} />
        : 'No Post'
      }
    </div>
  )
}

}

export default App
