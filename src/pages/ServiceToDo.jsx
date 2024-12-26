import { format } from "date-fns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Select from "react-select";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ServiceToDo = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/api/booking/booked/serviceToDo/${user?.email}`)
      .then((data) => {
        setBookedServices(data.data.data);
      });
  }, [axiosSecure, user?.email]);

  const handleOnChange = (e, id) => {
    axiosSecure
      .patch(`/api/booking/booked/update/${id}`, { status: e.value })
      .then(() => {
        toast.success("Status changed");
      })
      .catch((err) => {
        toast.err(err.message);
      });
  };

  const options = [
    { value: "pending", label: "pending" },
    { value: "working", label: "working" },
    { value: "completed", label: "completed" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-20 pb-8">
        <div className="max-w-5xl w-full bg-base-200 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Services To Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {bookedServices.length > 0 ? (
              bookedServices.map((service) => (
                <div
                  key={service._id}
                  className="card bg-base-100 shadow-md border border-gray-200 rounded-lg p-4 m-4"
                >
                  <figure className="mb-4">
                    <img
                      src={service.imgURL}
                      alt={service.serviceName}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </figure>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    {service.serviceName}
                  </h3>
                  <p>Price: ${service.price}</p>
                  <p>Area: {service.serviceArea}</p>
                  <div className="divider">Booked By</div>
                  <div className="flex items-center mt-2">
                    <img
                      src={service.bookingDetails.imgURL}
                      alt={service.bookingDetails.userName}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-md font-semibold">
                        {service.bookingDetails.userName}
                      </h4>
                      <p>{service.bookingDetails.userEmail}</p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <p className="mt-2">
                    Date:{" "}
                    {format(new Date(service.bookingDetails.serviceDate), "PP")}
                  </p>
                  <p className="mt-2">Special Instructions:</p>
                  <p className="mb-4">
                    {service.bookingDetails.serviceInstruction}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-semibold">Status:</p>
                    <Select
                      options={options}
                      defaultValue={{
                        label: service.bookingDetails.serviceStatus,
                        value: service.bookingDetails.serviceStatus,
                      }}
                      onChange={(e) => handleOnChange(e, service._id)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <h1>No Services Booked by anyone</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceToDo;
