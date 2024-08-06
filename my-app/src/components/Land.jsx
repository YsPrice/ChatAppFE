import React from 'react'
import '../css/Land.css'
const Land = () => {
  return (
    <div className="app">
    <div className="header">
      <h1>Chat Application</h1>
      <div className="button-container">
        <a href="/login" className="btn">Login</a>
        <a href="/signup" className="btn">Sign Up</a>
        <a href="/dashboard" className="btn">Dashboard</a>
      </div>
    </div>
    <div className="main">
  
      <div className='image-cont'>
        <div className='landing-text-cont'>
          <div className='title-cont'><h1 className='landing-text'>Say it</h1></div>
<div className='text-cont'>
<p className='landing-text-small'>Chat app for filler text, words to say about app Chat app for filler text, words to say about app</p>
</div>
</div>
<img className="image"src={"https://placehold.co/600x400"}/>
      </div>
    
    </div>
    <div className="footer">
      <p>&copy; 2024 Chat Application. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Land