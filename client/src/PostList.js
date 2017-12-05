import React from 'react'

const PostList = ({posts}) => {
  return (
    <div>
      {
        posts.map((item, index) => {
          return (
            <div>
              <h1>{item.title}</h1>
              <img src={item.img} />
              <h4>{item.caption}</h4>
            </div>  
          )
        })
      }
    </div>
  )
}

export default PostList
