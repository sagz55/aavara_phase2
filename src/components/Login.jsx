import React, {useState} from 'react'
import './Login.css'
import { auth } from "./Firebase";
import { Link ,useHistory} from 'react-router-dom';
function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const history =useHistory()
    const handleSignin =(e)=>{
        auth.signInWithEmailAndPassword(email,password).then(
            history.push('/')
        ).catch(error=>error.message)
    }
  return (
    <div  className='login_main'>
        <div className="login_wrapper">
            <div className="login_box">
                <div className="login_header">
                    <h1>Sign In</h1>
                    <p>Become a part of our travel community</p>
                </div>
                <div className="login_auth">
                    <p>Your Email</p>
                    <input type="email" placeholder='example@comany.com' value={email} onChange={e=>setEmail(e.target.value)} />
                    <p>Your Password</p>
                    <input type="password" name="" id=""  value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type='submit' onClick={handleSignin}> Sign in</button>
                </div>
                <h3>Dont have an account? <Link  className='register' to='/register'>Create one now!</Link> </h3>
            </div>
        </div>  
    </div>
  )
}

export default Login