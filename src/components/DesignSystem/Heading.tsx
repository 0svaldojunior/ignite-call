import { ComponentProps, HTMLAttributes } from 'react'
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
      '6xl': 'text-8xl',
    },
  },

  defaultVariants: {
    size: 'default',
  },
})

type AllowedValues = 'h1' | 'h2' | 'strong'

export type HeadingProps = ComponentProps<AllowedValues> &
  VariantProps<typeof tvHeading> & {
    as?: AllowedValues
    className?: string
  }

export function Heading({ as, size, className, ...props }: HeadingProps) {
  switch (as) {
    case 'h1':
      return (
        <h1
          className={tvHeading({ size, className })}
          {...(props as HTMLAttributes<HTMLElement>)}
        />
      )
    case 'strong':
      return (
        <strong
          className={tvHeading({ size, className })}
          {...(props as HTMLAttributes<HTMLElement>)}
        />
      )
    default:
      return (
        <h2
          className={tvHeading({ size, className })}
          {...(props as HTMLAttributes<HTMLElement>)}
        />
      )
  }
}
