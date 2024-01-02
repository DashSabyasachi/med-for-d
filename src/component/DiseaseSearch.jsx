import React, { useState } from "react";
import SearchBox from "./SearchBox";
import DiseaseResult from "./DiseaseResult";
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
    const filteredSuggestions = diseaseData.medicinalData.filter((data) =>
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
            <SearchBox
              searchTerm={searchTerm}
              handleInputChange={handleInputChange}
              handleSearch={handleSearch}
              suggestions={suggestions}
              handleSuggestionClick={handleSuggestionClick}
            />
          )}
    
          {foundDisease && (
            <DiseaseResult
              foundDisease={foundDisease}
              setFoundDisease={setFoundDisease}
              setToggle={setToggle}
              setSearchTerm={setSearchTerm}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default DiseaseSearch;
