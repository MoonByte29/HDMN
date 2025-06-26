import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, CheckCircle, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { stats } from '../../data/Aboutdata';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const iconComponents = {
  Users,
  CheckCircle,
  Calendar,
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const decorativeElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [animatedStats, setAnimatedStats] = useState(
    stats.map(stat => ({ ...stat, currentValue: 0 }))
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline for scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      });

      // Animate title and subtitle
      tl.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out'
        }
      )
      .fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.5'
      );

      // Animate image container
      tl.fromTo(imageRef.current,
        {
          opacity: 0,
          x: -100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.6'
      );

      // Animate content section
      tl.fromTo(contentRef.current,
        {
          opacity: 0,
          x: 100
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out'
        },
        '-=0.8'
      );

      // Animate stats with counter effect
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          tl.fromTo(stat,
            {
              opacity: 0,
              y: 50,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'back.out(1.7)',
              onComplete: () => {
                // Animate counter
                const targetValue = stats[index].value;
                gsap.to(animatedStats[index], {
                  currentValue: targetValue,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: function() {
                    setAnimatedStats(prev => 
                      prev.map((item, i) => 
                        i === index 
                          ? { ...item, currentValue: Math.floor(this.targets()[0].currentValue) }
                          : item
                      )
                    );
                  }
                });
              }
            },
            `-=${0.6 - (index * 0.1)}`
          );
        }
      });

      // Floating animation for decorative elements
      decorativeElementsRef.current.forEach((element, index) => {
        if (element) {
          gsap.to(element, {
            y: index % 2 === 0 ? -20 : 20,
            rotation: index % 2 === 0 ? 360 : -360,
            duration: 8 + (index * 2),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      });

      // Hover animations for stats
      statsRef.current.forEach((stat) => {
        if (stat) {
          const icon = stat.querySelector('.stat-icon');
          const number = stat.querySelector('.stat-number');
          const pulseRing = stat.querySelector('.pulse-ring');

          stat.addEventListener('mouseenter', () => {
            gsap.to(stat, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(icon, {
              scale: 1.2,
              duration: 0.6,
              ease: 'back.out(1.7)'
            });
            gsap.to(number, {
              scale: 1.1,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(pulseRing, {
              scale: 2,
              opacity: 0,
              duration: 1,
              ease: 'power2.out'
            });
          });

          stat.addEventListener('mouseleave', () => {
            gsap.to(stat, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: 'power2.out'
            });
            gsap.to(number, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.set(pulseRing, {
              scale: 1,
              opacity: 0.3
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div 
          ref={el => decorativeElementsRef.current[0] = el}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
        />
        <div 
          ref={el => decorativeElementsRef.current[1] = el}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        />
        <div 
          ref={el => decorativeElementsRef.current[2] = el}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full blur-3xl"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animation: `float ${3 + i}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
          >
            About HD Media Network
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're a passionate team crafting innovative digital solutions to boost business growth
            and transform ideas into digital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team Collaborating"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold text-sm">Innovation First</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-60" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-60" />
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Ideas into 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Reality</span>
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At HD Media Network, we believe in the power of technology to transform businesses. 
                  Our mission is to provide innovative IT solutions that help our clients thrive in 
                  the digital landscape.
                </p>

                <p>
                  We combine creativity, technical expertise, and industry knowledge to deliver 
                  exceptional results that exceed client expectations. Our team is committed to 
                  quality, transparency, and continuous improvement.
                </p>
              </div>

              {/* Call to action */}
              <div className="flex items-center space-x-2 text-blue-600 font-semibold group cursor-pointer mt-6">
                <span>Learn more about our journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              {animatedStats.map((stat, index) => {
                const IconComponent = iconComponents[stat.icon as keyof typeof iconComponents];
                
                return (
                  <div
                    key={stat.id}
                    ref={el => statsRef.current[index] = el}
                    className="text-center group cursor-pointer"
                  >
                    <div className="relative mb-4 inline-flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 flex items-center justify-center shadow-lg relative overflow-hidden`}>
                        <IconComponent className={`stat-icon w-8 h-8 text-${stat.color}-600 relative z-10`} />
                        
                        {/* Pulse ring effect */}
                        <div className={`pulse-ring absolute inset-0 rounded-full bg-${stat.color}-400 opacity-30`} />
                      </div>
                      
                      {/* Floating sparkle */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className={`stat-number font-bold text-3xl text-${stat.color}-700 mb-2`}>
                      {stat.currentValue}
                      <span className="text-2xl">{stat.suffix}</span>
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                    
                    {/* Bottom accent line */}
                    <div className={`mt-3 h-1 w-0 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 group-hover:w-12 transition-all duration-500 ease-out rounded-full mx-auto`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default About;