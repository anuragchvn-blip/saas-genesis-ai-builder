
import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  content?: {
    text: string;
    imageUrl: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const defaultContent = {
    text: "We believe every entrepreneur deserves a beautiful, high-converting landing page without the complexity of traditional web development. Our AI-powered platform democratizes professional web design, enabling anyone to create stunning SaaS landing pages that drive results. Built by founders, for founders.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  };

  const aboutContent = content || defaultContent;

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-yellow-400/10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {aboutContent.text}
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-gray-400">Pages Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">Happy Founders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src={aboutContent.imageUrl}
                alt="Team working"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-yellow-400/20 rounded-2xl transform -rotate-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
