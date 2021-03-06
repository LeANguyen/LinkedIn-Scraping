import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Screen = ({ children }) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
      <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Screen;
