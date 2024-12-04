import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import { Hero } from '@/components/sections/hero/Hero'
import { Features } from '@/components/sections/features/Features'
import { MenuShowcase } from '@/components/sections/menu/MenuShowcase'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Hero dictionary={dictionary} lang={lang} />
      <Features dictionary={dictionary} />
      <MenuShowcase dictionary={dictionary} />
    </>
  )
}