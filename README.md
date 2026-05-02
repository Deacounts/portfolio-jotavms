# João Vitor Matos — Portfólio

Portfólio pessoal construído com Next.js 16, Tailwind CSS v4 e next-intl. Bilíngue (PT-BR padrão, EN). Quatro dashboards interativos como case studies.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` — redireciona para `/pt` automaticamente.

## Estrutura rápida

```
app/[locale]/          → páginas PT e EN
components/
  layout/              → Header, Footer, LanguageToggle
  sections/            → Hero, About, Projects, TechStack, Experience, Contact
  ui/                  → TerminalBlock, ProjectCard, DashboardEmbed, AnimatedSection, etc.
content/projects/      → metadados tipados dos 4 projetos
messages/              → pt.json e en.json (todo texto do site)
public/
  dashboards/          → HTMLs dos dashboards (você adiciona)
  images/projects/     → screenshots dos dashboards (você adiciona)
  cv/                  → PDF do currículo (você adiciona)
```

## Antes de fazer deploy

Leia o `SETUP.md`. Você precisa adicionar manualmente:

1. `public/dashboards/financeiro.html`
2. `public/dashboards/people-analytics.html`
3. `public/dashboards/ecommerce.html`
4. `public/dashboards/ibovespa.html`
5. `public/images/projects/financeiro.png` (1280×720)
6. `public/images/projects/people-analytics.png`
7. `public/images/projects/ecommerce.png`
8. `public/images/projects/ibovespa.png`
9. `public/cv/Curriculo_Joao_Vitor_Matos.pdf`

## Deploy na Vercel

1. Push para o GitHub
2. Importe o repositório na Vercel
3. Adicione a variável de ambiente:
   - `NEXT_PUBLIC_SITE_URL` = `https://jotavms.vercel.app`
4. Deploy

## Adicionar posts no blog

Crie arquivos `.mdx` em `content/blog/`:

```mdx
---
title: "Título do post"
date: "2026-01-15"
description: "Descrição curta"
---

Conteúdo aqui...
```

## Alterar textos

Todos os textos do site estão em `messages/pt.json` (português) e `messages/en.json` (inglês). Edite lá e os componentes atualizam automaticamente.

## Stack

- **Next.js 16** + App Router + TypeScript strict
- **Tailwind CSS v4** (CSS-first, sem tailwind.config.ts)
- **next-intl v4** com PT-BR e EN
- **framer-motion** para animações on-scroll
- **@vercel/analytics** + **@vercel/speed-insights**
- Deploy: **Vercel**
