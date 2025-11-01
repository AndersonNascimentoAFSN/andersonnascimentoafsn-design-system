import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
        secondary: 'border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50 active:bg-primary-100',
        accent: 'bg-primary-700 text-white hover:bg-primary-800 active:bg-primary-900',
        success: 'bg-success-500 text-white hover:bg-success-600 active:bg-success-700',
        warning: 'bg-warning-500 text-gray-900 hover:bg-warning-600 active:bg-warning-700',
        error: 'bg-error-500 text-white hover:bg-error-600 active:bg-error-700',
        ghost: 'text-primary-500 hover:bg-primary-50 active:bg-primary-100',
        outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100',
        link: 'text-primary-500 underline-offset-4 hover:underline active:text-primary-700',
      },
      size: {
        sm: 'h-8 px-3 gap-2 text-sm [&_svg]:w-4 [&_svg]:h-4',
        md: 'h-10 px-4 gap-2 text-base [&_svg]:w-5 [&_svg]:h-5',
        lg: 'h-11 px-6 gap-2 text-base [&_svg]:w-5 [&_svg]:h-5',
        xl: 'h-12 px-8 gap-3 text-base [&_svg]:w-5 [&_svg]:h-5',
        icon: 'w-10 h-10 [&_svg]:w-5 [&_svg]:h-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);