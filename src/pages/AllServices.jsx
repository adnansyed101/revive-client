import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/UI/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVERURL}/api/service/all-services`)
      .then((data) => {
        setServices(data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen mt-20 mb-10">
        <h2 className="text-3xl font-bold mb-6">All Services</h2>
        <div className="w-full max-w-4xl space-y-6">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-200 shadow-md rounded-lg">
              <figure>
                <img
                  src={service.imgURL}
                  alt={service.serviceName}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">
                  {service.serviceName}
                </h3>
                <p className="text-sm">
                  {service.description.length > 100
                    ? `${service.description.slice(0, 100)}...`
                    : service.description}
                </p>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={service.provider.imgURL}
                        alt={service.provider.name}
                      />
                    </div>
                  </div>
                  <span className=" font-medium">{service.providerName}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="badge badge-outline">
                    Area: {service.serviceArea}
                  </span>
                  <span className="text-blue-600 font-bold">
                    ${service.price}
                  </span>
                </div>
                <div className="card-actions mt-4">
                  <Link to={`/service/${service._id}`}>
                    <Button className="btn btn-primary w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllServices;
