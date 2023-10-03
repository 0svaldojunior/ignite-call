import { Text } from '@/components/DesignSystem/Text'
import { ComponentProps } from 'react'

export type FormAnnotationProps = ComponentProps<typeof Text>

export function FormAnnotation(props: FormAnnotationProps) {
  return <Text className="text-gray-200" {...props} />
}
