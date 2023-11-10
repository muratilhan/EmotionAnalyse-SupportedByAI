import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starrating.css";

const StarRating = ({size, form, setForm}) => {

  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(null);

  const handleClick = (e, ratingValue) => {
    e.preventDefault();
    setRating(ratingValue);
  };

  useEffect(()=>{
    setForm({...form, rating:rating})
  },[rating])

  return (
    <div>
      {[...Array(5)].map((item, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              value={ratingValue}
              name="rating"
              onClick={(e) => handleClick(e, ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={size}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
