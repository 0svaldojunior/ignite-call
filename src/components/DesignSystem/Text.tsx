import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tvText = tv({
  base: 'm-0 font-normal text-gray-800 dark:text-gray-100',

  variants: {
    size: {
      default: 'text-base',
      xxs: 'text-xs',
      xs: 'text-sm',
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
      '2xl': 'text-4xl',
      '4xl': 'text-5xl',
      '5xl': 'text-6xl',
      '6xl': 'text-7xl',
      '7xl': 'text-8xl',
      '8xl': 'text-9xl',
    },
  },

  defaultVariants: {
    size: 'default',
  },
})

export type TextProps = ComponentProps<'span'> & VariantProps<typeof tvText>

export function Text({ size, className, ...props }: TextProps) {
  return <span className={tvText({ size, className })} {...props} />
}
