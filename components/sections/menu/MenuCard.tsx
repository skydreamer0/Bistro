"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Flame, Sparkles } from 'lucide-react'

interface MenuCardProps {
  name: string
  description: string
  price: string
  image: string
  isSpicy?: boolean
  isNew?: boolean
  spicyLabel: string
  newLabel: string
}

export function MenuCard({ 
  name, 
  description, 
  price, 
  image, 
  isSpicy, 
  isNew,
  spicyLabel,
  newLabel 
}: MenuCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }} 
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">{name}</h3>
              <div className="flex gap-2">
                {isSpicy && (
                  <Badge variant="secondary">
                    <Flame className="h-3 w-3 mr-1" />
                    {spicyLabel}
                  </Badge>
                )}
                {isNew && (
                  <Badge variant="secondary">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {newLabel}
                  </Badge>
                )}
              </div>
            </div>
            <span className="font-semibold">{price}</span>
          </div>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}