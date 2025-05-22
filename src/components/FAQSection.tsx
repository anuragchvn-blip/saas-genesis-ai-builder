
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

const defaultFaqs = [
  {
    q: "How does the AI generation work?",
    a: "Our AI analyzes your SaaS idea and generates a complete landing page using proven conversion patterns and modern design principles. It creates everything from headlines to pricing structures based on successful SaaS companies."
  },
  {
    q: "Can I customize the generated landing page?",
    a: "Absolutely! While our AI creates a great starting point, you can modify any element of your landing page. Export the code and make it truly yours, or regenerate with more specific requirements."
  },
  {
    q: "What formats can I export my landing page in?",
    a: "You can export your landing page as clean HTML/CSS, React components, or deploy directly to Vercel. We also provide Figma files for design teams and WordPress themes for easy integration."
  }
];

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFaqs }) => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our AI-powered SaaS builder.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-white/10 border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
