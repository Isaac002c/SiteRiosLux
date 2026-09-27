import { PrivacyPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export const metadata = createLocalizedMetadata({ title: 'Política de Privacidade | Rios Lux', description: 'Saiba como a Rios Lux trata os dados enviados pelo website.', locale: 'pt', routeKey: 'privacy' })
export default function Page() { return <PrivacyPage locale="pt" /> }
