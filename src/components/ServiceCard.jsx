import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { image, name, description, providerImage, providerName, price } =
    service;
  return (
    <div className="card card-bordered shadow-lg bg-base-300">
      <figure className="p-4">
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-40 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center mt-4">
          <img
            src={providerImage}
            alt={providerName}
            className="w-10 h-10 rounded-full border mr-3"
          />
          <span className="text-gray-700">{providerName}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">{price}</span>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
