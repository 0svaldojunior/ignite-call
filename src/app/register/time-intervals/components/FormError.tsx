import { Text } from '@/components/DesignSystem/Text'
import { ComponentProps } from 'react'

export type FormErrorProps = ComponentProps<typeof Text>

export function FormError(props: FormErrorProps) {
  return <Text className="mb-4 text-error-500" {...props} />
}
