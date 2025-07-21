import React from "react";
import Srasia from "@/components/srasia/srasia";
import Connect from "@/components/work/connect";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/navbar/header";

const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Srasia />
      <Connect />
      <Footer />
    </div>
  );
};

export default page;
