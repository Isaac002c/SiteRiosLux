# 🔍 CHECKLIST DE VERIFICAÇÃO - PRÉ-PUBLICAÇÃO
## Garantir que Tudo está Funcionando

---

## ✅ TECHNICAL VERIFICATION

### Links & Navigation
```
□ Homepage carrega perfeitamente
□ Todos os links internos funcionam (nenhum 404)
□ Menu de navegação completo e funcional
□ Breadcrumbs visíveis
□ Footer links corretos
□ WhatsApp link funciona
□ Telefone link funciona
```

### Responsive & Mobile
```
□ Testar em iPhone (Safari)
□ Testar em Android (Chrome)
□ Testar em tablet
□ Sem horizontal scroll
□ Botões touch-friendly
□ Imagens responsivas
□ Texto legível em mobile
```

### Performance
```
□ Google PageSpeed Insights (mobile > 80)
□ Google PageSpeed Insights (desktop > 90)
□ Tempo de carregamento < 3s
□ Core Web Vitals:
  □ LCP < 2.5s
  □ FID < 100ms
  □ CLS < 0.1
```

### Forms & CTAs
```
□ Formulário de contato funciona
□ Validação de email
□ Enviou email de confirmação
□ WhatsApp link abre corretamente
□ Telefone clickable
□ CTAs visíveis acima do fold
```

---

## 🔎 SEO VERIFICATION

### Meta Tags
```
□ Homepage tem title (60 chars)
□ Homepage tem meta description (160 chars)
□ Todas as páginas core têm title
□ Todas as páginas core têm meta description
□ Favicon aparece na aba do navegador
□ Open Graph image aparece ao compartilhar
□ Canonical tags corretos
```

### Schema Markup
```
□ Validar em https://schema.org/validator
□ LocalBusiness schema presente
□ Service schema presente
□ FAQPage schema presente (em /faq)
□ Nenhum erro de schema
□ Structured data test passa
```

### Content Structure
```
□ Homepage tem H1 único
□ Hierarquia H1 > H2 > H3 correto
□ Nenhuma página sem H1
□ Listas bem formatadas
□ Imagens com alt tags
□ Nenhuma keyword repetida excessivamente
```

---

## 📱 CONTENT VERIFICATION

### Images
```
□ Todas imagens carregam
□ Nenhuma imagem quebrada
□ Alt tags descritivos
□ Compressão ótima
□ Lazy loading funcionando
□ Formatos WebP quando possível
```

### Text & Copy
```
□ Sem typos em português
□ Sem acentuação quebrada
□ URLs sem caracteres estranhos
□ Espaçamento adequado
□ Readability ótimo
□ Nenhum placeholder text
```

### Videos (se aplicável)
```
□ Vídeos embarcados funcionam
□ Autoplay muted (não autoplay com som)
□ Thumbnail custom
□ Descrição otimizada
```

---

## 🔗 TECHNICAL FILES

### Files Present
```
□ /sitemap.xml (18 URLs presentes)
□ /robots.txt (permite crawl correto)
□ /manifest.json (PWA manifest)
□ /favicon.ico (404 errado = bad)
□ /apple-touch-icon.png (Apple devices)
```

### Verify Files
```
□ robots.txt: Disallow apenas /admin
□ robots.txt: Allow /
□ robots.txt: Sitemap incluída
□ Sitemap: 18 URLs listadas
□ Sitemap: Prioridades configuradas
□ Manifest: Theme color correto
```

---

## 🌐 BROWSER TESTING

### Chrome
```
□ Carrega sem avisos
□ Nenhum erro no console (F12)
□ Nenhuma imagem com CORS error
□ Google Analytics carrega
```

### Firefox
```
□ Layout correto
□ Fontes renderizam bem
□ Performance similar
```

### Safari
```
□ Layout correto
□ Nenhum bug webkit
□ Mobile Safari toca bem
```

### Edge
```
□ Compatibilidade completa
```

---

## 📊 ANALYTICS SETUP

### Google Analytics 4
```
□ GA4 tag carregando (check Network tab)
□ Sessions registradas
□ Page views rastreados
□ Eventos custom configurados:
  □ form_submit
  □ whatsapp_click
  □ phone_click
  □ cta_click
```

### Google Tag Manager
```
□ GTM container carregando
□ Triggers configurados
□ Tags disparando
□ Debug mode verificado
```

### Google Search Console
```
□ Propriedade verificada
□ Sitemap submetido
□ URL Inspection funcionando
□ Nenhum erro crítico
```

---

## 🚨 QUALITY ASSURANCE

### URLs Verification
```
□ /                              → Homepage
□ /servicos                      → Services
□ /sobre                         → About
□ /experiencias                  → Gallery
□ /contato                       → Contact
□ /faq                           → FAQ
□ /blog                          → Blog
□ /despedida-solteiro-luxo-rj   → Tier 1
□ /eventos-corporativos-premium-rj → Tier 1
□ /concierge-eventos-rio        → Tier 1
□ /casamentos-luxo-ipanema      → Tier 2
□ /eventos-mansoes-rio          → Tier 2
□ /eventos-barra-tijuca         → Tier 2
□ /producao-eventos-leblon      → Tier 2
□ /experiencias-exclusivas-rio  → Tier 2
□ /blog                          → Content
□ /casos-sucesso                 → Content
□ /por-que-riosilux             → Content
□ /servico-concierge-premium    → Content
```

### Security
```
□ SSL/HTTPS funcionando
□ Sem avisos de segurança
□ Headers de segurança presentes
□ Nenhum conteúdo misto (http + https)
□ Cookie policy visível (se aplicável)
```

---

## ⚡ PERFORMANCE CHECKLIST

### Lighthouse Scores
```
□ Performance: > 80
□ Accessibility: > 80
□ Best Practices: > 80
□ SEO: > 90
□ PWA: ✅ Installed app available
```

### Speed Test
```
□ GTmetrix: > B grade
□ Pingdom: > 80 score
□ WebPageTest: TTFB < 600ms
```

---

## 📋 FINAL CHECKLIST

### Before Launch
```
□ Backup completo feito
□ Versão anterior archived
□ Todos os testes passaram
□ Stakeholders aprovaram
□ Analytics rastreando
□ Monitoramento ativo
□ Suporte em standby
```

### After Launch (Primeiras 24h)
```
□ Monitorar Google Analytics
□ Verificar erros em GSC
□ Testar todas as URLs
□ Verificar posição de busca
□ Conferir indexação
□ Avaliar performance real
```

---

## 🎯 SIGN-OFF

**Data de Verificação**: ___/___/___

**Verificador**: _______________________________

**Resultado**: 
- [ ] ✅ Tudo OK - Liberar para produção
- [ ] ⚠️ Alguns problemas menores - Liberar com ressalvas
- [ ] ❌ Problemas críticos - AGUARDAR CORREÇÃO

**Observações**:
```
_____________________________________________
_____________________________________________
_____________________________________________
```

---

**Status**: Pronto para Go Live? ✅ SIM / ❌ NÃO

---

*Use este checklist ANTES de publicar para garantir zero problemas no launch*

