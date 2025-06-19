import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { NavItem } from "../../types";
import Logo from "../ui/Logo";
import { Link, useLocation } from "react-router-dom";

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/servicepage" },
  { name: "Features", href: "/#features" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();

  const handleClick = (href: string) => {
    const isAnchor = href.includes("#");
    if (isAnchor && location.pathname === "/") {
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-navbar py-4 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between">
        <Logo scrolled={scrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-medium hover:text-secondary-400 transition-colors ${scrolled ? 'text-primary-800' : 'text-white'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-medium hover:text-secondary-400 transition-colors ${scrolled ? 'text-primary-800' : 'text-white'}`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 py-5 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-800 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
