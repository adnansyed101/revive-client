import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import Button from "./UI/Button";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Booking = () => {
  const serviceData = useLoaderData();
  const service = serviceData.data.data;
  const navigate = useNavigate();
  const { user } = useAuth();
  const [serviceDate, setServiceDate] = useState(new Date());
  const axiosSecure = useAxiosSecure()

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const address = form.address.value;
    const instruction = form.instruction.value;

    const newBooking = {
      imgURL: service.imgURL,
      serviceName: service.serviceName,
      price: service.price,
      serviceArea: service.serviceArea,
      provider: {
        imgURL: service.provider.imgURL,
        name: service.provider.name,
        email: service.provider.email,
      },
      bookingDetails: {
        userName: user.displayName,
        imgURL: user.photoURL,
        userEmail: user.email,
        serviceID: service._id,
        serviceDate: serviceDate,
        serviceStatus: "pending",
        serviceAddress: address,
        serviceInstruction: instruction || "No Instructions",
      },
    };

    axiosSecure
      .post(
        `/api/booking/add-booking`,
        newBooking
      )
      .then((data) => {
        console.log(data);
        navigate(`/booked/user/${user.email}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center bg-base-200 justify-center pb-8 pt-20 px-2">
      <div className="max-w-3xl w-full bg-base-100 shadow-lg rounded-lg py-6 px-4 md:px-6">
        <h2 className="text-2xl font-bold  mb-6">Book Your Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {/* Service ID */}
            <div>
              <label className="block font-medium">Service ID</label>
              <input
                type="text"
                value={service._id}
                name="serviceID"
                disabled
                className="input input-bordered w-full"
              />
            </div>
            {/* Service Name */}
            <div>
              <label className="block font-medium">Service Name</label>
              <input
                type="text"
                value={service.serviceName}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            {/* Service Area */}
            <div>
              <label className="block font-medium">Service Area</label>
              <input
                type="text"
                value={service.serviceArea}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            {/* Service Image */}
            <div>
              <label className="block font-medium">Service Image</label>
              <div className="flex justify-center">
                <img
                  src={service.imgURL}
                  alt={service.serviceName}
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            </div>
            {/* Service Provider Email */}
            <div>
              <label className="block font-medium">Provider Email</label>
              <input
                type="text"
                value={service.provider.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            {/* Service Provider Name */}
            <div>
              <label className="block font-medium">Provider Name</label>
              <input
                type="text"
                value={service.provider.name}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            {/* User Email */}
            <div>
              <label className="block font-medium">Your Email</label>
              <input
                type="text"
                value={user.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            {/* User Name */}
            <div>
              <label className="block font-medium">Your Name</label>
              <input
                type="text"
                value={user.displayName}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            {/* Booking Details */}
            <div>
              <label className="block font-medium">Service Date</label>
              <DatePicker
                selected={serviceDate}
                onChange={(date) => setServiceDate(date)}
                minDate={new Date()}
                className="input input-bordered"
              />
            </div>
            <div>
              <label className="block font-medium">Address</label>
              <input
                type="text"
                name="address"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Special Instructions</label>
              <textarea
                name="instruction"
                className="textarea textarea-bordered w-full"
                placeholder="Enter any specific instructions"
              ></textarea>
            </div>
            <div>
              <label className="block font-medium">Price</label>
              <input
                type="text"
                value={`TK ${service.price}`}
                disabled
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Purchase Button */}
          <div className="mt-6">
            <Button type="submit" className="btn btn-primary w-full">
              Purchase
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
