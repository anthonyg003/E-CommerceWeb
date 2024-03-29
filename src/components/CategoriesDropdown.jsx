import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesDropdown = ({ selectedOption, setSelectedOption }) => {
  const navigate = useNavigate();
  const options = [
    "all products",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handleChange = (e) => {
    setSelectedOption(() => e.target.value);

    if (e.target.value === "all products") {
      navigate(`/`);
    } else {
      navigate(`/categories/${e.target.value}`);
    }
  };

  return (
    <div className="category">
      <h3> Choose Category</h3>
      <select value={selectedOption} onChange={handleChange} id="category">
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CategoriesDropdown;
