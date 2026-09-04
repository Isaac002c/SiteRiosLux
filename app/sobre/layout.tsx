import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Sobre a Rios Lux | Arquitetura de Experiências',
  description: 'Conheça a filosofia e o processo da Rios Lux para arquitetar eventos e experiências no Rio de Janeiro.',
  path: '/sobre',
})

export default function SobreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
