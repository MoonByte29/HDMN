import React, { useState, useEffect } from "react";
import {
  Search,
  Play,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  Zap,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import DotGrid from "../ui/DotGrid";
import PartnerLogos from "./PartnersLogo";

export default function Hero2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-screen relative bg-gradient-to-br from-slate-50 via-white to-blue-50  overflow-hidden">
        {/* DotGrid Background */}
        <DotGrid
          dotSize={5}
          gap={35}
          baseColor="#cbd5e1"
          activeColor="#3b82f6"
          proximity={100}
          className="opacity-60"
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-1/4 w-80 h-80 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-32 right-1/4 w-80 h-80 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center px-6 py-3 bg-blue-50/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200 shadow-sm"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="w-3 h-3 mr-2 bg-blue-500 rounded-full animate-pulse" />
              HD Media Network
            </div>

            <motion.div
              className="text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Where{" "}
                <motion.span
                  className="text-blue-800"
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Innovation
                </motion.span>{" "}
                Meets <br />
                <motion.span
                  className="text-blue-500"
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  Web Excellence
                </motion.span>
                !
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We create stunning digital experiences that transform businesses
              and captivate audiences. Let's build something extraordinary
              together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-blue-600 text-white px-10 py-3.5 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-xl backdrop-blur-sm">
                Contact
              </button>
              <Button className="flex items-center text-gray-700 px-8 py-4 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all font-semibold text-lg border border-gray-200 backdrop-blur-sm">
                Explore Service
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements with Scroll Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Analytics Card - Top Left */}
          <div
            className="absolute top-24 left-8 lg:left-16"
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotate(${
                3 + scrollY * 0.02
              }deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 w-72 hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">
                  Performance Analytics
                </h3>
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="font-bold text-green-600">+24.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ROI Increase</span>
                  <span className="font-bold text-blue-600">+187%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full w-4/5 shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card - Top Right */}
          <div
            className="absolute top-20 right-8 lg:right-16"
            style={{
              transform: `translateY(${scrollY * -0.15}px) rotate(${
                -2 - scrollY * 0.015
              }deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 w-64 hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Mobile Development
                  </h3>
                  <p className="text-gray-600 text-sm">iOS & Android Apps</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-sm font-semibold ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Stats - Bottom Left */}
          <div
            className="absolute bottom-24 left-8 lg:left-20"
            style={{
              transform: `translateY(${scrollY * 0.25}px) rotate(${
                2 + scrollY * 0.01
              }deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 w-60 hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-7 h-7 text-green-600" />
                <div>
                  <h3 className="font-bold text-gray-900">Growth Impact</h3>
                  <p className="text-gray-600 text-sm">Last quarter</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Growth</span>
                  <span className="font-bold text-green-600">+156%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Clients</span>
                  <span className="font-bold text-blue-600">+47</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Preview - Bottom Right */}
          <div
            className="absolute bottom-20 right-8 lg:right-20"
            style={{
              transform: `translateY(${scrollY * -0.2}px) rotate(${
                -3 - scrollY * 0.02
              }deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 w-64 hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-7 h-7 text-blue-600" />
                <div>
                  <h3 className="font-bold text-gray-900">Expert Network</h3>
                  <p className="text-gray-600 text-sm">
                    Top-tier professionals
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    +24
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-600">
                  Available now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <PartnerLogos />
    </>
  );
}
