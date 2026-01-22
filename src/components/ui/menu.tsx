'use client'
import { useState } from 'react'
import Link from 'next/link';


const Menu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const navItems = [
        { href: '/about', label: 'My Book' },
        { href: '/resources', label: 'Free Resources' },
        { href: '/articles', label: 'Articles' },
        { href: '/services', label: 'Services' },
    ];
    return (
        <div className='flex z-50'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex flex-col gap-1 p-2"
            >
                <span
                    className={`h-0.5 w-6 bg-black transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                />
                <span
                    className={`h-0.5 w-6 bg-black transition ${isOpen ? 'opacity-0' : ''
                        }`}
                />
                <span
                    className={`h-0.5 w-6 bg-black transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                />
            </button>
            <div
                className={`fixed z-auto top-0 right-0 h-full w-100 bg-white shadow-lg transition-transform duration-300 h-lvh ${isOpen ? 'translate-x-0' : 'translate-x-full hidden'}`}>
                <ul className="flex flex-col gap-10">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="text-lg font-medium text-foreground/80 hover:text-foreground hover:underline decoration-2 underline-offset-4 decoration-primary transition-all"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <nav className="flex flex-col gap-4 p-6">
                    {/* <a href="#" className="text-lg">Home</a>
                    <a href="#" className="text-lg">About</a>
                    <a href="#" className="text-lg">Services</a>
                    <a href="#" className="text-lg">Contact</a> */}
                </nav>
            </div>
        </div>
    )
}

export default Menu