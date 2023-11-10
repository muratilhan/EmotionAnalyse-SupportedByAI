import React, { useEffect, useState } from "react";
import "./questions.css";
import { data as questions } from "../../DB";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Questions() {
  const navigate = useNavigate();

  const completeTest = (e) => {
    e.preventDefault();
    navigate("/results");
    const openCamera = async () => {
      const res = await axios.post('http://127.0.0.1:5000/stop')
    }
    //openCamera()
  };

  const [disabled, setDisabled] = useState(true)




  const [selectedAnswer, setSelectedAnswer] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleClick = (answer, questionIndex) => {
    setSelectedAnswer(answer);
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };
  const [activeTest, setActiveTest] = useState(false);
  const toggleActiveTest = () => {
    setActiveTest((prev) => !prev);
  };


  return (
    <div className="question-container">
      {questions.map((data, index) => {
        return (
          <div className="question" key={index}>
            <div className="mobile-info">
              <span>Question: {index + 1}</span>
            </div>
            <h2>{data.question}</h2>
            <div className="answers">
              {data.answers.map((answer, answerIndex) => {
                const isSelected = selectedAnswers[index] === answer;
                return (
                  <button
                    key={answerIndex}
                    onClick={() => handleClick(answer, index)}
                    className={isSelected ? "active answer" : "answer"}
                  >
                    {answer.text}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <button disabled={questions.length != selectedAnswers.length} onClick={completeTest} className="complete-test">
        Testi Bitir
      </button>
    </div>
  );
}

export default Questions;
