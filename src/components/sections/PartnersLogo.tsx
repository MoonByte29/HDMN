import React from "react";
import {partners} from '../../data/Partner.ts';

const PartnerLogos: React.FC = () => {

  // Duplicate partners for seamless loop (only for larger screens)
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full bg-blue-50 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-blue-700 text-lg">
            Partnering with the world's most innovative companies
          </p>
        </div>

        {/* Mobile and Tablet Layout - Static Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group cursor-pointer"
                onClick={() =>
                  partner.website && window.open(partner.website, "_blank")
                }
              >
                <div className="bg-white border border-blue-100 rounded-lg shadow-md hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-300 p-4 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 w-auto mx-auto transition-all duration-300 filter group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Scrolling Animation */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="flex animate-scroll hover:[animation-play-state:paused] px-20 py-5">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-6 group cursor-pointer"
                onClick={() =>
                  partner.website && window.open(partner.website, "_blank")
                }
              >
                <div className="bg-white border border-blue-100 rounded-lg shadow-md hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-300 p-6 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto mx-auto transition-all duration-300 filter group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          {/* <p className="text-blue-600 text-sm">
            And many more amazing partners worldwide
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;