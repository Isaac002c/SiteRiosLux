# Arquitetura futura — conversões offline do Google Ads

O site já preserva `lead_id`, `gclid`, `gbraid`, `wbraid`, UTMs, URL de entrada e referenciador no lead do HUB. Isso permite ligar o clique à evolução comercial sem expor dados pessoais no navegador.

## Conversões recomendadas

1. `generate_lead`: envio aceito e lead persistido no HUB. É a conversão primária on-line.
2. `qualified_lead`: lead validado comercialmente como oportunidade real.
3. `converted_lead`: contratação confirmada.

Os dois últimos eventos devem nascer de uma mudança de fase no HUB e ser enviados ao Google Ads por Data Manager, API ou upload programado. O valor e a moeda só devem ser enviados quando houver regra comercial real.

## Chave de correspondência

- Prioridade: `gclid`, `gbraid` ou `wbraid` preservado no lead.
- Apoio para conversões otimizadas de leads: e-mail e telefone normalizados e transformados em SHA-256 somente no servidor, com base legal/consentimento e conforme a configuração da conta.
- Nunca enviar nome, e-mail, telefone ou mensagem do briefing ao `dataLayer`.

## Normalização antes do hash

- e-mail: remover espaços externos e converter para minúsculas;
- telefone: converter para E.164 (`+55...`), sem pontuação;
- aplicar SHA-256 após a normalização;
- manter `lead_id` como chave interna de auditoria, sem usá-lo como substituto de identificadores aceitos pelo Google.

## Dependências externas

- conta Google Ads e ação de conversão configurada;
- GTM ou Google tag publicados;
- consentimento e política revisados para o uso pretendido;
- credenciais de Data Manager/API ou rotina segura de upload;
- mapeamento das fases do HUB para `qualified_lead` e `converted_lead`;
- janela, fuso, moeda e regras de deduplicação definidos.

Nenhum ID ou credencial fictícia foi incluído no projeto.
