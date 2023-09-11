import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tvTextInput = tv({
  base: [
    'w-full border-0 bg-transparent text-sm font-normal text-black',
    'placeholder:text-gray-400 focus:outline-0 disabled:cursor-not-allowed ',
    'dark:text-white',
  ],

  variants: {
    sizes: {
      default: 'w-28',
      xxs: 'w-32',
      xs: 'w-36',
      sm: 'w-40',
      md: 'w-44',
      lg: 'w-48',
      xl: 'w-52',
      '2xl': 'w-56',
      '4xl': 'w-60',
      '5xl': 'w-64',
      '6xl': 'w-72',
      '7xl': 'w-80',
      '8xl': 'w-96',
    },
  },

  defaultVariants: {
    sizes: 'default',
  },
})

export type TextInputProps = ComponentProps<'input'> &
  VariantProps<typeof tvTextInput> & {
    prefix?: string
  }

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ sizes, className, prefix, ...props }, ref) => {
    return (
      <div
        className={`
        focus-within:border-ignite-300', box-border flex items-baseline rounded-md border border-solid border-gray-100/20 bg-gray-100/20 px-3 py-4
        disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-900 dark:bg-gray-900 dark:focus-within:border-ignite-300
      `}
      >
        {!!prefix && (
          <span className="text-sm font-light text-gray-400">{prefix}</span>
        )}

        <input
          className={tvTextInput({ sizes, className })}
          {...props}
          ref={ref}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
