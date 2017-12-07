import React from 'react'
import PropTypes from 'prop-types'

const postStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '50px'
  }
}

const Post = ({item, index, deletePost}) => {
  return (
    <div style={postStyle.container} key={index}>
      <p>{item.title}</p>
      <img src={item.img} />
      <p>{item.caption}</p>
      <p>{item.userName}</p>
      <button type='button' onClick={deletePost}>Delete Post</button>
    </div>
  )
}

Post.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default Post
