
import { Users, BookOpen, Heart, Globe, Trophy, Target, Star } from "lucide-react";
import { motion } from "framer-motion";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "1M+",
      label: "Children Impacted",
      description: "Target impact over 10 years",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      number: "30+",
      label: "States Reached",
      description: "Across Nigeria",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      number: "7",
      label: "Core Objectives",
      description: "Focused on holistic development",
      color: "bg-red-500"
    },
    {
      icon: Globe,
      number: "6",
      label: "Countries",
      description: "Expanding across Africa",
      color: "bg-purple-500"
    },
    {
      icon: Trophy,
      number: "100+",
      label: "Success Stories",
      description: "Lives transformed",
      color: "bg-amber-500"
    },
    {
      icon: Target,
      number: "12",
      label: "Local Partners",
      description: "Collaborative impact",
      color: "bg-teal-500"
    },
    {
      icon: Star,
      number: "95%",
      label: "Program Efficiency",
      description: "Maximizing donor impact",
      color: "bg-indigo-500"
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Impact in Numbers</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            We measure our success through the lives we transform. Every statistic represents real children and communities receiving support, education, and hope.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.slice(0, 4).map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <div className="text-center p-6 rounded-lg bg-accent2 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
                <div className={`inline-block p-3 ${stat.color} rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-blue-700 transition-colors">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-textPrimary mb-1">
                  {stat.label}
                </p>
                <p className="text-textSecondary">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.slice(4).map((stat, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <div className="text-center p-6 rounded-lg bg-accent2 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
                <div className={`inline-block p-3 ${stat.color} rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-blue-700 transition-colors">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-textPrimary mb-1">
                  {stat.label}
                </p>
                <p className="text-textSecondary">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
