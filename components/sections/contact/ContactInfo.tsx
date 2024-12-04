"use client"

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface ContactInfoProps {
  dictionary: {
    contact: {
      info: {
        title: string
        address: string
        phone: string
        email: string
      }
    }
  }
}

export function ContactInfo({ dictionary }: ContactInfoProps) {
  const contactItems = [
    {
      icon: MapPin,
      content: dictionary.contact.info.address,
      href: "https://maps.google.com/?q=123+Asian+Fusion+Street"
    },
    {
      icon: Phone,
      content: dictionary.contact.info.phone,
      href: `tel:${dictionary.contact.info.phone}`
    },
    {
      icon: Mail,
      content: dictionary.contact.info.email,
      href: `mailto:${dictionary.contact.info.email}`
    },
    {
      icon: Clock,
      content: "Mon-Thu: 17:00 - 00:00\nFri-Sat: 17:00 - 02:00\nSun: 17:00 - 23:00"
    }
  ]

  return (
    <div className="space-y-8" data-testid="contact-info">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">{dictionary.contact.info.title}</h2>
        
        <div className="relative h-[300px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800"
            alt="Restaurant Location"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-4">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <a 
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4"
                  >
                    <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
