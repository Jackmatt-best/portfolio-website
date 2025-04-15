'use client'
import { Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export default function MobileNavbar() {
    return (
        <>
            <div className='md:hidden flex m-2'>
            <div className='mr-auto'>
                <h1 className='text-2xl font-bold'>Jackmatt</h1>
            </div>
            <Menu>
                <div className='relative '>
                <MenuButton className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
               </svg>
               </MenuButton>
               <MenuItems className="flex flex-col gap-3 mt-10 bg-gray-300 rounded-xl p-10 ">
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/home'>Home</Link></MenuItem>
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/about'>About me</Link></MenuItem>
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/contact'>Contact</Link></MenuItem>
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/skills'>Skills</Link></MenuItem>
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/resume'>Resume</Link></MenuItem>
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/projects'>projects</Link></MenuItem>
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/testimonials'>Testimonials</Link></MenuItem>
                  <MenuItem><Link className='hover:underline hover:text-blue-800 ' href='/certificates'>Certificates</Link></MenuItem>
               </MenuItems>
               </div>
            </Menu>

            </div>
        </>
    )
}