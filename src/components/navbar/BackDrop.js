import React from 'react'
import './backdrop.css'
function BackDrop({click}) {
  return (
    <div className='backdrop' onClick={click}></div>
  )
}

export default BackDrop
