import { render, screen } from '@testing-library/react'
import Home from '../page'

jest.mock('@/lib/dictionary', () => ({
  getDictionary: () => ({
    hero: {
      title: 'Experience Modern Asian Cuisine',
      subtitle: 'Where tradition meets innovation'
    },
    features: {
      title: 'Why Choose Us',
      subtitle: 'Discover what makes us unique',
      cards: {
        drinks: {
          title: 'Craft Cocktails',
          description: 'Unique Asian-inspired cocktails'
        },
        food: {
          title: 'Modern Asian Cuisine',
          description: 'Contemporary interpretations'
        },
        atmosphere: {
          title: 'Ambient Setting',
          description: 'Modern design meets tradition'
        },
        hours: {
          title: 'Extended Hours',
          description: 'Open late to suit your evening plans'
        }
      }
    },
    menu: {
      title: 'Our Menu',
      description: 'Explore our delicious dishes',
      badges: {
        spicy: 'Spicy',
        new: 'New'
      }
    }
  })
}))

jest.mock('@/components/sections/hero/Hero', () => ({
  Hero: () => <div data-testid="hero">Hero Component</div>
}))

jest.mock('@/components/sections/features/Features', () => ({
  Features: () => <div data-testid="features">Features Component</div>
}))

jest.mock('@/components/sections/menu/MenuShowcase', () => ({
  MenuShowcase: () => <div data-testid="menu-showcase">Menu Showcase Component</div>
}))

describe('Home Page', () => {
  it('renders home page components', async () => {
    render(await Home({ params: { lang: 'en' } }))
    
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('features')).toBeInTheDocument()
    expect(screen.getByTestId('menu-showcase')).toBeInTheDocument()
  })
})
