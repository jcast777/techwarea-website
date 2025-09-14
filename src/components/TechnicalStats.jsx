import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const TechnicalStats = () => {
  const batteryData = [
    { name: 'Apple Watch Ultra', hours: 36, brand: 'Apple' },
    { name: 'Samsung Galaxy Watch 6', hours: 40, brand: 'Samsung' },
    { name: 'Garmin Fenix 7', hours: 168, brand: 'Garmin' },
    { name: 'Fitbit Sense 2', hours: 144, brand: 'Fitbit' },
    { name: 'Amazfit GTR 4', hours: 336, brand: 'Amazfit' }
  ];

  const performanceData = [
    { name: 'Q1', smartphones: 85, laptops: 78, tablets: 65 },
    { name: 'Q2', smartphones: 88, laptops: 82, tablets: 70 },
    { name: 'Q3', smartphones: 92, laptops: 85, tablets: 75 },
    { name: 'Q4', smartphones: 95, laptops: 88, tablets: 80 }
  ];

  const marketShareData = [
    { name: 'Smartphones', value: 45, color: '#3b82f6' },
    { name: 'Laptops', value: 25, color: '#22c55e' },
    { name: 'Tablets', value: 15, color: '#f59e0b' },
    { name: 'Wearables', value: 10, color: '#ef4444' },
    { name: 'Others', value: 5, color: '#8b5cf6' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-800 border border-primary-500/20 rounded-lg p-3 shadow-lg">
          <p className="text-white font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-primary-400">
              {entry.name}: {entry.value}{entry.name === 'hours' ? 'h' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-800">
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
            Technical <span className="gradient-text">Analysis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven insights and performance comparisons of the latest gadgets and technologies
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Battery Life Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-center">
              Smartwatch Battery Life Comparison
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={batteryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="name" 
                  stroke="#9ca3af"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="hours" 
                  fill="url(#batteryGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="batteryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Performance Trends */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-center">
              Device Performance Trends 2024
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="smartphones" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="laptops" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tablets" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Market Share & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Share Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass lg:col-span-2"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-center">
              Tech Market Share 2024
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Legend */}
              <div className="space-y-3 mt-4 md:mt-0">
                {marketShareData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-white font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-center">
              Key Stats
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Devices Tested', value: '500+', icon: '📱' },
                { label: 'Performance Score', value: '94.2', icon: '⚡' },
                { label: 'User Satisfaction', value: '98%', icon: '⭐' },
                { label: 'Market Coverage', value: '85%', icon: '🌍' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-gray-300">{stat.label}</span>
                  </div>
                  <span className="text-xl font-bold gradient-text">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalStats;
