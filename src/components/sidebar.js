import React from 'react';
import { GoDotFill } from "react-icons/go";
import '../App.css';


const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onSelectCategory(category)}>
            <GoDotFill />  {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
