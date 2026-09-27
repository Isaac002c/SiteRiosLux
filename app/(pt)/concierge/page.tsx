import ServicePage from '@/components/ServicePage'
import { getServiceContent, routeKeyForService } from '@/lib/site-content'
import { createLocalizedMetadata } from '@/lib/metadata'

const content = getServiceContent('pt', 'concierge')
export const metadata = createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale: 'pt', routeKey: routeKeyForService.concierge })
export default function Page() { return <ServicePage locale="pt" service="concierge" /> }
