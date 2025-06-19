import React from 'react';
import { Palette, Code, Users, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-full h-full" />,
      title: "Clean and Modern UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces that enhance user experience and drive engagement.",
      color: "primary"
    },
    {
      icon: <Code className="w-full h-full" />,
      title: "Latest & Scalable Technology Stack",
      description: "Leveraging cutting-edge technologies and frameworks to build robust, future-proof solutions.",
      color: "secondary"
    },
    {
      icon: <Users className="w-full h-full" />,
      title: "Client-Centric Project Execution",
      description: "Tailored approach focusing on your specific needs and goals throughout the development process.",
      color: "purple"
    },
    {
      icon: <Clock className="w-full h-full" />,
      title: "Timely Delivery with Quality Assurance",
      description: "Committed to meeting deadlines while maintaining the highest standards of code quality and testing.",
      color: "accent"
    }
  ];

  return (
    <section id='features' className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-900 mb-3 sm:mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-600 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            We deliver exceptional digital solutions with a focus on innovation, quality, and client satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-${feature.color}-100 text-${feature.color}-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} rounded-b-xl sm:rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;