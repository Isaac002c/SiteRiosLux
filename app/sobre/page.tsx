import { AboutPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Sobre a Rios Lux | Arquitetura de Experiências', description: 'Conheça a direção, os valores e o método da Rios Lux para planejar e produzir eventos e experiências no Brasil.', locale: 'pt', routeKey: 'about' })
export default function Page() { return <AboutPage locale="pt" /> }
