import React from "react";
import InfoSection from "../../components/InfoSection";
import Navbar from "../../components/Navbar";
import Stake from "../../components/Stake";

const Home = () => {
  return (
    <>
      <Navbar />
      <InfoSection />
      <Stake />
    </>
  );
};

export default Home;
