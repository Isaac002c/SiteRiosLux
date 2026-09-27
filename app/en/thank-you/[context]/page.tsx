import { notFound } from 'next/navigation'
import { ThankYouPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export function generateStaticParams() { return [{ context: 'private' }, { context: 'contact' }] }
export async function generateMetadata({ params }: { params: Promise<{ context: string }> }) { const { context } = await params; const routeKey = context === 'private' ? 'thanksPrivate' : 'thanksContact'; return createLocalizedMetadata({ title: 'Enquiry received | Rios Lux', description: 'Confirmation that Rios Lux received your enquiry.', locale: 'en', routeKey, index: false }) }
export default async function Page({ params }: { params: Promise<{ context: string }> }) { const { context } = await params; if (context !== 'private' && context !== 'contact') notFound(); return <ThankYouPage locale="en" context={context} /> }
