# Projeto Demo Miro

## Descrição do Projeto

O Miro Clone é um projeto abrangente desenvolvido do zero, proporcionando uma experiência semelhante ao Miro com funcionalidades avançadas para colaboração em tempo real em um quadro branco virtual.

## Principais Funcionalidades

- **Quadro Branco do Zero:** Desenvolvimento de um quadro branco a partir do zero, permitindo aos usuários criar e colaborar em ideias visualmente.

- **Barra de Ferramentas:** Inclusão de uma barra de ferramentas com opções para adicionar texto, formas, notas adesivas e desenho a lápis.

- **Funcionalidade de Camadas:** Implementação de funcionalidade de camadas para organizar elementos no quadro de forma hierárquica.

- **Sistema de Cores:** Integração de um sistema de cores para permitir aos usuários escolher cores para seus desenhos e elementos no quadro.

- **Funcionalidade Desfazer/Refazer:** Inclusão de botões de desfazer/refazer para facilitar a correção de erros ou voltar a ações anteriores.

- **Atalhos de Teclado:** Implementação de atalhos de teclado para melhorar a eficiência e a experiência do usuário durante a criação.

- **Colaboração em Tempo Real:** Possibilidade de colaborar em tempo real, permitindo que vários usuários trabalhem juntos no mesmo quadro.

- **Banco de Dados em Tempo Real:** Utilização de um banco de dados em tempo real para sincronizar as alterações entre os usuários.

- **Autenticação, Organizações e Convites:** Sistema de autenticação com suporte a organizações e convites para gerenciar o acesso ao quadro branco.

- **Funcionalidade de Favoritos:** Opção para os usuários marcarem elementos como favoritos para acesso rápido.

- **Framework Next.js 14:** Desenvolvimento utilizando o framework Next.js na versão 14 para uma experiência de desenvolvimento moderna.

- **Estilização com TailwindCSS & ShadcnUI:** Utilização das bibliotecas TailwindCSS e ShadcnUI para uma estilização flexível e agradável.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

Obrigado por fornecer a lista atualizada de dependências. Vou ajustar o README de acordo:

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@clerk/nextjs:` ^4.29.8
- `@liveblocks/client:` ^1.10.4
- `@liveblocks/node:` ^1.10.4
- `@liveblocks/react:` ^1.10.4
- `@radix-ui/react-alert-dialog:` ^1.0.5
- `@radix-ui/react-avatar:` ^1.0.4
- `@radix-ui/react-dialog:` ^1.0.5
- `@radix-ui/react-dropdown-menu:` ^2.0.6
- `@radix-ui/react-slot:` ^1.0.2
- `@radix-ui/react-tooltip:` ^1.0.7
- `class-variance-authority:` ^0.7.0
- `clsx:` ^2.1.0
- `convex:` ^1.10.0
- `convex-helpers:` ^0.1.25
- `date-fns:` ^3.6.0
- `lucide-react:` ^0.344.0
- `nanoid:` ^5.0.6
- `next:` 14.1.1
- `next-themes:` ^0.2.1
- `perfect-freehand:` ^1.2.2
- `query-string:` ^9.0.0
- `react:` ^18
- `react-contenteditable:` ^3.3.7
- `react-dom:` ^18
- `sonner:` ^1.4.3
- `tailwind-merge:` ^2.2.1
- `tailwindcss-animate:` ^1.0.7
- `usehooks-ts:` ^2.15.1
- `zustand:` ^4.5.2
- `@types/node:` ^20
- `@types/react:` ^18
- `@types/react-dom:` ^18
- `autoprefixer:` ^10.0.1
- `eslint:` ^8
- `eslint-config-next:` 14.1.1
- `postcss:` ^8
- `tailwindcss:` ^3.3.0
- `typescript:` ^5

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.

2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.

3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env.local` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
CONVEX_DEPLOYMENT=seu_valor_aqui
NEXT_PUBLIC_CONVEX_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
LIVEBLOCKS_SECRET_KEY=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse a aplicação em `http://localhost:3000` e explore todas as funcionalidades do Miro Clone, incluindo colaboração em tempo real, ferramentas de desenho e gerenciamento de conteúdo.
