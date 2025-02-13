import StaggerText from "react-stagger-text";
import phoneRepair from "../assets/phoneRepair.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen md:min-h-[calc(100vh-50px)]"
      style={{
        backgroundImage: `url(${phoneRepair})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            <StaggerText staggerType="letter">
              Bringing Your Electronics Back to Life!
            </StaggerText>
          </h1>
          <p className="mb-5">
            Fast, reliable, and affordable repair services for all your gadgets
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
