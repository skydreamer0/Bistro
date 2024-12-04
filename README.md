# 🍶 Modern Asian Bar Website

A sophisticated website for an Asian-style bar featuring modern design, full internationalization support, and content management capabilities.

## 🌟 Features

- 🎨 Modern Asian-inspired design with responsive layouts
- 🌏 Multi-language support (English, Traditional Chinese)
- 📱 Mobile-first responsive design
- 🎯 SEO optimized
- 📝 Content Management System integration
- 🖼️ Image optimization and lazy loading
- 🎨 Smooth animations and transitions
- 🌙 Dark/Light mode support
- 📊 Reservation system
- 🗺️ Interactive menu showcase

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **CMS**: Sanity.io
- **Internationalization**: next-i18next
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **State Management**: Zustand

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Internationalization

The website supports multiple languages through next-i18next:

- 🇺🇸 English (Default)
- 🇹🇼 Traditional Chinese

Language files are stored in `/public/locales/{lang}/` directory.

## 📁 Project Structure

```
├── app/                  # Next.js 13+ App Router
├── components/          
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page sections
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── public/              
│   └── locales/         # Translation files
├── styles/              # Global styles
└── types/               # TypeScript types
```

## 🗺️ Development Roadmap

### Phase 1: Foundation Setup
- [x] Project initialization
- [ ] Basic project structure
- [ ] Tailwind CSS + shadcn/ui setup
- [ ] i18n configuration
- [ ] Basic layouts and navigation

### Phase 2: Core Features
- [ ] Homepage design and implementation
- [ ] Menu showcase
- [ ] About section
- [ ] Contact form
- [ ] Reservation system
- [ ] Dark/Light mode

### Phase 3: CMS Integration
- [ ] Sanity.io setup
- [ ] Content modeling
- [ ] Menu management
- [ ] Events management
- [ ] Image optimization

### Phase 4: Advanced Features
- [ ] Animations and transitions
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Social media integration
- [ ] Analytics setup

### Phase 5: Testing & Deployment
- [ ] Unit testing
- [ ] E2E testing
- [ ] Performance testing
- [ ] Security audit
- [ ] Production deployment