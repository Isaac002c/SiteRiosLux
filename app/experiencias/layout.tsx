import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Experiências Rios Lux | Rio de Janeiro',
  description: 'Conceitos e referências para eventos corporativos, celebrações privadas e experiências no Rio de Janeiro.',
  path: '/experiencias',
})

export default function ExperienciasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
