import React from 'react';
import '../App.css';


const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className="sidebar">
      {
      /* <img src={bannerImage} alt="Avisina International" className="banner" />*/}
      <p>Categories</p>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onSelectCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
