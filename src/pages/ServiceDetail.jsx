import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/UI/Button";

const ServiceDetail = () => {
  const serviceData = useLoaderData();
  const service = serviceData.data.data;

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-20 pb-8">
        <div className="max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full ring ring-offset-2 ring-white">
                  <img
                    src={service.provider.imgURL}
                    alt={service.provider.name}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">{service.provider.name}</h2>
                <p className="text-sm">Location: {service.serviceArea}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-6">
            <figure>
              <img
                src={service.imgURL}
                alt={service.serviceName}
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
            </figure>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {service.serviceName}
              </h1>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Price and Booking Section */}
            <div className="flex justify-between items-center py-4 border-t border-gray-200">
              <div>
                <span className="text-xl font-bold text-blue-600">
                  Price: TK {service.price}
                </span>
              </div>
              <div>
                <Link to={`/services/booking/${service._id}`}>
                  <Button className="btn btn-primary">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
