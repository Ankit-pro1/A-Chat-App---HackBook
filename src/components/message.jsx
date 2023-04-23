import React from 'react'

function message() {
  return (
    <div className='message active'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default message
