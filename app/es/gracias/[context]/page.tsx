import { notFound } from 'next/navigation'
import { ThankYouPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'

export function generateStaticParams() { return [{ context: 'private' }, { context: 'contacto' }] }
export async function generateMetadata({ params }: { params: Promise<{ context: string }> }) { const { context } = await params; const routeKey = context === 'private' ? 'thanksPrivate' : 'thanksContact'; return createLocalizedMetadata({ title: 'Solicitud recibida | Rios Lux', description: 'Confirmación de que Rios Lux recibió su solicitud.', locale: 'es', routeKey, index: false }) }
export default async function Page({ params }: { params: Promise<{ context: string }> }) { const { context } = await params; if (context !== 'private' && context !== 'contacto') notFound(); return <ThankYouPage locale="es" context={context === 'private' ? 'private' : 'contact'} /> }
