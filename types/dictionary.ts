export interface Dictionary {
  welcome: string
  navigation: {
    home: string
    menu: string
    about: string
    contact: string
    reservation: string
  }
  menu: {
    title: string
    description: string
    drinks: string
    food: string
    specials: string
    badges: {
      spicy: string
      new: string
    }
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
      food: {
        spicy_tuna: {
          name: string
          description: string
        }
        wagyu_dumplings: {
          name: string
          description: string
        }
        kimchi_rice: {
          name: string
          description: string
        }
      }
      specials: {
        wagyu_sliders: {
          name: string
          description: string
        }
        truffle_ramen: {
          name: string
          description: string
        }
        lobster_bao: {
          name: string
          description: string
        }
      }
    }
  }
  reservation: {
    title: string
    description: string
    form: {
      title: string
      name: string
      email: string
      phone: string
      date: string
      time: string
      guests: string
      message: string
      submit: string
      today: string
      tomorrow: string
      dayAfter: string
      selectTime: string
    }
  }
  testimonials: {
    title: string
    description: string
  }
  // ... 其他翻譯項目
} 