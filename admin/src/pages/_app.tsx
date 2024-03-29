import type { AppProps } from "next/app";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftAppBar from "../components/LeftBar";
import Topbar from "../components/Topbar";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import LoginBox from "../components/LoginBox";
import { Provider } from "react-redux";
import { store } from "../rtk/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <div className="customBg h100 ">
        <Topbar />
        <div className="row">
          <div className=" col-2 customLeftBar">
            <LeftAppBar />
          </div>

          <div className="col-10 right_side_bg pe-3">
            <Component {...pageProps} />
          </div>
        </div>
      </div>

      <LoginBox />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  );
}

export default MyApp;
