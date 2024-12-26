import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/UI/Button";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/api/services/created/${user?.email}`).then((data) => {
      setServices(data.data.data);
    });
  }, [axiosSecure, user?.email]);

  const handleConfirm = (closeToast, id) => {
    axios
      .delete(`${import.meta.env.VITE_SERVERURL}/api/services/delete/${id}`)
      .then(() => {
        toast.success(`Service Deleted`);
        navigate(`/services/created/${user.email}`);
      })
      .catch((err) => {
        toast.error(err.message);
      });

    closeToast();
  };

  const showConfirmationToast = (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to proceed?</p>
          <div className="space-x-2">
            <Button
              className="btn btn-primary btn-sm"
              onClick={() => handleConfirm(closeToast, id)}
            >
              Yes
            </Button>
            <Button className="btn btn-error btn-sm" onClick={closeToast}>
              No
            </Button>
          </div>
        </div>
      ),
      {
        position: "top-left",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="max-w-5xl w-full bg-base-200 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Manage Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.length > 0 ? (
              services.map((service) => (
                <div
                  key={service._id}
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
                    <Link to={`/services/update/${service._id}`}>
                      <Button className="btn btn-outline btn-sm btn-primary">
                        <FaEdit />
                        <span>Update</span>
                      </Button>
                    </Link>
                    <Button
                      className="btn btn-outline btn-sm btn-error"
                      onClick={() => showConfirmationToast(service._id)}
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Services Created</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageService;
