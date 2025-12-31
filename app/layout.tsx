import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hasta aquí llegué',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/kelly 1.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/kelly 1.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/kelly 1.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/kelly 1.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
