import React from 'react'

const PostList = ({posts}) => {
  return (
    <div>
      {
        posts.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
              <img src={item.img} />
              <p>{item.caption}</p>
              <p>{item.userName}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList
