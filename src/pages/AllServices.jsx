import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Button from "../components/UI/Button";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { motion } from "motion/react";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import axios from "axios";

const AllServices = () => {
  const [count, setCount] = useState(0);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    document.title = "R&R | Services";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://revivie-rewire.vercel.app/api/services/all-services?search=${search}&page=${currentPage}&size=${itemsPerPage}`
      )
      .then((data) => {
        setServices(data.data.data);
      })
      .catch((err) => toast.error(err.message));
    window.scrollTo(0, 0);
  }, [currentPage, search]);

  useEffect(() => {
    axios
      .get(
        `https://revivie-rewire.vercel.app/api/services/all-services/count/?search=${search}`
      )
      .then((data) => {
        setCount(data.data.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setCurrentPage(0);
  }, [search]);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen mt-20 mb-10">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaMagnifyingGlass />
        </label>

        <h2 className="text-3xl font-bold mb-6">All Services</h2>
        <div className="w-full max-w-4xl space-y-6 px-2">
          {services.map((service) => (
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
              key={service._id}
              className="card md:card-side bg-base-200 shadow-lg"
              data-aos="fade-down"
            >
              {/* Service Image */}
              <figure className="w-full md:w-1/3 relative">
                <img
                  src={service.imgURL}
                  alt={service.serviceName}
                  className="object-cover w-full h-full rounded-l-lg"
                />
                <div className="badge badge-primary absolute top-3 left-3 p-2 text-sm">
                  {service.serviceArea}
                </div>
              </figure>

              {/* Card Body */}
              <div className="card-body flex flex-col justify-between">
                {/* Service Title */}
                <h2 className="card-title text-lg font-bold">
                  {service.serviceName}
                </h2>

                {/* Service Description */}
                <p className="text-sm mb-2">
                  {service.description.length > 100
                    ? `${service.description.slice(0, 100)}...`
                    : service.description}
                </p>
                {/* Divider */}
                <div className="divider my-2"></div>

                {/* Provider and Price Info */}
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={service.provider.imgURL}
                        alt={service.provider.name}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{service.provider.name}</p>
                    <p className="text-sm">
                      <strong>Price:</strong> TK {service.price}
                    </p>
                    <p className="text-sm">
                      <strong>Area:</strong> {service.serviceArea}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="card-actions justify-end">
                  <Link to={`/services/service/${service._id}`}>
                    <Button className="btn btn-primary">View Details</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="join flex items-center justify-center mb-4">
        <button className="join-item btn" onClick={handlePreviousPage}>
          «
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`join-item btn ${currentPage === page && "btn-active"}`}
            onClick={() => setCurrentPage(page)}
          >
            {page + 1}
          </button>
        ))}
        <button className="join-item btn" onClick={handleNextPage}>
          »
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AllServices;
