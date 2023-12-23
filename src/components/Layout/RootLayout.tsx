import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};
export default RootLayout;
