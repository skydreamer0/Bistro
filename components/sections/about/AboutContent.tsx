"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutContentProps {
  dictionary: {
    about: {
      content: {
        title: string
        description: string
      }
    }
  }
}

export function AboutContent({ dictionary }: AboutContentProps) {
  return (
    <div className="relative">
      <div className="grid gap-16 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {dictionary.about.content.title}
          </h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="leading-relaxed text-muted-foreground">
              {dictionary.about.content.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
