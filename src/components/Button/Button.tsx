import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';

import { cn } from '../../ui/utils';
import { buttonVariants } from './variants';
import { ButtonProps } from './types';

/**
 * Button Component
 * 
 * A versatile button component with multiple variants, sizes, and states.
 * Built with accessibility in mind using Radix UI Slot for composition.
 * 
 * @example
 * ```tsx
 * // Primary button
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * 
 * // Loading state
 * <Button loading>
 *   Loading...
 * </Button>
 * 
 * // With icon
 * <Button icon={<Icon />}>
 *   Button with icon
 * </Button>
 * 
 * // As child (composition with Radix Slot)
 * <Button asChild>
 *   <a href="/link">Link as button</a>
 * </Button>
 * ```
 * 
 * @param {ButtonProps} props - Component props
 * @param {React.Ref} ref - Forwarded ref to button element
 * 
 * @see {@link ButtonProps} for all available props
 * @see {@link https://www.radix-ui.com/primitives/docs/utilities/slot Radix UI Slot}
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

