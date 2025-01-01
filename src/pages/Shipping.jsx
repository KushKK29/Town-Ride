import React from "react";

const Shipping = () => {
  return (
    <div className="max-w-7xl py-8 relative px-4">
      <div className="absolute top-0 right-0 w-64 h-64 grid grid-cols-8 gap-1 opacity-20">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
        ))}
      </div>

      <div className="relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
          Shipping Policy
        </h1>

        <div className="space-y-6 text-gray-700">
          <p className="text-base">
            At TR Town Ride, we are committed to providing timely and efficient
            delivery of products purchased through our platform. Below are the
            details regarding our shipping timelines.
          </p>

          {[
            "Minimum Shipping Timeline",
            "Maximum Shipping Timeline",
            "Shipping Methods",
            "Order Tracking",
            "International Shipping",
            "Note",
          ].map((heading) => (
            <section key={heading} className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {heading}
              </h2>
              <ul className="list-decimal pl-5 space-y-3 text-base">
                {heading === "Minimum Shipping Timeline" && (
                  <>
                    <li>
                      All orders are processed within{" "}
                      <strong>24-48 hours</strong> of receipt, excluding
                      weekends and public holidays.
                    </li>
                    <li>
                      The minimum shipping time will depend on the delivery
                      location and the chosen shipping method. For most local
                      areas, customers can expect delivery within{" "}
                      <strong>2-3 business days</strong> from dispatch.
                    </li>
                  </>
                )}
                {heading === "Maximum Shipping Timeline" && (
                  <>
                    <li>
                      In cases of remote locations, higher order volumes, or
                      unavoidable delays (e.g., weather conditions, supply chain
                      disruptions), the maximum shipping timeline can extend up
                      to <strong>7-10 business days</strong> from dispatch.
                    </li>
                    <li>
                      Special handling or custom orders may require additional
                      processing time, which will be communicated to the
                      customer at the time of order.
                    </li>
                  </>
                )}
                {heading === "Shipping Methods" && (
                  <li>
                    We offer multiple shipping options for your convenience,
                    including standard and expedited delivery services. The
                    available options will be displayed during checkout.
                  </li>
                )}
                {heading === "Order Tracking" && (
                  <li>
                    Once your order is shipped, you will receive a tracking
                    number via email or SMS, which you can use to track your
                    package's progress through the courier service provider's
                    tracking system.
                  </li>
                )}
                {heading === "International Shipping" && (
                  <li>
                    For international orders, please note that delivery times
                    can vary based on customs processing and destination country
                    regulations. In most cases, international orders will be
                    delivered within <strong>10-14 business days</strong>.
                  </li>
                )}
                {heading === "Note" && (
                  <li>
                    Shipping times may vary depending on the product and
                    location, but we strive to deliver all orders as quickly as
                    possible. Any major delays will be communicated promptly.
                  </li>
                )}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shipping;
