import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const customerLinks = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Safety", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ];

  const customerTermsLinks = [
    { text: "Customer Terms - Bike Taxi", href: "#" },
    { text: "Customer Terms - Cabs and Auto", href: "#" },
    { text: "Corporate Affairs", href: "#" },
  ];

  const captainTermsLinks = [
    { text: "Captain Terms - Bike Taxi", href: "#" },
    { text: "Captain Terms - Cabs and Auto", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Press", href: "#" },
  ];

  const AppStoreButton = ({ type, href }) => {
    const imageSrc =
      type === "google"
        ? "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        : "https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg";

    const className = type === "google" ? "h-16" : "h-12";

    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={imageSrc}
          alt={`Get it on ${type === "google" ? "Google Play" : "App Store"}`}
          className={className}
        />
      </a>
    );
  };

  const FooterColumn = ({ title, links }) => (
    <div className="flex flex-col space-y-3">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          {link.text}
        </a>
      ))}
    </div>
  );

  const SocialLinks = () => (
    <div className="flex space-x-6">
      <a href="#" className="text-white hover:text-gray-300 transition-colors">
        <Facebook className="h-6 w-6" />
      </a>
      <a href="#" className="text-white hover:text-gray-300 transition-colors">
        <Twitter className="h-6 w-6" />
      </a>
      <a href="#" className="text-white hover:text-gray-300 transition-colors">
        <Linkedin className="h-6 w-6" />
      </a>
      <a href="#" className="text-white hover:text-gray-300 transition-colors">
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Customer App Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Customer app</h3>
            <div className="space-y-4">
              <AppStoreButton type="google" href="#" />
              <AppStoreButton type="apple" href="#" />
            </div>
          </div>

          {/* Captain App Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Captain app</h3>
            <AppStoreButton type="google" href="#" />
          </div>

          {/* Navigation Links */}
          <FooterColumn title="Quick Links" links={customerLinks} />
          <FooterColumn title="Customer Terms" links={customerTermsLinks} />
          <FooterColumn title="Captain Terms" links={captainTermsLinks} />
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2024 Roppen Transportation. All rights reserved.
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
