
// Mock API endpoint for demonstration
// In a real Next.js app, this would be pages/api/generate.js or app/api/generate/route.js
window.mockAPI = {
  async generate(data) {
    const { idea } = data;
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      hero: {
        headline: `Revolutionize Your Business with ${idea}`,
        tagline: `The ultimate ${idea} platform that transforms how you work, collaborate, and grow. Join thousands of successful companies already using our solution.`
      },
      features: [
        {
          title: "AI-Powered Automation",
          description: `Leverage cutting-edge AI to automate your ${idea} processes and boost productivity by 300%.`
        },
        {
          title: "Real-Time Collaboration",
          description: `Work seamlessly with your team on ${idea} projects with live updates and instant synchronization.`
        },
        {
          title: "Advanced Analytics",
          description: `Make data-driven decisions with comprehensive ${idea} insights and performance metrics.`
        },
        {
          title: "Enterprise Integration",
          description: `Connect your ${idea} workflow with 500+ popular tools and services effortlessly.`
        },
        {
          title: "Mobile-First Design",
          description: `Manage your ${idea} operations on-the-go with our award-winning mobile applications.`
        },
        {
          title: "White-Label Solution",
          description: `Customize and brand your ${idea} platform to match your company's unique identity.`
        }
      ],
      pricing: [
        {
          name: "Starter",
          price: "$39",
          features: [
            "Up to 10 projects",
            "Basic analytics",
            "Email support",
            "Mobile app",
            "Standard integrations"
          ]
        },
        {
          name: "Professional", 
          price: "$99",
          features: [
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "Custom workflows",
            "All integrations",
            "API access",
            "Team collaboration"
          ]
        },
        {
          name: "Enterprise",
          price: "$299",
          features: [
            "Everything in Pro",
            "White-label solution",
            "Dedicated manager",
            "Custom development",
            "SLA guarantee",
            "Advanced security",
            "Onboarding & training"
          ]
        }
      ],
      faqs: [
        {
          q: `How does ${idea} integrate with existing tools?`,
          a: `Our ${idea} platform offers seamless integration with over 500 popular business tools through our robust API and pre-built connectors. Most integrations can be set up in minutes without any technical expertise.`
        },
        {
          q: `Is my data secure with ${idea}?`,
          a: `Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your ${idea} data is hosted on secure cloud infrastructure with 99.9% uptime guarantee.`
        },
        {
          q: `Can I customize ${idea} for my specific needs?`,
          a: `Yes! Our ${idea} platform is highly customizable. You can create custom workflows, add branded elements, and even request custom features. Our enterprise plans include dedicated development resources.`
        }
      ],
      about: {
        text: `We founded this company with a simple mission: make ${idea} accessible and powerful for every business. With over a decade of experience in the industry, our team understands the challenges you face and has built a solution that actually works. We're not just another SaaS company - we're your partners in growth.`,
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
      }
    };
  }
};
