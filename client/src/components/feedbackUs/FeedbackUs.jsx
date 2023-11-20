import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./feedbackUs.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import StarRating from "../starRating/StarRating";

const FeedbackUs = () => {
  const context = useContext(AuthContext);
  const [form, setForm] = useState({
    comment: "",
    rating: 1,
    userID: null,
  });

  useEffect(() => {
    setForm({ ...form, userID: context.user?._id });
  }, [context.user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://emotionapi.onrender.com/feedback/", form);
      console.log(res);
      alert('Feeback has been sent')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Form onSubmit={handleClick} type="submit" className="feedbackus-form">
        <h3>
          Sizin Görüşleriniz bizim için çok değerli. Görüşlerinizi
          değerlendireceğiz.
        </h3>
        <textarea
          required
          className="feedbackus-form-comment"
          name="comment"
          value={form.comment}
          placeholder="Comment.."
          onChange={(e) => handleChange(e)}
          cols="70"
          rows="8"
        ></textarea>
        <div className="rating-container"> 
          <h2>Rate Us:</h2>
          <StarRating setForm={setForm} form={form} size={50} />
        </div>

        <Form.Group className="">
          <Button
            className="feedbackus-form-button"
            variant="dark"
            type="submit"
          >
            Gönder
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FeedbackUs;
