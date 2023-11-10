import React from "react";
import "./singleFeedback.css";
import { FaStar } from "react-icons/fa";

const SingleFeedback = ({ feedback }) => {
  return (
    <div className="single-feedback-container">
      <div className="single-feedback-header">
        <p>
          {" "}
          <span className="feedback-info">Name:</span>{" "}
          <span> {feedback.user?.name} </span>{" "}
        </p>
        <p>
          {" "}
          <span className="feedback-info">Tarih:</span>{" "}
          <span> {new Date(feedback.createdAt).toLocaleDateString()} </span>{" "}
        </p>
      </div>
      <div className="single-feedback-comment">
        <span className="feedback-info-comment">Comment:</span>{" "}
        {feedback.comment}
      </div>
      <div>
        <ul>
          {[...Array(5)].map((item, i) => {
            return <FaStar key={i} color={feedback.rating > i ? "#ffc107" : "#e4e5e9"} size={20} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleFeedback;
