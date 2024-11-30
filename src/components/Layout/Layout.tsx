import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className="main-content">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
};

export default Layout;