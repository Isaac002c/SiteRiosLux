'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderCta({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname()
  const isCorporateLanding = pathname === '/eventos-corporativos-rio-de-janeiro'
  const isCommercialPage = [
    '/',
    '/servicos',
    '/eventos-corporativos-rio-de-janeiro',
    '/eventos-privados-rio-de-janeiro',
    '/experiencias-de-marca',
    '/eventos-de-luxo-rio-de-janeiro',
  ].includes(pathname)

  return (
    <Link
      href={isCorporateLanding ? '#solicitar-proposta' : '/contato'}
      data-track-event={isCommercialPage ? 'click_request_proposal' : 'contact_start'}
      data-track-label={mobile ? 'mobile_header' : 'header'}
      className={`button-primary ${mobile ? 'mt-6 justify-center' : '!px-6 !py-3'}`}
    >
      {isCommercialPage ? 'Solicitar proposta' : 'Solicitar consultoria'}
    </Link>
  )
}
