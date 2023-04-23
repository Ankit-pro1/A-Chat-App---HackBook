import React from 'react';
import userProfile from '../images/addAvatar.png';

function register() {
    return (
        <div>
            <div className="formContainer">
                <div className="wrapper">
                    <div className="formHeading">
                        <h2 className="logo">HackBook</h2>
                        <span className="title">Register Now</span>
                    </div>
                    <form action="" className="form">
                        <input type="text" name="" id="" placeholder='name' />
                        <input type="email" name="" id="" placeholder='email' />
                        <input type="password" name="" id="" placeholder='password' />
                        <input type="file" name="" id="userImg" />
                        <label htmlFor="userImg">
                            <img src={userProfile} alt="" />
                           <p> Add profile picture</p></label>
                        <button className='btn'>Sign Up</button>
                    </form>
                    <div className="formFooter">
                        <p>Do you have an account? <a href="#">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register
