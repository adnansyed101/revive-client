import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Button from "../components/UI/Button";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/shared/Loading";
import { useEffect } from "react";

const CreateServices = () => {
  const { user, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = "R&R | Create Service";
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
      .post(`/api/services/add-service`, newService)
      .then(() => {
        setLoading(false);
        navigate(`/services/created/${user.email}`);
        toast.success("Service Created");
      })
      .catch((err) => toast.error(err.message));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-50px)] mt-20 mb-10 px-4 md:px-0">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-base-200">
          <h2 className="text-2xl font-bold text-center">Add a New Service</h2>
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
                name="imgURL"
                placeholder="Enter the image URL"
                className="input input-bordered input-primary w-full"
                required
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
                placeholder="Enter the service name"
                className="input input-bordered input-primary w-full"
                required
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
                placeholder="Enter the price"
                className="input input-bordered input-primary w-full"
                required
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
                name="serviceArea"
                placeholder="Enter the service area"
                className="input input-bordered input-primary w-full"
                required
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
                placeholder="Enter the service description"
                className="textarea textarea-primary w-full"
                rows="4"
                required
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

export default CreateServices;
