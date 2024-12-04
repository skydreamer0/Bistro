"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Locale } from '@/i18n-config'

interface HeroProps {
  dictionary: {
    hero: {
      title: string
      subtitle: string
    }
    navigation: {
      reservation: string
    }
  }
  lang: Locale
}

export function Hero({ dictionary, lang }: HeroProps) {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920"
          alt="Modern Asian Bar"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {dictionary.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {dictionary.hero.subtitle}
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href={`/${lang}/reservation`}>
              {dictionary.navigation.reservation}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}