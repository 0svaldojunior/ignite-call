import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignite Call',
  description: 'Ignite call by Rocketseat'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark m-0 box-border p-0 antialiased">
      <body className={roboto.className}>
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
