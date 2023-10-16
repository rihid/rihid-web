import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Layout } from './components'

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function Home() {
    return (
        <Layout>

            <header className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
                <div className="flex items-center justify-center mx-auto max-w-screen-xl h-screen lg:py-16 z-10 relative p-4">
                    <div className="text-center">
                        <h1 className={`mb-4 text-4xl font-extrabold leading-none text-gray-700 md:text-6xl ${poppins.className}`}>I'm Rizal Hidayatulloh</h1>
                        <p className="mb-8 text-base font-normal text-gray-500 md:text-xl sm:px-16 md:px-48">a <span className="font-bold text-indigo-600">Frontend Developer</span> based in Yogyakarta</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900">
                                Get in Touch
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                                See Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
            </header>

        </Layout>
    )
}
