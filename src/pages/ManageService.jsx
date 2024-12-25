import { FaEdit, FaTrash } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/UI/Button";

const ManageService = () => {
  const servicesData = useLoaderData();
  const services = servicesData.data.data;
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/services/update/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="max-w-5xl w-full bg-base-200 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Manage Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="card bg-base-100 shadow-md border border-gray-200 rounded-lg p-4"
              >
                <figure className="mb-4">
                  <img
                    src={service.imgURL}
                    alt={service.serviceName}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </figure>
                <h3 className="text-lg font-bold  mb-2">
                  {service.serviceName}
                </h3>
                <p className=" mb-2">Price: ${service.price}</p>
                <p className=" mb-4">Area: {service.serviceArea}</p>
                <div className="flex space-x-4">
                  <Button
                    className="btn btn-outline btn-sm btn-primary"
                    onClick={() => handleUpdate(service.id)}
                  >
                    <FaEdit />
                    <span>Update</span>
                  </Button>
                  <Button className="btn btn-outline btn-sm btn-error">
                    <FaTrash />
                    <span>Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageService;
