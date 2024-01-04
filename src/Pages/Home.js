import React from "react";
import MainSlider from "../components/home/MainSlider";
import Header from "./../components/layouts/Header";
import MainFilter from "./../components/home/MainFilter";
import Testomonial from "../components/home/Testomonial";
import Footer from "../components/layouts/Footer";


function Home() {
  return (
    <div>
      <Header/>
      
      <MainSlider />
      <MainFilter />
      
      {/* <OurBuses/> */}
     <Testomonial/>
      
      <Footer />
    </div>
  );
}

export default Home;
