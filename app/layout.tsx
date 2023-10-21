import './globals.css'

import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Hacker News',
  description: 'Discover the best news in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
