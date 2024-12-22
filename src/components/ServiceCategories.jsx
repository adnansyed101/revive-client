import { MdOutlinePhoneIphone, MdLaptopMac, MdHome } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";

// Data for service categories
const serviceCategories = [
  {
    id: 1,
    name: "Smartphones",
    icon: <MdOutlinePhoneIphone />,
    description: "Screen replacements, battery issues, and more.",
  },
  {
    id: 2,
    name: "Laptops & Desktops",
    icon: <MdLaptopMac />,
    description: "Hardware repairs, software installations, and more.",
  },
  {
    id: 3,
    name: "Home Appliances",
    icon: <MdHome />,
    description: "Fixing microwaves, TVs, and other appliances.",
  },
  {
    id: 4,
    name: "Gaming Consoles",
    icon: <GiConsoleController />,
    description: "Troubleshooting and repair for popular consoles.",
  },
  {
    id: 5,
    name: "Wearables",
    icon: <BsSmartwatch />,
    description: "Smartwatch and fitness tracker repairs.",
  },
];

const ServiceCategories = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          We Fix All Types of Electronics!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="card shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
                <button className="btn btn-primary mt-4">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
