import React from "react";
import {
  Globe,
  Share2,
  Search,
  PenTool,
  Target,
  Smartphone,
} from "lucide-react";
import {Link} from "react-router-dom";
import {services} from '../../data/Servicedata.ts';



const iconComponents = {
  Globe,
  Share2,
  Search,
  PenTool,
  Target,
  Smartphone,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer digital services to help your business grow and reach the
            right audience online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => {
            const IconComponent =
              iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <div
                key={service.id}
                className="card group hover:border-l-4 hover:border-l-primary-500 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-${service.color}-100 mb-6`}
                >
                  <IconComponent
                    className={`w-8 h-8 text-${service.color}-500`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
            );
          })}
          <Link
            to="/servicepage"
            className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
          >
            View More
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
