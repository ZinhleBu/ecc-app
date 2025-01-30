import React from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-32 w-auto" /> 
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Home Solutions</a></li>
              <li><a href="#" className="hover:underline">Business Solutions</a></li>
              <li><a href="#" className="hover:underline">Become A Reseller</a></li>
              <li><a href="#" className="hover:underline">Get Finance</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg">About Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">FAQ’s</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg">Get In Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircle size={18} /> <a href="#" className="hover:underline">Message Our Team</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} /> <span>123 Street Name, City, Province, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} /> <a href="tel:+271234567890" className="hover:underline">+27 123 456 7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} /> <a href="mailto:howzit@ssafrica.co.za" className="hover:underline">howzit@ssafrica.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center border-t border-white mt-8 pt-4 text-sm">
          © Specialized Solar Solutions Africa. 2024. All Rights Reserved |  
          <a href="#" className="hover:underline ml-2">Terms of Use</a> |
          <a href="#" className="hover:underline ml-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
