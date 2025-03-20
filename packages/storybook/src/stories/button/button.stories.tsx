import type { Meta } from '@storybook/react';
import {
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonVariant,
} from '@gilly/ui-library';

const colorOptions = [
  'primary',
  'secondary',
  'tertiary',
  'error',
  'success',
  'warning',
  'gray',
  'custom',
] as Array<ButtonColorVariant>;

const sizeOptions = ['small', 'medium', 'large'] as Array<ButtonSize>;

const variantOptions = ['solid', 'outline', 'text'] as Array<ButtonVariant>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    color: { control: 'select', options: colorOptions },
    size: { control: 'select', options: sizeOptions },
    variant: { control: 'select', options: variantOptions },
    children: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VmtdK78etLmg6R23hpj0HH/📖-Gilly-Library?node-id=1-1183',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    children: 'Click me',
    color: 'secondary',
    size: 'small',
    variant: 'outline',
  },
};
