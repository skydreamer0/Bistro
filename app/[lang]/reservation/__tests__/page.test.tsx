import { render, screen } from '@testing-library/react'
import ReservationPage from '../page'

jest.mock('@/lib/dictionary', () => ({
  getDictionary: () => ({
    reservation: {
      title: 'Book a Table',
      description: 'Reserve your dining experience with us',
      form: {
        title: 'Reservation Details',
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        date: 'Date',
        time: 'Time',
        guests: 'Number of Guests',
        message: 'Special Requests',
        submit: 'Confirm Reservation',
        today: 'Today',
        tomorrow: 'Tomorrow',
        dayAfter: 'Day After',
        selectTime: 'Select Time'
      }
    }
  })
}))

jest.mock('@/components/ui/page-header', () => ({
  PageHeader: ({ title, description }: { title: string; description: string }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}))

jest.mock('@/components/sections/reservation/ReservationForm', () => ({
  ReservationForm: () => <div data-testid="reservation-form">Reservation Form</div>
}))

describe('Reservation Page', () => {
  it('renders reservation page components', async () => {
    render(await ReservationPage({ params: { lang: 'en' } }))
    
    expect(screen.getByText('Book a Table')).toBeInTheDocument()
    expect(screen.getByText('Reserve your dining experience with us')).toBeInTheDocument()
    expect(screen.getByTestId('reservation-form')).toBeInTheDocument()
  })
}) 