import React from 'react';
import { Lightbulb, Palette, Code, ShieldEllipsis } from 'lucide-react';
import {workflow} from '../../data/Workflowdata.ts';


const iconComponents = {
  Lightbulb,
  Palette,
  Code,
  ShieldEllipsis,
};

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Workflow</h2>
          <p className="section-subtitle">
            Our proven four-step process ensures we deliver high-quality solutions
            that meet your business needs and exceed expectations.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0"/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workflow.map((work, index) => {
              const IconComponent = iconComponents[work.icon as keyof typeof iconComponents];
              
              return (
                <div key={work.id} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md border-4 border-white z-10">
                      <IconComponent className={`w-10 h-10 text-${work.color}-600`} />
                    </div>
                    <div className="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-full -z-10 transform -translate-x-1 -translate-y-1"></div>
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
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