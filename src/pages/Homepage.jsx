import { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopularServices from "../components/PopularServices";
import ServiceCategories from "../components/ServiceCategories";
import RepairProcess from "../components/RepairProcess";
import WebsiteInsights from "../components/WebsiteInsights";

const Homepage = () => {
  useEffect(() => {
    document.title = "R&R | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <ServiceCategories />
      <PopularServices />
      <RepairProcess />
      <WebsiteInsights />
      <Footer />
    </>
  );
};

export default Homepage;
