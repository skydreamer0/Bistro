interface MenuListProps {
  dictionary: {
    menu: {
      title: string
      drinks: string
      food: string
      specials: string
      badges: {
        spicy: string
        new: string
      }
    }
  }
}

export function MenuList({ dictionary }: MenuListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2" data-testid="menu-list">
      <section>
        <h2 className="text-2xl font-bold mb-4">{dictionary.menu.drinks}</h2>
        {/* Menu items will be added here */}
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">{dictionary.menu.food}</h2>
        {/* Menu items will be added here */}
      </section>
      <section className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">{dictionary.menu.specials}</h2>
        {/* Special menu items will be added here */}
      </section>
    </div>
  )
}
