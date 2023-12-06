import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import {
  calculateDepression,
  calculateDepressionPoint,
} from "./CalculateDepression";
import {
  calculateUmutsuzluk,
  calculateDespairPoint,
} from "./CalculateUmutsuzluk";
import { Link } from "react-router-dom";
import "./result.css";

const Results = () => {
  const dataContext = useContext(DataContext);

  const handleClick = () => {
    console.log(dataContext && dataContext.response);
  };
  const [point, setPoint] = useState(0);
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    console.log(dataContext.response);
    if (dataContext.response) {
      if (dataContext.selectedTitle?.toLowerCase() == "depresyon") {
        const res = calculateDepression(dataContext.response?.commonEmotion);
        console.log(res);
        setPoint(dataContext.sumRes + res);
      }
      if (dataContext.selectedTitle?.toLowerCase() == "umutsuzluk") {
        const res = calculateUmutsuzluk(dataContext.response?.commonEmotion);
        setPoint(dataContext.sumRes + res);
      }
    }
  }, [dataContext, dataContext?.selectedTitle]);

  useEffect(() => {
    if (dataContext?.selectedTitle?.toLowerCase() == "depresyon") {
      const res = calculateDepressionPoint(point);
      setResultText(res);
    }
    if (dataContext?.selectedTitle?.toLowerCase() == "umutsuzluk") {
      const res = calculateDespairPoint(point);
      setResultText(res);
    }
  }, [point, dataContext?.selectedTitle]);

  return (
    <div className="result">
      <div>
        <h4 style={{ marginTop: "3rem" }}>
          {" "}
          <span style={{ color: "red" }}>Test Sonucunuz:</span> {resultText}
        </h4>
        <div className="ai-result">
        <h5>
          Görüntülerinizden aldığımız bilgiler sonucu elde ettiğimiz Sonuçlar:
        </h5>
        <table>
          <tr className="table-title">
            <td></td>
            <td>Mutluluk</td>
            <td>Kizgin</td>
            <td>Korkmus</td>
            <td>Notr</td>
            <td>Şaşırmış</td>
          </tr>
          <tr>
            <td>oran (%)</td>
            <td> {dataContext.response?.emotionCounts.Mutlu} </td>
            <td> {dataContext.response?.emotionCounts.Kizgin} </td>
            <td> {dataContext.response?.emotionCounts.Korkmus} </td>
            <td> {dataContext.response?.emotionCounts.Notr} </td>
            <td> {dataContext.response?.emotionCounts.Sasirmis} </td>

          </tr>
        </table>
        </div>
      </div>
      <div className="feed-us">
        <p>
          Umarım herşey yolundadır. Yapay zeka destekli duygu analizi testimizi
          daha verimli hale getirebilmek için fikirlerinizi belirtmeyi
          unutmayınız 🥰
        </p>
        <Link to="/feedbackus">
          <button>Bizi Değerlendir</button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
