import RootLayout from "@/components/Layout/RootLayout";
import SignUpPage from "@/components/SignUp/SignUp";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <SignUpPage></SignUpPage>
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
