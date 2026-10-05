# Mensuração da Rios Lux

O Google Tag Manager `GTM-PD4M4HG5` e a tag base Google Ads `AW-18060312094` são carregados no documento global, em todas as páginas e idiomas, inclusive nas páginas de obrigado. Ambos compartilham o `dataLayer`.

O snippet do GTM e o snippet de configuração do Google Ads são inseridos no `<head>`. O fallback `noscript` aparece como primeiro elemento do `<body>`.

As cargas diretas que existiam para GA4 `G-9X21JG8W4C` foram removidas. Não adicione uma segunda tag base `AW-18060312094` no GTM. Tags e destinos adicionais, como GA4, podem ser gerenciados no contêiner.

A tag base do Google Ads identifica o destino da conta. Para registrar uma conversão específica de lead, ainda é necessário configurar no Google Ads a ação e seu rótulo de conversão; o ID base sozinho não substitui esse rótulo.

Eventos principais disponíveis no `dataLayer` para acionadores do GTM:

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

O `dataLayer` é inicializado antes dos eventos do site. Antes de ativar campanhas, valide os acionadores no modo Preview do GTM e, quando o GA4 estiver configurado dentro do contêiner, no DebugView.

O backend limita cada origem a doze tentativas em dez minutos na camada do site e repassa apenas um fingerprint não reversível ao HUB. A rota também aplica honeypot, validação e limite de payload. O endereço bruto do visitante não é salvo no lead.
