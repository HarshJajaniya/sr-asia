import React from "react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/navbar/header";
import Contact from "@/components/form/contact";
import Connect from "@/components/work/connect";

const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Contact />
      <Connect />
      <Footer />
    </div>
  );
};

export default page;
