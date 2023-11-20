import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './authStyle.css'
import { AuthContext } from "../../context/AuthContext";

function Login() {

  const context = useContext(AuthContext)
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('https://emotionapi.onrender.com/auth/login/', form)
      context.setUser(res.data.user)
      localStorage.setItem("user",JSON.stringify(res.data.user))
      console.log(res.data)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  };
  

  return (
    <div className="auth-container">
      
      <Form onSubmit={handleClick} type="submit" className="auth-form">
        <h3>Login</h3>
        <Form.Group className="input-container" controlId="formBasicEmail">
          <Form.Control
            required
            className="input"  
            name="email"
            value={form.email}
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="input-container" controlId="formBasicPassword">
          <Form.Control
            className="input"
            minLength="5"
            maxLength="20"
            required
            name="password"
            value={form.password}
            onChange={(e) => handleChange(e)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="input-container">
          <Button className="button" variant="dark" type="submit">
            Oturum Aç
          </Button>
        </Form.Group>
      </Form>
      
   
    </div>
  );
}

export default Login;