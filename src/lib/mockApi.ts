
// Mock API for demonstration - Replace with real OpenAI API integration
export const generateSaaSContent = async (idea: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock generated content based on the idea
  const mockContent = {
    hero: {
      headline: `Transform Your Business with ${idea}`,
      tagline: `Revolutionary ${idea} solution that helps businesses grow faster, work smarter, and achieve more. Join thousands of companies already using our platform.`
    },
    features: [
      {
        title: "Smart Automation",
        description: `Automate repetitive tasks in your ${idea} workflow and focus on what matters most.`
      },
      {
        title: "Real-time Analytics",
        description: `Get deep insights into your ${idea} performance with comprehensive analytics.`
      },
      {
        title: "Seamless Integration",
        description: `Connect your ${idea} with all your favorite tools and services effortlessly.`
      },
      {
        title: "Enterprise Security",
        description: `Bank-level security ensures your ${idea} data is always protected.`
      },
      {
        title: "24/7 Support",
        description: `Our expert team is here to help you succeed with your ${idea} implementation.`
      },
      {
        title: "Custom Solutions",
        description: `Tailored ${idea} features that adapt to your unique business requirements.`
      }
    ],
    pricing: [
      {
        name: "Starter",
        price: "$29",
        features: [
          "Basic automation",
          "5 team members",
          "Standard support",
          "Core integrations",
          "Mobile app access"
        ]
      },
      {
        name: "Professional",
        price: "$79",
        features: [
          "Advanced automation",
          "Unlimited team members",
          "Priority support",
          "All integrations",
          "Advanced analytics",
          "Custom workflows",
          "API access"
        ]
      },
      {
        name: "Enterprise",
        price: "$199",
        features: [
          "Everything in Professional",
          "White-label solution",
          "Dedicated account manager",
          "Custom integrations",
          "SLA guarantee",
          "Advanced security",
          "Training & onboarding"
        ]
      }
    ],
    faqs: [
      {
        q: `How quickly can I set up ${idea}?`,
        a: `You can get started with ${idea} in under 5 minutes. Our onboarding process is designed to be simple and intuitive, with step-by-step guidance to help you configure everything perfectly for your needs.`
      },
      {
        q: `Is ${idea} suitable for my industry?`,
        a: `Our ${idea} solution is designed to work across various industries and business sizes. We offer customizable features and integrations that can be tailored to meet the specific requirements of your industry.`
      },
      {
        q: `What kind of support do you provide?`,
        a: `We offer comprehensive support including 24/7 chat support, extensive documentation, video tutorials, and dedicated account managers for enterprise customers. Our team is committed to ensuring your success.`
      }
    ],
    about: {
      text: `We're passionate about helping businesses leverage ${idea} to achieve unprecedented growth. Our team of experts has years of experience in building scalable solutions that deliver real results. We believe that powerful ${idea} tools should be accessible to businesses of all sizes.`,
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    }
  };

  return mockContent;
};
