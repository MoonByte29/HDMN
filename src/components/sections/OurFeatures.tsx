import React, { useState } from "react";
import { Palette, Code, Users, Clock } from "lucide-react";

const OurFeatures: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState(2); // Last section open initially

  const features = [
    {
      id: 0,
      icon: <Palette className="w-full h-full" />,
      title: "Clean and Modern UI/UX Design",
      description:
        "Creating intuitive and visually appealing interfaces that enhance user experience and drive engagement.",
      img: "https://img.freepik.com/free-photo/unrecognizable-colleagues-standing-table-looking-design-projects_1098-20475.jpg?t=st=1750538474~exp=1750542074~hmac=2e9b7f9f655a94850f7e231c717cc0cdb60af0c9e40716ba92c6d4724f3139a5&w=1380",
    },
    {
      id: 1,
      icon: <Code className="w-full h-full" />,
      title: "Latest & Scalable Technology Stack",
      description:
        "Leveraging cutting-edge technologies and frameworks to build robust, future-proof solutions.",
      img: "",
    },
    {
      id: 2,
      icon: <Users className="w-full h-full" />,
      title: "Client-Centric Project Execution",
      description:
        "Tailored approach focusing on your specific needs and goals throughout the development process.",
      color: "purple",
    },
    {
      id: 3,
      icon: <Clock className="w-full h-full" />,
      title: "Timely Delivery with Quality Assurance",
      description:
        "Committed to meeting deadlines while maintaining the highest standards of code quality and testing.",
      color: "accent",
    },
  ];

  const getWidth = (sectionId: number) => {
    if (hoveredSection === sectionId) {
      return "w-2/3";
    }
    return "w-1/6";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-600 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            We deliver exceptional digital solutions with a focus on innovation,
            quality, and client satisfaction.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-yellow-300 text-black px-6 py-2 rounded-full inline-block text-sm font-medium mb-4">
          Save up to 30% on your Tech Stack
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="flex h-96 gap-4 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${getWidth(
              feature.id
            )} transition-all duration-500 ease-in-out cursor-pointer`}
            onMouseEnter={() => setHoveredSection(feature.id)}
          >
            <div className="bg-white rounded-2xl h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Content when expanded */}
              {hoveredSection === feature.id ? (
                <div className="h-full flex">
                  {/* Left side - Content */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        {feature.title}
                      </h2>
                      <div className="space-y-4">
                        <div
                          key={feature.id}
                          className="flex items-center space-x-3"
                        >
                          <span className="text-gray-700 font-medium">
                            {feature.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Image */}
                  <div className="w-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-r-2xl">
                      {/* Placeholder for team image */}
                      <img src={feature.img} alt="" />
                    </div>
                  </div>
                </div>
              ) : (
                /* Collapsed state */
                <div className="h-full flex items-center justify-center p-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 transform -rotate-90 whitespace-nowrap">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeatures;
