import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const intervalVariants = tv({
  base: 'flex items-center justify-between px-3 py-4 border-t border-gray-600 border-solid ',
  variants: {
    variant: {
      default: 'border-t',
      isFirst: 'border-t-0',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export type IntervalItemProps = ComponentProps<'div'> &
  VariantProps<typeof intervalVariants>

export function IntervalItem({
  variant,
  className,
  ...props
}: IntervalItemProps) {
  return <div className={intervalVariants({ variant, className })} {...props} />
}
