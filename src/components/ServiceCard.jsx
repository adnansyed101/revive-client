import PropTypes from "prop-types";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { imgURL, serviceName, description, provider, price, serviceArea } =
    service;
  return (
    <div className="card card-bordered shadow-lg bg-base-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <figure className="relative">
        <img
          src={imgURL}
          alt={serviceName}
          className="w-full h-48 object-cover"
        />
        <span className="badge badge-primary absolute top-4 left-4 px-3 py-1 text-sm">
          {serviceArea}
        </span>
      </figure>
      <div className="card-body p-6">
        <h3 className="text-2xl font-bold">{serviceName}</h3>
        <p className="mt-2 line-clamp-3">{description}</p>
        <div className="flex items-center mt-4">
          <img
            src={provider.imgURL}
            alt={provider.name}
            className="w-12 h-12 rounded-full border-2 border-primary mr-3"
          />
          <span className=" font-medium">{provider.name}</span>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-bold text-primary">TK {price}</span>
          <Link to={`/services/service/${service._id}`}>
            <Button className="btn btn-primary">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
