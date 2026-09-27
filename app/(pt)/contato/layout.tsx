import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Contato | Rios Lux',
  description: 'Conte o que você imagina e solicite uma consultoria para seu evento ou experiência no Rio de Janeiro.',
  path: '/contato',
})

export default function ContatoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
