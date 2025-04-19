import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';

// Image imports
import imgAmbad1 from '../Public/locations/ambad1.jpg';
import imgAmbad2 from '../Public/locations/ambad2.jpg';
import imgHaridwar from '../Public/locations/haridwar.png';
import imgChakan from '../Public/locations/chakan.png';

interface Location {
  name: string;
  address: string;
  phone: string;
  image: string;
}

interface Plant {
  id: string;
  name: string;
  location: string;
  address: string;
}

const locations: Location[] = [
  {
    name: "Precision Auto Industries",
    address: "H-46, MIDC Ambad, Nashik, Maharashtra 422010",
    phone: "02594233409",
    image: imgAmbad1,
  },
  {
    name: "Precision Forging & Stampings",
    address: "Plot No. 25, 1/1, Satpur MIDC Rd, MIDC, Satpur Colony, Nashik, Maharashtra 422007",
    phone: "02532307081",
    image: imgAmbad2,
  },
  {
    name: "Haridwar Precision Auto Pvt ltd",
    address: "Plot No.6, Setor 4, SIDCUL, Uttarakhand 249403",
    phone: "01334239130",
    image: imgHaridwar,
  },
  {
    name: "PRECISION AUTO INDUSTRIES PVT. LTD.",
    address: "F129, AMBAD, NASHIK.",
    phone: "02536629601",
    image: imgAmbad2,
  },
  {
    name: "PRECISION AUTO COMPONENTS PVT. LTD.",
    address: "CHAKAN, PUNE.",
    phone: "",
    image: imgChakan,
  },
];

const plants: Plant[] = [
  {
    id: 'ambad',
    name: 'PRECISION AUTO INDUSTRIES PVT.LTD',
    location: 'AMBAD, NASHIK',
    address: 'MIDC Ambad Industrial Area, Nashik, Maharashtra',
  },
  {
    id: 'satpur',
    name: 'GENEXT PRECISION AUTO TECH PVT.LTD',
    location: 'SATPUR, NASHIK',
    address: 'MIDC Satpur Industrial Area, Nashik, Maharashtra',
  },
  {
    id: 'chakan',
    name: 'PRECISION AUTO COMPONENTS PVT.LTD',
    location: 'CHAKAN, PUNE',
    address: 'Chakan Industrial Area, Pune, Maharashtra',
  },
  {
    id: 'haridwar',
    name: 'PRECISION AUTO PVT.LTD',
    location: 'HARIDWAR',
    address: 'Industrial Area, Haridwar, Uttarakhand',
  },
];
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    plant: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text()) // Using text() since backend sends plain text
      .then((data) => {
        console.log('Response from server:', data);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          plant: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('Error sending the message:', error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team across India. We're here to help with your precision engineering needs.
          </p>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{location.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="ml-3 text-gray-600">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href={`tel:${location.phone}`} className="ml-3 text-gray-600 hover:text-blue-600">
                      {location.phone}
                    </a>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@precisionauto.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-gray-600">Saturday: Closed</p>
                    <p className="text-gray-600">Sunday: 9:00 AM – 6:00 PM

</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Global Presence</p>
                    <p className="text-gray-600">5 Manufacturing Plants across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="plant" className="block text-sm font-medium text-gray-700">
                  Preferred Plant Location
                </label>
                <select
                  name="plant"
                  id="plant"
                  value={formData.plant}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a plant (optional)</option>
                  {plants.map((plant) => (
                    <option key={plant.id} value={plant.id}>
                      {plant.name} - {plant.location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-50 rounded-md">
                  <p className="text-green-800 text-center">
                    Thank you for your message! Our team will get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
