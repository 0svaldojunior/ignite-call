import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={`
        box-border min-h-[80px] w-full resize-y rounded-md border border-solid border-gray-100/20 bg-gray-100/20 px-3 py-4 text-sm font-normal
        text-black placeholder-gray-400 focus:border-ignite-300 focus:outline-0 disabled:cursor-not-allowed disabled:opacity-50
        dark:border-gray-900 dark:bg-gray-900 dark:text-white
      `}
    />
  )
}
