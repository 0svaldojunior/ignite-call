'use client'

import { SessionProvider, SessionProviderProps } from 'next-auth/react'
import { ComponentProps, ReactNode } from 'react'

export type ProviderProps = ComponentProps<'div'> & {
  children: ReactNode
  session: SessionProviderProps | null | undefined
}

export function Provider({ children, session, ...props }: ProviderProps) {
  return (
    <SessionProvider session={session?.session} {...props}>
      {children}
    </SessionProvider>
  )
}
