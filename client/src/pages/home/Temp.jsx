import React, { useEffect, useRef, useState } from "react";
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
      const res = await axios.post("https://duyguanaliziai2.onrender.com/start");
      console.log(res)
      //console.log(res)
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


  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({
      video: { width: 1920, height: 1080}
    }).then((stream)=>{
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
  }

  useEffect(()=>{
    //getVideo();
  },[videoRef])



  return (
    <div className="temp">
      <div className="camera-container">
        <div className="camera">
          <video ref={videoRef}></video>
        </div>
        <div className={"result" + (hasPhoto ? 'hasPhoto' : '')}>
          <canvas ref={photoRef}></canvas>
        </div>
      </div>
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
