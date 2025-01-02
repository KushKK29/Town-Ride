import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const customerLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
    { text: "Terms", href: "/terms" },
    { text: "Privacy Policy", href: "/privacypolicy" },
    { text: "Refund & Cancellation", href: "/refundcancel" },
    { text: "Shipping Policy", href: "/shipping" },
  ];

  const customerTermsLinks = [
    { text: "Customer Terms - Bike Taxi", href: "/terms" },
    { text: "Customer Terms - Cabs and Auto", href: "/terms" },
  ];

  const captainTermsLinks = [
    { text: "Captain Terms - Bike Taxi", href: "/terms" },
    { text: "Captain Terms - Cabs and Auto", href: "/terms" },
  ];

  const FooterColumn = ({ title, links }) => (
    <div className="flex flex-col space-y-3">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {links.map((link, index) =>
        link.href.startsWith("/") ? (
          <Link
            key={index}
            to={link.href}
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.text}
          </Link>
        ) : (
          <a
            key={index}
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors duration-200"
            target={link.href === "#" ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        )
      )}
    </div>
  );

  const SocialLinks = () => (
    <div className="flex space-x-6">
      <a
        href="#"
        className="text-white hidden hover:text-gray-300 transition-colors"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-white hidden hover:text-gray-300 transition-colors"
      >
        <Twitter className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-white hidden hover:text-gray-300 transition-colors"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-white hidden hover:text-gray-300 transition-colors"
      >
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Navigation Links */}
          <FooterColumn title="Quick Links" links={customerLinks} />
          <FooterColumn title="Customer Terms" links={customerTermsLinks} />
          <FooterColumn title="Captain Terms" links={captainTermsLinks} />
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2024 TR TOWN RIDE (OPC) PRIVATE LIMITED. All rights reserved.
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
