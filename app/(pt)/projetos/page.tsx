import { ProjectsPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Projetos e Direção de Experiências | Rios Lux', description: 'Conheça como a Rios Lux conecta estética, hospitalidade, logística e operação na direção de eventos e experiências.', locale: 'pt', routeKey: 'projects' })
export default function Page() { return <ProjectsPage locale="pt" /> }
