import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/UI/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVERURL
        }/api/services/all-services?search=${search}`
      )
      .then((data) => {
        setServices(data.data.data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen mt-20 mb-10">
        <div className="flex flex-col md:flex-row justify-center container mx-auto mb-2">
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
        </div>
        <h2 className="text-3xl font-bold mb-6">All Services</h2>
        <div className="w-full max-w-4xl space-y-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="card card-side bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {/* Service Image */}
              <figure className="w-1/3 relative">
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllServices;
