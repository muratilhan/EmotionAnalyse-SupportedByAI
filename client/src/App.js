import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import QuestionPage from "./pages/questions/QuestionPage";
import Results from "./components/results/Results";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { AuthContext } from "./context/AuthContext";
import Feedbacks from "./pages/feedbacks/Feedbacks";
import FeedbackUs from "./components/feedbackUs/FeedbackUs";
import Temp from "./pages/home/Temp";

function App() {
  const context = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const foundUser = JSON.parse(user);
      context.setUser(foundUser);
    }
  }, []);

  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Temp />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/feedbackUs" element={<FeedbackUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
