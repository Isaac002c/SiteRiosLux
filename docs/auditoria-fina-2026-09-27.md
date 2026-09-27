# Rios Lux — auditoria fina de lançamento

Data: 27 de setembro de 2026

## Resultado executivo

O refinamento preserva a identidade visual e reposiciona a experiência para uma persona de alto padrão sem expor preços, investimento mínimo, cases inventados ou provas sociais não verificadas. A conversão principal combina formulário próprio e WhatsApp como caminhos independentes.

## Verificações realizadas

1. **Branding e copy:** tom mais seguro, discreto e nacional; Home, Private, Projetos e páginas regionais revisadas.
2. **Imagens:** removidas todas as variações do aviso “Imagem de referência — não representa projeto realizado”. Imagens sequenciais viraram carrosséis horizontais com snap em telas de até 1023 px.
3. **Private:** H1, texto de apoio, argumento de base no Rio e CTA refinados em português, inglês e espanhol.
4. **Cobertura:** São Paulo, Ibirapuera, Moema, Vila Nova Conceição, Itaim Bibi, Jardins, Barueri, Alphaville, Santana de Parnaíba, São Caetano do Sul, Campinas e Santos incluídos sem sugerir unidades físicas.
5. **Qualificação:** faixa de investimento disponível somente no formulário, com seis opções; o formulário continua independente do WhatsApp.
6. **Leads:** validação server-side atualizada e faixa registrada nas observações do HUB sem quebrar o contrato existente.
7. **Idiomas:** HTML renderizado no servidor com `pt-BR`, `en` ou `es`, conforme a URL.
8. **SEO on-page:** titles, descriptions, canonical, hreflang, Open Graph, Twitter Card e H1 verificados em todas as URLs do sitemap.
9. **SEO técnico:** sitemap expandido de 45 para 53 URLs; blog e FAQ incluídos; robots e redirects permanentes conferidos.
10. **Dados estruturados:** Organization, WebSite, Service, BreadcrumbList e FAQPage mantidos de acordo com o contexto das páginas.
11. **Links internos:** links editoriais antigos atualizados para as URLs canônicas; crawl sem links internos quebrados ou redirecionados.
12. **Responsividade:** ausência de overflow de página e carrosséis navegáveis por toque em mobile e tablet.
13. **Acessibilidade e performance:** hierarquia de headings, labels, navegação por link, imagens responsivas e carregamento prioritário restrito ao hero preservados.
14. **Qualidade:** lint, TypeScript e build de produção aprovados.
15. **Restrições comerciais:** nenhum preço, valor mínimo ou faixa monetária aparece fora do formulário.

## Validação automatizada

- 53 URLs do sitemap respondendo com HTTP 200.
- Zero títulos ou descriptions duplicados no conjunto auditado.
- Zero erros de JSON-LD detectados.
- Zero ocorrências do aviso editorial removido.
- Zero links internos com 404 ou redirect no crawl final.
- Redirecionamentos legados estratégicos respondendo com HTTP 308 para os destinos corretos.

## Dependências externas

As integrações de Analytics, Google Ads, Tag Manager e HUB permanecem condicionadas às variáveis e credenciais configuradas no ambiente de produção. O código e os eventos estão preparados; a confirmação de recebimento real deve ser feita nas respectivas contas, sem gerar lead de teste em nome de um visitante.
