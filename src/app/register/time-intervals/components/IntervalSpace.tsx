import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const IntervalSpaceVariants = tv({
  base: 'flex items-center',

  variants: {
    variant: {
      default: 'gap-1',
      day: 'gap-3',
      inputs:
        'gap-2 input::-webkit-calendar-picker-indicator {filter: invert(100%)}',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export type IntervalSpaceProps = ComponentProps<'div'> &
  VariantProps<typeof IntervalSpaceVariants>

export function IntervalSpace({
  variant,
  className,
  ...props
}: IntervalSpaceProps) {
  return (
    <div className={IntervalSpaceVariants({ variant, className })} {...props} />
  )
}
