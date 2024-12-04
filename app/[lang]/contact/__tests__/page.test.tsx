import { render, screen } from '@testing-library/react'
import ContactPage from '../page'

// 模擬 Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileInView, animate, initial, variants, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
    h1: ({ children, whileInView, animate, initial, variants, ...props }: any) => (
      <h1 {...props}>{children}</h1>
    ),
    p: ({ children, whileInView, animate, initial, variants, ...props }: any) => (
      <p {...props}>{children}</p>
    ),
  },
  useInView: () => ({ ref: { current: null }, inView: true }),
  useAnimation: () => ({
    start: jest.fn(),
    set: jest.fn(),
  }),
}))

describe('Contact Page', () => {
  it('renders contact page components', async () => {
    render(await ContactPage({ params: { lang: 'en' } }))
    
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Get in touch with us')).toBeInTheDocument()
  })
})
