import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata = {
    title: 'Projects | Nodir Makhkamov',
    description: 'A showcase of my recent projects and work.',
};

export default function Projects() {
    return (
        <Container>
            <div className="py-16 sm:py-24">
                <header className="max-w-2xl mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-6">
                        Projects
                    </h1>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                        A collection of projects I&apos;ve worked on. From small experiments to full-scale applications.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.title} className="flex flex-col items-start justify-between group">
                            <div className="relative w-full">
                                <div className="relative z-10 w-full p-6 border rounded-2xl border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 group-hover:border-zinc-200 dark:group-hover:border-zinc-700 transition-colors">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        <Link href={project.href}>
                                            <span className="absolute inset-0" />
                                            {project.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 ring-1 ring-inset ring-zinc-500/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Container>
    );
}
