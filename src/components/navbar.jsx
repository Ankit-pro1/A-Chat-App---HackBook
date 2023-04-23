import React from 'react'

function navbar() {
  return (
    <div className='navbar'>
        <span className="log">HackBook</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/14663257/pexels-photo-14663257.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span className="userName">Ankit</span>
            <div className="sm-btn">Logout</div>
        </div>
    </div>
  )
}

export default navbar
