import React, { useState } from 'react';
import { Mail, Phone, Clock, User, Building, PhoneCall } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  interface ContactPerson {
    name: string;
    title: string;
    phone: string;
    email: string;
  }

  const contactPersons: ContactPerson[] = [
    {
      name: "B M Khairnar",
      title: "Managing Director",
      phone: "9822080400",
      email: "bmkhairnar@precision.co.in",
    },
    {
      name: "S C Gurule",
      title: "Senior Executive",
      phone: "9822750023",
      email: "scgurule@precision.co.in",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Response from server:', data);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Reach out to our key contacts or send us a message directly. We're here to help with your precision engineering needs.
          </p>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactPersons.map((person, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-800">{person.name}</h3>
                  {person.title && (
                    <p className="text-sm text-blue-600 font-semibold mt-1">{person.title}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <PhoneCall className="w-6 h-6 text-blue-600" />
                  </div>
                  <a 
                    href={`tel:${person.phone}`} 
                    className="ml-4 text-gray-700 hover:text-blue-600 text-lg flex items-center group"
                  >
                    {person.phone}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&to=${person.email}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-700 hover:text-blue-600 text-lg flex items-center group"
                  >
                    {person.email}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Information Side */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                    <p className="text-blue-100">Monday - Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-blue-100">Saturday & Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Building className="w-8 h-8" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                    <p className="text-blue-100">Precision Auto Industries</p>
                    <p className="text-blue-100">Nashik, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">General Inquiry</h3>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&to=bmkhairnar@precision.co.in" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      bmkhairnar@precision.co.in

                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02]"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 text-center">
                      Thank you for your message! We'll respond within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;