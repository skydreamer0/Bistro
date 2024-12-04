import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'

// 模擬 next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}))

// 模擬 next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
    systemTheme: 'light',
  }),
}))

describe('Root Layout', () => {
  it('renders navigation and content', async () => {
    const layout = await RootLayout({
      children: <div data-testid="content">Page Content</div>,
      params: { lang: 'en' }
    })

    const { container } = render(<>{layout}</>)
    
    // 使用 container.querySelector 而不是 screen.getByTestId
    const content = container.querySelector('[data-testid="content"]')
    const nav = container.querySelector('nav')
    
    expect(content).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
  })
}) 