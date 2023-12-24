import CheckoutPage from "@/components/Checkout/Checkout";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const checkout = () => {
  return (
    <div>
      <CheckoutPage></CheckoutPage>
    </div>
  );
};

export default checkout;

checkout.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
