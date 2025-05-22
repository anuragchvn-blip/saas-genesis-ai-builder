
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  content?: {
    headline: string;
    tagline: string;
  };
  onGenerate: (idea: string) => void;
  isLoading: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content, onGenerate, isLoading }) => {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onGenerate(idea);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-yellow-400/20" />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {content ? (
            <span className="text-gradient">{content.headline}</span>
          ) : (
            <>
              Build Your <span className="text-gradient">SaaS Landing Page</span> in Seconds
            </>
          )}
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {content ? content.tagline : "Powered by AI, our platform generates complete SaaS landing pages tailored to your idea. Just describe your concept and watch magic happen."}
        </motion.p>

        <motion.div 
          className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Describe your SaaS idea... (e.g., AI-powered CRM for indie makers)"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg rounded-xl focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={!idea.trim() || isLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Your SaaS...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Landing Page
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
