import React from 'react';
import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

function home() {
  return (
    <div>
       <div className="home">
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
       </div>
    </div>
  )
}

export default home
