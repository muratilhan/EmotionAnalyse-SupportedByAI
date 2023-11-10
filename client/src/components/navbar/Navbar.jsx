import React, { useContext, useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const navigate = useNavigate();

  const context = useContext(AuthContext)


  const handleClick = (e,nav) => {
    e.preventDefault() 
    navigate(nav);
}
  const logout = (e) => {
    e.preventDefault()
    context.setUser(null);
    localStorage.removeItem('user');
    navigate('/login')
  }


  return (
    <div className="navbar">
      <ul onClick={(e)=>handleClick(e,'/')} className="logo">
        <span className="logoName"><h2>MIA</h2></span>
        <span className="logoText">discover yourself</span>  
      </ul>
      <ul className="links">
        <li>
          <Link to='/feedbackUs'>Bizi Değerlendirin</Link>
        </li>
        <li>
          <Link to='/feedbacks'> Geri Bildirimler </Link>
        </li> 
      </ul>
      <ul className="auth">
        <li>
          {context.user ? <span> {context.user?.name} </span> : <Link to='/login'>Login</Link>}
        </li>
        <li>/</li>
        <li>
        {context.user ? <Link onClick={logout}>Logout</Link> : <Link to='/register'>Register</Link>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
