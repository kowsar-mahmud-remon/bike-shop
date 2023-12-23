import RootLayout from "@/components/Layout/RootLayout";
import LoginPage from "@/components/LoginPage/LoginPage";
import React from "react";

const login = () => {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
};

export default login;

login.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
