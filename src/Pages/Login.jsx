import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()


  return <>
    <div className='login'>
        <div className="login-bg"></div>
        <form onSubmit={function(){
                    navigate("/")
                }}>
            <h1>LOGIN</h1>
            <div className="input-fields">
                <input type="text" required placeholder='Enter Email'/>
                <input type="password" required placeholder='Enter Password'/>
            </div>
            <div className="login-actions">
                <a href="/">Forgot password?</a>
                <button>SUBMIT</button>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </form>
    </div>
  </>
  
}

export default Login