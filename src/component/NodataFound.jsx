import React from 'react';
import arrow from "../image/left-arrow.png";
const NodataFound = ({ handleReturnToSearch }) => {
  return (
    <div>
      <h1>No data Found</h1>
      <a className="return-arrow" onClick={handleReturnToSearch}>
        {/* Add your arrow image here */}
        <img src={arrow} alt="btn" />
      </a>
    </div>
  );
};

export default NodataFound;
