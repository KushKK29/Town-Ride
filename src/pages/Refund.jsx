import React from "react";

const Refund = () => {
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
          REFUND AND CANCELLATION POLICY
        </h1>

        <div className="space-y-3 text-gray-700 text-sm font-medium">
          <p>
            Your convenience and satisfaction are our top priorities, and this
            Refund and Cancellation Policy outlines the terms for cancellations
            and refunds to ensure a seamless experience by TR TOWN RIDE (OPC)
            PRIVATE LIMITED (referred to as the{" "}
            <span className="font-medium">"Company"</span>,{" "}
            <span className="font-medium">"we"</span>,{" "}
            <span className="font-medium">"TR Town Ride"</span>,{" "}
            <span className="font-medium">"us"</span>, or{" "}
            <span className="font-medium">"our"</span>).
          </p>

          <p>
            This Refund and Cancellation Policy (
            <span className="font-medium">"Policy"</span>) outlines our policies
            and procedures for the cancellation, refund processing, and
            applicable charges for rides booked through our platform, including
            cab, auto, and bike services (
            <span className="font-medium">"Services"</span>). This applies to
            all interactions with Town Ridethrough our mobile applications (
            <span className="font-medium">"Town RideApp"</span>), websites (
            <a
              href="https://www.Town Ride.bike/"
              className="text-blue-600 hover:underline"
            >
              https://www.Town Ride.bike/
            </a>
            ), and offline communication.
          </p>

          <p>
            The terms <span className="font-medium">"you"</span> and{" "}
            <span className="font-medium">"your"</span> refer to all users of
            the TR Town Ride Platform, including Captains, Customers, Vendor
            Partners, and others availing our services.
          </p>

          <p>
            Please ensure you review this Policy before booking any ride through
            the Town RidePlatform or using our Services. By proceeding with your
            booking or using our Services, you consent to this Policy and any
            future amendments.
          </p>

          <div className="mt-8">
            {/* Cancellation Policy */}
            <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
              Cancellation Policy
            </h2>
            <ul className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-bold">Cancellation by User: </span> Users
                can cancel a booking anytime before the ride starts. A
                cancellation fee may apply based on the time of cancellation
                (e.g., free cancellation within 5 minutes, a percentage of the
                fare after that).
              </li>
              <li>
                <span className="font-bold">Cancellation by Town Ride: </span>{" "}
                In case of unexpected circumstances (e.g., driver
                unavailability, weather conditions), Town Ridereserves the right
                to cancel the booking and provide a full refund to the user.
              </li>
              <li>
                <span className="font-bold">No-Show Policy: </span> If the user
                fails to board the vehicle within the allotted time (e.g., 10
                minutes), the booking will be marked as "No-Show," and no refund
                will be issued.
              </li>
            </ul>

            {/* Refund Policy */}
            <h2 className="font-bold text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-8 mb-4 -mx-10 text-center sm:text-left">
              Refund Policy
            </h2>
            <ul className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-bold">
                  Refund for Cancellations by User:{" "}
                </span>{" "}
                Users will receive a full refund if the cancellation is made
                within the allowed time frame. A partial refund may be provided
                after deducting cancellation charges if the cancellation is made
                after the allowed time.
              </li>
              <li>
                <span className="font-bold">
                  Refund for Cancellations by Town Ride:{" "}
                </span>{" "}
                If the ride is canceled by Town Ridefor reasons beyond the
                user's control (e.g., driver unavailability), the user will
                receive a full refund.
              </li>
              <li>
                <span className="font-bold">Refund for Ride Issues: </span> If
                users face issues during the ride (e.g., improper service,
                overcharging), they can file a complaint. After investigation, a
                refund or compensation will be provided if the issue is found to
                be valid.
              </li>
              <li>
                <span className="font-bold">Refund Timeline: </span> Refunds
                will be processed within 7-10 business days after the
                cancellation is confirmed.
              </li>
              <li>
                <span className="font-bold">Exceptions: </span> No refunds will
                be provided for changes to the booking after the ride has
                started or for special promotional offers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
