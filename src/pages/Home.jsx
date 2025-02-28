import { useEffect } from "react";
import Banner from "../components//Home/Banner";
import PopularServices from "../components/Home/PopularServices";
import ServiceCategories from "../components/Home/ServiceCategories";
import RepairProcess from "../components/Home/RepairProcess";
import WebsiteInsights from "../components/Home/WebsiteInsights";

const Home = () => {
  useEffect(() => {
    document.title = "Revive | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <ServiceCategories />
      <PopularServices />
      <RepairProcess />
      <WebsiteInsights />
    </>
  );
};

export default Home;
