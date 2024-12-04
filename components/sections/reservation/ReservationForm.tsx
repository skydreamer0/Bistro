"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Minus, Plus } from 'lucide-react'

// 添加日期格式化函數
const formatDateForInput = (date: string) => {
  return date
}

// 添加日期本地化顯示函數
const formatDateForDisplay = (date: string, lang: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
}

interface ReservationFormProps {
  dictionary: {
    reservation: {
      form: {
        title: string
        name: string
        email: string
        phone: string
        date: string
        time: string
        guests: string
        message: string
        submit: string
        today: string
        tomorrow: string
        dayAfter: string
        selectTime: string
      }
    }
  }
  lang: string  // 添加語言參數
}

// 生成營業時間選項（每半小時一個時段）
const generateTimeSlots = () => {
  const slots = []
  // 從17:00開始
  const startHour = 17
  // 週日到週四營業到00:00，週五週六營業到02:00
  const endHour = 24 // 先設定到24:00，之後根據日期動態調整

  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`)
    slots.push(`${hour.toString().padStart(2, '0')}:30`)
  }
  return slots
}

// 生成快捷日期選項
const generateQuickDates = () => {
  const dates = []
  const today = new Date()
  
  const labels = ['today', 'tomorrow', 'dayAfter'] as const
  
  for (let i = 0; i < 3; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push({
      value: date.toISOString().split('T')[0],
      label: labels[i]
    })
  }
  
  return dates
}

export function ReservationForm({ dictionary, lang }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2', // 預設2人
    message: ''
  })

  // 檢查選擇的日期是否為週五或週六
  const isWeekend = (dateStr: string) => {
    const date = new Date(dateStr)
    const day = date.getDay()
    return day === 5 || day === 6 // 5 是週五，6 是週六
  }

  // 根據選擇的日期生成可用時間選項
  const getAvailableTimeSlots = () => {
    const slots = generateTimeSlots()
    if (formData.date && isWeekend(formData.date)) {
      // 週末增加到02:00的時段
      slots.push('00:00', '00:30', '01:00', '01:30', '02:00')
    }
    return slots
  }

  // 獲取今天的日期字符串
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleGuestsChange = (increment: number) => {
    const currentGuests = parseInt(formData.guests) || 2
    const newGuests = Math.min(Math.max(1, currentGuests + increment), 20)
    setFormData(prev => ({
      ...prev,
      guests: newGuests.toString()
    }))
  }

  const quickDates = generateQuickDates()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold">{dictionary.reservation.form.title}</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">{dictionary.reservation.form.name}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">{dictionary.reservation.form.phone}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">{dictionary.reservation.form.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>{dictionary.reservation.form.date}</Label>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {quickDates.map((date) => (
              <Button
                key={date.value}
                type="button"
                variant={formData.date === date.value ? "default" : "outline"}
                onClick={() => handleSelectChange('date', date.value)}
              >
                {dictionary.reservation.form[date.label]}
              </Button>
            ))}
          </div>
          <Input
            id="date"
            name="date"
            type="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            required
            className="mb-1"
          />
          {formData.date && (
            <p className="text-sm text-muted-foreground">
              {formatDateForDisplay(formData.date, lang)}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="time">{dictionary.reservation.form.time}</Label>
          <Select
            name="time"
            value={formData.time}
            onValueChange={(value) => handleSelectChange('time', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={dictionary.reservation.form.selectTime} />
            </SelectTrigger>
            <SelectContent>
              {getAvailableTimeSlots().map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>{dictionary.reservation.form.guests}</Label>
          <div className="flex items-center space-x-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => handleGuestsChange(-1)}
              disabled={parseInt(formData.guests) <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-semibold min-w-[3ch] text-center">
              {formData.guests}
            </span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => handleGuestsChange(1)}
              disabled={parseInt(formData.guests) >= 20}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="message">{dictionary.reservation.form.message}</Label>
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
        {dictionary.reservation.form.submit}
      </Button>
    </form>
  )
}