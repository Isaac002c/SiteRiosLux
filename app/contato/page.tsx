import { ContactPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Contato | Planeje um Evento com a Rios Lux', description: 'Compartilhe seu evento com a Rios Lux por formulário ou WhatsApp. Atendimento a projetos no Rio e em todo o Brasil.', locale: 'pt', routeKey: 'contact' })
export default function Page() { return <ContactPage locale="pt" /> }
