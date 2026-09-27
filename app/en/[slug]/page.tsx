import LocalizedRoute, { getLocalizedPageMetadata, localizedPages } from '@/components/LocalizedRoute'

export function generateStaticParams() { return Object.keys(localizedPages.en).map((slug) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return getLocalizedPageMetadata('en', slug) }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <LocalizedRoute locale="en" slug={slug} /> }
