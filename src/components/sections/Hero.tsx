import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import { DotLottiePlayer } from "@dotlottie/react-player";
import upper from "../../assets/upper.png";
import lower from "../../assets/lower.mp4";
import Button from "../ui/Button";
// import lower from "../../assets/lower.jpg";

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-screen flex items-center bg-gradient-to-r from-primary-900 to-secondary-900 overflow-hidden"
      >
        <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary-500 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent-500 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white"
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
              <span className="text-sm md:text-xl px-5 mb-10 text-white bg-secondary-500 rounded-lg">
                HD Media Newtork
              </span><br/>
              Where{" "}
              <motion.span
                className="text-primary-400"
                animate={{
                  color: ["#36a3f7", "#0d87ea", "#36a3f7"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Innovation
              </motion.span>{" "}
              Meets{" "}
              <motion.span
                className="text-secondary-400"
                animate={{
                  color: ["#42c2cd", "#29a3af", "#42c2cd"],
                }}
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
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We create stunning digital experiences that transform businesses
              and captivate audiences. Let's build something extraordinary
              together.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Now
              </motion.a>
              <motion.a
                href="#services"
                className="btn btn-outline border-white text-white bg-white/10 backdrop-blur-sm hover:bg-blue-600 a"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-full h-full rounded-lg p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <DotLottiePlayer
                  src="https://lottie.host/3888208c-4cda-45f8-a3d7-f1bb487b1f59/gdjIr55MAq.lottie"
                  autoplay
                  loop
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-lg -z-10 hidden md:block"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500/20 rounded-lg -z-10 hidden md:block"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      </section>

    </>
  );
};

export default Hero;
