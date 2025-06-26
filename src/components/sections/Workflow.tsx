import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Code, ShieldEllipsis } from 'lucide-react';
import { workflow } from '../../data/Workflowdata';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const iconComponents = {
  Lightbulb,
  Palette,
  Code,
  ShieldEllipsis,
};

const Workflow: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const workflowItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectionLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          y: 50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      )
      .fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        },
        '-=0.4'
      );

      // Animate connection line
      if (connectionLineRef.current) {
        tl.fromTo(connectionLineRef.current,
          {
            scaleX: 0,
            transformOrigin: 'left center'
          },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.inOut'
          },
          '-=0.2'
        );
      }

      // Animate workflow items with stagger
      workflowItemsRef.current.forEach((item, index) => {
        if (item) {
          const iconWrapper = item.querySelector('.icon-wrapper');
          const stepNumber = item.querySelector('.step-number');
          const title = item.querySelector('.workflow-title');
          const description = item.querySelector('.workflow-description');
          const accentLine = item.querySelector('.accent-line');

          tl.fromTo(item,
            {
              opacity: 0,
              y: 80,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'back.out(1.7)'
            },
            index * 0.15
          )
          .fromTo(iconWrapper,
            {
              scale: 0,
              rotation: -180
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: 'back.out(2)'
            },
            `-=0.6`
          )
          .fromTo(stepNumber,
            {
              scale: 0,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: 'bounce.out'
            },
            `-=0.4`
          )
          .fromTo([title, description],
            {
              opacity: 0,
              y: 20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out'
            },
            `-=0.4`
          );
        }
      });

      // Hover animations for each workflow item
      workflowItemsRef.current.forEach((item) => {
        if (item) {
          const iconWrapper = item.querySelector('.icon-wrapper');
          const icon = item.querySelector('.workflow-icon');
          const stepNumber = item.querySelector('.step-number');
          const accentLine = item.querySelector('.accent-line');
          const pulseRing = item.querySelector('.pulse-ring');

          item.addEventListener('mouseenter', () => {
            gsap.to(iconWrapper, {
              scale: 1.1,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.6,
              ease: 'back.out(1.7)'
            });
            gsap.to(stepNumber, {
              scale: 1.2,
              duration: 0.3,
              ease: 'back.out(1.7)'
            });
            gsap.to(accentLine, {
              scaleX: 1,
              duration: 0.5,
              ease: 'power3.out'
            });
            gsap.to(pulseRing, {
              scale: 2,
              opacity: 0,
              duration: 1,
              ease: 'power2.out'
            });
          });

          item.addEventListener('mouseleave', () => {
            gsap.to(iconWrapper, {
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
            gsap.to(stepNumber, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(accentLine, {
              scaleX: 0,
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
      id="workflow" 
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
          >
            Our Workflow
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our proven four-step process ensures we deliver high-quality solutions
            that meet your business needs and exceed expectations.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-orange-100 rounded-full z-0 transform -translate-y-1/2">
            <div 
              ref={connectionLineRef}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full shadow-sm"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workflow.map((work, index) => {
              const IconComponent = iconComponents[work.icon as keyof typeof iconComponents];
              
              return (
                <div 
                  key={work.id}
                  ref={el => workflowItemsRef.current[index] = el}
                  className="flex flex-col items-center text-center transform cursor-pointer group"
                >
                  <div className="relative mb-6">
                    <div className="icon-wrapper w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-white z-10 relative overflow-hidden">
                      {/* Gradient background overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${work.color}-400 to-${work.color}-600 opacity-10 rounded-full`} />
                      
                      <IconComponent className={`workflow-icon w-10 h-10 text-${work.color}-600 relative z-10`} />
                      
                      {/* Pulse ring effect */}
                      <div className={`pulse-ring absolute inset-0 rounded-full bg-${work.color}-400 opacity-30`} />
                    </div>
                    
                    {/* Background decorative circle */}
                    <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-${work.color}-100 to-${work.color}-200 rounded-full -z-10 transform -translate-x-1 -translate-y-1`} />
                    
                    {/* Step number */}
                    <div className="step-number absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className={`workflow-title text-xl font-bold text-gray-800 mb-3 group-hover:text-${work.color}-600 transition-colors duration-300`}>
                    {work.title}
                  </h3>
                  <p className="workflow-description text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                    {work.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className={`accent-line mt-4 h-1 w-12 bg-gradient-to-r from-${work.color}-400 to-${work.color}-600 rounded-full transform scale-x-0 origin-left`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;