import React from "react";
import {
  TrendingUp,
  Palette,
  Users,
  Search,
  Zap,
  MessageCircle,
  Globe,
  Share2,
  PenTool,
  Target,
  Smartphone,
} from "lucide-react";
import { services } from "../../data/Servicedata";

const iconMap = {
  Globe,
  Share2,
  Search,
  PenTool,
  Target,
  Smartphone,
};

const OurServices: React.FC = () => {
  return (
    <section className="m-5 py-20 bg-slate-100 relative rounded-3xl shadow-[0_-4px_12px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.06)] border-slate-200 border-2 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
               `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions crafted to elevate your brand
          </p>
        </div>

        {/* Masonry Layout Container */}
        <div className="relative">
          {/* Desktop Masonry Layout */}
          <div className="hidden lg:block">
            {/* Left Column */}
            <div className="absolute left-0 top-0 w-80">
              {/* Strategic Marketing - Top Left */}
              <div className="mb-6">
                <ServiceCard service={services[0]} index={0} />
              </div>

              {/* Influencer + UGC - Bottom Left with reduced offset */}
              <div style={{ marginTop: "60px" }}>
                <ServiceCard service={services[2]} index={2} />
              </div>
            </div>

            {/* Center Column */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-80"
              style={{ top: "40px" }}
            >
              {/* Creative Ads - Top Center with reduced offset */}
              <div className="mb-6">
                <ServiceCard service={services[1]} index={1} />
              </div>

              {/* SEO - Bottom Center with reduced offset */}
              <div style={{ marginTop: "70px" }}>
                <ServiceCard service={services[3]} index={3} />
              </div>
            </div>

            {/* Right Column */}
            <div className="absolute right-0 w-80" style={{ top: "20px" }}>
              {/* Automation - Top Right with small offset */}
              <div className="mb-6">
                <ServiceCard service={services[4]} index={4} />
              </div>

              {/* Social Media - Bottom Right with reduced spacing */}
              <div style={{ marginTop: "80px" }}>
                <ServiceCard service={services[5]} index={5} />
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <ServiceCard service={services[0]} index={0} />
                <div className="mt-8">
                  <ServiceCard service={services[2]} index={2} />
                </div>
                <div className="mt-6">
                  <ServiceCard service={services[4]} index={4} />
                </div>
              </div>
              <div className="space-y-6 mt-10">
                <ServiceCard service={services[1]} index={1} />
                <div className="mt-8">
                  <ServiceCard service={services[3]} index={3} />
                </div>
                <div className="mt-6">
                  <ServiceCard service={services[5]} index={5} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Spacer for absolute positioning - adjusted height */}
          <div className="hidden lg:block h-[750px]"></div>
          <div className="hidden md:block lg:hidden h-auto"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Explore All Services</span>
            <TrendingUp className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
          </button>
        </div>
      </div>
    </section>
  );
};
// Service Card Component
const ServiceCard: React.FC<{ service: any; index: number }> = ({
  service,
}) => {
  const IconComponent =
    iconMap[service.icon as keyof typeof iconMap] || MessageCircle;

  return (
    <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-100/50 backdrop-blur-sm overflow-hidden">
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 via-blue-600 to-blue-500 bg-[length:200%_100%] animate-[borderFlow_3s_ease-in-out_infinite] p-[2px]">
          <div className="w-full h-full bg-white rounded-3xl"></div>
        </div>
      </div>

      {/* Multi-layered Border Effects */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-clip-border"></div>

      {/* Pulsing Corner Accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l-3 border-t-3 border-blue-400/0 group-hover:border-blue-400/60 rounded-tl-3xl transition-all duration-500 group-hover:animate-pulse"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-400/0 group-hover:border-purple-400/50 rounded-tr-3xl transition-all duration-700"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-blue-500/0 group-hover:border-blue-500/40 rounded-br-3xl transition-all duration-600 delay-100"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-purple-500/0 group-hover:border-purple-500/30 rounded-bl-3xl transition-all duration-500 delay-200"></div>

      {/* Scanning Border Effect */}
      <div className="absolute inset-0 rounded-3xl border border-blue-400/0 group-hover:border-blue-400/30 transition-colors duration-500">
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] transition-opacity duration-700"></div>
      </div>

      {/* Electric Arc Effects */}
      <div className="absolute top-1/4 left-0 w-1 h-8 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 delay-300"></div>
      <div className="absolute bottom-1/4 right-0 w-1 h-6 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-500"></div>
      <div className="absolute top-0 left-1/3 w-8 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 delay-400"></div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Floating Icon Container */}
      <div className="relative mb-6 flex items-start">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          {/* Icon Glow Effect */}
          <div className="absolute inset-0 w-16 h-16 bg-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          {/* Floating Particles */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-500 leading-tight">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-base">
          {service.description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-blue-200/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

      <style jsx>{`
        @keyframes borderFlow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(400%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
};
export default OurServices;
