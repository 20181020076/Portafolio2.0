import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light dark:bg-dark sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col md:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Diego <span className='text-red-600 dark:text-primaryDark text-2xl px-1'>&#9824;</span> Rojas
            </div>
            <Link href="/">Say Hello</Link>

        </Layout>
    </footer>
  )
}

export default Footer