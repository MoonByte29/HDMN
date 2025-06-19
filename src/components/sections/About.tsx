import React, { useState, useEffect, useRef } from "react";
import { Users, CheckCircle, Award, Calendar } from "lucide-react";
import { StatItem } from "../../types";
import { motion } from "framer-motion";
import about2 from "../../assets/about2.png";

const stats: StatItem[] = [
  { id: 1, value: 120, label: "Satisfied Clients", suffix: "+" },
  { id: 2, value: 200, label: "Projects Launched", suffix: "+" },
  { id: 3, value: 2, label: "Years Completed", suffix: "" },
];

const About: React.FC = () => {
  const [counters, setCounters] = useState<StatItem[]>(
    stats.map((stat) => ({ ...stat, value: 0 }))
  );

  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;

        stats.forEach((stat, index) => {
          const duration = 2000;
          const steps = 60;
          const increment = stat.value / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            if (currentStep < steps) {
              setCounters((prev) =>
                prev.map((counter, i) =>
                  i === index
                    ? {
                        ...counter,
                        value: Math.ceil(increment * (currentStep + 1)),
                      }
                    : counter
                )
              );
              currentStep++;
            } else {
              clearInterval(timer);
            }
          }, duration / steps);
        });
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statsIcons = [
    <Users key="users" className="w-10 h-10 text-primary-500" />,
    <CheckCircle key="check" className="w-10 h-10 text-secondary-500" />,
    <Calendar key="calendar" className="w-10 h-10 text-accent-500" />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-50">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="section-title">About HD Media Network</h2>
          <p className="section-subtitle">
            We're a passionate team crafting innovative digital solutions to
            boost business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.img
                src={about2}
                alt="Our Team Collaborating"
                className=" w-full max-h-96 object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-lg -z-10"
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
                className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-100 rounded-lg -z-10"
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

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Transforming Ideas into Digital Reality
            </h3>

            <p className="text-gray-700 mb-6">
              At HD Media Network, we believe in the power of technology to
              transform businesses. Our mission is to provide innovative IT
              solutions that help our clients thrive in the digital landscape.
            </p>

            <p className="text-gray-700 mb-8">
              We combine creativity, technical expertise, and industry knowledge
              to deliver exceptional results that exceed client expectations.
              Our team is committed to quality, transparency, and continuous
              improvement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {counters.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100"
                    // whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {statsIcons[index]}
                  </motion.div>
                  <motion.div
                    className="font-bold text-3xl text-primary-700 animated-counter"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                    <span>{stat.suffix}</span>
                  </motion.div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
