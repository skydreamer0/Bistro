"use client"

import { motion } from 'framer-motion'
import { MenuCard } from './MenuCard'
import { useState, useMemo } from 'react'
import { fadeIn, staggerContainer } from '@/lib/utils/animations'
import Image from 'next/image'

interface MenuShowcaseProps {
  dictionary: {
    menu: {
      title: string
      description: string
      drinks: string
      food: string
      specials: string
      all: string
      items: {
        drinks: {
          signature_cocktail: {
            name: string
            description: string
          }
          matcha_martini: {
            name: string
            description: string
          }
          sakura_spritz: {
            name: string
            description: string
          }
        }
      }
    }
  }
}

const categories = ['all', 'drinks', 'food', 'specials'] as const
type Category = (typeof categories)[number]

function getCategoryTranslation(category: Category, dictionary: MenuShowcaseProps['dictionary']): string {
  return dictionary.menu[category]
}

export function MenuShowcase({ dictionary }: MenuShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [items] = useState([
    {
      id: 'signature_cocktail',
      name: dictionary.menu.items.drinks.signature_cocktail.name,
      description: dictionary.menu.items.drinks.signature_cocktail.description,
      price: 16,
      category: 'drinks',
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80"
    },
    {
      id: 'matcha_martini',
      name: dictionary.menu.items.drinks.matcha_martini.name,
      description: dictionary.menu.items.drinks.matcha_martini.description,
      price: 15,
      category: 'drinks',
      image: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?w=800&q=80"
    },
    {
      id: 'sakura_spritz',
      name: dictionary.menu.items.drinks.sakura_spritz.name,
      description: dictionary.menu.items.drinks.sakura_spritz.description,
      price: 14,
      category: 'drinks',
      image: "https://images.unsplash.com/photo-1578664182354-e3878469a7b2?w=800&q=80"
    }
  ])
  
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return items
    return items.filter(item => item.category === selectedCategory)
  }, [items, selectedCategory])
  
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div variants={fadeIn} className="text-center mb-12">
        <h2 className="text-3xl font-bold">{dictionary.menu.title}</h2>
        <p className="text-muted-foreground mt-2">{dictionary.menu.description}</p>
      </motion.div>

      {/* 分類選擇器 */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category 
                ? 'bg-primary text-white' 
                : 'bg-gray-100'
            }`}
          >
            {dictionary.menu[category]}
          </button>
        ))}
      </div>

      {/* 菜單項目 */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeIn}
            className="p-4 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-square mb-4">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-muted-foreground">{item.description}</p>
            <p className="mt-2 font-bold">${item.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}