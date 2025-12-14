import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Employee Dashboard',
  description: 'Admin dashboard built with Next.js 16, Supabase, Drizzle, and Tailwind CSS',
  icons: {
    icon: '/favicon.ico'
  }
}

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700']
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body className={'bg-white dark:bg-gray-900'}>{children}</body>
    </html>
  )
}
