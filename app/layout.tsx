import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { metaData } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = metaData;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
