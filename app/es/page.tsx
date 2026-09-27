import HomePage from '@/components/HomePage'
import { homeContent } from '@/lib/site-content'
import { createLocalizedMetadata } from '@/lib/metadata'

const content = homeContent.es
export const metadata = createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale: 'es', routeKey: 'home' })
export default function Page() { return <HomePage locale="es" /> }
