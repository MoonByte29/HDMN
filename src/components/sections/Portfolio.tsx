import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PortfolioItem, CategoryFilter } from '../../types';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A modern e-commerce platform with advanced filtering and secure checkout.',
    category: 'website',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with advanced features.',
    category: 'app',
    image: 'https://images.pexels.com/photos/6781270/pexels-photo-6781270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Restaurant Branding',
    description: 'Complete branding package including logo, menu design, and website.',
    category: 'branding',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    description: 'Strategic social media campaign that increased engagement by 200%.',
    category: 'marketing',
    image: 'https://images.pexels.com/photos/7345125/pexels-photo-7345125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Real Estate Website',
    description: 'Property listing website with advanced search and filtering capabilities.',
    category: 'website',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
    category: 'app',
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const categories: CategoryFilter[] = [
  { id: 'all', name: 'All Projects' },
  { id: 'website', name: 'Websites' },
  { id: 'app', name: 'Applications' },
  { id: 'branding', name: 'Branding' },
  { id: 'marketing', name: 'Marketing' },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our recent projects and see how we've helped businesses
            achieve their digital goals and drive impressive results.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md"
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  activeItem === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex items-center">
                  <span className="text-xs font-medium px-3 py-1 bg-primary-500 text-white rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  <a
                    href="#"
                    className="ml-auto text-white hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;