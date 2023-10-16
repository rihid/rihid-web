import { useState } from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link';

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  })

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-transparent">
            <div className="max-w-screen-xl flex items-center justify-between flex-wrap mx-auto p-4">
                <div className={`font-bold text-indigo-600 text-2xl ${poppins.className}`}>
                    <span>Rizal</span>
                </div>
                <div className="md:hidden">
                    {/* For mobile, here the hamburger */}
                    <button 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        `md:w-auto md:flex items-center justify-between mt-2
                    ${openMenu ? 'w-full' : 'hidden'}
                `}
                >
                    <ul
                        className={
                            `flex md:flex-row md:space-x-10 p-4 md:p-0 font-medium text-base text-indigo-600
                        ${openMenu ? 'flex flex-col border border-gray-100 rounded-lg bg-gray-50' : ''}
                    `}
                    >
                        <li><Link href="" className="block px-2 py-1 hover:bg-indigo-100 rounded-lg">Home</Link></li>
                        <li><Link href="/projects" className="block px-2 py-1 hover:bg-indigo-100 rounded-lg">Projects</Link></li>
                        <li><Link href="" className="block px-2 py-1 hover:bg-indigo-100 rounded-lg">Experience</Link></li>
                        <li><Link href="" className="block px-2 py-1 hover:bg-indigo-100 rounded-lg">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
