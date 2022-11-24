import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputField from '../components/login/InputFiled';

import './login.scss'

localStorage.setItem("user",JSON.stringify({username: 'admin', password: 'admin'}))
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onLogin = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user.username === username & user.password === password) {
        navigate('/');
        localStorage.setItem("isLogin","true")
    } else {
      alert('Wrong Username or Password !')
    }
  }
  return (
    <div className='container'> 
    <div className='container-icon'>👤</div>
      <div className='login-page'>
        <div className='login-page-group'>
          <labe htmlfor='username'>Usename</labe>
          <InputField id='username' type='text'setValue={setUsername} onKeyPress={onLogin}/>
        </div>
        <div className='login-page-group'>
          <labe>Password</labe>
          <InputField id='password' type='password'setValue={setPassword} onKeyPress={onLogin}/>
        </div>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  )
}

