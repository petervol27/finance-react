import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login({ setIsAuthenticated }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const errortxt = document.getElementById('errortxt');
    e.preventDefault();
    const response = await axios.post('http://127.0.0.1:7500/', {
      username: username,
      password: password,
    });
    console.log(response.data);
    if (response.data.response === 'Success') {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      errortxt.innerHTML = response.data.response;
    }
  };

  return (
    <>
      <div className="text-center container w-25 border mt-3">
        <h2 className="mt-3">Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p className="text-danger mt-3" id="errortxt"></p>
      </div>
    </>
  );
}

export default Login;
