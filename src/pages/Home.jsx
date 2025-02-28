import { useEffect } from "react";
import Banner from "../components/Banner";
import PopularServices from "../components/PopularServices";
import ServiceCategories from "../components/ServiceCategories";
import RepairProcess from "../components/RepairProcess";
import WebsiteInsights from "../components/WebsiteInsights";

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
