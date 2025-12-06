import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQsection";

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesSection />
      <TopDoctors />
      <Banner />

      
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />


    </div>
  );
};

export default Home;
