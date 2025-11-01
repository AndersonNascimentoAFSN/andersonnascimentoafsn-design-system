import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';

import { cn } from '../../ui/utils';
import { buttonVariants } from './variants';
import { ButtonProps } from './types';

/**
 * andersonnascimentoafsn Button Component
 * Sistema completo de botões do andersonnascimentoafsn Design System
 * 
 * Variantes: Primary, Secondary, Accent, Success, Warning, Error, Ghost, Outline, Link
 * Tamanhos: sm, md, lg, xl
 * Estados: Default, Hover, Active, Disabled, Loading
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, icon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            {children}
          </>
        ) : (
          <>
            {icon && icon}
            {children}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

