import React, {useState} from 'react'
import { auth } from "./Firebase";
import { Link ,useHistory} from 'react-router-dom';
function Register() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const history =useHistory()
    const handleRegister =(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then(
            auth=>{
                auth.user.displayName({
                    displayName:name
                })
                history.push('/')
            }
           
        ).catch(error => error.message)
    }

  return (
    <div  className='login_main'>
        <div className="login_wrapper">
            <div className="login_box">
                <div className="login_header">
                    <h1>Sign Up!</h1>
                    <p>Become a part of our travel  community</p>
                </div>
                <div className="login_auth">
                <p>Your Name</p>
                    <input type="email" placeholder='Your Name'  value={name} onChange={e=>setName(e.target.value)} />
                    <p>Your Email</p>
                    <input type="email" placeholder='example@comany.com' value={email} onChange={e=>setEmail(e.target.value)} />
                    <p>Your Password</p>
                    <input type="password" name="" id="" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type='submit' onClick={handleRegister}> Sign in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register