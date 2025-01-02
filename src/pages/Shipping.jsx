import React from "react";

const Shipping = () => {
  const shippingOptions = [
    {
      region: "Europe",
      options: [
        { type: "Standard", time: "15-20 business days", price: "$29.99" },
        { type: "Express", time: "8-12 business days", price: "$49.99" },
        { type: "Priority", time: "5-7 business days", price: "$69.99" },
      ],
    },
    {
      region: "Asia",
      options: [
        { type: "Standard", time: "12-18 business days", price: "$24.99" },
        { type: "Express", time: "7-10 business days", price: "$44.99" },
        { type: "Priority", time: "4-6 business days", price: "$64.99" },
      ],
    },
  ];

  const shippingCountries = [
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Japan",
    "South Korea",
    "Singapore",
    "Australia",
    "Canada",
  ];

  const nonShippingCountries = [
    "North Korea",
    "Iran",
    "Syria",
    "Cuba",
    "Venezuela",
  ];
  return (
    <div className="max-w-7xl py-8 relative px-4">
      <div className="absolute top-0 right-0 w-64 h-64 grid grid-cols-8 gap-1 opacity-20">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
        ))}
      </div>

      <div className="relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-4 text-center sm:text-left">
          Shipping Policy
        </h1>

        <h3 className="font-bold text-gray-700 mb-4">
          It's important to start by clarifying to customers that your order
          processing times are separate from the shipping times they see at
          checkout.
        </h3>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Processing
            </h2>
            <div className="space-y-3 text-base">
              <p>
                All orders are processed within X to X business days (excluding
                weekends and holidays) after receiving your order confirmation
                email. You will receive another notification when your order has
                shipped.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="text-yellow-700">
                  Note: Include any other pertinent information towards the
                  beginning, such as potential delays due to a high volume of
                  orders or postal service problems that are outside of your
                  control.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Domestic Shipping Rates and Estimates
            </h2>
            <p className="space-y-3 text-base">
              <span className="font-bold">For calculated shipping rates:</span>{" "}
              Shipping charges for your order will be calculated and displayed
              at checkout.
            </p>
            <p className="space-y-3 text-base">
              <span className="font-bold">For simple flat rate shipping:</span>{" "}
              We offer $10 flat rate shipping to cities like Mumbai, Bangalore,
              Chennai, Hyderabad etc.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-4">
                <thead className="bg-gray-50">
                  <tr className="bg-gray-300">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Shipping Option
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Estimated Delivery
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Standard Shipping</td>
                    <td className="px-6 py-4">5-7 business days</td>
                    <td className="px-6 py-4">$4.99</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Express Shipping</td>
                    <td className="px-6 py-4">2-3 business days</td>
                    <td className="px-6 py-4">$9.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm bg-green-50 text-green-700 p-3 rounded">
              You can also emphasize any free shipping thresholds you offer
              (e.g. free shipping for orders over $75). For multiple shipping
              options, you can list carrier options, prices, and delivery times
              in a table.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Local Delivery
            </h2>
            <div className="space-y-3 text-base">
              <p>
                If you offer local delivery or in-store pickup to customers in
                your area, you can dedicate a section of your shipping policy
                page to explain the process or create a separate shipping page
                specifically for local customers.
              </p>
              <p>
                Free local delivery available for orders over $50 within 25
                miles of our store.For orders under $50, we charge $1.20 for
                local delivery.
              </p>
              <p>
                <span className="font-semibold">Delivery hours:</span>{" "}
                Monday-Friday, 9 AM - 6 PM.{" "}
              </p>
              <p>
                We will contact you via text message with the phone number you
                provided at checkout to notify you on the day of our arrival.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              In-Store Pickup
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-base mb-2">
                You can skip the shipping fees with free local pickup at [list
                the locations where in-store pickup is available]. After placing
                your order and selecting local pickup at checkout, your order
                will be prepared and ready for pick up within X to X business
                days. We will send you an email when your order is ready along
                with instructions.
              </p>
              <p className="mt-3">
                Our in-store pickup hours are 10 AM - 7 PM on Monday - Saturday
              </p>
            </div>
          </section>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            International Shipping
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Available Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {shippingCountries.map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Non-Serviceable Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {nonShippingCountries.map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Shipping charges will be calculated and displayed at checkout
                based on your location and selected shipping method.
              </p>
            </div>

            {shippingOptions.map((region) => (
              <div key={region.region} className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  {region.region} Shipping Options
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="bg-gray-300">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                          Service Type
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                          Delivery Time
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {region.options.map((option) => (
                        <tr key={option.type} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            {option.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {option.time}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {option.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <section></section>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
            <p className="text-yellow-700">
              Note: Your order may be subject to import duties and taxes
              (including VAT), which are incurred once a shipment reaches your
              destination country. TR TOWN RIDE (OPC) PRIVATE LIMITED is not
              responsible for these charges if they are applied and are your
              responsibility as the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
