import { Link } from "react-router-dom";
import ServiceCard from "../Card/ServiceCard";
import Button from "../UI/Button";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PopularServices = () => {
  const [popularServices, setPopularServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/api/services/popular").then((data) => {
      setPopularServices(data.data.data);
    });
  }, [axiosSecure]);

  return (
    <div className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {popularServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/allServices">
            <Button className="btn btn-primary">Show All Services</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
