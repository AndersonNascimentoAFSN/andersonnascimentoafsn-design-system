# Clarivus Design System

> Sistema de design completo e profissional desenvolvido com React, TypeScript e Vite

[![NPM Version](https://img.shields.io/npm/v/@clarivus/design-system)](https://www.npmjs.com/package/@clarivus/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🚀 Características

- ⚡️ **Vite** - Build ultra-rápido e otimizado
- 🎨 **Design Tokens** - Sistema completo de cores, espaçamento e tipografia
- 🧪 **Vitest** - Testes unitários com React Testing Library
- 📚 **Storybook** - Documentação interativa de componentes
- 🎯 **TypeScript** - Type-safety completo
- 🎭 **CSS Modules** - Estilos isolados e performáticos
- 📦 **Tree-shakeable** - Importe apenas o que você precisa

## 📦 Instalação

```bash
npm install @clarivus/design-system
# ou
pnpm add @clarivus/design-system
# ou
yarn add @clarivus/design-system
```

## 🎯 Uso

### Importando componentes

```tsx
import { Button, Card, Input } from '@clarivus/design-system';
import '@clarivus/design-system/style.css';

function App() {
  return (
    <Card variant="elevated" padding="lg">
      <h1>Bem-vindo ao Clarivus</h1>
      <Input label="Email" type="email" fullWidth />
      <Button variant="primary" size="lg">
        Enviar
      </Button>
    </Card>
  );
}
```

### Usando Design Tokens

```tsx
import { colors, spacing, typography } from '@clarivus/design-system';

const styles = {
  container: {
    padding: spacing.lg,
    backgroundColor: colors.primary[500],
    fontFamily: typography.fontFamily.primary,
  },
};
```

## 🎨 Componentes

### Button

Botão com múltiplas variantes e tamanhos.

```tsx
<Button variant="primary" size="md" loading={false}>
  Clique aqui
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'`
- `size`: `'sm' | 'md' | 'lg'`
- `loading`: `boolean`
- `fullWidth`: `boolean`

### Card

Container versátil com header, body e footer.

```tsx
<Card variant="elevated" padding="lg">
  <CardHeader>Título</CardHeader>
  <CardBody>Conteúdo do card</CardBody>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: `'default' | 'bordered' | 'elevated'`
- `padding`: `'none' | 'sm' | 'md' | 'lg'`

### Input

Campo de entrada com label e validação.

```tsx
<Input
  label="Nome"
  placeholder="Digite seu nome"
  error="Campo obrigatório"
  fullWidth
/>
```

**Props:**
- `label`: `string`
- `error`: `string`
- `helperText`: `string`
- `hasError`: `boolean`
- `fullWidth`: `boolean`

## 🎨 Design Tokens

### Cores

```ts
colors.primary[500]  // Azul principal
colors.success[500]  // Verde de sucesso
colors.error[500]    // Vermelho de erro
colors.warning[500]  // Laranja de aviso
colors.gray[500]     // Cinza neutro
```

### Espaçamento

```ts
spacing.xs   // 4px
spacing.sm   // 8px
spacing.md   // 16px
spacing.lg   // 24px
spacing.xl   // 32px
```

### Tipografia

```ts
typography.fontSize.h1      // 36px
typography.fontSize.base    // 16px
typography.fontWeight.bold  // 700
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

## 📄 Licença

MIT © Clarivus

## 🔗 Links

- [NPM](https://www.npmjs.com/package/@clarivus/design-system)
- [GitHub](https://github.com/empreendedor/design-system)
- [Documentação](https://seu-storybook-url.com)
