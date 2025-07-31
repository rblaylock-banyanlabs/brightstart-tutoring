import React from 'react';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer = ({ 
  companyName = "Bright Start Tutoring",
  tagline = "Empowering the next generation of developers through personalized tutoring and hands-on learning experiences.",
  contactInfo = {
    email: "info@brightstartutoring.com",
    phone: "(555) 123-4567",
    location: "Online & Local Sessions"
  },
  quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Tutors", href: "#tutors" },
    { label: "Contact", href: "#contact" }
  ],
  copyrightYear = new Date().getFullYear().toString(),
  backgroundColor = "bg-yellow-500"
}) => {
  return (
    <footer className={`${backgroundColor} px-6 py-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-gray-800" />
              <h3 className="text-xl font-bold text-gray-800">{companyName}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-700" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-700 text-sm hover:text-gray-900 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-700" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-700 text-sm hover:text-gray-900 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-700" />
                <span className="text-gray-700 text-sm">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-700 text-sm hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-700 text-sm">
            © {copyrightYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;