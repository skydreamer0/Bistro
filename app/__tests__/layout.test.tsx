import { render } from '@testing-library/react'
import RootLayout from '../layout'

describe('App Root Layout', () => {
  it('renders children correctly', () => {
    const layout = (
      <RootLayout>
        <div data-testid="content">Test Content</div>
      </RootLayout>
    )

    const { container } = render(<>{layout}</>)
    
    // 使用 container.querySelector 而不是 screen.getByTestId
    const content = container.querySelector('[data-testid="content"]')
    expect(content).toBeInTheDocument()
  })
}) 