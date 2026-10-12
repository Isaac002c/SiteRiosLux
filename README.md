# Site RiosLux

Site institucional e de captação de clientes para a RiosLux, com páginas de serviços e experiências de eventos, conteúdo editorial e atendimento em português, inglês e espanhol.

## Funcionalidades

- Páginas de serviços, experiências, projetos, concierge e eventos privados e corporativos.
- Rotas localizadas para português, inglês e espanhol.
- Formulários de contato e landing pages que enviam solicitações para a API interna de leads.
- Validação dos dados, consentimento de privacidade, atribuição de origem e proteção básica contra envios automatizados.
- Integração opcional com o RiosLux Hub para registrar leads.
- Metadados por página, dados estruturados, sitemap e regras para robôs de busca.
- Eventos de analytics para interações relevantes, como início e envio de formulário.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS
- Lucide React

## Executar localmente

Requer Node.js e npm.

~~~bash
npm ci
npm run dev
~~~

A aplicação fica disponível em http://localhost:3000.

Para registrar leads no RiosLux Hub, configure <code>RIOS_LUX_HUB_LEAD_ENDPOINT</code> e <code>RIOS_LUX_HUB_TOKEN</code> em <code>.env.local</code>, usando valores próprios para o ambiente. Sem essa integração, o formulário informa que o recebimento está temporariamente indisponível.

## Validar e executar a versão de produção

~~~bash
npm run lint
npm run build
npm start
~~~

## Estrutura

~~~text
app/          páginas localizadas, API de leads, sitemap e robots
components/   navegação, páginas, formulários e componentes de interface
lib/          validação, integração de leads, analytics e internacionalização
config/       configuração do site
public/       recursos estáticos
~~~
