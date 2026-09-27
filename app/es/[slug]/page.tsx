import LocalizedRoute, { getLocalizedPageMetadata, localizedPages } from '@/components/LocalizedRoute'

export function generateStaticParams() { return Object.keys(localizedPages.es).map((slug) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return getLocalizedPageMetadata('es', slug) }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <LocalizedRoute locale="es" slug={slug} /> }
