import phoneRepair from "../assets/phoneRepair.jpg";
import Button from "./UI/Button";
const Banner = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-50px)]"
      style={{
        backgroundImage: `url(${phoneRepair})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Bringing Your Electronics Back to Life!
          </h1>
          <p className="mb-5">
            Fast, reliable, and affordable repair services for all your gadgets
          </p>
          <Button className="btn btn-primary">Explore Services</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
