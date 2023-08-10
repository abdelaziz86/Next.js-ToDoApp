import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets : ['latin'], weight  : ["400"]})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en">
      <body className={poppins.className}>
        <h2>nav</h2>
        {children}
      </body>
    </html>
  )
}
