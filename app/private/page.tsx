import ServicePage from '@/components/ServicePage'
import { getServiceContent, routeKeyForService } from '@/lib/site-content'
import { createLocalizedMetadata } from '@/lib/metadata'

const content = getServiceContent('pt', 'private')
export const metadata = createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale: 'pt', routeKey: routeKeyForService.private })
export default function Page() { return <ServicePage locale="pt" service="private" /> }
