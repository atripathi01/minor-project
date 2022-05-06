import React from 'react';

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
    <div>
        {account?(<div>Login</div>):(<div>Register</div>)}
      
      
      <form>
        <label>User Email:</label>
        <br />
        <input placeholder='user email' required  value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br />
        <p>{emailError}</p>
        <br />
        <label>User Password:</label>
        <br />
        <input placeholder='password'  required type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
        <br />
        <p>{passwordError}</p>
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
