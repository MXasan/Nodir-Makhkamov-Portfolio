import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="py-20 sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software Engineer, Creator, and Learner.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          I&apos;m Nodir Makhkamov, a software engineer who loves building high-quality web applications and exploring new technologies.
          Welcome to my digital garden where I share my projects and thoughts.
        </p>
        <div className="mt-10 flex gap-6">
          <Link
            href="/contact"
            className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100 flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            View Projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="py-10 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold tracking-tight mb-6 text-zinc-900 dark:text-zinc-100">Recent Work</h2>
        <p className="text-zinc-500 dark:text-zinc-400">
          I&apos;ve worked on various projects ranging from web apps to backend systems. Check out the <Link href="/projects" className="text-cyan-600 hover:text-cyan-500 underline decoration-cyan-500/30 underline-offset-4">projects page</Link> to see what I&apos;ve been working on.
        </p>
      </div>

    </Container>
  );
}
