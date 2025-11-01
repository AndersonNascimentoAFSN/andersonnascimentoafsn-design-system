import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // variant: {
    //   control: 'select',
    //   options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    //   description: 'Variante visual do botão',
    // },
    // size: {
    //   control: 'select',
    //   options: ['sm', 'md', 'lg'],
    //   description: 'Tamanho do botão',
    // },
    // loading: {
    //   control: 'boolean',
    //   description: 'Estado de loading',
    // },
    // disabled: {
    //   control: 'boolean',
    //   description: 'Estado desabilitado',
    // },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     children: 'Button',
//   },
// };

// export const Outline: Story = {
//   args: {
//     variant: 'outline',
//     children: 'Button',
//   },
// };

// export const Ghost: Story = {
//   args: {
//     variant: 'ghost',
//     children: 'Button',
//   },
// };

// export const Danger: Story = {
//   args: {
//     variant: 'error',
//     children: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'sm',
//     children: 'Small Button',
//   },
// };

// export const Medium: Story = {
//   args: {
//     size: 'md',
//     children: 'Medium Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'lg',
//     children: 'Large Button',
//   },
// };

// export const Loading: Story = {
//   args: {
//     loading: true,
//     children: 'Loading...',
//   },
// };

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//     children: 'Disabled Button',
//   },
// };

// export const FullWidth: Story = {
//   args: {
//     children: 'Full Width Button',
//   },
//   parameters: {
//     layout: 'padded',
//   },
// };

// export const AllVariants: Story = {
//   render: () => (
//     <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="outline">Outline</Button>
//       <Button variant="ghost">Ghost</Button>
//       <Button variant="danger">Danger</Button>
//     </div>
//   ),
// };

// export const AllSizes: Story = {
//   render: () => (
//     <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
//       <Button size="sm">Small</Button>
//       <Button size="md">Medium</Button>
//       <Button size="lg">Large</Button>
//     </div>
//   ),
// };
