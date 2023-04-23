import React from 'react';
import videoIcon from '../images/cam.png'
import userIcon from '../images/add.png'
import moreIcon from '../images/more.png'
import Messages from './messages'
import Input from './input'

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
        <Messages />
        <Input/>
      </div>
  )
}

export default chat
