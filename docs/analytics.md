# Mensuracao da Rios Lux

O projeto esta preparado para Google Tag Manager ou Google Analytics 4, sem IDs ficticios.

Configure uma das variaveis na Vercel e publique novamente:

- `NEXT_PUBLIC_GTM_ID=GTM-...` (recomendado quando Google Ads e GA4 serao gerenciados juntos)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...` (uso direto do GA4)

Quando as duas variaveis existem, apenas o GTM e carregado para evitar pageviews e eventos duplicados.

Eventos principais disponiveis no `dataLayer`/GA4:

- `form_start`
- `generate_lead` (conversão principal; ocorre somente após a confirmação do backend)
- `lead_created` (evento compatível preservado para integrações já preparadas)
- `form_submit`
- `click_whatsapp`
- `click_phone`
- `click_request_proposal`

Eventos institucionais e legados preservados:

- `whatsapp_click`
- `contact_start`
- `contact_submit`
- `phone_click`
- `email_click`
- `corporate_cta_click`
- `private_cta_click`
- `concierge_cta_click`
- `experience_view`

Cada evento pode incluir `label`, usado para identificar a origem do CTA. Os eventos de formulário também recebem `form`, `event_type`, `lead_id` e os parâmetros de atribuição disponíveis: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid`, `wbraid`, `landing_page` e `referrer`.

O `lead_id` é retornado pelo HUB somente depois da persistência. Um marcador por lead no `sessionStorage` impede que `generate_lead` seja disparado novamente por repetição de envio ou recarregamento da página de obrigado. Nome, e-mail e telefone não são enviados ao `dataLayer`.

O `dataLayer` é inicializado mesmo sem ID configurado, permitindo validar a implementação antes de conectar GTM, GA4 e Google Ads. Antes de ativar campanhas, valide os eventos no modo Preview do GTM ou DebugView do GA4.

O backend limita cada origem a cinco tentativas em dez minutos na camada do site e repassa apenas um fingerprint não reversível ao HUB. O HUB aplica uma segunda limitação centralizada, além do honeypot, validação, limite de payload e barreira mínima de tempo. O endereço bruto do visitante não é salvo no lead.
