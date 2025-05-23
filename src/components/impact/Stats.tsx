
import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Globe, Trophy, Target, Star } from "lucide-react";
import Counter from "../Counter";

interface StatItemProps {
  icon: React.ElementType;
  number: string;
  label: string;
  description: string;
  color: string;
  index: number;
}

const StatItem = ({ icon: Icon, number, label, description, color, index }: StatItemProps) => {
  // Extract numeric value for counter animation
  const numericValue = parseInt(number.replace(/[^0-9]/g, '')) || 0;
  const suffix = number.includes('+') ? '+' : number.includes('%') ? '%' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden group"
    >
      <div className="text-center p-6 rounded-lg bg-accent2 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
        <div className={`inline-block p-3 ${color} rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={28} />
        </div>
        <h3 className="text-4xl font-bold text-primary mb-2 flex justify-center items-center h-16 group-hover:text-blue-700 transition-colors">
          {numericValue > 0 ? <Counter end={numericValue} suffix={suffix} /> : number}
        </h3>
        <p className="text-lg font-semibold text-textPrimary mb-1">
          {label}
        </p>
        <p className="text-textSecondary">{description}</p>
      </div>
    </motion.div>
  );
};

export const stats = [
  {
    icon: Users,
    number: "100,000+",
    label: "Children Expected",
    description: "To be impacted over the next 10 years",
    color: "bg-blue-500"
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
    number: "20",
    label: "Countries",
    description: "Expected to reach in 5 years",
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

const Stats = ({ items }: { items: typeof stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((stat, index) => (
        <StatItem key={index} {...stat} index={index} />
      ))}
    </div>
  );
};

export default Stats;
