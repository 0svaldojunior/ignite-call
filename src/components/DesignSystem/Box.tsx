import { ComponentProps, FormHTMLAttributes, HTMLAttributes } from 'react'

type AllowedAsValues = 'div' | 'form'

export type BoxProps = ComponentProps<AllowedAsValues> & {
  as?: AllowedAsValues
  className?: string
}

export function Box({ as, className, ...rest }: BoxProps) {
  if (as === 'form') {
    return (
      <form
        className={`rounded-md bg-gray-200/5 p-4 shadow-sm dark:bg-gray-800 ${className}`}
        {...(rest as FormHTMLAttributes<HTMLFormElement>)}
      />
    )
  } else {
    return (
      <div
        className={`rounded-md bg-gray-200/5 p-4 shadow-sm dark:bg-gray-800 ${className}`}
        {...(rest as HTMLAttributes<HTMLDivElement>)}
      />
    )
  }
}
