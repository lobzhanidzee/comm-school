import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <div className="page-center-size">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
