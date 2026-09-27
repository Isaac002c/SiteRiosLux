import { ThankYouPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Contato recebido | Rios Lux', description: 'Confirmação de recebimento da sua solicitação.', locale: 'pt', routeKey: 'thanksContact', index: false })
export default function Page() { return <ThankYouPage locale="pt" context="contact" /> }
