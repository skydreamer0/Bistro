import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import { PageHeader } from '@/components/ui/page-header'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'
import { i18n } from '@/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="relative min-h-screen">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container relative py-16">
        <PageHeader
          title={dictionary.contact.title}
          description={dictionary.contact.description}
        />
        
        <div className="max-w-3xl mx-auto mt-16">
          <ContactInfo dictionary={dictionary} />
        </div>
      </div>
    </div>
  )
}
