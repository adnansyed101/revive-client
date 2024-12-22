// Mock data for popular services
const popularServices = [
  {
    id: 1,
    name: "Smartphone Repair",
    description: "Quick fixes for screen, battery, and software issues.",
    image: "https://via.placeholder.com/150",
    providerName: "TechFixer",
    providerImage: "https://via.placeholder.com/50",
    price: "$50",
  },
  {
    id: 2,
    name: "Laptop Repair",
    description: "Hardware and software solutions for all laptop brands.",
    image: "https://via.placeholder.com/150",
    providerName: "GadgetPro",
    providerImage: "https://via.placeholder.com/50",
    price: "$100",
  },
  {
    id: 3,
    name: "Appliance Repair",
    description: "Fixing your household electronics reliably and quickly.",
    image: "https://via.placeholder.com/150",
    providerName: "FixItHub",
    providerImage: "https://via.placeholder.com/50",
    price: "$70",
  },
  {
    id: 4,
    name: "Gaming Console Repair",
    description: "Troubleshooting and repair for all gaming consoles.",
    image: "https://via.placeholder.com/150",
    providerName: "GameFix",
    providerImage: "https://via.placeholder.com/50",
    price: "$80",
  },
  {
    id: 5,
    name: "Smartwatch Repair",
    description: "Expert repairs for all wearable tech devices.",
    image: "https://via.placeholder.com/150",
    providerName: "WatchMasters",
    providerImage: "https://via.placeholder.com/50",
    price: "$40",
  },
  {
    id: 6,
    name: "TV Repair",
    description: "Reliable and affordable TV repair services.",
    image: "https://via.placeholder.com/150",
    providerName: "ScreenFix",
    providerImage: "https://via.placeholder.com/50",
    price: "$120",
  },
];

const PopularServices = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularServices.map((service) => (
            <div key={service.id} className="card card-bordered shadow-lg">
              <figure className="p-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="rounded-lg w-full h-40 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={service.providerImage}
                    alt={service.providerName}
                    className="w-10 h-10 rounded-full border mr-3"
                  />
                  <span className="text-gray-700">{service.providerName}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-primary">
                    {service.price}
                  </span>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
