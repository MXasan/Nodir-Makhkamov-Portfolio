import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaYoutube, FaInstagram, FaLinkedinIn,
    FaTiktok, FaTwitter, FaFacebookF
} from "react-icons/fa";

export function Footer() {
    return (
        <footer className="w-full bg-white py-16 px-8 border-t border-gray-100 font-sans text-[#1a1a1a]">
            <Container>

                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                        {/* Левая колонка: Лого и Соцсети */}
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <div className="relative w-40 h-12">
                                <Image
                                    src="/nameLogo.svg" // Убедись, что файл в папке public
                                    alt="Ali Abdaal"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-500 text-sm">
                                © Ali Abdaal 2025. All rights reserved.
                            </p>
                            <div className="flex gap-3">
                                {[FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaFacebookF].map((Icon, i) => (
                                    <Link key={i} href="#" className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                                        <Icon size={18} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Колонки ссылок */}
                        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                            <FooterColumn title="More" links={["About", "Jobs", "Contact", "My Account"]} />
                            <FooterColumn title="Free Content" links={["Newsletter", "Articles & Guides", "Podcast", "Videos", "Book Notes"]} />
                            <FooterColumn title="Products" links={["My Book", "YouTuber Academy", "LifeOS"]} />
                        </div>
                    </div>

                    {/* Нижние ссылки */}
                    <div className="pt-8 border-t border-gray-100 flex gap-4 text-sm text-gray-400">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <span>/</span>
                        <Link href="#" className="hover:underline">Cookie Policy</Link>
                    </div>
                </div>
            </Container>

        </footer>
    );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-[11px]">{title}</h3>
            <ul className="flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link}>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm underline-offset-4 hover:underline decoration-sky-300">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}