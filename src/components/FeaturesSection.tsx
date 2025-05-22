
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Rocket, Shield, BarChart, Users } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const defaultFeatures = [
  {
    title: "Lightning Fast Generation",
    description: "Get a complete SaaS landing page in under 30 seconds with our AI-powered technology."
  },
  {
    title: "Conversion Optimized",
    description: "Every element is designed to maximize conversions with proven SaaS growth strategies."
  },
  {
    title: "Ready to Deploy",
    description: "Export clean HTML/CSS code or deploy directly to Vercel with one click."
  },
  {
    title: "Mobile Responsive",
    description: "All generated pages look perfect on desktop, tablet, and mobile devices."
  },
  {
    title: "Analytics Ready",
    description: "Built-in tracking and analytics integration for measuring your success."
  },
  {
    title: "Community Driven",
    description: "Join thousands of entrepreneurs building their SaaS with our platform."
  }
];

const icons = [Zap, Target, Rocket, Shield, BarChart, Users];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features = defaultFeatures }) => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-gradient">Launch Fast</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI understands what makes SaaS landing pages convert and builds yours accordingly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
