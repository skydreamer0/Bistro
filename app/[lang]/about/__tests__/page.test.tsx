import { render, screen } from '@testing-library/react'
import AboutPage from '../page'

jest.mock('@/lib/dictionary', () => ({
  getDictionary: () => ({
    about: {
      title: 'About Us',
      description: 'Our story and our team',
      content: {
        title: 'Our Story',
        description: 'Modern Asian Bar brings together the best of Asian cuisine with contemporary flair.'
      },
      team: {
        title: 'Our Team',
        description: 'Meet the passionate individuals behind Modern Asian Bar',
        members: []
      }
    }
  })
}))

jest.mock('@/components/sections/about/AboutContent', () => ({
  AboutContent: () => <div data-testid="about-content">About Content Component</div>
}))

jest.mock('@/components/sections/about/Team', () => ({
  Team: () => <div data-testid="team">Team Component</div>
}))

describe('About Page', () => {
  it('renders about page components', async () => {
    render(await AboutPage({ params: { lang: 'en' } }))
    
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByTestId('about-content')).toBeInTheDocument()
    expect(screen.getByTestId('team')).toBeInTheDocument()
  })
})
