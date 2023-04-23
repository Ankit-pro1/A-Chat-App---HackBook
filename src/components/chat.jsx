import React from 'react';
import videoIcon from '../images/cam.png'
import userIcon from '../images/img.png'
import moreIcon from '../images/more.png'

function chat() {
  return (
      <div className="chat">
        <div className="chatInfo">
          <p>Ankit Kumar</p>
          <div className="chatInfoIcons">
            <img src={videoIcon} alt="" />
            <img src={userIcon} alt="" />
            <img src={moreIcon} alt="" />
          </div>
        </div>
      </div>
  )
}

export default chat
