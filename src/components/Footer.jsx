import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black bottom-0 w-full min-h-[12vw]">
      <div className="max-w-7xl mx-auto px-4 py-1 pt-8">
        <div className="flex flex-col md:flex-row md:items-start gap-2">
          {/* Bright Start Tutoring - LEFT */}
          <div className="flex-1">
            <div className="flex items-center space-x-1">
              <span className="text-lg">🎓</span>
              <h3 className="text-lg font-bold">Bright Start Tutoring</h3>
            </div>
            <p className="text-md leading-none mt-1">
              Empowering the next generation of developers through personalized
              tutoring and hands-on learning experiences.
            </p>
          </div>

          {/* Contact Info - CENTER (Centered) */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold pl-21">Contact Info</h4>
            <div className="text-md mt-1 space-y-1">
              <div className="flex pl-20 space-x-1">
                <span className="mt-1">
                  <PiEnvelopeSimpleLight />
                </span>
                <a
                  href="mailto:info@brightstartTutoring.com"
                  className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                >
                  info@brightstartTutoring.com
                </a>
              </div>
              <div className="flex  pl-20 space-x-1">
                <span className="mt-1">
                  <BsTelephone />
                </span>
                <a
                  href="tel:+15551234567"
                  className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex pl-20 space-x-1">
                <span className="mt-1">
                  <IoLocationOutline />
                </span>
                <span>Online & Local Sessions</span>
              </div>
            </div>
          </div>

          {/* Quick Links - RIGHT (With spacing from Contact Info) */}
          <div className="flex-1 pl-8">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="text-md mt-1 space-y-1">
              <div>
                <a
                  href="/"
                  className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                >
                  Home
                </a>
              </div>
              <div>
                <a
                  href="/tutors"
                  className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                >
                  Our Tutors
                </a>
              </div>
              <div>
                <a
                  href="/contact"
                  className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm pt-1 border-t border-yellow-600 border-opacity-20">
          <p className="pt-4 pb-8">
            © 2025 Bright Start Tutoring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
