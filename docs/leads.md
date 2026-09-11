# Captação de leads

O formulário envia os dados para `POST /api/leads`. A rota valida os campos, aplica proteção básica contra spam e grava a solicitação no banco do Rios Lux HUB antes de responder com sucesso.

## Configuração

- `RIOS_LUX_HUB_LEAD_ENDPOINT`: endpoint privado de entrada de leads do HUB.
- `RIOS_LUX_HUB_TOKEN`: segredo compartilhado para autenticação servidor-a-servidor. Nunca deve ser exposto com o prefixo `NEXT_PUBLIC_`.

## Mapeamento no HUB

- Fase inicial: `NOVO`, identificada também como mapeada pelas tags operacionais.
- Identificação operacional: tags `rios-lux`, `site` e `mapeado`.
- Origem: `GOOGLE` quando existe `gclid` ou `utm_source=google`; nos demais casos, `SITE`.
- Informações de evento, URL, consentimento, UTMs, GCLID, GBRAID e WBRAID ficam registradas nas notas do lead. URLs de entrada, página e referência são normalizadas sem query string ou fragmento.
- Cada envio recebe uma chave única para evitar duplicidade em novas tentativas do navegador.

O WhatsApp permanece como contato alternativo e é medido como conversão secundária. Na página Corporate, a mensagem inicial descreve apenas a intenção de conversar; ela não afirma que o formulário já foi enviado.

A conversão principal só é registrada quando o HUB confirma a persistência com um identificador de lead. Respostas sem ID e duplicidades não contam como um novo lead.
