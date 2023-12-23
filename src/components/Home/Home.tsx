import React from "react";
import BikePage from "../Bike/Bike";
import Banner from "../Banner/Banner";
import TopBike from "../TopBike/TopBike";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <BikePage></BikePage>
      <TopBike></TopBike>
    </div>
  );
};

export default HomePage;
