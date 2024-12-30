import React from "react";

const TermsSection = ({ title, children }) => (
  <section className="space-y-6 mb-8">
    <h2 className=" font-bold text-gray-800">{title}</h2>
    {children}
  </section>
);

export default TermsSection;
