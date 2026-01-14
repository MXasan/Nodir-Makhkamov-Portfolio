import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata = {
    title: 'Services | Nodir Makhkamov',
    description: 'Services I offer from web development to technical consultation.',
};

export default function Services() {
    return (
        <Container>
            <div className="py-16 sm:py-24">
                <header className="max-w-2xl mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-6">
                        Services
                    </h1>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                        I help businesses and individuals bring their ideas to life with high-quality software solutions.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">Interested in working together?</p>
                    <Link
                        href="/contact"
                        className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>
            </div>
        </Container>
    );
}
