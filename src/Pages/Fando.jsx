import React from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Fando() {
  return (
    <>
      <TopBar />
      <Header pageTitle="F & O" breadcrumb1="F & O" />
      <div>This is F & o page</div>
      <Footer />
    </>
  );
}

export default Fando;
