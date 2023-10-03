import { ComponentProps } from 'react'

export type IntervalsContainerProps = ComponentProps<'div'>

export function IntervalsContainer(props: IntervalsContainerProps) {
  return (
    <div
      className="mb-4 rounded-md border border-solid border-gray-600"
      {...props}
    />
  )
}
