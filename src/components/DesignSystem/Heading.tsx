import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tvHeading = tv({
  base: 'm-0 font-semibold text-gray-800 dark:text-gray-100',

  variants: {
    size: {
      default: 'text-2xl',
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
      '2xl': 'text-4xl',
      '3xl': 'text-5xl',
      '4xl': 'text-6xl',
      '5xl': 'text-7xl',
      '6xl': 'text-8xl'
    }
  },

  defaultVariants: {
    size: 'default'
  }
})

export type HeadingProps = ComponentProps<'h2'> & VariantProps<typeof tvHeading>

export function Heading({ size, className, ...props }: HeadingProps) {
  return <h2 className={tvHeading({ size, className })} {...props} />
}
