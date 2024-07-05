import React from "react";
import "../App.css";

const Banner = ({className, text}) => {
  return (
    <div className={className}>
        <text>{text}</text>
    </div>
  );
};


export default Banner;
