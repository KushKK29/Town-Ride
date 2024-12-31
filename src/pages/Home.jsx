import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cloud, Building2, User, Users } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Person1 from "./person1.jpg";
import Person2 from "./person2.jpg";
import Person3 from "./Person4.jpg";
import Team1 from "./team.jpg";
import Team2 from "./tem2.jpg";
import Customer1 from "./customer1.jpg";
import Customer2 from "./customer2.jpg";
import Customer3 from "./customer3.jpg";
import Captain1 from "./captain1.jpg";
import Captain2 from "./captain2.jpg";
import Captain3 from "./captain3.jpg";
import Review1 from "./review1.jpg";
import Review2 from "./reviw3.jpg";
import Review3 from "./review2.jpg";
import Cr1 from "./cr1.jpg";
import Cr2 from "./cr3.jpg";
import Cr3 from "./cr2.jpg";
import Hea from "./Hea.png";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [acctiveTab, setAcctiveTab] = useState("customers");
  const [currentSlide, setCurrentSlide] = useState(0);

  const customerReviews = [
    {
      image: Review1,
      name: "Sriram",
      role: "Customer",
      review:
        "It is an amazing app and very safe too to ride with as they have professional and great riders. It is also very feasible and we reach quicker as compared to any other mode of transport",
    },
    {
      image: Review2,
      name: "Praneet",
      role: "Customer",
      review:
        "Well, I love Town Ride cuz it's quicker than other apps and they're mostly available anytime. And I don't know how to ride bikes but the app gives me joy to ride on a bike and I get to enjoy Bangalore's...",
    },
    {
      image: Review3,
      name: "Rahul",
      role: "Customer",
      review:
        "Great experience with Town Ride! The rides are always on time and the captains are very professional. Highly recommended for daily commute.",
    },
  ];

  const captainReviews = [
    {
      image: Cr1,
      name: "Rajesh",
      role: "Captain",
      review:
        "Being a Town Ride captain has given me the flexibility to earn while maintaining my own schedule. The app is very user-friendly and the support team is always helpful.",
    },
    {
      image: Cr2,
      name: "Suresh",
      role: "Captain",
      review:
        "I've been a Town Ride captain for over a year now. The earnings are good and the customer base is growing. It's a great platform for part-time earning.",
    },
    {
      image: Cr3,
      name: "Kumar",
      role: "Captain",
      review:
        "Town Ride has helped me become financially independent. The incentives are good and the payment system is very transparent.",
    },
  ];

  const reviews = acctiveTab === "customers" ? customerReviews : captainReviews;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  const [activeTab, setActiveTab] = useState("customers");

  const customerOptions = [
    {
      image: Customer1,
      title: "India's largest Bike-Taxi",
      description:
        "Cut through traffic, reach on time, and save money. With Town Ride Bike-Taxis, it's that simple.",
    },
    {
      image: Customer2,
      title: "5-minute Auto",
      description:
        "Never wait for an auto ride again! Get a Town Ride Auto within just 5 minutes! Anytime. Anywhere.",
    },
    {
      image: Customer3,
      title: "Lowest Priced Cabs",
      description:
        "More wheels. More comfort. And lower price than any other cab out there.",
    },
  ];

  const captainOptions = [
    {
      image: Captain1,
      title: "Earn More",
      description:
        "Join our network of professional drivers and earn more with flexible hours.",
    },
    {
      image: Captain2,
      title: "Be Your Own Boss",
      description: "Choose your own schedule and work when it suits you best.",
    },
    {
      image: Captain3,
      title: "Growing Community",
      description:
        "Be part of India's largest bike taxi community with excellent support.",
    },
  ];
  const stats = [];
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white top-8">
      {/* Container for text and visual elements */}
      <div className="container px-1 py-16 flex items-center">
        {/* Left text content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            Bharat moves
            <br />
            on <span className="text-red-500">Town Ride!</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Town Ride, with Bike-Taxis, Autos & Cabs is revolutionising the way
            India travels. Town Ride is becoming India’s go-to app for
            comfortable and affordable rides.
          </p>
          <button
            className="bg-black text-white px-8 py-3 rounded-full 
            hover:bg-gray-800 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Right section with circle and image */}
        <div className="hidden md:block relative w-1/2">
          {/* Yellow circle */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 
            w-[500px] h-[500px] rounded-full bg-yellow-400"
          ></div>

          {/* Placeholder image overlapping the circle */}
          <img
            src={Hea}
            alt="Featured visual"
            className="absolute right-10 -top-1/2 -translate-y-1/2 
              rounded-lg shadow-xl z-10 scale-125"
          />
        </div>
      </div>

      {/* Safety Section */}
      <div className="container mx-auto px-6 py-16 my-20">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="w-1/2 pr-12" data-aos="fade-right">
            <h1 className="text-6xl font-bold mb-8">Safety for all.</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At Town Ride, the well-being of our customers is above everything
              else. We are constantly in pursuit of enhancing our safety
              measures to ensure every Town Ride ride is a pleasant and
              comfortable experience.
            </p>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 
            rounded-full text-lg font-medium transition-colors"
            >
              Know More
            </button>
          </div>

          {/* Right Images Grid */}
          <div className="w-1/2 relative" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6">
              {/* Left column image */}
              <div className="relative" data-aos="zoom-in">
                <div
                  className="absolute inset-0 bg-yellow-400 rounded-3xl 
                transform rotate-6"
                ></div>
                <img
                  src={Person3}
                  alt="Bike rider"
                  className="relative rounded-2xl shadow-lg w-full h-64 
                  object-cover"
                />
              </div>

              {/* Right column images */}
              <div className="space-y-6">
                <div className="relative" data-aos="fade-up">
                  <div
                    className="absolute inset-0 bg-yellow-400 rounded-3xl 
                  transform rotate-6"
                  ></div>
                  <img
                    src={Person1}
                    alt="Customer"
                    className="relative rounded-2xl shadow-lg w-full h-40 
                    object-cover"
                  />
                </div>
                <div className="relative" data-aos="fade-up">
                  <div
                    className="absolute inset-0 bg-yellow-400 rounded-3xl 
                  transform rotate-6"
                  ></div>
                  <img
                    src={Person2}
                    alt="Riders"
                    className="relative rounded-2xl shadow-lg w-full h-40 
                    object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left side images with yellow background */}
            <div className="w-full md:w-1/2 relative" data-aos="fade-right">
              {/* Yellow background shape */}
              <div
                className="absolute -left-8 -top-8 w-[120%] h-[120%] 
              bg-yellow-50/80 rounded-[100px] transform -rotate-6 md:block hidden"
              ></div>

              {/* Dotted pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 md:block hidden">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex gap-4 mb-4">
                    {[...Array(8)].map((_, j) => (
                      <div
                        key={j}
                        className="w-2 h-2 rounded-full bg-yellow-400"
                      ></div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Images */}
              <div className="relative flex flex-col items-center md:items-start">
                {/* First image */}
                <div
                  className="relative mb-8 md:mb-0 md:-left-4 md:top-0 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-lg"
                  data-aos="zoom-in"
                >
                  <img
                    src={Team1}
                    alt="Town Ride team members"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Second image with yellow accent */}
                <div
                  className="relative w-full md:w-auto"
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <div
                    className="absolute -left-4 -top-4 w-full md:w-[110%] h-full md:h-[110%] 
                  bg-yellow-400 rounded-3xl transform rotate-6"
                  ></div>
                  <img
                    src={Team2}
                    alt="Town Ride rider with customer"
                    className="relative w-full md:w-96 h-48 md:h-64 rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-8">
                Know Us Better
                <div className="w-16 h-1 bg-yellow-400 mt-2"></div>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In 2024, Town Ride started out by pioneering the concept of
                Bike-Taxi for India and today dominates the market with a
                staggering 70% market share. With a vision to empower India to
                move, we have been taking significant strides. Today we are a
                name to reckon with, in app-based auto services and are making a
                strong foothold in the Cab market and intra-city delivery with
                Town Ride Parcel.
              </p>

              <button
                className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 
              rounded-full text-lg font-medium transition-colors"
              >
                Read more here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-yellow-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Centered heading with yellow underline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
              Our presence in the country has changed the concept of intra-city
              travel and made last-mile connectivity affordable for all.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 flex flex-col items-center 
                justify-center text-center shadow-md transform hover:scale-105 
                transition-transform"
              >
                <div className="mb-2 scale-75">{stat.icon}</div>
                <div className="text-md sm:text-sm font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered heading with underline */}
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              What's in it for you
            </h2>
            <div
              className="w-16 h-1 bg-yellow-400 mx-auto"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 inline-flex">
              <button
                onClick={() => setActiveTab("customers")}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-colors
              ${
                activeTab === "customers"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-600 hover:text-gray-800"
              }`}
                data-aos="fade-right"
              >
                Customers
              </button>
              <button
                onClick={() => setActiveTab("captains")}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-colors
              ${
                activeTab === "captains"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-600 hover:text-gray-800"
              }`}
                data-aos="fade-left"
              >
                Captains
              </button>
            </div>
          </div>

          {/* Options grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
            data-aos="fade-up"
          >
            {(activeTab === "customers" ? customerOptions : captainOptions).map(
              (option, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md 
                hover:shadow-lg transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="mb-4 w-48 h-48 sm:w-56 sm:h-56">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {option.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered heading */}
          <div
            className="text-center mb-12"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Straight from the Customer's Heart
            </h2>
            <div
              className="w-16 h-1 bg-yellow-400 mx-auto"
              data-aos="scale-in"
              data-aos-duration="1000"
            ></div>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 inline-flex">
              <button
                onClick={() => {
                  setAcctiveTab("customers");
                  setCurrentSlide(0);
                }}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-colors
          ${
            acctiveTab === "customers"
              ? "bg-yellow-400 text-black"
              : "text-gray-600 hover:text-gray-800"
          }`}
              >
                Customers
              </button>
              <button
                onClick={() => {
                  setAcctiveTab("captains");
                  setCurrentSlide(0);
                }}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-colors
          ${
            acctiveTab === "captains"
              ? "bg-yellow-400 text-black"
              : "text-gray-600 hover:text-gray-800"
          }`}
              >
                Captains
              </button>
            </div>
          </div>

          {/* Testimonial slider */}
          <div className="max-w-4xl mx-auto relative">
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 
        bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 
        bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial card */}
            <div
              className="bg-white rounded-3xl shadow-lg p-8 relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={reviews[currentSlide].image}
                  alt={reviews[currentSlide].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                    {reviews[currentSlide].review}
                  </p>
                  <h3 className="font-bold text-lg sm:text-xl">
                    {reviews[currentSlide].name}
                  </h3>
                  <p className="text-gray-600">{reviews[currentSlide].role}</p>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors 
            ${
              currentSlide === index
                ? "bg-yellow-400"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
