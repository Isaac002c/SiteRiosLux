export const siteConfig = {
  name: 'Rios Lux',
  descriptor: 'Arquitetura de Experiências',
  url: 'https://www.agenciarioslux.com.br',
  email: 'agenciarioslux@gmail.com',
  phoneDisplay: '+55 21 97252-2076',
  phoneHref: '+5521972522076',
  whatsappNumber: '5521972522076',
  whatsappMessage: 'Olá! Conheci a Rios Lux pelo site e gostaria de conversar sobre uma experiência.',
  social: {
    instagram: null,
    linkedin: null,
  },
} as const

export function createWhatsAppUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
