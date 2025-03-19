import { ButtonColorVariant, ButtonSize, ButtonVariant } from './button.types';

export const getButtonSize = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return 'py-2 px-12 text-sm';
    case 'medium':
      return 'py-3 px-14 text-base';
    default:
      return 'py-3 px-24 text-lg';
  }
};

export const getButtonColor = (
  color: ButtonColorVariant,
  variant: ButtonVariant
) => {
  switch (color) {
    case 'gray':
      if (variant === 'outline') {
        return 'bg-base-white border border-solid border-gray-gray600 text-gray-gray500 hover:bg-gray-gray600/90 hover:text-base-white focus:outline-none focus:ring-2 focus:ring-gray-gray600 focus:ring-opacity-50';
      }

      if (variant === 'text') {
        return 'bg-transparent text-gray-gray600 hover:text-gray-gray600/90 focus:outline-none focus:ring-2 focus:ring-gray-gray600 focus:ring-opacity-50 border-none';
      }

      return 'bg-gray-gray600 text-white hover:bg-gray-gray600/90 focus:outline-none focus:ring-2 focus:ring-gray-gray600 focus:ring-opacity-50';
    case 'secondary':
      if (variant === 'outline') {
        return 'bg-base-white border border-solid border-primary-brand600 text-primary-brand600 hover:bg-primary-brand600/90 hover:text-base-white focus:outline-none focus:ring-2 focus:ring-primary-brand600 focus:ring-opacity-50';
      }

      if (variant === 'text') {
        return 'bg-transparent text-primary-brand600 hover:text-primary-brand600/90 focus:outline-none focus:ring-2 focus:ring-primary-brand600 focus:ring-opacity-50';
      }

      return 'bg-primary-brand600 text-white hover:bg-primary-brand600/90 focus:outline-none focus:ring-2 focus:ring-primary-brand600 focus:ring-opacity-50';
    case 'tertiary':
      if (variant === 'outline') {
        return 'bg-base-white border border-solid border-aqua-aqua600 text-aqua-aqua600 hover:bg-aqua-aqua600/90 hover:text-base-white focus:outline-none focus:ring-2 focus:ring-aqua-aqua600 focus:ring-opacity-50';
      }

      if (variant === 'text') {
        return 'bg-transparent text-aqua-aqua600 hover:text-aqua-aqua600/90 focus:outline-none focus:ring-2 focus:ring-aqua-aqua600 focus:ring-opacity-50';
      }

      return 'bg-aqua-aqua600 text-white hover:bg-aqua-aqua600/90 focus:outline-none focus:ring-2 focus:ring-aqua-aqua600 focus:ring-opacity-50';
    case 'error':
      if (variant === 'outline') {
        return 'bg-base-white border border-solid border-error-error600 text-error-error600 hover:bg-error-error600/90 hover:text-base-white focus:outline-none focus:ring-2 focus:ring-error-error600 focus:ring-opacity-50';
      }

      if (variant === 'text') {
        return 'bg-transparent text-error-error600 hover:text-error-error600/90 focus:outline-none focus:ring-2 focus:ring-error-error600 focus:ring-opacity-50';
      }

      return 'bg-error-error600 text-white hover:bg-error-error600/90 focus:outline-none focus:ring-2 focus:ring-error-error600 focus:ring-opacity-50';
    case 'warning':
      if (variant === 'outline') {
        return 'bg-base-white border border-solid border-warning-warning600 text-warning-warning600 hover:bg-warning-warning600/90 hover:text-base-white focus:outline-none focus:ring-2 focus:ring-warning-warning600 focus:ring-opacity-50';
      }

      if (variant === 'text') {
        return 'bg-transparent text-warning-warning600 hover:text-warning-warning600/90 focus:outline-none focus:ring-2 focus:ring-warning-warning600 focus:ring-opacity-50';
      }

      return 'bg-warning-warning600 text-white hover:bg-warning-warning600/90 focus:outline-none focus:ring-2 focus:ring-warning-warning600 focus:ring-opacity-50';
    case 'success':
      if (variant === 'outline') {
        return 'bg-base-white border border-solid border-success-success600 text-success-success600 hover:bg-success-success600/90 hover:text-base-white focus:outline-none focus:ring-2 focus:ring-success-success600 focus:ring-opacity-50';
      }

      if (variant === 'text') {
        return 'bg-transparent text-success-success600 hover:text-success-success600/90 focus:outline-none focus:ring-2 focus:ring-success-success600 focus:ring-opacity-50';
      }

      return 'bg-success-success600 text-white hover:bg-success-success600/90 focus:outline-none focus:ring-2 focus:ring-success-success600 focus:ring-opacity-50';

    case 'custom':
      return '';
    default:
      if (variant === 'outline') {
        return 'bg-base-white border border-solid border-blue-blue600 text-blue-blue600 hover:bg-blue-blue600/90 hover:text-base-white focus:outline-none focus:ring-2 focus:ring-blue-blue600 focus:ring-opacity-50';
      }

      if (variant === 'text') {
        return 'bg-transparent text-blue-blue600 hover:text-blue-blue600/90 focus:outline-none focus:ring-2 focus:ring-blue-blue600 focus:ring-opacity-50';
      }

      return 'bg-blue-blue600 text-white hover:bg-blue-blue600/90 focus:outline-none focus:ring-2 focus:ring-blue-blue600 focus:ring-opacity-50';
  }
};
