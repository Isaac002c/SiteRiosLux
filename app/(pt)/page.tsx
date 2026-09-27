import HomePage from '@/components/HomePage'
import { homeContent } from '@/lib/site-content'
import { createLocalizedMetadata } from '@/lib/metadata'

const content = homeContent.pt
export const metadata = createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale: 'pt', routeKey: 'home' })

export default function Page() { return <HomePage locale="pt" /> }
