import React from 'react'

const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">Text Lorem</p>
      </div>
    </div>
  )
}

export default Post