import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Share2,
  Search,
  PenTool,
  Target,
  Smartphone,
  MessageCircle,
  BarChart2,
  TrendingUp,
  Cpu,
  CreditCard,
  Code,
} from "lucide-react";
import { services } from "../../data/Servicedata.ts";

const iconComponents = {
  Globe,
  Share2,
  Search,
  PenTool,
  Target,
  Smartphone,
  MessageCircle,
  BarChart2,
  TrendingUp,
  Cpu,
  CreditCard,
  Code,
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <motion.section
        className="bg-gradient-to-r from-blue-900 to-violet-900 py-24 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-violet-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive range of digital solutions designed to
            elevate your business
          </motion.p>
        </div>
      </motion.section>
      <section id="services" className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent =
                iconComponents[service.icon as keyof typeof iconComponents];
              return (
                <div
                  key={service.id}
                  className="card group hover:border-l-4 hover:border-l-blue-500 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-${service.color}-100 mb-6`}
                  >
                    <IconComponent
                      className={`w-8 h-8 text-${service.color}-500`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default ServicesPage;
