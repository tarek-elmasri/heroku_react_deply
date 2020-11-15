import React from 'react'
import './Comment.css'
function Comment({title,body}) {
  return (
    <>
      <h2>{title}:</h2>
      <span>{body}</span>
    </>
  )
}

export default Comment
