# SETUP.md — O que você precisa fazer manualmente

Este arquivo lista tudo que só **você** pode fazer: copiar os arquivos gerados fora do projeto
para os lugares certos. Siga a ordem abaixo antes de fazer o deploy.

---

## 1. Dashboards interativos (obrigatório)

Os 4 dashboards HTML precisam estar na pasta `public/dashboards/`.
Copie cada arquivo usando **exatamente** estes nomes:

| Arquivo que você gerou | Nome esperado na pasta |
|---|---|
| Dashboard de Análise Financeira (DRE Pessoal) | `public/dashboards/financeiro.html` |
| Dashboard de People Analytics | `public/dashboards/people-analytics.html` |
| Dashboard de E-commerce Sales | `public/dashboards/ecommerce.html` |
| Dashboard Mercado Brasileiro · Ibovespa | `public/dashboards/ibovespa.html` |

**Como fazer:**
```
# No Explorer, vá até public/dashboards/
# Apague os arquivos placeholder que estão lá (são só marcadores)
# Cole seus 4 arquivos HTML com os nomes exatos da tabela acima
```

> Os dashboards são servidos como arquivos estáticos e embutidos via `<iframe>` nas páginas
> de case study. O nome do arquivo precisa ser exato — o código aponta para esses caminhos.

---

## 2. Screenshots dos projetos (obrigatório para a grade de cards)

Os cards da seção "Projetos" e das páginas de case study exibem uma screenshot de cada
dashboard. Crie capturas de tela e salve com **exatamente** estes nomes e dimensões:

| Screenshot | Nome do arquivo | Dimensão recomendada |
|---|---|---|
| Análise Financeira | `public/images/projects/financeiro.png` | 1280 × 720 px |
| People Analytics | `public/images/projects/people-analytics.png` | 1280 × 720 px |
| E-commerce Sales | `public/images/projects/ecommerce.png` | 1280 × 720 px |
| Mercado Brasileiro | `public/images/projects/ibovespa.png` | 1280 × 720 px |

**Como tirar a screenshot:**
1. Abra o HTML do dashboard no Chrome
2. Pressione `F12` → aba "Device" → defina `1280 × 720`
3. `Ctrl + Shift + P` → "Capture screenshot" (ou use a extensão GoFullPage)
4. Salve com o nome exato da tabela

> Se não tiver as screenshots prontas, o card mostra um fundo placeholder cinza.
> O site ainda funciona — mas perde muito da presença visual.

---

## 3. Currículo PDF (obrigatório para o botão "Baixar CV")

Coloque o PDF do seu currículo com **exatamente** este nome:

```
public/cv/Curriculo_Joao_Vitor_Matos.pdf
```

O botão "Baixar CV" no hero e na seção de contato aponta diretamente para este caminho.
Use o atributo `download` já configurado no código — o navegador fará o download automático.

---

## 4. Imagens Open Graph (opcional, mas recomendado para compartilhamentos)

As OG images são geradas dinamicamente pelo Next.js via `next/og`.
Nenhuma ação manual necessária — elas são criadas automaticamente no build.

Se quiser substituir por imagens estáticas customizadas, salve em:
```
public/images/og/home.png          (1200 × 630 px)
public/images/og/projetos.png      (1200 × 630 px)
public/images/og/projeto-financeiro.png
public/images/og/projeto-people-analytics.png
public/images/og/projeto-ecommerce.png
public/images/og/projeto-ibovespa.png
```

---

## 5. Checklist final antes do deploy

- [ ] 4 arquivos HTML em `public/dashboards/` (nomes exatos)
- [ ] 4 screenshots em `public/images/projects/` (nomes exatos)
- [ ] PDF em `public/cv/Curriculo_Joao_Vitor_Matos.pdf`
- [ ] `npm run build` roda sem erros

---

## 6. Deploy na Vercel

1. Faça push do código para um repositório GitHub (público ou privado)
2. Acesse [vercel.com](https://vercel.com) → "Add New Project"
3. Importe o repositório
4. Configure a variável de ambiente:
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://jotavms.vercel.app` (ou o domínio que você escolher)
5. Clique em "Deploy"

> O Vercel detecta Next.js automaticamente e configura o build.

---

## 7. Adicionar posts no blog (quando quiser)

1. Crie um arquivo `.mdx` em `content/blog/`
2. Exemplo: `content/blog/primeiro-post.mdx`
3. O sistema de rotas já está configurado para ler esses arquivos

Estrutura mínima de um post:
```mdx
---
title: "Título do post"
date: "2026-01-15"
description: "Descrição curta que aparece no card"
---

Conteúdo do post aqui em Markdown...
```

---

*Dúvidas? Abra o projeto no Claude Code e pergunte.*
