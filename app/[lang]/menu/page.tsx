import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import { MenuTabs } from '@/components/sections/menu/MenuTabs'
import { PageHeader } from '@/components/ui/page-header'

export default async function MenuPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="container py-8">
      <PageHeader
        title={dictionary.menu.title}
        description={dictionary.menu.description}
      />
      <MenuTabs dictionary={dictionary} />
    </div>
  )
}
