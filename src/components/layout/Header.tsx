import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Globe, ArrowRight, Sparkles } from "lucide-react";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/servicepage" },
  { name: "Features", href: "/#features" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    const isAnchor = href.includes("#");
    if (isAnchor) {
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Glassmorphism Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
            : "bg-white/10 backdrop-blur-md border-b border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Enhanced Brand Section */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <Globe className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-bold transition-all duration-300 ${
                  scrolled ? "text-gray-900" : "text-gray-900"
                }`}>
                  HD Media Network
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">Digital Excellence</span>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group hover:bg-blue-50 ${
                    scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="relative overflow-hidden bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group hover:bg-blue-700">
                <div className="relative flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Enhanced Mobile Toggle */}
            <button
              className="lg:hidden relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl mx-4 my-4 rounded-3xl shadow-2xl border border-gray-200/50">
            <nav className="flex flex-col p-6 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-3 text-base font-semibold text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                  onClick={() => {
                    setIsOpen(false);
                    handleClick(item.href);
                  }}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-200/50 mt-4">
                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group hover:bg-blue-700">
                  <div className="flex items-center justify-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-32 pointer-events-none z-40">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-blue-300/10 rounded-full blur-2xl"></div>
      </div>
    </>
  );
};

export default Header;