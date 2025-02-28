import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Button from "../components/UI/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/shared/Loading";
import { toast } from "react-toastify";
import { useEffect } from "react";

const UpdateService = () => {
  const serviceData = useLoaderData();
  const service = serviceData.data.data;
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user, loading, setLoading } = useAuth();

  useEffect(() => {
    document.title = "R&R | Update Service";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    setLoading(true);
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

    axiosSecure
      .put(`/api/services/update/${service._id}`, newService)
      .then(() => {
        setLoading(false);
        toast.success("Service Updated");
        navigate(`/services/created/${user?.email}`);
      })
      .catch((err) => toast.error(err.message));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-50px)] mt-20 mb-10 px-4">
        <div className="w-full max-w-md p-6 space-y-6 rounded-lg shadow-md bg-base-200">
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
              Update Service
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateService;
