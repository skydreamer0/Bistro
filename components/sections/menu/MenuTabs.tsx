"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MenuCard } from './MenuCard'

interface MenuTabsProps {
  dictionary: {
    menu: {
      drinks: string
      food: string
      specials: string
      badges: {
        spicy: string
        new: string
      }
      items: {
        drinks: {
          signature_cocktail: { name: string; description: string }
          matcha_martini: { name: string; description: string }
          sakura_spritz: { name: string; description: string }
        }
        food: {
          spicy_tuna: { name: string; description: string }
          wagyu_dumplings: { name: string; description: string }
          kimchi_rice: { name: string; description: string }
        }
        specials: {
          wagyu_sliders: { name: string; description: string }
          truffle_ramen: { name: string; description: string }
          lobster_bao: { name: string; description: string }
        }
      }
    }
  }
}

export function MenuTabs({ dictionary }: MenuTabsProps) {
  const menuItems = {
    drinks: [
      {
        name: dictionary.menu.items.drinks.signature_cocktail.name,
        description: dictionary.menu.items.drinks.signature_cocktail.description,
        price: "$16",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800",
        isNew: true
      },
      {
        name: dictionary.menu.items.drinks.matcha_martini.name,
        description: dictionary.menu.items.drinks.matcha_martini.description,
        price: "$15",
        image: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?w=800",
        isNew: true
      },
      {
        name: dictionary.menu.items.drinks.sakura_spritz.name,
        description: dictionary.menu.items.drinks.sakura_spritz.description,
        price: "$14",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800",
        isNew: false
      }
    ],
    food: [
      {
        name: dictionary.menu.items.food.spicy_tuna.name,
        description: dictionary.menu.items.food.spicy_tuna.description,
        price: "$18",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
        isSpicy: true
      },
      {
        name: dictionary.menu.items.food.wagyu_dumplings.name,
        description: dictionary.menu.items.food.wagyu_dumplings.description,
        price: "$16",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800",
        isNew: true
      },
      {
        name: dictionary.menu.items.food.kimchi_rice.name,
        description: dictionary.menu.items.food.kimchi_rice.description,
        price: "$14",
        image: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?w=800",
        isSpicy: true
      }
    ],
    specials: [
      {
        name: dictionary.menu.items.specials.wagyu_sliders.name,
        description: dictionary.menu.items.specials.wagyu_sliders.description,
        price: "$24",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        isNew: true
      },
      {
        name: dictionary.menu.items.specials.truffle_ramen.name,
        description: dictionary.menu.items.specials.truffle_ramen.description,
        price: "$22",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
        isNew: true
      },
      {
        name: dictionary.menu.items.specials.lobster_bao.name,
        description: dictionary.menu.items.specials.lobster_bao.description,
        price: "$20",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
        isNew: true
      }
    ]
  }

  return (
    <Tabs defaultValue="drinks" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="drinks">{dictionary.menu.drinks}</TabsTrigger>
        <TabsTrigger value="food">{dictionary.menu.food}</TabsTrigger>
        <TabsTrigger value="specials">{dictionary.menu.specials}</TabsTrigger>
      </TabsList>
      {Object.entries(menuItems).map(([category, items]) => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <MenuCard
                key={index}
                {...item}
                spicyLabel={dictionary.menu.badges.spicy}
                newLabel={dictionary.menu.badges.new}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
} 