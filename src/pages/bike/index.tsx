import BikePage from "@/components/Bike/Bike";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const bike = () => {
  return (
    <div>
      <BikePage></BikePage>
    </div>
  );
};

export default bike;

bike.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
