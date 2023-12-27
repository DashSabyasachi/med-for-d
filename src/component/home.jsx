import React, { useState } from "react";
import diseaseData from "../data.json";

const DiseaseSearch = () => {
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundDisease, setFoundDisease] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const fetchDiseaseData = async (diseaseName) => {
    const foundDisease = diseaseData.medicinalData.find(
      (data) => data.diseaseName.toLowerCase() === diseaseName.toLowerCase()
    );

    console.log("foundDisease:", foundDisease);
    setFoundDisease(foundDisease);
  };

  const handleSearch = () => {
    setToggle(!toggle);
    if (searchTerm.trim() !== "") {
      fetchDiseaseData(searchTerm);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter suggestions based on the input
    const filteredSuggestions = diseaseData.medicinalData.filter(
      (data) =>
        data.diseaseName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.diseaseName);
    setSuggestions([]);
  };

  return (
    <div>
      <main>
        <div className="container">
          {!toggle && (
            <div className="search-box">
              <div className="search-icon">
                <i className="fa fa-search search-icon"></i>
              </div>
              <form
                action=""
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Search"
                  id="search"
                  autoComplete="off"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </form>
              <svg
                className="search-border"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnsA="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                x="0px"
                y="0px"
                viewBox="0 0 671 111"
                style={{ enableBackground: "new 0 0 671 111" }}
                xmlSpace="preserve"
              >
                <path
                  className="border"
                  d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"
                />
                <path
                  className="border"
                  d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"
                />
              </svg>
              <div className="go-icon" onClick={handleSearch}>
                <i className="fa fa-arrow-right"></i>
              </div>
            
              {suggestions.length > 0 && (
                <div className="suggestion-box">
                  {suggestions.slice(0,6).map((suggestion, index) => (
                    <div
                    
                      key={index}
                      className="suggestion"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.diseaseName}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {foundDisease && (
            <div className="result-container">
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
                <div className="cause-contaoner">
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
          )}
        </div>
      </main>
    </div>
  );
};

export default DiseaseSearch;
