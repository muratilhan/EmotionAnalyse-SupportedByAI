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
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Results = () => {
  const dataContext = useContext(DataContext);
  const authContext = useContext(AuthContext);

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

  useEffect(() => {
    const sendData = async () => {
      const user = localStorage.getItem("user");
      const foundUser = JSON.parse(user);
      console.log(foundUser._id);
      const data = await axios.post(
        "https://emotionapi.onrender.com/testResult/",
        {
          commonEmotion: resultText,
          Igrenmis: dataContext?.response?.emotionCounts.Igrenmis,
          Kizgin: dataContext?.response?.emotionCounts.Kizgin,
          Korkmus: dataContext?.response?.emotionCounts.Korkmus,
          Mutlu: dataContext?.response?.emotionCounts.Mutlu,
          Mutsuz: dataContext?.response?.emotionCounts.Mutsuz,
          Notr: dataContext?.response?.emotionCounts.Notr,
          Sasirmis: dataContext?.response?.emotionCounts.Sasirmis,
          userID: foundUser._id,
        }
      );
      console.log(data);
    };
    if (dataContext.response && resultText != "") {
      console.log("hehe");
      sendData();
    }
  }, [dataContext]);

  return (
    <div className="result">
      <div className="result-inner">
        <div>
          <h4 style={{ marginTop: "3rem" }}>
            {" "}
            <span style={{ color: "red" }}>Test Sonucunuz:</span> {resultText}
          </h4>
          <div className="ai-result">
            <h5>
              Görüntülerinizden aldığımız bilgiler sonucu elde ettiğimiz
              Sonuçlar:
            </h5>
            <table>
              <tr className="table-title">
                <td></td>
                <td>Igrenmis</td>
                <td>Kizgin</td>
                <td>Korkmus</td>
                <td>Mutlu</td>
                <td>Mutsuz</td>
                <td>Notr</td>
                <td>Sasirmis</td>
              </tr>
              <tr>
                <td>Duygu sayısı</td>
                <td> {dataContext.response?.emotionCounts.Igrenmis} </td>
                <td> {dataContext.response?.emotionCounts.Kizgin} </td>
                <td> {dataContext.response?.emotionCounts.Korkmus} </td>
                <td> {dataContext.response?.emotionCounts.Mutlu} </td>
                <td> {dataContext.response?.emotionCounts.Mutsuz} </td>
                <td> {dataContext.response?.emotionCounts.Notr} </td>
                <td> {dataContext.response?.emotionCounts.Sasirmis} </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="prevresults">
          <Link to="/prevresults">Önceki Sonuçlarımı Görüntüle ⤴️</Link>
        </div>
        <div className="feed-us">
          <p>
            Umarım herşey yolundadır. Yapay zeka destekli duygu analizi
            testimizi daha verimli hale getirebilmek için fikirlerinizi
            belirtmeyi unutmayınız 🥰
          </p>
          <Link to="/feedbackus">
            <button>Bizi Değerlendir</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
