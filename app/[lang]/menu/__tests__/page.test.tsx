import { render, screen } from '@testing-library/react'
import MenuPage from '../page'

jest.mock('@/lib/dictionary', () => ({
  getDictionary: () => ({
    menu: {
      title: 'Our Menu',
      description: 'Explore our delicious dishes',
      drinks: 'Drinks',
      food: 'Food',
      specials: 'Specials',
      badges: {
        spicy: 'Spicy',
        new: 'New'
      }
    }
  })
}))

jest.mock('@/components/sections/menu/MenuTabs', () => ({
  MenuTabs: () => <div data-testid="menu-tabs">Menu Tabs Component</div>
}))

jest.mock('@/components/ui/page-header', () => ({
  PageHeader: ({ title, description }: { title: string; description: string }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}))

describe('Menu Page', () => {
  it('renders menu page components', async () => {
    render(await MenuPage({ params: { lang: 'en' } }))
    
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByText('Explore our delicious dishes')).toBeInTheDocument()
    expect(screen.getByTestId('menu-tabs')).toBeInTheDocument()
  })
})
