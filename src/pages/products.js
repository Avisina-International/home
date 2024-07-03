import React, { useState } from "react"
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import ProductDisplay from "../components/productdisplay";
import productData from '../data/products.json';
import MyNavbar from "../components/navbar";
import '../App.css';

const Products = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('electronics');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <MyNavbar />
      <div className="products--banner">
      </div>
      <div className="product-component">
        <Sidebar categories={Object.keys(productData)} onSelectCategory={handleCategoryChange} />
        <ProductDisplay products={productData[selectedCategory]} />
      </div>
      <Footer/>
    </>

  );
};


export default Products;
