# Design System

> Sistema de design moderno desenvolvido com React, TypeScript, Tailwind CSS 4 e Radix UI

[![NPM Version](https://img.shields.io/npm/v/@andersonnascimentoafsn/design-system)](https://www.npmjs.com/package/@andersonnascimentoafsn/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🚀 Características

- ⚡️ **Vite** - Build ultra-rápido e otimizado
- 🎨 **Tailwind CSS 4** - Sistema completo de design tokens usando @theme
- 🧩 **Radix UI** - Componentes acessíveis e sem estilo
- 🎯 **Class Variance Authority (CVA)** - Gerenciamento de variantes
- 🧪 **Vitest** - Testes unitários com React Testing Library (35+ testes)
- 📚 **Storybook** - Documentação interativa de componentes
- 🎯 **TypeScript** - Type-safety completo
- 📦 **Tree-shakeable** - Importe apenas o que você precisa

## 📦 Instalação

```bash
npm install @andersonnascimentoafsn/design-system
# ou
pnpm add @andersonnascimentoafsn/design-system
# ou
yarn add @andersonnascimentoafsn/design-system
```

> **Nota:** Este pacote requer React 18+ e Tailwind CSS 4+ como peer dependencies.

## 🎯 Uso

### Setup Inicial

Importe o CSS do design system no seu arquivo principal:

```tsx
// main.tsx ou App.tsx
import '@andersonnascimentoafsn/design-system/style.css';
```

### Importando componentes

```tsx
import { Button } from '@andersonnascimentoafsn/design-system';

function App() {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <Button variant="primary" size="lg">
        Começar
      </Button>
    </div>
  );
}
```

### Usando Design Tokens

Os tokens estão disponíveis como classes Tailwind CSS:

```tsx
<div className="bg-primary-500 text-white p-spacing-lg rounded-radius-md shadow-shadow-md">
  Conteúdo estilizado com design tokens
</div>
```

## 🎨 Componentes

### Button

Botão versátil com múltiplas variantes, tamanhos e estados. Construído com Radix UI Slot para composição flexível.

```tsx
import { Button } from '@andersonnascimentoafsn/design-system';

<Button variant="primary" size="md" loading={false}>
  Clique aqui
</Button>
```

**Variantes disponíveis:**
- `primary` - Botão principal (azul)
- `secondary` - Botão secundário (roxo)
- `success` - Sucesso (verde)
- `warning` - Aviso (laranja)
- `danger` - Perigo (vermelho)
- `outline` - Contornado
- `ghost` - Sem fundo
- `link` - Estilo de link
- `gradient` - Com gradiente

**Tamanhos:**
- `xs` - Extra pequeno
- `sm` - Pequeno
- `md` - Médio (padrão)
- `lg` - Grande
- `xl` - Extra grande

**Props principais:**
- `variant`: Variante visual do botão
- `size`: Tamanho do botão
- `loading`: Exibe indicador de carregamento
- `disabled`: Desabilita o botão
- `asChild`: Usa Radix Slot para composição
- Todos os atributos HTML padrão de `<button>`

## 🎨 Design Tokens

O design system utiliza Tailwind CSS 4 com tokens definidos via `@theme` directive. Todos os tokens estão disponíveis como classes CSS.

### Cores

```tsx
// Primárias (Azul)
<div className="bg-primary-500 text-primary-50" />

// Sucesso (Verde)
<div className="bg-success-500 border-success-600" />

// Erro (Vermelho)
<div className="bg-error-500 text-error-50" />

// Aviso (Laranja)
<div className="bg-warning-500" />

// Neutros (Cinza)
<div className="bg-gray-100 text-gray-900" />
```

**Escalas disponíveis:** 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Espaçamento

```tsx
<div className="p-spacing-xs" />   // 4px
<div className="m-spacing-sm" />   // 8px
<div className="gap-spacing-md" /> // 16px
<div className="p-spacing-lg" />   // 24px
<div className="m-spacing-xl" />   // 32px
```

### Tipografia

```tsx
// Tamanhos
<h1 className="text-size-h1" />     // 36px
<p className="text-size-base" />    // 16px
<small className="text-size-sm" />  // 14px

// Pesos
<span className="font-weight-bold" />    // 700
<span className="font-weight-medium" />  // 500
<span className="font-weight-regular" /> // 400

// Famílias
<p className="font-family-primary" />   // Rubik
<code className="font-family-mono" />   // monospace
```

### Outros Tokens

```tsx
// Border Radius
<div className="rounded-radius-sm" />  // 4px
<div className="rounded-radius-md" />  // 8px
<div className="rounded-radius-lg" />  // 12px

// Shadows
<div className="shadow-shadow-sm" />
<div className="shadow-shadow-md" />
<div className="shadow-shadow-lg" />

// Z-index
<div className="z-zindex-dropdown" />   // 1000
<div className="z-zindex-modal" />      // 1300
```

## 🧪 Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Rodar Storybook
pnpm dev

# Executar testes
pnpm test

# Build da biblioteca
pnpm build

# Verificar tipos
pnpm type-check
```

## 📚 Documentação

Acesse a documentação completa no [Storybook](https://seu-storybook-url.com)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

## �️ Requisitos Técnicos

- **Node.js**: >=18.0.0
- **pnpm**: >=8.0.0 (recomendado)
- **React**: ^18.3.0
- **Tailwind CSS**: ^4.0.0

## �📄 Licença

MIT © 2025 Anderson Nascimento

## 🔗 Links

- [NPM](https://www.npmjs.com/package/@andersonnascimentoafsn/design-system)
- [GitHub](https://github.com/empreendedor/design-system)
- [Issues](https://github.com/empreendedor/design-system/issues)
