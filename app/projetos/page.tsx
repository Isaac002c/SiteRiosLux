import { ProjectsPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Projetos Selecionados | Rios Lux', description: 'Projetos e referências da Rios Lux apresentados com transparência, contexto e respeito à privacidade dos clientes.', locale: 'pt', routeKey: 'projects' })
export default function Page() { return <ProjectsPage locale="pt" /> }
