
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

interface GeneratedContent {
  hero: {
    headline: string;
    tagline: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  pricing: Array<{
    name: string;
    price: string;
    features: string[];
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
  about: {
    text: string;
    imageUrl: string;
  };
}

// Declare global mock API
declare global {
  interface Window {
    mockAPI: {
      generate: (data: { idea: string }) => Promise<GeneratedContent>;
    };
  }
}

const Index = () => {
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleGenerate = async (idea: string) => {
    setIsLoading(true);
    console.log('Generating content for:', idea);
    
    try {
      // Use mock API for demonstration
      // In production, this would call your Next.js API route: /api/generate
      const content = await window.mockAPI.generate({ idea });
      
      console.log('Generated content:', content);
      setGeneratedContent(content);
      
      toast({
        title: "Landing page generated! 🎉",
        description: "Your SaaS landing page has been created successfully.",
      });
      
      // Save to Supabase if user is logged in
      if (user) {
        try {
          const { error } = await supabase.from('templates').insert({
            user_id: user.id,
            idea_text: idea,
            generated_json: content
          });
          
          if (error) throw error;
          
          toast({
            title: "Template saved",
            description: "Your template has been saved to your account.",
          });
        } catch (saveError) {
          console.error('Error saving template:', saveError);
          toast({
            variant: "destructive",
            title: "Save failed",
            description: "Could not save your template. Please try again.",
          });
        }
      }
      
      // Scroll to see the generated content
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }, 500);
      
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        variant: "destructive",
        title: "Generation failed",
        description: "Please try again with a different idea or check your connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F111A] text-white">
      <HeroSection 
        content={generatedContent?.hero}
        onGenerate={handleGenerate} 
        isLoading={isLoading} 
      />
      <FeaturesSection features={generatedContent?.features} />
      <PricingSection pricing={generatedContent?.pricing} />
      <AboutSection content={generatedContent?.about} />
      <FAQSection faqs={generatedContent?.faqs} />
      <Footer />
    </div>
  );
};

export default Index;
