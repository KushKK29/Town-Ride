import React from "react";

const Shipping = () => {
  return (
    <div className="max-w-7xl py-8 relative">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 grid grid-cols-8 gap-1 opacity-20">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-5">
          SHIPPING POLICY
        </h1>

        <div className="space-y-3 text-gray-700 text-sm font-medium">
          <p>
            At TR Town Ride, we are committed to providing timely and efficient
            delivery of products purchased through our platform. Below are the
            details regarding our shipping timelines.
          </p>

          <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
            Minimum Shipping Timeline:
          </h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              All orders are processed within <strong>24-48 hours</strong> of
              receipt, excluding weekends and public holidays.
            </li>
            <li>
              The minimum shipping time will depend on the delivery location and
              the chosen shipping method. For most local areas, customers can
              expect delivery within <strong>2-3 business days</strong> from
              dispatch.
            </li>
          </ul>

          <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
            Maximum Shipping Timeline:
          </h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              In cases of remote locations, higher order volumes, or unavoidable
              delays (e.g., weather conditions, supply chain disruptions), the
              maximum shipping timeline can extend up to{" "}
              <strong>7-10 business days</strong> from dispatch.
            </li>
            <li>
              Special handling or custom orders may require additional
              processing time, which will be communicated to the customer at the
              time of order.
            </li>
          </ul>

          <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
            Shipping Methods:
          </h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              We offer multiple shipping options for your convenience, including
              standard and expedited delivery services. The available options
              will be displayed during checkout.
            </li>
          </ul>

          <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
            Order Tracking:
          </h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              Once your order is shipped, you will receive a tracking number via
              email or SMS, which you can use to track your package’s progress
              through the courier service provider’s tracking system.
            </li>
          </ul>

          <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
            International Shipping:
          </h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              For international orders, please note that delivery times can vary
              based on customs processing and destination country regulations.
              In most cases, international orders will be delivered within{" "}
              <strong>10-14 business days</strong>.
            </li>
          </ul>

          <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
            Note:
          </h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              Shipping times may vary depending on the product and location, but
              we strive to deliver all orders as quickly as possible. Any major
              delays will be communicated promptly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
