import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const navItems = [
    { href: '/about', label: 'My Book' },
    { href: '/resources', label: 'Free Resources' },
    { href: '/articles', label: 'Articles' },
    { href: '/services', label: 'Services' },
];

export function Header() {
    return (
        <header className="py-4 fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-zinc-200/50 transition-all duration-300">
            <Container>
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-serif font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            Nodir Makhkamov
                        </span>
                    </Link>

                    {/* Navigation - Hidden on mobile, shown on md+ */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-foreground/80 hover:text-foreground hover:underline decoration-2 underline-offset-4 decoration-primary transition-all"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <Link href="/contact">
                            <Button size="sm" variant="primary">
                                Join 3k+ Subscribers
                            </Button>
                        </Link>

                        {/* Mobile Menu Button Placeholder */}
                        <button className="md:hidden p-2 text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
