import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  describe('Renderização básica', () => {
    it('deve renderizar o botão com children corretamente', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('deve aplicar className customizado', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('deve renderizar como child component quando asChild é true', () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/test');
    });
  });

  describe('Variantes', () => {
    it('deve aplicar classes corretas para variante primary', () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary-500');
      expect(button).toHaveClass('text-white');
    });

    it('deve aplicar classes corretas para variante secondary', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border-primary-500');
      expect(button).toHaveClass('text-primary-500');
    });

    it('deve aplicar classes corretas para variante accent', () => {
      render(<Button variant="accent">Accent</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary-700');
    });

    it('deve aplicar classes corretas para variante success', () => {
      render(<Button variant="success">Success</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-success-500');
      expect(button).toHaveClass('text-white');
    });

    it('deve aplicar classes corretas para variante warning', () => {
      render(<Button variant="warning">Warning</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-warning-500');
    });

    it('deve aplicar classes corretas para variante error', () => {
      render(<Button variant="error">Error</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-error-500');
      expect(button).toHaveClass('text-white');
    });

    it('deve aplicar classes corretas para variante ghost', () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-primary-500');
    });

    it('deve aplicar classes corretas para variante outline', () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border-gray-300');
    });

    it('deve aplicar classes corretas para variante link', () => {
      render(<Button variant="link">Link</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-primary-500');
      expect(button).toHaveClass('underline-offset-4');
    });
  });

  describe('Tamanhos', () => {
    it('deve aplicar classes corretas para tamanho sm', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-8');
      expect(button).toHaveClass('px-3');
      expect(button).toHaveClass('text-sm');
    });

    it('deve aplicar classes corretas para tamanho md (padrão)', () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-10');
      expect(button).toHaveClass('px-4');
      expect(button).toHaveClass('text-base');
    });

    it('deve aplicar classes corretas para tamanho lg', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-11');
      expect(button).toHaveClass('px-6');
    });

    it('deve aplicar classes corretas para tamanho xl', () => {
      render(<Button size="xl">Extra Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-12');
      expect(button).toHaveClass('px-8');
      expect(button).toHaveClass('gap-3');
    });

    it('deve aplicar classes corretas para tamanho icon', () => {
      render(<Button size="icon" aria-label="Icon button">Icon</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-10');
      expect(button).toHaveClass('h-10');
    });
  });

  describe('Estados', () => {
    it('deve desabilitar o botão quando disabled é true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:opacity-50');
      expect(button).toHaveClass('disabled:pointer-events-none');
    });

    it('deve mostrar loading spinner quando loading é true', () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole('button');
      
      // Verifica se está desabilitado
      expect(button).toBeDisabled();
      
      // Verifica se tem o spinner (Loader2 component)
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('animate-spin');
    });

    it('deve renderizar children mesmo quando loading', () => {
      render(<Button loading>Loading text</Button>);
      expect(screen.getByText('Loading text')).toBeInTheDocument();
    });

    it('deve desabilitar o botão quando loading é true', () => {
      render(<Button loading>Loading</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Ícone', () => {
    it('deve renderizar ícone quando fornecido', () => {
      const Icon = () => <span data-testid="custom-icon">★</span>;
      render(<Button icon={<Icon />}>With Icon</Button>);
      
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      expect(screen.getByText('With Icon')).toBeInTheDocument();
    });

    it('não deve renderizar ícone quando loading é true', () => {
      const Icon = () => <span data-testid="custom-icon">★</span>;
      render(
        <Button icon={<Icon />} loading>
          Loading
        </Button>
      );
      
      expect(screen.queryByTestId('custom-icon')).not.toBeInTheDocument();
    });
  });

  describe('Interações', () => {
    it('deve chamar onClick quando clicado', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      
      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('não deve chamar onClick quando disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      );
      
      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('não deve chamar onClick quando loading', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} loading>
          Click me
        </Button>
      );
      
      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Ref forwarding', () => {
    it('deve encaminhar ref corretamente', () => {
      const ref = vi.fn();
      render(<Button ref={ref}>Button</Button>);
      expect(ref).toHaveBeenCalled();
    });

    it('deve permitir acesso ao elemento DOM via ref', () => {
      const ref = { current: null as HTMLButtonElement | null };
      render(<Button ref={ref}>Button</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current?.tagName).toBe('BUTTON');
    });
  });

  describe('Acessibilidade', () => {
    it('deve ter role button por padrão', () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('deve suportar atributos ARIA customizados', () => {
      render(
        <Button aria-label="Custom label" aria-describedby="description">
          Button
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
      expect(button).toHaveAttribute('aria-describedby', 'description');
    });

    it('deve indicar estado disabled via atributo', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('disabled');
    });
  });

  describe('Comportamento de foco', () => {
    it('deve ter classes de foco visível', () => {
      render(<Button>Focus me</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('focus-visible:ring-2');
      expect(button).toHaveClass('focus-visible:ring-primary-500');
    });

    it('deve ser focável por padrão', () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('não deve ser focável quando disabled', () => {
      render(<Button disabled>Not focusable</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).not.toHaveFocus();
    });
  });

  describe('Classes base', () => {
    it('deve ter classes base aplicadas', () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('inline-flex');
      expect(button).toHaveClass('items-center');
      expect(button).toHaveClass('justify-center');
      expect(button).toHaveClass('whitespace-nowrap');
      expect(button).toHaveClass('rounded-md');
      expect(button).toHaveClass('font-medium');
      expect(button).toHaveClass('transition-all');
    });
  });
});
