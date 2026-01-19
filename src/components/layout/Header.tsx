import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
// import { Logo } from '../../../public/nameLogo.png'

const navItems = [
    { href: '/about', label: 'My Book' },
    { href: '/resources', label: 'Free Resources' },
    { href: '/articles', label: 'Articles' },
    { href: '/services', label: 'Services' },
];

export function Header() {
    return (

        <header className="flex py-4 px-8 items-center mx-auto max-w-7xl w-full justify-center  mt-6 rounded-t-2xl  bg-background/90 backdrop-blur-md transition-all duration-300 ">
            {/* <Container> */}
            <nav className="flex items-center justify-between h-16 w-full  max-w-[1200px]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* <span className="text-2xl font-serif font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        Nodir Makhkamov
                    </span> */}
                    <img className='w-[200px] md:w-[300px]' src='/nameLogo.png' alt="Nodir Makhkamov" />
                </Link>

                {/* Navigation - Hidden on mobile, shown on md+ */}
                <ul className="hidden lg:flex items-center gap-6">
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

                {/* CTA Button */}
                <div className=" flex items-center gap-4">
                    <Link href="/contact" className='max-sm:hidden'>
                        <Button size="sm" variant="primary">
                            Join 3k+ Subscribers
                        </Button>
                    </Link>

                    {/* Mobile Menu Button Placeholder */}
                    <button className="lg:hidden p-2 text-foreground bg-amber-200 p-1.5 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                    </button>
                </div>
            </nav>
            {/* </Container> */}
        </header>

    );
}
