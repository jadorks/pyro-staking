import React from "react";
import Footer from "../../components/Footer";
import InfoSection from "../../components/InfoSection";
import Navbar from "../../components/Navbar";
import Stake from "../../components/Stake";

const Home = () => {
  return (
    <>
      <Navbar />
      <InfoSection />
      <Stake />
      <Footer/>
    </>
  );
};

export default Home;
