import React from 'react';
import { Mail, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              Get in touch with our team for inquiries about our products and services.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&to=bmkhairnar@precision.co.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    bmkhairnar@precision.co.in
                  </a>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Business Hours</p>
                  <div className="text-gray-500">
                    <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: Closed</p>
                    <p>Sunday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Global Presence */}
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Global Presence</p>
                  <p className="text-gray-500">5 Manufacturing Plants across India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact CTA */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                Contact Options
              </h3>
              <p className="text-gray-500 text-lg">
                If you want to send a message or check all locations' contact details
              </p>
              
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View All Locations
                </Link>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                For direct inquiries, please use our email.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;