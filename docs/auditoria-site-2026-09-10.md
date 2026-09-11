# Auditoria técnica, UX/CRO e SEO — Rios Lux

Data: 10 de setembro de 2026  
Domínio canônico: `https://www.agenciarioslux.com.br`

## 1. Diagnóstico

### P0 — crítico

- A conta Google Ads `AW-18060312094` não tinha uma tag carregada pelo site publicado.
- O formulário aceitava uma resposta `ok` sem exigir um identificador de lead. Isso permitia exibir sucesso e contar conversão sem confirmação inequívoca de persistência.
- Uma resposta de duplicidade ainda podia disparar `generate_lead`, criando risco de contagem duplicada.
- O WhatsApp da página Corporate dizia que a solicitação já havia sido enviada antes de qualquer envio.
- O redirecionamento legado `/casos-sucesso` terminava em `/cases`, uma página deliberadamente `noindex`.

### P1 — alto impacto

- Header e footer usavam texto simples no lugar da marca oficial; um `logo.svg` antigo e conflitante continuava no diretório público.
- O favicon usava uma composição pouco legível em tamanho pequeno, em vez do monograma oficial.
- A Home e a página Sobre não usavam as fotografias reais dos fundadores.
- A Home podia explicitar melhor a intenção principal “agência de eventos no Rio de Janeiro”.
- URLs de entrada, referência e página podiam carregar query strings completas para o HUB.
- O espaçamento global entre grandes seções era conservador para o posicionamento premium.
- A imagem Open Graph anterior tinha 1,33 MB e uma composição divergente dos assets oficiais enviados.

### P2 — refinamento

- A lista do formulário não cobria celebrações privadas, eventos de alto padrão, eventos internos e concierge.
- A página Corporate expunha linguagem interna de backend/CRM ao visitante.
- O sitemap precisava atualizar as datas das páginas materialmente modificadas.
- O redirecionamento HTTP do domínio sem `www` faz dois saltos antes da URL final.

### O que já estava correto

- A arquitetura existente separa Home, Corporate, Private, Brand Experience, Eventos de Luxo, Concierge, Sobre, Contato, FAQ e conteúdo editorial por intenção.
- As páginas comerciais já possuem títulos, descrições, H1 próprio, canonical, Open Graph e dados estruturados de serviço/breadcrumb/FAQ.
- `/cases` e `/obrigado` estão em `noindex, follow` e fora do sitemap.
- O sitemap é gerado a partir de uma lista central de rotas indexáveis; `robots.txt` libera páginas importantes e referencia o sitemap.
- O formulário já continha um conjunto adequado de campos, validação, loading, erro, consentimento, honeypot, limite de payload e encaminhamento servidor a servidor.
- Não existem clientes, avaliações, números, cases ou prêmios inventados nas páginas indexáveis. Imagens conceituais são identificadas como referências.

## 2. Alterações implementadas

- Instalação global da Google tag `AW-18060312094`, com uma única carga de `gtag.js` por página e compatibilidade com GA4/GTM sem duplicar tags.
- Conversão `generate_lead` condicionada a `ok + leadId` e a um lead não duplicado.
- Preservação de UTMs, GCLID, GBRAID, WBRAID e primeira página de entrada durante a navegação.
- Normalização no navegador e no servidor de `pageUrl`, `landing_page` e `referrer`, sem query string ou fragmento.
- Mensagem de WhatsApp Corporate corrigida para iniciar uma conversa sobre evento corporativo.
- Formulário Corporate limitado a opções B2B; formulário geral ampliado para as demais frentes reais.
- Logo oficial aplicada a header, versão mobile, footer, Open Graph e schema Organization.
- Monograma oficial aplicado a `favicon.ico`, PNG 48×48, PNG 192×192, apple-touch-icon 180×180 e ícone 512×512.
- Fotografias reais dos três fundadores na Home e retratos reais individuais na página Sobre, convertidos para WebP responsivo.
- Espaçamento entre grandes seções elevado para até 144 px no desktop, preservando 80/96 px em telas menores.
- Título, descrição e H1 da Home ajustados para a intenção comercial de agência de eventos no Rio de Janeiro.
- Copy Corporate mais clara sobre público, formatos e próximo passo.
- `/casos-sucesso` agora redireciona para `/experiencias`, URL indexável que deixa explícito o caráter conceitual das imagens.
- Imagem Open Graph oficial reduzida de aproximadamente 1,33 MB para 104 KB.

## 3. Arquivos principais

- `components/AnalyticsProvider.tsx`, `components/AnalyticsEvents.tsx`, `lib/attribution.ts`, `lib/analytics.ts`
- `components/ContactForm.tsx`, `lib/lead-validation.ts`, `config/site.ts`
- `app/layout.tsx`, `app/page.tsx`, `app/sobre/page.tsx`, `app/eventos-corporativos-rio-de-janeiro/page.tsx`
- `components/Navbar.tsx`, `components/Footer.tsx`, `app/globals.css`
- `config/routes.ts`, `next.config.mjs`, `lib/metadata.ts`
- `public/brand/*`, `public/images/team/*`, `public/favicon*`, `public/apple-touch-icon.png`, `public/icon-512.png`, `public/og.png`
- `docs/analytics.md`, `docs/leads.md`

## 4. UX e percepção premium

O novo ritmo vertical separa melhor blocos de conteúdo sem aumentar indiscriminadamente a tipografia. A marca oficial substitui texto genérico no header e no footer. Fotografias reais inserem legitimidade e proximidade, com a foto coletiva concentrando a apresentação institucional na Home e os retratos detalhando as funções na página Sobre. No mobile, os retratos usam carrossel horizontal com indicação de gesto para não alongar excessivamente a página.

## 5. CRO e Google Search Ads

- A página Corporate identifica empresas, marcas e lideranças acima da dobra.
- Os formatos incluem encontros executivos, eventos para clientes, lançamentos/ativações e eventos internos.
- CTA primário e WhatsApp permanecem disponíveis sem linguagem agressiva.
- A mensagem do WhatsApp corresponde ao estágio real do visitante.
- Um lead só conta como conversão após confirmação do backend com ID; duplicidades, tentativa de envio e respostas incompletas não contam.
- O fluxo já diferencia `form_start`, CTA, WhatsApp e telefone como sinais secundários.

A tag base do Google Ads está pronta. Falta configurar na conta o rótulo da ação de conversão que deve receber `generate_lead`, pois o usuário forneceu somente o ID base `AW-18060312094`.

## 6. Tracking

São preservados como primeira origem: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid`, `wbraid` e `landing_page`. O lead recebe também `referrer`, `pageUrl`, tipo de evento e `leadId`. Nome, e-mail e telefone não são enviados ao `dataLayer`.

A arquitetura futura para `qualified_lead` e `converted_lead` está documentada em `docs/google-ads-offline-conversions.md`; a evolução depende do mapeamento no HUB e da ação de conversão criada no Google Ads.

## 7. SEO

### Técnico

- 19 URLs no sitemap; todas responderam 200 no build de produção.
- Todas têm um H1, canonical, descrição, Open Graph, Twitter Card e nenhum overflow horizontal no desktop auditado.
- Nenhum link interno do conjunto rastreado termina em 404 ou redirect.
- JSON-LD parseado sem erro; Organization contém apenas nome, URL, logo, telefone, e-mail, Instagram e área atendida informados no projeto.
- `favicon.ico` contém 16×16, 32×32 e 48×48. Os demais ícones têm dimensões declaradas e URL pública estável.
- `robots.txt` permite o conteúdo relevante, bloqueia `/api/` e referencia o sitemap.

### On-page e local

- A Home concentra “agência de eventos no Rio de Janeiro”.
- Corporate concentra “eventos corporativos no Rio de Janeiro”.
- Private, Brand Experience, Eventos de Luxo e Concierge mantêm intenções próprias.
- Rio de Janeiro aparece de forma contextual, sem páginas artificiais por bairro.

### Arquitetura

Não foi criada nova página. A arquitetura atual cobre as intenções comerciais prioritárias e uma nova variação genérica aumentaria o risco de canibalização. O conteúdo editorial apoia as páginas comerciais por links contextuais.

### Indexação e Search Console

O relatório privado “Página com redirecionamento” mostrou:

| URL detectada | Resposta e destino | Avaliação | Canonical final |
| --- | --- | --- | --- |
| `http://agenciarioslux.com.br/` | 308 → `https://agenciarioslux.com.br/` → 308 → `https://www.agenciarioslux.com.br/` | Redirect intencional; manter. Simplificar o primeiro salto no Cloudflare. | `https://www.agenciarioslux.com.br/` |
| `https://agenciarioslux.com.br/` | 308 → `https://www.agenciarioslux.com.br/` | Redirect intencional; manter. | `https://www.agenciarioslux.com.br/` |

Essas URLs não devem ser solicitadas para indexação. No momento da auditoria, o Search Console não tinha sitemap enviado manualmente.

Depois do deploy:

1. Enviar `https://www.agenciarioslux.com.br/sitemap.xml` em Sitemaps.
2. Inspecionar e solicitar indexação da Home canônica.
3. Inspecionar e solicitar indexação de `/eventos-corporativos-rio-de-janeiro`.
4. Em seguida, inspecionar `/experiencias-de-marca`, `/eventos-privados-rio-de-janeiro` e `/eventos-de-luxo-rio-de-janeiro`.

## 8. Bing e IndexNow

O domínio público responde por Cloudflare. O Crawler Hints da Cloudflare oferece IndexNow nativo, que é mais simples e evita manter uma segunda integração e chave no projeto. Não foi criada uma implementação paralela.

Não consigo confirmar se o Crawler Hints está ativado sem acesso ao painel Cloudflare.

Checklist manual:

1. Cloudflare → Caching → Configuration → ativar **Crawler Hints**.
2. Bing Webmaster Tools → importar a propriedade do Google Search Console.
3. Conferir o sitemap canônico.
4. Usar URL Inspection na Home e na Corporate.
5. Executar Site Scan.
6. Conferir Search Performance.
7. Conferir IndexNow Insights após alterações e deploys.
8. Em Bing Places, concluir a verificação pendente e revisar nome, categoria, website, telefone, descrição, imagens e área/localização aplicável.

Referências: [Cloudflare Crawler Hints](https://developers.cloudflare.com/cache/advanced-configuration/crawler-hints/), [IndexNow](https://www.indexnow.org/documentation), [importação do Search Console no Bing](https://blogs.bing.com/webmaster/september-2020/Announcing-Bing-Webmaster-Tools-Import).

## 9. Apple

O site fornece apple-touch-icon 180×180, theme color, metadata social, logo oficial e layout responsivo. No Apple Business Connect:

1. Confirmar organização verificada.
2. Revisar nome “Rios Lux”, logo, website canônico e telefone.
3. Revisar categoria e descrição sem alegações não comprovadas.
4. Atualizar imagens reais e consistentes com a marca.
5. Confirmar endereço ou área de atuação conforme a operação real.
6. Conferir a ficha no Apple Maps e a apresentação nas superfícies Apple, incluindo Siri.

Referência: [Apple Business Connect](https://businessconnect.apple.com/).

## 10. Performance

Teste sintético local do build de produção em viewport mobile, rede 4G simulada e CPU 4× mais lenta:

| Página | LCP | CLS | maior duração da interação testada |
| --- | ---: | ---: | ---: |
| Home | 1,63 s | 0 | 88 ms |
| Corporate | 1,51 s | 0 | 48 ms |

Os resultados atendem às referências propostas nesse ensaio. Eles não substituem dados de campo p75. O Search Console ainda não apresentava dados de Core Web Vitals e a API PageSpeed respondeu com limite de cota (HTTP 429), por isso não há um “antes/depois” de laboratório oficial nesta data.

## 11. Testes executados

- `npm run build`: aprovado, 25 rotas geradas.
- `npm run lint`: aprovado, zero warnings.
- Home, Corporate e Sobre em desktop e mobile: 200, sem overflow e sem erro de console.
- Foto coletiva: lazy loading validado após scroll; imagem 792×528 renderizada.
- Tag Google: um loader e uma configuração `AW-18060312094` na Home e na Corporate.
- Formulário: sucesso, duplicidade, resposta sem ID e erro de backend simulados sem criar lead real.
- Atribuição: primeira origem preservada e query strings removidas das URLs enviadas.
- API: origem inválida 403, payload inválido 422, HUB local não configurado 503 e honeypot 201.
- Sitemap, robots, canonicals, JSON-LD, ícones, links internos, redirects e páginas `noindex`: aprovados.

## 12. Pendências externas

1. Publicar o build para tornar as alterações e a tag visíveis no domínio.
2. Confirmar no ambiente de hospedagem `RIOS_LUX_HUB_LEAD_ENDPOINT` e `RIOS_LUX_HUB_TOKEN`; não há essas credenciais no workspace e não foi criado lead falso em produção.
3. Criar/selecionar a ação de conversão no Google Ads e configurar seu rótulo para `generate_lead`; validar com Tag Assistant.
4. Enviar o sitemap no Search Console.
5. Simplificar no Cloudflare o redirect HTTP sem `www` para apontar diretamente ao HTTPS com `www`.
6. Confirmar/ativar Crawler Hints no Cloudflare.
7. Executar os checklists Bing e Apple acima.
8. Se houver campanhas ou usuários deliberadamente atendidos no EEE, decidir a plataforma de consentimento e configurar Consent Mode conforme o escopo jurídico e de mídia.

## 13. Recomendações futuras

### Alta prioridade

- Fazer um teste real pós-deploy com um lead interno identificado e confirmar a chegada no HUB, o `leadId` e o evento de conversão no Google Ads.
- Ligar no HUB os estágios `qualified_lead` e `converted_lead` à importação de conversões offline.
- Acompanhar termos de pesquisa, taxa de lead qualificado e fechamento por campanha; otimizar para margem, não apenas volume de formulário.

### Média prioridade

- Medir Core Web Vitals de campo após dados suficientes e revisar imagens/scripts com base no p75 real.
- Atualizar artigos datados mantendo as URLs, especialmente o conteúdo com “2025” no slug.
- Produzir fotografias reais de projetos futuros e publicar cases somente com autorização e dados verificáveis.

### Baixa prioridade

- Avaliar nova página comercial somente se Search Console, Ads e conversas comerciais mostrarem uma intenção distinta, volume relevante e conteúdo próprio suficiente.
- Publicar avaliações ou logos apenas quando houver autorização, origem verificável e contexto verdadeiro.
