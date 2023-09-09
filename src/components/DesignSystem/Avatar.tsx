'use client'

import * as AvatarUi from '@radix-ui/react-avatar'
import { User } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const tvAvatar = tv({
  slots: {
    root: 'inline-block h-12 w-12 overflow-hidden rounded-full',
    image: 'h-full w-full rounded-full object-cover',
    fallback:
      'flex h-full w-full items-center justify-center bg-gray-300 text-gray-400 dark:bg-gray-600 dark:text-gray-700'
  },

  variants: {}
})

export type AvatarProps = VariantProps<typeof AvatarUi.Image>

export function Avatar(props: AvatarProps) {
  const { fallback, image, root } = tvAvatar()

  return (
    <AvatarUi.Root className={root()}>
      <AvatarUi.Image className={image()} {...props} />
      <AvatarUi.Fallback className={fallback()} delayMs={600}>
        <User />
      </AvatarUi.Fallback>
    </AvatarUi.Root>
  )
}
