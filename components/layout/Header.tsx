"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { cn } from '@/lib/utils'
import { Locale } from '@/i18n-config'

interface HeaderProps {
  lang: Locale
  dictionary: {
    navigation: {
      home: string
      menu: string
      about: string
      contact: string
      reservation: string
    }
  }
}

export function Header({ lang, dictionary }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: dictionary.navigation.home, href: `/${lang}` },
    { name: dictionary.navigation.menu, href: `/${lang}/menu` },
    { name: dictionary.navigation.about, href: `/${lang}/about` },
    { name: dictionary.navigation.contact, href: `/${lang}/contact` },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="text-xl font-bold">
              MAB
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href={`/${lang}/reservation`}>
                {dictionary.navigation.reservation}
              </Link>
            </Button>
            <ThemeToggle />
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-foreground/80",
                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild>
                    <Link 
                      href={`/${lang}/reservation`}
                      onClick={() => setIsOpen(false)}
                    >
                      {dictionary.navigation.reservation}
                    </Link>
                  </Button>
                  <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <LanguageSwitcher lang={lang} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}