import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../../assets/Logo/VCare Nursing Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="VCare Nursing" className="h-18 w-auto object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</Link>

            {/* Desktop Services Dropdown - COMMENTED OUT FOR TESTING */}
            {/*
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                  <Link to="/services/home-nursing" className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors">
                    Home Nursing
                  </Link>
                  <Link to="/services/hospital-staffing" className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors">
                    Hospital Staffing
                  </Link>
                  <Link to="/services/child-care" className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors">
                    Child Care
                  </Link>
                  <Link to="/services/elderly-care" className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors">
                    Elderly Care
                  </Link>
                </div>
              </div>
            </div>
            */}

            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</Link>

            <Link
              to="/login"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-600/20"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 bg-slate-50 rounded-lg">Home</Link>

            {/* Mobile Services Dropdown - COMMENTED OUT FOR TESTING */}
            {/*
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
              >
                Services
                {isMobileServicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isMobileServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pl-4 space-y-1 mt-1 border-l-2 border-slate-100 ml-3"
                >
                  <Link to="/services/home-nursing" className="block px-3 py-2 text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg">
                    Home Nursing
                  </Link>
                  <Link to="/services/hospital-staffing" className="block px-3 py-2 text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg">
                    Hospital Staffing
                  </Link>
                  <Link to="/services/child-care" className="block px-3 py-2 text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg">
                    Child Care
                  </Link>
                  <Link to="/services/elderly-care" className="block px-3 py-2 text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg">
                    Elderly Care
                  </Link>
                </motion.div>
              )}
            </div>
            */}

            <Link to="/about" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg">About</Link>

            <Link to="/login" className="block w-full text-center mt-4 px-5 py-3 bg-blue-600 text-white rounded-xl font-medium">
              Login Portal
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
