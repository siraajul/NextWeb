import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const FooterComponents = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Your Company</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Innovative solutions for modern challenges
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3 text-lg">Our Services</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                Web Development
              </a>
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                UI/UX Design
              </a>
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                Cloud Solutions
              </a>
              <a
                href="#"
                className="block text-sm sm:text-base hover:text-gray-300 transition duration-300"
              >
                Consulting
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3 text-lg">Contact Us</h3>
            <p className="text-sm sm:text-base mb-2">
              Email: info@yourcompany.com
            </p>
            <p className="text-sm sm:text-base mb-2">
              Phone: +1 (123) 456-7890
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-blue-500 transition duration-300 text-lg sm:text-xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition duration-300 text-lg sm:text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition duration-300 text-lg sm:text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 transition duration-300 text-lg sm:text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition duration-300 text-lg sm:text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright and Additional Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm sm:text-base text-center sm:text-left text-gray-400 mb-3 sm:mb-0">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
