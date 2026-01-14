import { Container } from "@/components/ui/Container";

export const metadata = {
    title: 'About | Nodir Makhkamov',
    description: 'Learn more about Nodir Makhkamov, a software engineer and creator.',
};

export default function About() {
    return (
        <Container>
            <div className="py-16 sm:py-24">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-8">
                    About Me
                </h1>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <p className="lead">
                        I&apos;m a passionate software engineer with a focus on building scalable and user-friendly applications.
                        With years of experience in full-stack development, I enjoy solving complex problems and delivering high-quality code.
                    </p>
                    <p>
                        My journey in tech started with a curiosity about how things work on the web.
                        Over the years, I&apos;ve honed my skills in modern web technologies like React, Next.js, and TypeScript,
                        as well as backend technologies.
                    </p>
                    <p>
                        When I&apos;m not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing to open source projects.
                    </p>
                    {/* Add more sections as needed: Experience, Education, Skills */}
                </div>
            </div>
        </Container>
    );
}
