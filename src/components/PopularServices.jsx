import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Button from "./UI/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularServices = () => {
  const [popularServices, setPopularServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services/popular").then((data) => {
      console.log(data);
      setPopularServices(data.data.data)
    });
  }, []);

  return (
    <div className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {popularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
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
