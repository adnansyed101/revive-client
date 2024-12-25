import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/UI/Button";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const UpdateService = () => {
  const serviceData = useLoaderData();
  const service = serviceData.data.data;
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const imgURL = form.imgURL.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;

    const newService = {
      imgURL,
      serviceName,
      price,
      serviceArea,
      description,
      provider: {
        imgURL: user.photoURL,
        name: user.displayName,
        email: user.email,
      },
    };

    axios
      .put(
        `${import.meta.env.VITE_SERVERURL}/api/services/update/${service._id}`,
        newService
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-50px)] mt-20 mb-10">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-base-200">
          <h2 className="text-2xl font-bold text-center">Update Service</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="imgURL"
                className="block text-sm font-medium mb-2"
              >
                Image URL of the Service
              </label>
              <input
                type="url"
                id="imgURL"
                defaultValue={service.imgURL}
                name="imgURL"
                placeholder="Enter the image URL"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
              <label
                htmlFor="serviceName"
                className="block text-sm font-medium mb-2"
              >
                Service Name
              </label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                defaultValue={service.serviceName}
                placeholder="Enter the service name"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={service.price}
                placeholder="Enter the price"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
              <label
                htmlFor="serviceArea"
                className="block text-sm font-medium mb-2"
              >
                Service Area
              </label>
              <input
                type="text"
                id="serviceArea"
                defaultValue={service.serviceArea}
                name="serviceArea"
                placeholder="Enter the service area"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                defaultValue={service.description}
                placeholder="Enter the service description"
                className="textarea textarea-primary w-full"
                rows="4"
              ></textarea>
            </div>
            <Button type="submit" className="btn btn-primary btn-block">
              Add Service
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateService;
