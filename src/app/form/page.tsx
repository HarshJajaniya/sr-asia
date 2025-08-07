import React from "react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/navbar/header";
import Contact from "@/components/form/contact";


const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default page;
