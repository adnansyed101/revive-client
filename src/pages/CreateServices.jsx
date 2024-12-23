import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/UI/Button";

const CreateServices = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-50px)] mt-20 mb-10">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-base-200">
          <h2 className="text-2xl font-bold text-center">Add a New Service</h2>
          <form className="space-y-4 ">
            <div>
              <label
                htmlFor="imageURL"
                className="block text-sm font-medium mb-2"
              >
                Image URL of the Service
              </label>
              <input
                type="url"
                id="imageURL"
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

export default CreateServices;
