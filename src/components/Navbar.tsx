import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import img1 from '../Public/precision_logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  const navItems = {
    'ABOUT US': {
      'HISTORY': '/history',
      'VISION': '/vision',
      //'VALUES': '/values',
      'CERTIFICATIONS': '/certification'
    },
    'PRODUCTS & SERVICES': {
      'FUEL TANKS': '/fuel_tanks',
      'BATTERY BOXES': '/battery_boxes',
      'SHEET METAL PARTS': '/sheet_metal_parts'
    },
    'MANUFACTURING & LOCATIONS': {
      'CAPABILITIES': '/capabilities',
      'QUALITY': '/quality',
      'PLANT LOCATION': '/location'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function for handling link clicks
  const handleLinkClick = (callback?: () => void) => {
    window.scrollTo(0, 0);
    if (callback) callback();
  };

  return (
    <nav className={`bg-white/80 backdrop-blur-lg shadow-lg fixed w-full z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={() => handleLinkClick()}
              className="flex-shrink-0 flex items-center group"
            >
              <img
                src={img1} // Changed to public path
                alt="Precision Auto Group Logo"
                className="h-12 w-auto mr-2 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#00adef] to-[#0088cc] bg-clip-text text-transparent hidden md:block transition-all duration-300 group-hover:scale-105">
                Precision Auto Group
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {Object.entries(navItems).map(([key, items]) => (
              <div 
                key={key} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-[#00adef] px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                  <span>{key}</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 transition-all duration-300 ${activeDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="relative top-0">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                    <div className="relative bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-2">
                      {Object.entries(items).map(([item, path]) => (
                        <Link
                          key={item}
                          to={path}
                          onClick={() => handleLinkClick()}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00adef]/10 hover:text-[#00adef] rounded-lg transition-colors duration-150"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link 
              to="/contact" 
              onClick={() => handleLinkClick()}
              className="text-gray-700 hover:text-[#00adef] px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#00adef] focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 backdrop-blur-lg`}>
        <div className="px-4 pt-2 pb-3 space-y-2">
          {Object.entries(navItems).map(([key, items]) => (
            <div key={key} className="space-y-1">
              <button
                onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-[#00adef] hover:bg-[#00adef]/10 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  {key}
                  <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <div className={`pl-6 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === key ? 'max-h-96' : 'max-h-0'}`}>
                {Object.entries(items).map(([item, path]) => (
                  <Link
                    key={item}
                    to={path}
                    onClick={() => handleLinkClick(() => setIsOpen(false))}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#00adef] hover:bg-[#00adef]/10 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <Link
            to="/contact"
            onClick={() => handleLinkClick(() => setIsOpen(false))}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#00adef] hover:bg-[#00adef]/10 transition-colors duration-200"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
