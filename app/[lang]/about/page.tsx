import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import { PageHeader } from '@/components/ui/page-header'
import { AboutContent } from '@/components/sections/about/AboutContent'
import { Team } from '@/components/sections/about/Team'
import { Separator } from '@/components/ui/separator'

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="relative">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container relative py-16">
        <PageHeader
          title={dictionary.about.title}
          description={dictionary.about.description}
          className="mb-16"
        />
        
        <AboutContent dictionary={dictionary} />
        <Separator className="my-16" />
        <Team dictionary={dictionary} />
      </div>
    </div>
  )
}
