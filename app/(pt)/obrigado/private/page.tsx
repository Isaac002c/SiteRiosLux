import { ThankYouPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Solicitação recebida | Rios Lux', description: 'Confirmação de recebimento da sua solicitação.', locale: 'pt', routeKey: 'thanksPrivate', index: false })
export default function Page() { return <ThankYouPage locale="pt" context="private" /> }
