import type { Viewport } from 'next'
import SiteDocument from '@/components/SiteDocument'
import { createRootMetadata } from '@/lib/metadata'
import '../globals.css'

export const metadata = createRootMetadata('en')
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0B1E1B' }

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>
}
