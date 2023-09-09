'use client'

import { toggleDarkMode } from '@/utils//toggleDarkMode'
import { ComponentProps, ReactNode } from 'react'
import { Button } from './Button'

interface ThemeButtonProps extends ComponentProps<typeof Button> {
  children?: ReactNode
}

export function ThemeButton({ children, ...props }: ThemeButtonProps) {
  function handleClick() {
    const hasDarkTheme = toggleDarkMode()
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}
