import { CoveragePage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Onde Atuamos | Eventos no Brasil | Rios Lux', description: 'Base no Rio de Janeiro e atuação em São Paulo, Minas Gerais, Espírito Santo e outros destinos do Brasil conforme o projeto.', locale: 'pt', routeKey: 'coverage' })
export default function Page() { return <CoveragePage locale="pt" /> }
