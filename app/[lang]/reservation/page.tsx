import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import { PageHeader } from '@/components/ui/page-header'
import { ReservationForm } from '@/components/sections/reservation/ReservationForm'
import { i18n } from '@/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function ReservationPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container relative py-16">
        <PageHeader
          title={dictionary.reservation.title}
          description={dictionary.reservation.description}
        />
        
        <div className="max-w-2xl mx-auto mt-16">
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <ReservationForm dictionary={dictionary} lang={lang} />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  )
} 