import { Inter } from 'next/font/google'
import { Navbar } from '.'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
  return (
    <div className={`${inter.className}`}>
        <Navbar/>
        <main>
            {children}
        </main>
    </div>
  )
}



