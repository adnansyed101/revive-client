import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/UI/Button";

const ServiceDetail = () => {
  const serviceData = useLoaderData();
  const service = serviceData.data.data;

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-8 mt-20 mb-10">
        <div className="max-w-4xl mx-auto  shadow-md rounded-lg overflow-hidden">
          {/* Service Provider Information */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <img
                    src={service.provider.imgURL}
                    alt={service.provider.name}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {service.provider.name}
                </h2>
                <p>Location: {service.serviceArea}</p>
              </div>
            </div>
          </div>

          {/* Single Service Section */}
          <div className="p-6">
            <figure>
              <img
                src={service.imgURL}
                alt={service.serviceName}
                className="w-full h-64 object-cover rounded-md"
              />
            </figure>
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
              {service.serviceName}
            </h1>
            <p className="text-gray-700 text-sm mt-2">{service.description}</p>

            <div className="flex items-center space-x-3 mt-6">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src={service.provider.imgURL}
                    alt={service.provider.name}
                  />
                </div>
              </div>
              <span className="text-gray-700 font-medium">
                Service Provider: {service.provider.name}
              </span>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-blue-600 font-bold text-lg">
                Price: ${service.price}
              </span>
              <Button className="btn btn-primary">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
