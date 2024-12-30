import React from "react";
import a1 from "./aboutUs1.jpg";
import a2 from "./aboutus2.jpg";
const AboutUsPage = () => {
  const founders = [
    {
      name: "Name",
      role: "Founder",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Name",
      role: "Founder",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Name",
      role: "Founder",
      image: "/api/placeholder/200/200",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <main className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-50 rounded-full -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-50 rounded-full -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        {/* About Us Section */}
        <div className="px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left Content */}
              <div className="lg:w-1/2 space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  India's Beloved
                  <br />
                  Bike Taxi Service
                </h1>
                <div className="space-y-6">
                  <p className="text-xl font-semibold text-gray-700">
                    We are not an option, we are a choice
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We're #1 choice of 10 Million people because we're the
                    solution of India's intra-city commuting problems. With
                    assured safety, we also provide economically priced rides.
                  </p>
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">
                      What makes us different?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our bike taxis can dodge the traffic during peak hours and
                      get you to the destination in a jiffy! So when you think
                      travel, think Town Ride.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Images Section */}
              <div className="lg:w-1/2 relative">
                <div className="relative mb-4 ml-12">
                  <div className="w-64 h-72 overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
                    <img
                      src={a1}
                      alt="Bike Rider"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative ml-32 -mt-12">
                  <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-yellow-400 rounded-tr-[40px] -z-10"></div>
                  <div className="w-72 h-80 overflow-hidden rounded-tr-[80px] rounded-bl-[80px]">
                    <img
                      src={a2}
                      alt="App User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Champions Section */}
        <div className="relative bg-white py-16 md:py-24">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-50 rounded-full -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="space-y-12">
              {/* Section Header */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Champions of our success story
                </h2>
                <div className="h-1 w-24 bg-yellow-400"></div>
                <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
                  Town Ride has come a long way ever since its inception in
                  2015. With a lot of hard work and perseverance, we have made a
                  place for ourselves in the market. As a brand and as a
                  service, it is our constant endeavor to redefine ourselves.
                </p>
              </div>

              {/* Founders Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
                {founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="flex flex-col items-center space-y-4"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 rounded-tr-[40px] rounded-bl-[40px] transform rotate-45 -z-10"></div>
                      <div className="w-48 h-48 overflow-hidden rounded-tr-[40px] rounded-bl-[40px] bg-white">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {founder.name}
                      </h3>
                      <p className="text-gray-600">{founder.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;
