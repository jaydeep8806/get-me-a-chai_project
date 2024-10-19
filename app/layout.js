import localFont from 'next/font/local'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SessionProvider from 'next-auth/react'
import SessionWrapper from './components/SessionWrapper'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'Get me A Chai - A website for chai lovers',
  description: 'this is website for chai lovers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          <div
            className="min-h-[87vh] bg-[#000000] 
        bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
          >
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  )
}
