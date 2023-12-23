import Navbar from "../Navbar/Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};
export default RootLayout;
