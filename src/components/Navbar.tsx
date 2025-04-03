import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  // Define explicit routes for each nav item
  const navItems = {
    'About Us': {
      'History': '/history',
      'Vision': '/vision',
      'Values': '/values',
      'Certifications': '/certification'
    },
    'Products & Services': {
      'Fuel Tanks': '/fuel_tanks',
      'Battery Boxes': '/battery_boxes',
      'Sheet Metal Parts': '/sheet_metal_parts'
    },
    'Manufacturing & Locations': {
      'Capabilities': '/capabilities',
      'Quality': '/quality',
      'Plant Locations': '/location'
    }
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  // Scroll event listener to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos.current > currentScrollPos) {
        // Scrolling up
        setVisible(true);
      } else {
        // Scrolling down
        setVisible(false);
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white shadow-lg fixed w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="src/Public/precision_logo.png" // Update this path to your actual logo
                alt="Precision Auto Group Logo"
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-[#00adef] hidden md:block">
                Precision Auto Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-[#00adef] px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            {Object.entries(navItems).map(([key, items]) => (
              <div key={key} className="relative group">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="text-gray-700 hover:text-[#00adef] px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  {key}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {Object.entries(items).map(([item, path]) => (
                        <Link
                          key={item}
                          to={path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="text-gray-700 hover:text-[#00adef] px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#6ec9ec] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Home
            </Link>
            {Object.entries(navItems).map(([key, items]) => (
              <div key={key}>
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {key}
                </button>
                {activeDropdown === key && (
                  <div className="pl-6">
                    {Object.entries(items).map(([item, path]) => (
                      <Link
                        key={item}
                        to={path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
