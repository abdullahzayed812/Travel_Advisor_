import React, { useState } from "react";
import "./SelectBox.scss";

export function SelectBox({ type }) {
  const initialSelect = () => {
    if (type === "rating") {
      return "All";
    }
    return "Restaurant";
  };
  const [showOptions, setShowOptions] = useState(false);
  const [selectValue, setSelectValue] = useState(initialSelect);
  const handleSelect = (event) => {
    if (event.target.classList.contains("option")) {
      setSelectValue(event.target.textContent.trim());
      setShowOptions(false);
      return;
    }
    return;
  };
  return (
    <div className="select-box">
      <h4
        onClick={() => setShowOptions(!showOptions)}
        className={showOptions ? "selected-option active" : "selected-option"}
      >
        {selectValue}
      </h4>
      <div className={showOptions ? "option-box active" : "option-box"}>
        <div onClick={handleSelect} className="option">
          {type === "type" ? "Restaurant" : "All"}
        </div>
        <div onClick={handleSelect} className="option">
          {type === "type" ? "Hotels" : "Above 3.0"}
        </div>
        <div onClick={handleSelect} className="option">
          {type === "type" ? "Attractions" : "Above 4.0"}
        </div>
        {type === "rating" ? (
          <div onClick={handleSelect} className="option">
            {type === "type" ? "Attractions" : "Above 4.5"}
          </div>
        ) : null}
      </div>
    </div>
  );
}
