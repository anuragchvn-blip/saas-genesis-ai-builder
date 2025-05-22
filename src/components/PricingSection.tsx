
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface PricingSectionProps {
  pricing?: PricingTier[];
}

const defaultPricing = [
  {
    name: "Starter",
    price: "$29",
    features: [
      "5 Landing Pages",
      "Basic AI Generation",
      "HTML/CSS Export",
      "Email Support",
      "Mobile Responsive"
    ]
  },
  {
    name: "Pro",
    price: "$79",
    features: [
      "Unlimited Landing Pages",
      "Advanced AI Models",
      "React Component Export",
      "One-Click Deployment",
      "Priority Support",
      "Custom Branding",
      "Analytics Integration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    features: [
      "Everything in Pro",
      "White-label Solution",
      "Custom AI Training",
      "API Access",
      "Dedicated Support",
      "Custom Integrations",
      "SLA Guarantee"
    ]
  }
];

const PricingSection: React.FC<PricingSectionProps> = ({ pricing = defaultPricing }) => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your SaaS journey. All plans include our core AI generation features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`glass-card rounded-2xl p-8 relative ${
                tier.popular ? 'ring-2 ring-yellow-400 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: tier.popular ? 1.05 : 1.02 }}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
