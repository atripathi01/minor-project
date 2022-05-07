import React from 'react';
import './login.css';
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    account,
    setAccount,
    emailError,
    passwordError,
    handleSignup,
    handleLogin,
  } = props;

  return (
    <div className='fontt'>
        {account?(<div className='title'>Login</div>):(<div className='title'>Register</div>)}
      
      
      <form className='form-l'>
        <label>User Email:</label>
        <br />
        <input placeholder='user email' required  value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br />
        <p className='error'>{emailError}</p>
        <br />
        <label>User Password:</label>
        <br />
        <input placeholder='password'  required type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
        <br />
        <p className='error'>{passwordError}</p>
        <br />
        {account?(<><button onClick={handleLogin}>Login</button>
        <p>
          don't have any account? <span onClick={()=>{setAccount(!account)}}>Register</span>
        </p></> ):(<><button onClick={handleSignup}>Register</button>
        <p>
          already have account? <span onClick={()=>{setAccount(!account)}}>Login</span>
        </p></>)}
       
        
      </form>
    </div>
  );
};

export default Login;
