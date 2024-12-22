import { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopularServices from "../components/PopularServices";
import ServiceCategories from "../components/ServiceCategories";

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
      <Footer />
    </>
  );
};

export default Homepage;
