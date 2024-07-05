import React, { useState } from "react"
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import ProductDisplay from "../components/productdisplay";
import productData from '../data/products.json';
import Header from "../components/header";
import '../App.css';

const Products = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('electronics');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header text="Avisina Products" className="product--banner--container" />
      <div className="product-component">
        <Sidebar categories={Object.keys(productData)} onSelectCategory={handleCategoryChange} />
        <ProductDisplay products={productData[selectedCategory]} />
      </div>
      <Footer/>
    </>

  );
};


export default Products;
