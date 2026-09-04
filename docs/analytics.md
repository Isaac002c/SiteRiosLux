# Mensuracao da Rios Lux

O projeto esta preparado para Google Tag Manager ou Google Analytics 4, sem IDs ficticios.

Configure uma das variaveis na Vercel e publique novamente:

- `NEXT_PUBLIC_GTM_ID=GTM-...` (recomendado quando Google Ads e GA4 serao gerenciados juntos)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...` (uso direto do GA4)

Quando as duas variaveis existem, apenas o GTM e carregado para evitar pageviews e eventos duplicados.

Eventos disponiveis no `dataLayer`/GA4:

- `whatsapp_click`
- `contact_start`
- `contact_submit`
- `phone_click`
- `email_click`
- `corporate_cta_click`
- `private_cta_click`
- `concierge_cta_click`
- `experience_view`

Cada evento pode incluir `label`, usado para identificar a origem do CTA. Antes de ativar campanhas, valide os eventos no modo Preview do GTM ou DebugView do GA4.
