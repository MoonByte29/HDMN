import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-primary-100 max-w-2xl">
              Contact us today to discuss your project and discover how our team can help you
              achieve your business goals with innovative digital solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn bg-white text-primary-700 hover:bg-primary-50"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border border-white text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;