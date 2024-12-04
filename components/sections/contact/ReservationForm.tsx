"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface ReservationFormProps {
  dictionary: {
    contact: {
      form: {
        title: string
        name: string
        email: string
        date: string
        time: string
        guests: string
        message: string
        submit: string
      }
    }
  }
}

export function ReservationForm({ dictionary }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 處理表單提交邏輯
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="reservation-form">
      <h2 className="text-2xl font-bold">{dictionary.contact.form.title}</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">{dictionary.contact.form.name}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">{dictionary.contact.form.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">{dictionary.contact.form.date}</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="time">{dictionary.contact.form.time}</Label>
            <Input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="guests">{dictionary.contact.form.guests}</Label>
          <Input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max="20"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="message">{dictionary.contact.form.message}</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        {dictionary.contact.form.submit}
      </Button>
    </form>
  )
}
