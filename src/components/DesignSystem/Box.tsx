import { ComponentProps, FormHTMLAttributes, HTMLAttributes } from 'react'

type AllowedAsValues = 'div' | 'form' | 'main'

export type BoxProps = ComponentProps<AllowedAsValues> & {
  as?: AllowedAsValues
  className?: string
}

export function Box({ as, className, ...rest }: BoxProps) {
  switch (as) {
    case 'form':
      return (
        <form
          className={`rounded-md bg-gray-200/5 p-4 shadow-sm dark:bg-gray-800 ${className}`}
          {...(rest as FormHTMLAttributes<HTMLFormElement>)}
        />
      )

    case 'main':
      return (
        <main
          className={`rounded-md bg-gray-200/5 p-4 shadow-sm dark:bg-gray-800 ${className}`}
          {...(rest as HTMLAttributes<HTMLDivElement>)}
        />
      )

    default:
      return (
        <div
          className={`rounded-md bg-gray-200/5 p-4 shadow-sm dark:bg-gray-800 ${className}`}
          {...(rest as HTMLAttributes<HTMLDivElement>)}
        />
      )
  }
}
