import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
      <nav className="flex gap-x-[20px] p-[20px] text-black  bg-white">
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </nav>
        {children}
      </body>
    </html>
  )
}
