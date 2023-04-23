import React from 'react'

function login() {
    return (
        <div>
            <div className="formContainer">
                <div className="wrapper">
                    <div className="formHeading">
                        <h2 className="logo">HackBook</h2>
                        <span className="title">Login Now</span>
                    </div>
                    <form action="" className="form">
                        <input type="email" name="" id="" placeholder='email' />
                        <input type="password" name="" id="" placeholder='password' />
                        <button className='btn'>Login</button>
                    </form>
                    <div className="formFooter">
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
