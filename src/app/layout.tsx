import { Provider } from '@/components/Provider'
import type { Metadata } from 'next'
import { SessionProviderProps } from 'next-auth/react'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignite Call',
  description: 'Ignite call by Rocketseat',
}

type RootLayoutProps = {
  children: ReactNode
  session: SessionProviderProps | null | undefined
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <html lang="en" className="dark m-0 box-border p-0 antialiased">
      <body className={roboto.className}>
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <main className="h-screen w-screen">
            <Provider session={session}>{children}</Provider>
          </main>
        </div>
      </body>
    </html>
  )
}
