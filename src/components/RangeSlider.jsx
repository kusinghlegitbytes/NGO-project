import React, { useState } from "react";
const RangeSlider = () => {
  const [value, setValue] = useState(1);
  const handleSlide = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="search-slider-container">
      <div className="range-slider-label"><label>Up to {value} km</label></div>
      <input
        type="range"
        min="1"
        max="50"
        value={value}
        onChange={handleSlide}
        className="slider"
      />
    </div>
  );
};

export default RangeSlider;
