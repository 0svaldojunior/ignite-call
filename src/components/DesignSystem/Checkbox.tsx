'use client'

import * as CheckboxUi from '@radix-ui/react-checkbox'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxUi.Root>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxUi.Root
      {...props}
      className={`
        box-border flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-solid border-gray-100
        bg-gray-50 leading-[0] focus:border-ignite-300 data-[state=checked]:bg-ignite-300 dark:border-gray-900 dark:bg-gray-900
        dark:data-[state=checked]:bg-ignite-300
      `}
    >
      <CheckboxUi.Indicator
        asChild
        className="h-6 w-6 text-black dark:text-white"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 0.8 }}
          transition={{
            duration: 0.45
          }}
        >
          <Check />
        </motion.div>
      </CheckboxUi.Indicator>
    </CheckboxUi.Root>
  )
}
