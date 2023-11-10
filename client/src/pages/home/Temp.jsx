import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

const Temp = () => {
  const [message, setMessage] = useState("Gülmeme Challange");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [isLaughed, setIslaughed] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    //navigate("/questions");
    const openCamera = async () => {
      const res = await axios.post("http://127.0.0.1:5000/start");
      setIslaughed(res.data)
    };
    openCamera();
  };




  useEffect(() => {
    setIsButtonDisabled(true)
    setMessage("Hazır")
    setTimeout(()=>{
       setMessage("Gülmeme Challange")
       setIsButtonDisabled(false)
       setIslaughed(false)
    },2000)
  }, [isLaughed]);

  return (
    <div className="temp">
      {isLaughed ? (
        <div className="emoji">
          <span>😁</span>
          <p>Kaybettin!</p>
        </div>
      ) : <span>😉</span>}
      <button disabled={isButtonDisabled} onClick={(e) => handleClick(e)}>{message}</button>
    </div>
  );
};

export default Temp;
