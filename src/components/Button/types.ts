import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'ghost' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon';
}