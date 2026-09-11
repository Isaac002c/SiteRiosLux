# Mensuração da Rios Lux

O Google tag da conta de anúncios `AW-18060312094` está instalado no layout global. Sem GTM, o site carrega uma única instância de `gtag.js` e configura esse ID em todas as páginas.

A tag base já permite reconhecimento da conta. Para atribuir `generate_lead` a uma ação de conversão específica do Google Ads, ainda é necessário criar ou selecionar essa ação na conta e configurar o respectivo rótulo de conversão no GTM ou fornecer o snippet de evento correspondente.

O projeto também está preparado para Google Tag Manager ou Google Analytics 4. Configure uma das variáveis na Vercel e publique novamente:

- `NEXT_PUBLIC_GTM_ID=GTM-...` (recomendado quando Google Ads e GA4 serao gerenciados juntos)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...` (uso direto do GA4)

Quando o GTM existe, apenas ele é carregado para evitar tags e eventos duplicados. Nesse caso, a tag `AW-18060312094` deve ser configurada dentro do contêiner GTM. Sem GTM, um ID de GA4 válido reutiliza a mesma carga de `gtag.js` já usada pelo Google Ads.

Eventos principais disponíveis no `dataLayer`/GA4:

- `form_start`
- `generate_lead` (conversão principal; ocorre somente após a confirmação do backend com um `lead_id` novo)
- `lead_created` (evento compatível preservado para integrações já preparadas)
- `form_submit`
- `click_whatsapp`
- `click_phone`
- `click_request_proposal`

Outros eventos disponíveis:

- `contact_start`
- `email_click`
- `corporate_cta_click`
- `private_cta_click`
- `concierge_cta_click`
- `experience_view`

Cada evento pode incluir `label`, usado para identificar a origem do CTA. Os eventos de formulário também recebem `form`, `event_type`, `lead_id`, UTMs, GCLID, GBRAID e WBRAID. `landing_page` e `referrer` seguem apenas no lead enviado ao HUB, sem parâmetros de consulta.

O `lead_id` é retornado pelo HUB somente depois da persistência. Respostas sem ID e leads identificados como duplicados não disparam a conversão principal. Um marcador por lead no `sessionStorage` evita nova contagem na mesma sessão. Nome, e-mail e telefone não são enviados ao `dataLayer`.

O `dataLayer` é inicializado mesmo sem ID configurado, permitindo validar a implementação antes de conectar GTM, GA4 e Google Ads. Antes de ativar campanhas, valide os eventos no modo Preview do GTM ou DebugView do GA4.

O backend limita cada origem a doze tentativas em dez minutos na camada do site e repassa apenas um fingerprint não reversível ao HUB. A rota também aplica honeypot, validação e limite de payload. O endereço bruto do visitante não é salvo no lead.
