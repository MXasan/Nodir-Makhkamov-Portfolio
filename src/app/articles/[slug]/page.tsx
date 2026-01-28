import { Container } from "@/components/ui/Container";
import { getArticleBySlug, getArticles } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from 'next/link';

export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist.',
        };
    }

    return {
        title: `${article.title} | Nodir Makhkamov`,
        description: article.description,
    };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <Container>
            <div className="py-16 sm:py-25">
                <Link
                    href="/articles"
                    className="flex items-center justify-center w-10 h-10 mb-8 transition bg-white border rounded-full shadow-md group shadow-zinc-800/5 ring-1 ring-zinc-900/5 border-zinc-700/50 bg-zinc-800 ring-0 ring-white/10 hover:border-zinc-700 hover:ring-white/20"
                >
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 group-hover:stroke-zinc-400">
                        <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
                <article>
                    <header className="flex flex-col">
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                            {article.title}
                        </h1>
                        <time
                            dateTime={article.date}
                            className="flex items-center order-first text-base text-zinc-500"
                        >
                            <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                            <span className="ml-3">{article.date}</span>
                        </time>
                    </header>
                    <div className="mt-8 prose prose-zinc prose-invert text-foreground text-xl">
                        <MDXRemote source={article.content}/>
                    </div>
                </article>
            </div>
        </Container>
    );
}
