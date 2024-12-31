import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Import Link for SPA navigation
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreed: false,
  });

  useEffect(() => {
    // Initialize AOS after the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only trigger the animation once
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Form submitted!"); // Optional alert for feedback
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agreed: false,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <main className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-50 rounded-full -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-50 rounded-full -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <h1 className="text-3xl font-bold text-gray-800" data-aos="fade-up">
          Contact Us
        </h1>
        <p
          className="mt-4 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Feel free to reach out to us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Section 1: Contact Form */}
          <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Contact Sales
            </h2>
            <p className="mt-2 text-gray-600">
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 p-2 mt-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 p-2 mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 p-2 mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 p-2 mt-2"
                  />
                </div>
                <div className="flex gap-x-4 sm:col-span-2 items-center">
                  <input
                    id="agreed"
                    name="agreed"
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label htmlFor="agreed" className="text-sm text-gray-600">
                    By selecting this, you agree to our{" "}
                    <Link
                      to="/privacy-policy"
                      className="font-semibold text-indigo-600"
                    >
                      privacy&nbsp;policy
                    </Link>
                    .
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 mt-4 rounded-md hover:bg-indigo-500"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Let's talk
              </button>
            </form>
          </div>

          {/* Section 2: Contact Information */}
          <div
            className="bg-white p-4 sm:p-8 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Our Contact Information
            </h2>
            <p className="mt-2 text-gray-600">
              You can reach us through any of the following:
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <strong className="text-gray-800">Contact Number:</strong>
                <br />
                81253 58673
              </li>
              <li>
                <strong className="text-gray-800">Address:</strong>
                <br />
                Dhanyasree Residency,201,Eswar villas road, Nizampet, 500090
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
