import React from "react";
import Header from "@/components/navbar/header";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/media/hero";
import Connect from "@/components/work/connect";
import Footer from "@/components/footer/footer";
import Articles from "@/components/media/articles";
import Webinar from "@/components/media/webinars";
import Conference from "@/components/media/conference";
import Lower from "@/components/media/conference2";
import Insights from "@/components/work/insights";

const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Insights />
      <Webinar />
      <Conference />
      <Lower />
      <Connect />
      <Footer />
    </div>
  );
};

export default page;
