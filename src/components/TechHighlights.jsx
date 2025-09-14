import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Home, Eye, Cpu, Wifi, Shield } from 'lucide-react';

const TechHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: 'Artificial Intelligence in Daily Life',
      description: 'AI-powered smart assistants, recommendation systems, and machine learning algorithms are revolutionizing how we interact with technology every day.',
      icon: <Brain className="w-8 h-8" />,
      image: 'https://source.unsplash.com/600x400/?artificial,intelligence',
      features: ['Smart Assistants', 'Predictive Analytics', 'Personalization', 'Automation']
    },
    {
      id: 2,
      title: 'IoT Gadgets for Smart Homes',
      description: 'Connected devices that improve efficiency, security, and comfort in modern homes through seamless integration and intelligent automation.',
      icon: <Home className="w-8 h-8" />,
      image: 'https://source.unsplash.com/600x400/?smart,home',
      features: ['Voice Control', 'Energy Efficiency', 'Security Systems', 'Remote Monitoring']
    },
    {
      id: 3,
      title: 'Augmented & Virtual Reality',
      description: 'Immersive technologies transforming entertainment, education, and professional workflows with realistic digital experiences.',
      icon: <Eye className="w-8 h-8" />,
      image: 'https://source.unsplash.com/600x400/?virtual,reality',
      features: ['Immersive Gaming', 'Virtual Training', 'AR Shopping', 'Remote Collaboration']
    },
    {
      id: 4,
      title: 'Quantum Computing Revolution',
      description: 'Next-generation computing power solving complex problems in cryptography, drug discovery, and artificial intelligence.',
      icon: <Cpu className="w-8 h-8" />,
      image: 'https://source.unsplash.com/600x400/?quantum,computing',
      features: ['Quantum Supremacy', 'Cryptography', 'Drug Discovery', 'AI Acceleration']
    },
    {
      id: 5,
      title: '5G & Beyond Connectivity',
      description: 'Ultra-fast wireless networks enabling real-time communication, autonomous vehicles, and massive IoT deployments.',
      icon: <Wifi className="w-8 h-8" />,
      image: 'https://source.unsplash.com/600x400/?5g,network',
      features: ['Ultra-Low Latency', 'Massive IoT', 'Edge Computing', 'Autonomous Systems']
    },
    {
      id: 6,
      title: 'Cybersecurity & Privacy',
      description: 'Advanced security measures protecting digital assets and personal data in an increasingly connected world.',
      icon: <Shield className="w-8 h-8" />,
      image: 'https://source.unsplash.com/600x400/?cybersecurity,privacy',
      features: ['Zero Trust', 'Biometric Auth', 'Encryption', 'Privacy by Design']
    }
  ];

  return (
    <section id="technologies" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Technology <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the innovative tech trends that are reshaping our world and defining the future
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="space-y-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-xl">
                    {highlight.icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">
                    {highlight.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {highlight.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-accent-500 p-3 rounded-xl shadow-lg"
                >
                  {highlight.icon}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechHighlights;
