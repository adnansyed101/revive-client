import {
  FaMagnifyingGlass,
  FaCommentDollar,
  FaScrewdriverWrench,
  FaTruckFast,
} from "react-icons/fa6";

const RepairProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Diagnosis",
      description:
        "Bring in your device or request a pickup. Our experts will perform a thorough diagnostic check to identify the issues.",
      icon: (
        <div className="avatar placeholder">
          <div className="bg-accent text-white w-14 rounded-full">
            <span className="text-3xl">
              <FaMagnifyingGlass />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Step 2: Quotation",
      description:
        "Receive a detailed quotation for the repairs, including costs and estimated time for completion.",
      icon: (
        <div className="avatar placeholder">
          <div className="bg-accent text-white w-14 rounded-full">
            <span className="text-3xl">
              <FaCommentDollar />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Step 3: Repair",
      description:
        "Once approved, our skilled technicians will start working on your device with care and precision.",
      icon: (
        <div className="avatar placeholder">
          <div className="bg-accent text-white w-14 rounded-full">
            <span className="text-3xl">
              <FaScrewdriverWrench />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Step 4: Delivery",
      description:
        "Get your repaired device back in perfect condition, either by picking it up or via doorstep delivery.",
      icon: (
        <div className="avatar placeholder">
          <div className="bg-accent text-white w-14 rounded-full">
            <span className="text-3xl">
              <FaTruckFast />
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-6">Our Repair Process</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Follow our simple and efficient repair process to get your devices up
          and running in no time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="card bg-base-300 shadow-md rounded-lg p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-2xl mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairProcess;
