
# SaaS Builder AI - One-Click Landing Page Generator

A modern, AI-powered SaaS landing page generator built with React, TypeScript, and Tailwind CSS. Users can describe their SaaS idea and instantly generate a complete, conversion-optimized landing page.

## ✨ Features

- **AI-Powered Generation**: Describe your SaaS idea and get a complete landing page
- **Modern Dark Theme**: Beautiful glassmorphism design inspired by leading SaaS platforms
- **Responsive Design**: Perfect on all devices with mobile-first approach
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Dynamic Content**: All sections update based on AI-generated content
- **Conversion Optimized**: Built using proven SaaS landing page patterns

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🎨 Design System

- **Background**: #0F111A (Dark Navy)
- **Primary**: #4E9AF1 (Blue)
- **Accent**: #F1C40F (Gold)
- **Glass Cards**: rgba(255, 255, 255, 0.05) with backdrop blur
- **Typography**: Inter font family

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HeroSection.tsx     # Main hero with AI input
│   ├── FeaturesSection.tsx # Feature grid display
│   ├── PricingSection.tsx  # Pricing tiers
│   ├── FAQSection.tsx      # Collapsible FAQ
│   ├── AboutSection.tsx    # About/mission section
│   └── Footer.tsx          # Footer with social links
├── pages/
│   └── Index.tsx           # Main landing page
├── lib/
│   └── mockApi.ts          # Mock API for demo
└── hooks/                  # Custom React hooks
```

## 🔧 Setup & Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **For production deployment**:
   ```bash
   npm run build
   ```

## 🔌 API Integration

Currently uses a mock API for demonstration. To integrate with real AI:

### Option 1: Next.js API Route (Recommended)
Create `pages/api/generate.js` or `app/api/generate/route.js`:

```javascript
export default async function handler(req, res) {
  const { idea } = req.body;
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Generate a SaaS landing page structure based on the user\'s idea...'
        },
        {
          role: 'user',
          content: idea
        }
      ],
      temperature: 0.7,
    }),
  });
  
  const data = await response.json();
  res.json(data);
}
```

### Option 2: Supabase Edge Functions
For a serverless approach, use Supabase Edge Functions with the OpenAI API.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Key Features

### AI Content Generation
- Hero headlines and taglines
- Feature descriptions
- Pricing tier structures
- FAQ content
- About section copy

### Interactive Elements
- Real-time form validation
- Loading states during generation
- Smooth scroll animations
- Hover effects on cards
- Accordion FAQ section

### Performance Optimizations
- Lazy loading for images
- Optimized animations
- Tree-shaken Lucide icons
- Minimal bundle size

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve dist/ folder with any static hosting
```

## 🔮 Future Enhancements

- [ ] Real OpenAI API integration
- [ ] User authentication
- [ ] Template saving/loading
- [ ] HTML/CSS export functionality
- [ ] One-click Vercel deployment
- [ ] Custom branding options
- [ ] A/B testing features
- [ ] Analytics integration

## 📄 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
