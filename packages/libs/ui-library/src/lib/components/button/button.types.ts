import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonColorVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'success'
  | 'warning'
  | 'gray'
  | 'custom'

export type ButtonVariant = 'solid' | 'outline' | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ButtonColorVariant
  variant?: ButtonVariant
  size?: ButtonSize
}
