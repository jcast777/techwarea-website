import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      title: 'Hands-on Review: The Next-Gen Foldable Phone',
      excerpt: 'After two weeks with the latest foldable technology, we dive deep into the pros, cons, and real-world performance of this revolutionary device.',
      image: 'https://images.stockcake.com/public/9/5/f/95fa1320-582f-4c15-8a88-93a13fdc808c_large/futuristic-foldable-device-stockcake.jpg',
      author: 'Sarah Chen',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      rating: 4.5,
      category: 'Smartphones'
    },
    {
      id: 2,
      title: 'Top 5 Gadgets to Watch in 2025',
      excerpt: 'From AI-powered wearables to quantum computers, discover the most promising technologies that will shape the coming year.',
      image: 'https://images.stockcake.com/public/3/a/1/3a1d01eb-7ef6-45ae-81b0-090e0b3af6f6_large/neon-tech-accessories-stockcake.jpg',
      author: 'Marcus Rodriguez',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      rating: 4.8,
      category: 'Trends'
    },
    {
      id: 3,
      title: 'Smart Home Security: Complete Guide 2024',
      excerpt: 'Everything you need to know about protecting your connected home, from cameras to smart locks and AI-powered monitoring systems.',
      image: 'https://images.stockcake.com/public/6/6/0/660bbdc2-82c3-49a3-8509-1c22755c1268_large/smart-home-security-stockcake.jpg',
      author: 'Emily Watson',
      date: 'Dec 10, 2024',
      readTime: '15 min read',
      rating: 4.7,
      category: 'Smart Home'
    },
    {
      id: 4,
      title: 'VR Gaming Revolution: Meta Quest 3 vs Apple Vision Pro',
      excerpt: 'An in-depth comparison of the two leading VR headsets, examining performance, comfort, content library, and value proposition.',
      image: 'https://images.stockcake.com/public/0/7/9/079d9818-874d-4dac-9b9f-415039464cd7_large/vr-gaming-experience-stockcake.jpg',
      author: 'David Kim',
      date: 'Dec 8, 2024',
      readTime: '10 min read',
      rating: 4.6,
      category: 'VR/AR'
    },
    {
      id: 5,
      title: 'Electric Vehicle Tech: Battery Breakthroughs',
      excerpt: 'Exploring the latest advances in EV battery technology, charging speeds, and what it means for the future of transportation.',
      image: 'https://images.stockcake.com/public/a/f/b/afbc7147-dd3a-42a9-8314-dd4023a85251_large/connected-smart-vehicle-stockcake.jpg',
      author: 'Lisa Park',
      date: 'Dec 5, 2024',
      readTime: '11 min read',
      rating: 4.9,
      category: 'Automotive'
    },
    {
      id: 6,
      title: 'AI Assistants Showdown: ChatGPT vs Gemini vs Claude',
      excerpt: 'Comprehensive testing and comparison of the leading AI assistants across various tasks, accuracy, and real-world applications.',
      image: 'https://images.stockcake.com/public/0/e/9/0e977fed-ebed-42d0-8b72-6c7fe5e2e746_large/connected-dialog-network-stockcake.jpg',
      author: 'Alex Thompson',
      date: 'Dec 3, 2024',
      readTime: '14 min read',
      rating: 4.8,
      category: 'AI'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900">
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
            Reviews & <span className="gradient-text">Editorial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In-depth reviews, expert analysis, and editorial insights on the latest tech innovations
          </p>
        </motion.div>

        {/* Featured Review */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="card-glass overflow-hidden group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={reviews[0].image}
                  alt={reviews[0].title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-dark-900/80 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{reviews[0].rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block bg-accent-500/20 text-accent-400 px-3 py-1 rounded-full text-sm font-semibold w-fit">
                  {reviews[0].category}
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                  {reviews[0].title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {reviews[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{reviews[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{reviews[0].date}</span>
                    </div>
                    <span>{reviews[0].readTime}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-semibold group/btn w-fit"
                >
                  <span>Read Full Review</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.slice(1).map((review) => (
            <motion.article
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-glass group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold">
                  {review.category}
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-dark-900/80 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-semibold">{review.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                  {review.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {review.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span>{review.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{review.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{review.readTime}</span>
                  <motion.button
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 text-sm font-semibold group/btn"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
