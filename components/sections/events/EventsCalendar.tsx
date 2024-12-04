import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/utils/animations'
import { Calendar } from '@/components/ui/calendar'

interface Event {
  id: string
  title: string
  date: Date
  description: string
}

export default function EventsCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<Event[]>([])

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      className="p-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">活動列表</h3>
          {/* 顯示選定日期的活動 */}
        </div>
      </div>
    </motion.div>
  )
} 