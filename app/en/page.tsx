import HomePage from '@/components/HomePage'
import { homeContent } from '@/lib/site-content'
import { createLocalizedMetadata } from '@/lib/metadata'

const content = homeContent.en
export const metadata = createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale: 'en', routeKey: 'home' })
export default function Page() { return <HomePage locale="en" /> }
