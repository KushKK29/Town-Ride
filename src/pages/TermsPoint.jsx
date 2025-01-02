import React from "react";

const TermsPoint = ({ children, number }) => (
  <div className="space-y-4">
    {number && (
      <h3 className=" font-semibold text-gray-800 text-justify">
        {number}. {children}
      </h3>
    )}
    {!number && <div className="text-gray-700">{children}</div>}
  </div>
);

export default TermsPoint;
