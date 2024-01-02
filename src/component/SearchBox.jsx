import React from "react";

const SearchBox = ({ searchTerm, handleInputChange, handleSearch, suggestions, handleSuggestionClick }) => {
  return (
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
          {suggestions.slice(0, 6).map((suggestion, index) => (
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
  );
};

export default SearchBox;
