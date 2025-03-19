import clsx from 'clsx';
import { FC } from 'react';
import { ButtonProps } from './button.types';
import { getButtonColor, getButtonSize } from './button.utils';
export const Button: FC<ButtonProps> = (props) => {
  const { children, disabled, className, ...buttonProps } = props;

  const buttonClasses = clsx(
    'flex justify-center items-center rounded-lg font-bold whitespace-nowrap uppercase',
    getButtonSize(props.size),
    getButtonColor(props.color || 'primary', props.variant || 'solid'),
    disabled
      ? 'py-3 px-24 bg-gray-gray300 hover:bg-gray-gray300 hover:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-gray300 focus:ring-opacity-50'
      : '',
    className
  );

  return (
    <button {...buttonProps} disabled={disabled} className={buttonClasses}>
      {children}
    </button>
  );
};
