import { Box } from '@/components/DesignSystem/Box'
import { ComponentProps } from 'react'

export type IntervalBoxProps = ComponentProps<typeof Box>

export function IntervalBox(props: IntervalBoxProps) {
  return <Box className="mt-6 flex w-full max-w-[572px] flex-col" {...props} />
}
