import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()


  return (
    <div>
    <div className='login'>
        <div className="login-bg"></div>
        <form  onSubmit={function(){
                    navigate("/login")
                }}>
            <h1>SIGN UP</h1>
            <div className="input-fields">
                <input type="text" required placeholder='Enter Email'/>
                <input type="password" required placeholder='Enter Password'/>
                <input type="password" required placeholder='Enter Password Again'/>
            </div>
            <div className="login-actions">
                <a href="/">Forgot password?</a>
                <button>SUBMIT</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Signup