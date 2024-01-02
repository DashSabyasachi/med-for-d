import React from "react";
import arrow from "../image/left-arrow.png";
const DiseaseResult = ({
  foundDisease,
  setFoundDisease,
  setToggle,
  setSearchTerm,
}) => {
  const handleReturnToSearch = () => {
    setFoundDisease(null);
    setToggle(false);
    setSearchTerm("");
  };

  return (
    <div className="result-container">
      <a className="return-arrow" onClick={handleReturnToSearch}>
        <img src={arrow} alt="btn" />
      </a>
      {/* {foundDisease ? null : <p>No data found</p>} */}
      <strong>Disease:</strong>
      <div className="disease-name">
        <h1>{foundDisease.diseaseName}</h1>
      </div>
      <div className="solution-container">
        <div className="symptoms-container">
          <div className="title">
            <h2>Symptoms</h2>
          </div>
          <span>
            <ul>
              {foundDisease.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </span>
        </div>
        <div className="cause-container">
          <div className="title">
            <h2>Causes</h2>
          </div>
          <span>
            <ul>
              {foundDisease.causes.map((cause, i) => (
                <li key={i}>{cause}</li>
              ))}
            </ul>
          </span>
        </div>
        <div className="med-container">
          <div className="title">
            <h2>Recommended Medicine</h2>
          </div>
          <span>
            <ul>
              {foundDisease.recommendedMedicine.map((medicine, index) => (
                <li key={index}>{medicine}</li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiseaseResult;
