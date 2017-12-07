import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const PostList = ({posts, deletePost}) => {
  return (
    <div>
      {
        posts.map((item, index) => {
          return (
            <Post
              item={item}
              index={index}
              deletePost={() => deletePost(item)}
            />
          )
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostList
