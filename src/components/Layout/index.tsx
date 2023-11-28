import { Outlet } from "react-router-dom";
import Loader from "react-loaders";
import Header from "../Header";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
      </div>
      <Loader type="ball-pulse-sync" active />
    </>
  );
};

export default Layout;
