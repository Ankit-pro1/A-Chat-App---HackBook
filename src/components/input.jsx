import React from 'react'
import img from '../images/img.png'
import attach from '../images/attach.png'

function input() {
  return (
    <div className='input'>
        <input type="text" name="" id="" placeholder='type something...' />
        <div className="send">
            {/* <img src={attach} alt="" /> */}
            <input type="file" name="" id="file" />
            <label htmlFor="file">
                <img src={img} alt="" />
            </label>
            <button>Send</button>
        </div>      
    </div>
  )
}

export default input
