import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { Text } from './Text'

const tvMultiStep = tv({
  base: 'mt-1 grid gap-2',

  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12'
    },

    active: {
      true: 'bg-ignite-300 dark:bg-ignite-300'
    }
  },

  defaultVariants: {
    cols: 2
  }
})

export type MultiStepProps = ComponentProps<'div'> &
  VariantProps<typeof tvMultiStep> & {
    size: keyof typeof tvMultiStep.variants.cols
    currentStep?: number
  }

export function MultiStep({
  size,
  cols = size,
  currentStep = 1,
  ...props
}: MultiStepProps) {
  return (
    <div {...props}>
      <Text className="text-gray-400 dark:text-gray-400" size="xs">
        Passo {currentStep} de {size.toString()}
      </Text>

      <div className={tvMultiStep({ cols })}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          if (currentStep >= step) {
            return (
              <div
                key={step}
                className="h-1 rounded-full bg-ignite-300 dark:bg-ignite-300"
              />
            )
          } else {
            return (
              <div
                key={step}
                className="h-1 rounded-full bg-gray-300 dark:bg-gray-600"
              />
            )
          }
        })}
      </div>
    </div>
  )
}
