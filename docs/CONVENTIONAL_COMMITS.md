# Conventional Commits Guide

Este projeto segue a especificação [Conventional Commits](https://www.conventionalcommits.org/) para mensagens de commit.

## Por Que Usar Conventional Commits?

- ✅ Histórico de commits legível e estruturado
- ✅ Geração automática de CHANGELOG
- ✅ Determinação automática de versão semântica (SemVer)
- ✅ Facilita colaboração e code review
- ✅ Melhora a rastreabilidade de mudanças

## Formato

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Componentes

#### Type (Obrigatório)

O tipo comunica a intenção do commit:

| Type | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova funcionalidade | `feat(button): add loading state` |
| `fix` | Correção de bug | `fix(input): resolve validation error` |
| `docs` | Apenas documentação | `docs: update README` |
| `style` | Formatação, espaços (não afeta código) | `style: format with prettier` |
| `refactor` | Refatoração sem mudar funcionalidade | `refactor(button): simplify variants logic` |
| `perf` | Melhoria de performance | `perf: optimize bundle size` |
| `test` | Adicionar ou corrigir testes | `test(button): add accessibility tests` |
| `build` | Sistema de build ou dependências | `build: upgrade vite to v6` |
| `ci` | Configuração de CI/CD | `ci: add codecov integration` |
| `chore` | Outras mudanças (não afeta src/test) | `chore: update gitignore` |
| `revert` | Reverter commit anterior | `revert: feat(button): add loading state` |

#### Scope (Opcional)

O escopo especifica a localização da mudança:

```bash
feat(button): ...      # Mudança no componente Button
fix(input): ...        # Correção no componente Input
docs(readme): ...      # Atualização no README
build(deps): ...       # Mudança em dependências
```

**Escopos comuns:**
- Componentes: `button`, `input`, `card`, `modal`
- Áreas: `auth`, `api`, `routing`, `state`
- Ferramentas: `deps`, `config`, `build`, `ci`

#### Subject (Obrigatório)

Descrição curta e imperativa da mudança:

✅ **Bom:**
```bash
feat: add search functionality
fix: resolve memory leak in component
docs: update installation steps
```

❌ **Ruim:**
```bash
feat: added search functionality    # Passado
fix: fixing memory leak             # Gerúndio
docs: Updated installation steps    # Uppercase
```

**Regras:**
- Use modo imperativo ("add" não "added" ou "adding")
- Não capitalize a primeira letra
- Sem ponto final
- Máximo 100 caracteres
- Mínimo 3 caracteres

#### Body (Opcional)

Descrição detalhada da mudança. Use para explicar:
- O que mudou e por quê
- Contexto adicional
- Motivação da mudança

```bash
git commit -m "feat(button): add loading state

Add visual feedback when button action is in progress.
This improves UX by showing users that their action is
being processed.

Includes:
- Spinner icon from lucide-react
- Disabled state during loading
- Props: loading (boolean)"
```

#### Footer (Opcional)

Informações extras como:
- **Breaking changes**: Mudanças que quebram compatibilidade
- **Issues**: Referências a issues
- **Reviewed-by**: Revisores

```bash
git commit -m "feat!: redesign Button API

BREAKING CHANGE: Button now requires variant prop.
Migration: <Button> → <Button variant='primary'>

Closes #123
Reviewed-by: @username"
```

## Exemplos Práticos

### Nova Feature

```bash
git commit -m "feat(button): add gradient variant

Add new gradient variant with primary-to-secondary color transition.
Includes hover and active states."
```

### Bug Fix

```bash
git commit -m "fix(input): resolve focus ring visibility

Fix focus ring not showing on keyboard navigation.
Issue was caused by incorrect z-index stacking."
```

### Breaking Change

```bash
git commit -m "feat!: redesign design token structure

BREAKING CHANGE: Spacing tokens now use rem instead of px.

Migration guide:
- spacing.sm (8px) → spacing.sm (0.5rem)
- spacing.md (16px) → spacing.md (1rem)
- spacing.lg (24px) → spacing.lg (1.5rem)

Closes #45"
```

### Documentação

```bash
git commit -m "docs(contributing): add commit message examples

Expand commit message section with detailed examples
for each conventional commit type."
```

### Chore

```bash
git commit -m "chore(deps): update dependencies

Update tailwindcss to v4.1.16 and vite to v6.0.7"
```

### Múltiplos Escopos

```bash
git commit -m "refactor(button,input): improve accessibility

- Add proper ARIA labels
- Improve keyboard navigation
- Fix focus management"
```

## Git Hooks

O projeto usa Husky para validação automática:

### Pre-commit Hook

Executa antes de cada commit:
- ✅ ESLint (lint)
- ✅ TypeScript check (type-check)
- ✅ Tests (test)

```bash
# Hook roda automaticamente ao fazer commit
git commit -m "feat: add new feature"
```

### Commit-msg Hook

Valida o formato da mensagem de commit:

✅ **Passa:**
```bash
git commit -m "feat(button): add new variant"
git commit -m "fix: resolve bug"
git commit -m "docs: update readme"
```

❌ **Falha:**
```bash
git commit -m "Add new feature"          # Sem type
git commit -m "feat add feature"         # Sem :
git commit -m "feat(): add feature"      # Scope vazio
git commit -m "ft: add feature"          # Type inválido
```

**Saída de erro:**
```
⧗   input: Add new feature
✖   type must be one of [feat, fix, docs, ...] [type-enum]
✖   subject may not be empty [subject-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```

## Bypass Hooks (Não Recomendado)

Em casos excepcionais, você pode pular os hooks:

```bash
# Pular pre-commit e commit-msg
git commit --no-verify -m "emergency fix"

# Ou usar variável de ambiente
HUSKY=0 git commit -m "emergency fix"
```

⚠️ **Atenção:** Use apenas em emergências. Commits sem validação podem quebrar o CI/CD.

## Configuração

### commitlint.config.js

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor',
      'perf', 'test', 'build', 'ci', 'chore', 'revert'
    ]],
    'header-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 3],
  },
};
```

### .husky/commit-msg

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm dlx commitlint --edit $1
```

## Ferramentas Úteis

### Commitizen (Opcional)

Para criar commits interativos:

```bash
# Instalar globalmente
npm install -g commitizen cz-conventional-changelog

# Usar
git add .
cz
```

### VSCode Extensions

- [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- [Git Commit Message Helper](https://marketplace.visualstudio.com/items?itemName=rioukkevin.git-commit-message-helper)

## Referências

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)
- [Semantic Versioning](https://semver.org/)

---

**Dúvidas?** Consulte [CONTRIBUTING.md](CONTRIBUTING.md) ou abra uma [Discussion](https://github.com/AndersonNascimentoAFSN/andersonnascimentoafsn-design-system/discussions).
