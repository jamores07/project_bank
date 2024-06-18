import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = ({ user }: SiderbarProps) => {
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link className='mb-12 cursor-pointer items-center gap-2' href="/">
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Horizon Bank Logo"
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className="sidebar-logo">Horizon</h1>
            </Link>

            {/* Links */}
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
              
              return (
                <></>
              )
            
            })}
        </nav>
    </section>
  )
}

export default SideBar