import React from "react";
import { motion } from "framer-motion";
import lower from "../../assets/lower.mp4";
import "../ui/Hero2.css";

const Hero2: React.FC = () => {
  return (
    <>
      <section className="w-full h-screen bg-gradient-to-b from-blue-950 to-slate-900">
        <motion.div
          className="rounded-full absolute h-15 w-15 bg-teal-500"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Content goes here */}
        </motion.div>
      </section>
    </>
  );
};

export default Hero2;
