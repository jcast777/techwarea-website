import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Smartphone, Watch, Headphones } from 'lucide-react';

const FeaturedGadgets = () => {
  const gadgets = [
    {
      id: 1,
      name: 'Smart Glasses Pro 2025',
      description: 'Augmented reality glasses with ultra-light design and 12hr battery life for seamless digital integration.',
      insights: 'Industry-leading AR technology with enhanced field of view and intuitive gesture controls',
      features: ['12-hour battery life', 'Ultra-light frame', 'Seamless app integration', 'Voice command support'],
      image: 'https://images.stockcake.com/public/8/5/8/858e4c23-3a38-4319-a413-e7a9e1ad822a_large/futuristic-smart-glasses-stockcake.jpg',
      tag: 'New',
      tagColor: 'bg-accent-500',
      icon: <Zap className="w-6 h-6" />,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Quantum Phone X1',
      description: 'Revolutionary foldable smartphone with quantum processing and holographic display technology.',
      insights: 'Pioneering quantum computing in a mobile form factor with groundbreaking display technology',
      features: ['Foldable holographic display', 'Quantum processing chip', 'Advanced cooling system', '5G/6G ready'],
      image: 'https://images.stockcake.com/public/7/4/3/743531a0-2da4-440d-86c1-d55bc2d86236_large/future-at-fingertips-stockcake.jpg',
      tag: 'Trending',
      tagColor: 'bg-primary-500',
      icon: <Smartphone className="w-6 h-6" />,
      rating: 4.9
    },
    {
      id: 3,
      name: 'NeuroWatch Elite',
      description: 'AI-powered smartwatch with brain-computer interface and advanced health monitoring.',
      insights: 'Cutting-edge neural interface technology for intuitive control and comprehensive health tracking',
      features: ['Brain-computer interface', 'Advanced health metrics', 'Stress and focus monitoring', '7-day battery life'],
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tag: 'Featured',
      tagColor: 'bg-purple-500',
      icon: <Watch className="w-6 h-6" />,
      rating: 4.7
    },
    {
      id: 4,
      name: 'AirPods Neural',
      description: 'Next-gen wireless earbuds with spatial audio and real-time language translation.',
      insights: 'Advanced audio processing with AI-powered language translation and immersive sound experience',
      features: ['Real-time translation', '3D spatial audio', 'Active noise cancellation', 'Sweat and water resistant'],
      image: 'https://images.stockcake.com/public/2/f/e/2fed593f-f2ce-47ad-be72-32bbcc8156dd_large/wireless-earbuds-charging-stockcake.jpg',
      tag: 'Hot',
      tagColor: 'bg-red-500',
      icon: <Headphones className="w-6 h-6" />,
      rating: 4.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gadgets" className="py-16 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Tech</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Discover our curated selection of cutting-edge technology and innovative gadgets.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {gadgets.map((gadget) => (
            <motion.div
              key={gadget.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700"
              variants={cardVariants}
            >
              <div className="relative h-48 bg-gray-700">
                <img 
                  src={gadget.image} 
                  alt={gadget.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`${gadget.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {gadget.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-accent-400 mr-2">
                    {gadget.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{gadget.name}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 mb-2">{gadget.description}</p>
                  <p className="text-sm text-gray-400 italic mb-3">"{gadget.insights}"</p>
                  
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {gadget.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-4 w-4 text-accent-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-700">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(gadget.rating) ? 'fill-current' : ''}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">{gadget.rating}/5.0</span>
                  </div>
                  <button className="text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors flex items-center group">
                    Read Full Review
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors duration-300 group">
            View All Tech Reviews
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGadgets;
