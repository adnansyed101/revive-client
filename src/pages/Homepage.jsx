import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import PopularServices from "../components/PopularServices";
import ServiceCategories from "../components/ServiceCategories";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ServiceCategories />
      <PopularServices />
    </>
  );
};

export default Homepage;
