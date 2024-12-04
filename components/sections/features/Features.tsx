"use client"

import { motion } from 'framer-motion'
import { GlassWater, UtensilsCrossed, Music, Clock } from 'lucide-react'
import { FeatureCard } from './FeatureCard'

interface FeaturesProps {
  dictionary: {
    features: {
      title: string
      subtitle: string
      cards: {
        drinks: {
          title: string
          description: string
        }
        food: {
          title: string
          description: string
        }
        atmosphere: {
          title: string
          description: string
        }
        hours: {
          title: string
          description: string
        }
      }
    }
  }
}

export function Features({ dictionary }: FeaturesProps) {
  const features = [
    {
      icon: GlassWater,
      title: dictionary.features.cards.drinks.title,
      description: dictionary.features.cards.drinks.description,
    },
    {
      icon: UtensilsCrossed,
      title: dictionary.features.cards.food.title,
      description: dictionary.features.cards.food.description,
    },
    {
      icon: Music,
      title: dictionary.features.cards.atmosphere.title,
      description: dictionary.features.cards.atmosphere.description,
    },
    {
      icon: Clock,
      title: dictionary.features.cards.hours.title,
      description: dictionary.features.cards.hours.description,
    },
  ]

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{dictionary.features.title}</h2>
          <p className="text-muted-foreground text-lg">{dictionary.features.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}