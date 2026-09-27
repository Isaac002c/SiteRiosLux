import RegionalPage from '@/components/RegionalPage'
import { getRegionalContent } from '@/lib/site-content'
import { createLocalizedMetadata } from '@/lib/metadata'

const content = getRegionalContent('pt', 'regionalVitoria')
export const metadata = createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale: 'pt', routeKey: 'regionalVitoria' })
export default function Page() { return <RegionalPage locale="pt" region="regionalVitoria" /> }
