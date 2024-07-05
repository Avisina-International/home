import React from "react"
import Header from '../components/header';
import MyCrousel from '../components/crousel';
import MyContactUs from '../components/contactUs';
import MyAboutUs from '../components/aboutUs';
import Footer from '../components/footer'; 
// import MyAlert from '../components/alert';
import '../App.css';

const Home = (props) => {
    return (
        <div className="App">
          {/* <MyAlert text="Welcome to Avisina International" /> */}
          <Header className="banner--container" text="Avisina International"/>
          <MyCrousel />
          <MyAboutUs />
          <MyContactUs />
          <Footer />
        </div>
      );
};

export default Home;
