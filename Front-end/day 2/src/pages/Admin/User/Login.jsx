import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../../assets/Design/Login.css';
import animation1 from '../../../assets/Animations/animation1.json';
import Lottie from 'lottie-react';
import imgLogin from "../../../assets/Images/yoga-image-bg-4.jpg"

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    if (username === 'admin@gmail.com' && password === 'password123') {
      console.log('Login successful');
      
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <img src={imgLogin} style={{position:'absolute',top:'0%',left:'0%',width:'700px',height:'700px'}} />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
          </div>
          {loginError && <div className="error-message">{loginError}</div>}
          <div className="form-group">
            <Link to='/home'>
            <button type="submit">Login</button>
            </Link>
          </div>
          <div className='sign'>
            <p>Dont have an account? <Link to="/signup">Signup</Link></p> 
          </div>
        </form>
      </div>
      {username && (
        <div className="welcome-back">
          <span className="welcome-message">Welcome back, {username}!</span>
        </div>
      )}
    </div>
  );
}

export default Login;
