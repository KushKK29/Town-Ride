import React from "react";

const SubPoint = ({ children, letter }) => (
  <div className="flex space-x-2 pl-4 md:pl-6">
    <span className="text-gray-700">{letter}.</span>
    <p className="text-gray-700">{children}</p>
  </div>
);

export default SubPoint;
