import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './authStyle.css'

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.post('https://emotionapi.onrender.com/auth/register', form)
      navigate('/login')
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="auth-container">
      
      <Form onSubmit={handleClick} type="submit" className="auth-form">
        <h3>Register</h3>
        <Form.Group className="input-container" controlId="formBasicName">
          <Form.Control
            required
            className="input"  
            name="name"
            value={form.name}
            onChange={(e) => handleChange(e)}
            type="string"
            placeholder="Name"
          />
        </Form.Group>
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

export default Register;