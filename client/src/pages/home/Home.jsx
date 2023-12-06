import React, { useContext, useEffect } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import mutluluk from "./images/mutluluk.jpg";
import umutsuzluk from "./images/umutsuzluk.jpg";
import stress from "./images/stress.jpg";

import { DataContext } from "../../context/DataContext";

const Home = () => {
  const dataContext = useContext(DataContext)
  const navigate = useNavigate();
  const allTests = [
    { title: "Depresyon", imgSource: mutluluk },
    { title: "Umutsuzluk", imgSource: umutsuzluk },
    { title: "Stress", imgSource: stress },
  ];
  var result
  const handleClick = (e, item) => {
    e.preventDefault(); 
    dataContext.setSelectedTitle(item)
    axios.post('http://127.0.0.1:5000/start').then(item => {
      dataContext.setResponse(item.data)
      console.log(item)
    });
    navigate("/questions");
  };

  return (
    <div className="home">
          <Link to='/results'>asd</Link>

      <div className="home-title">
        <div>
          <img 
            src="https://www.hiwellapp.com/assets/images/test/anksiyete-kaygi-testi.svg"
            alt=""
          />
          <img
            src="https://www.hiwellapp.com/assets/images/test/depresyon-testi.svg"
            alt=""
          />
          <img
            src="https://www.hiwellapp.com/assets/images/test/travma-sonrasi-stres-bozuklugu-testi.svg"
            alt=""
          />
        </div>
        <h1> Hemen Psikoljinizi Test Edin! </h1>
        <p>
          Ücretsiz ve kolayca çözebileceğiniz psikolojik testler ile kendinizi
          test edin ve psikolojik sıkıntılarınızın düzeyi hakkında bilgi edinin
        </p>
      </div>
      <ul className="test-buttons-container">
        {allTests.map((item,i) => {
          return (
            <li key={i}>
              <img src={item.imgSource} alt="" />

              <button onClick={(e)=> handleClick(e,item.title)}> {item.title} Testi</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
