import { useEffect } from "react";
import Booking from "../components/Booking";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const BookingPage = () => {
  useEffect(() => {
    document.title = "R&R | Book Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Booking />
      <Footer />
    </>
  );
};

export default BookingPage;
