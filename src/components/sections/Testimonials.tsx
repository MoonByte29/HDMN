import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/Testimonialdata.ts';


const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, currentSlide]);
  
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with HD Media Network.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            onClick={() => {
              prevSlide();
              setAutoplay(false);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            onClick={() => {
              nextSlide();
              setAutoplay(false);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Testimonial Carousel */}
          <div className="overflow-hidden relative pb-5">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="shrink-0">
                        <img
                          src={testimonial.gender}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-primary-100"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {Array(5).fill(0).map((_, index) => (
                            <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <p className="text-gray-700 italic mb-6">
                          "{testimonial.content}"
                        </p>
                        
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-primary-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoplay(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;