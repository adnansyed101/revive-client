import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold flex gap-2 items-center">
              <FaScrewdriverWrench />
              Revive & Rewire
            </h1>
          </div>

          {/* Copyright Information */}
          <div className="text-center mt-4 text-gray-400 text-sm">
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Revive & Rewire
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
