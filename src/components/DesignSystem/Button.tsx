import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tvButton = tv({
  base: `
    box-border flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded px-2 py-4 text-center text-sm font-medium text-white
    disabled:cursor-not-allowed
  `,

  variants: {
    variant: {
      primary:
        'bg-ignite-500 enabled:hover:bg-ignite-300 disabled:bg-gray-200 dark:disabled:bg-gray-600',
      secondary: `
        border-2 border-solid border-ignite-500 text-ignite-300 enabled:hover:bg-ignite-500 enabled:hover:text-white 
      disabled:border-gray-800 disabled:text-gray-800 dark:disabled:border-gray-200 dark:disabled:text-gray-200
      `,
      tertiary:
        'text-gray-900 enabled:hover:text-white disabled:text-gray-600 dark:text-gray-100',
    },

    size: {
      sm: 'h-9',
      md: 'h-12',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof tvButton>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={tvButton({ variant, size, className })} />
  )
}
