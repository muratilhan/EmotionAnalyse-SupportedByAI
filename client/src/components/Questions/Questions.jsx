import React, { useContext, useEffect, useState } from "react";
import "./questions.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../../context/DataContext";

function Questions() {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [questions, setQuestions] = useState([])

  const sumCoefficients = (data) => {
    const totalKatsayi = data.reduce((acc, item) => acc + item.katsayi, 0);
    dataContext.setSumRes(totalKatsayi);
    console.log(totalKatsayi)
  };

  const completeTest = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://127.0.0.1:5000/close')
    console.log(res)
    sumCoefficients(selectedAnswers);
    navigate("/results");
  };



  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await import(`../../db/${dataContext.selectedTitle}Test`)
      setQuestions([...res.data])
      console.log([...res.data])
    }
    fetchQuestions()
  }, [dataContext]);

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
      {questions && questions.map((data, index) => {
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

      <button
        disabled={selectedAnswers.length == 5}
        onClick={completeTest}
        className="complete-test"
      >
        Testi Bitir
      </button>
    </div>
  );
}

export default Questions;
