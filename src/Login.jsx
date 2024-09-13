import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('test');
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
