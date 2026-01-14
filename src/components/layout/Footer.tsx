import { Container } from '@/components/ui/Container';

export function Footer() {
    return (
        <footer className="py-8 sm:py-12 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
            <Container>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <p>
                        &copy; {new Date().getFullYear()} Nodir Makhkamov. All rights reserved.
                    </p>
                    {/* Add social links here if needed */}
                </div>
            </Container>
        </footer>
    );
}
