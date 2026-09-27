import ServicePage from '@/components/ServicePage'
import { getServiceContent, routeKeyForService } from '@/lib/site-content'
import { createLocalizedMetadata } from '@/lib/metadata'

const content = getServiceContent('pt', 'corporate')
export const metadata = createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale: 'pt', routeKey: routeKeyForService.corporate })
export default function Page() { return <ServicePage locale="pt" service="corporate" /> }
