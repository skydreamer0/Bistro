import Link from 'next/link'
import { Locale } from '@/i18n-config'

interface FooterProps {
  lang: Locale
  dictionary: {
    footer: {
      address: string
      hours: string
      contact: string
      rights?: string
      privacy?: string
      terms?: string
    }
  }
}

export function Footer({ lang, dictionary }: FooterProps) {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MAB</h3>
            <p className="text-muted-foreground">{dictionary.footer.address}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{dictionary.footer.hours}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mon-Thu: 17:00 - 00:00</li>
              <li>Fri-Sat: 17:00 - 02:00</li>
              <li>Sun: 17:00 - 23:00</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{dictionary.footer.contact}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Tel: +886 2 1234 5678</li>
              <li>Email: info@mab.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Modern Asian Bar. {dictionary.footer.rights}</p>
          {dictionary.footer.privacy && dictionary.footer.terms && (
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:underline">{dictionary.footer.privacy}</a>
              <a href="#" className="hover:underline">{dictionary.footer.terms}</a>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}