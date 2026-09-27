# Rios Lux — diagnóstico e direção do redesign

Data: 27 de setembro de 2026

## 1. Diagnóstico

### Preservado

- O conceito proprietário “Arquitetura de Experiências”.
- O método em cinco etapas: Entendimento, Curadoria, Planejamento, Produção e Experiência.
- Os valores Excelência, Confiança e Curadoria.
- A equipe fundadora, apresentada com responsabilidades reais e complementares.
- A direção visual editorial, sem atribuir as imagens de atmosfera a projetos ou cases realizados.
- A API de leads, atribuição de campanhas e instrumentação para Google Analytics, Google Ads e Tag Manager.

### Reformulado

- O foco deixou de ser “agência de eventos no Rio” e passou a ser “eventos e experiências de alto padrão no Brasil”.
- A proposta de valor central agora é uma única direção para conceito, parceiros, logística, hospitalidade, produção e operação.
- A navegação foi reduzida a frentes comerciais claras: Private, Corporate, Brand Experience, Concierge, Projetos e Onde atuamos.
- A página Private tornou-se uma landing page de aquisição com desejo, clareza operacional, escopo, método, FAQ, formulário e WhatsApp.
- A atuação nacional passou a ser descrita com precisão: base no Rio de Janeiro e operação em outras regiões conforme escopo e logística, sem insinuar unidades físicas.
- A linguagem financeira pública foi removida. O filtro acontece pela maturidade da copy, pelo escopo apresentado e pelas perguntas de qualificação.

### Removido da experiência principal

- Posicionamento restrito a bairros ou somente ao Rio de Janeiro.
- Menus extensos, páginas redundantes e CTAs genéricos.
- Alegações de performance, números, cases, depoimentos e resultados sem prova verificável.
- Uso de referências visuais como se fossem portfólio.
- Qualquer exposição pública de preço, faixa de serviço ou valor mínimo.

## 2. Posicionamento

Essência: direção clara para experiências complexas.

Proposta de valor: a Rios Lux centraliza as decisões criativas e operacionais de eventos importantes, reduz pontos soltos e conduz a experiência do primeiro briefing à operação.

Diferenciais:

1. Uma interlocução para múltiplas frentes.
2. Curadoria orientada por contexto, não por fórmulas.
3. Planejamento documentado e antecipação de riscos.
4. Hospitalidade tratada como parte da operação.
5. Atuação nacional comunicada com responsabilidade.

Personalidade: sofisticada, discreta, madura, segura, objetiva e contemporânea.

## 3. Branding digital

- Paleta: verde profundo, verde floresta, canvas mineral, areia e latão fosco.
- Tipografia: Cormorant Garamond para expressão editorial e Manrope para clareza funcional.
- Grid: largura ampla, linhas finas, grandes áreas de respiro e assimetria controlada.
- Fotografia: equipe real em contexto institucional e imagens de atmosfera integradas ao storytelling, sem alegações de cases.
- Componentes: botões em caixa alta, cards modulares, formulários sem arredondamentos genéricos e hierarquia de texto de alto contraste.
- Movimento: transições discretas e respeito a `prefers-reduced-motion`.

## 4. Arquitetura

```text
Home
├── Private
│   ├── Rio de Janeiro
│   ├── São Paulo
│   ├── Belo Horizonte
│   ├── Vitória
│   └── Brasil
├── Corporate
├── Brand Experience
├── Concierge
├── Projetos selecionados
├── Onde atuamos
├── Sobre
├── Contato
└── Política de Privacidade

Idiomas
├── Português: /
├── Inglês: /en
└── Espanhol: /es
```

Cada página estratégica possui correspondência localizada nos três idiomas e alternates `hreflang` para `pt-BR`, `en`, `es` e `x-default`.

## 5. Wireframes implementados

### Home

Hero nacional → proposta “uma única direção” → frentes → benefícios → método → equipe → atmosferas → atuação → CTA.

### Private e páginas de serviço

Hero de intenção → formatos → método → escopo → argumento de valor → FAQ → formulário independente.

### Landing regional

Hero contextual → como a operação funciona no destino → logística específica → cidades atendidas → método → formulário.

### Projetos

Posicionamento sobre direção e discrição → atmosferas selecionadas → estrutura pronta para futuros cases comprováveis → CTA.

## 6. Conversão e mensuração

- Formulário server-side independente do WhatsApp.
- Página de obrigado específica para Private e para contato geral em cada idioma.
- CTA persistente de WhatsApp no mobile.
- Eventos instrumentados: `whatsapp_click`, `generate_lead`, `form_start`, `form_submit`, `phone_click`, `proposal_request` e `event_type_selected`.
- Atribuição preservada para UTMs, `gclid`, `gbraid` e `wbraid`.
- Campos de qualificação: tipo, data, cidade, estado, convidados, empresa quando aplicável, faixa de investimento e contexto do projeto.

## 7. SEO técnico

- Titles e descriptions próprios por idioma e intenção.
- Canonical e `hreflang` por página.
- Sitemap com 53 URLs estratégicas, incluindo editorial e FAQ, e alternates multilíngues nas páginas localizadas.
- JSON-LD de Organization, WebSite, Service, BreadcrumbList e FAQPage quando aplicável.
- Redirecionamentos permanentes das URLs antigas para a nova arquitetura.
- Imagens responsivas em AVIF/WebP, componentes estáticos e carregamento prioritário apenas no hero.

## 8. Validação

- Build de produção: aprovado.
- TypeScript: aprovado.
- ESLint sem warnings: aprovado.
- Smoke test das 53 URLs do sitemap: todas retornando HTTP 200.
- QA visual: home e Private verificadas em desktop e mobile.
- Verificação de overflow mobile: nenhum overflow horizontal.
- Verificação de preço público: nenhum valor monetário ou mínimo fora do formulário de qualificação.
