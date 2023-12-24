import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./prevresults.css";
import { Link } from "react-router-dom";
import loadingScreen from "./loading.svg";
import { DataContext } from "../../context/DataContext";

const PrevResults = () => {
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext)
  const [prevResults, setPrevResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalEmotion, setTotalEmotion] = useState(0)

  useEffect(() => {
    const fetchPrevResults = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://emotionapi.onrender.com/testResult/${authContext?.user?._id}`
      );
      setPrevResults(res.data.sort((a, b) =>
      a.createdAt < b.createdAt ? 1 : -1
    ));
      setLoading(false);
    };
    fetchPrevResults();
  }, [dataContext]);

  if (loading)
    return (
      <div style={{marginTop:"10rem"}}>
        {" "}
        <img src={loadingScreen} alt="Spinner" width="200" height="200" />{" "}
      </div>
    );

  return (
    <div className="prev-results">
      <div>
        <Link to="/results">↩️ Önceki sayfaya dön</Link>
      </div>
      {prevResults.length == 0 ? <h1>'Başka bir test sonucunuz bulunmamaktadır...'</h1> : 
        prevResults.map((item, index) => (
          <div className="table-container2">
            <h4>Genel Test Sonucunuz: {item.commonEmotion} </h4>

            <table className={index % 2 === 0 ? "even-table" : "odd-table"}>
              <tbody>
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
                  <td>Duygu Sayısı</td>
                  <td> {item.Igrenmis} </td>
                  <td> {item.Kizgin} </td>
                  <td> {item.Korkmus} </td>
                  <td> {item.Mutlu} </td>
                  <td> {item.Mutsuz} </td>
                  <td> {item.Notr} </td>
                  <td> {item.Sasirmis} </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default PrevResults;
