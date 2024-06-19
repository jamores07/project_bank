import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BankCard from './BankCard'
import Category from './Category'

const RightSideBar = ({user, transactions, banks}: RightSidebarProps) => {
    const categories: CategoryCount[] = []
  
    return (
        <aside className="right-sidebar">
            { /*Right Sidebar Header */}
            <section className="flex flex-col pb-8">
                {/* Profile Banner */}
                <div className="profile-banner" />
                
                {/* Profile */}
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
                    </div>
                    {/*User Name */}
                    <div className="profile-details">
                        <h1 className='profile-name'>
                        {user.firstName} {user.lastName}
                        </h1>
                        <p className="profile-email">
                        {user.email}
                        </p>
                    </div>
                </div>
            </section>

            { /*Right Sidebar Content */}
            
           
        </aside>
    )
}

export default RightSideBar