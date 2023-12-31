import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Provider from './utils/provider'
import Footer from './components/footer'

const poppins = Poppins({
  weight: ['200','400','500','600','800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'GitHub Explorer',
  description: 'Simple app for explore GitHub repositories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${poppins.className} bg-gray-100`}>
          <Provider>{children}</Provider>
          <Footer/>
        </body>
      </html>
  )
}
