import React, { useEffect, useState } from "react";
import "./feetbacks.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import SingleFeedback from "../singleFeedback/SingleFeedback";

const Feedbacks = () => {

  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([])

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/feedbackus");
  };

  useEffect(()=>{
    const getFeedbacks = async () => {
      try{
        const res = await axios.get('https://emotionapi.onrender.com/feedback/')
        setFeedbacks(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getFeedbacks()
  },[])

  return (
    <div className="feedback-page">
      <div className="feedbacks-container">
      <div className="feedbacks-title">
        <h3>
          Kullanıcılarımızın Feedbackleri. Projemizi daha etkili bir hale
          getirmek için düşüncelerinizi bizimle paylaşmaktan çekinmeyin.
        </h3>
        <button onClick={handleClick}>Send Feedback</button>
      </div>
      <div className="feedbacks">
        <h2>Feedbacks:</h2>
        {feedbacks && feedbacks.map(feedback => (
          <SingleFeedback  key={feedback._id} feedback={ feedback } />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Feedbacks;
