import { Container } from "@/components/ui/Container";
import Image from 'next/image';
import GridBoxs from "@/components/ui/gridBoxs";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className=" flex items-center flex-col bg-background w-full rounded-b-2xl pb-22 px-5 sm: px-10 md: px-10 ">
        <div className="flex flex-col justify-between py-10 md:py-20  md:py-4 max-w-[1200px]">
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software Engineer, Creator, and Learner.
        </h1> */}
          <div className="flex container-width items-center justify-between gap-10 lg:gap-20  max-sm:flex-col ">
            <img className="w-[250] md:w-[300] lg:w-[400px] h-full" src="face.png" alt="Nodir Makhkamov" />
            <div className="flex items-center flex-col sm:justify-start sm:items-start">
              <div className="flex items-center gap-2 text-4xl max-sm:mb-5 md:text-4xl lg:text-6xl xl:text-7xl font-serif font-bold relative">
                <span>Hey</span>
                <span className="relative inline-block">
                  Friends

                  <div className="absolute -bottom-5 left-0 w-full h-8">
                    <Image
                      src="/variant=2.svg"
                      alt="underline"
                      fill
                      className="object-contain"
                    />
                  </div>

                </span>
                <img
                  src="/variant=3.svg"
                  alt="underline"
                  className="mx-4 w-10 md:w-14 "
                />

              </div>
              <p className="md:mt-3 lg:mt-6 text-base lg:text-xl xl:text-3xl text-zinc-900 max-w-2xl ">
                I&apos;m Nodir Makhkamov, a software engineer who loves building high-quality web applications and exploring new technologies.
                <span className="text-bold">Welcome to my digital garden where I share my projects and thoughts.</span>
              </p>
            </div>
          </div>

          {/* <div className="mt-10 flex gap-6">
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
          </div> */}
        </div>

        {/* <div className="py-10 border-t border-zinc-100 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight mb-6 text-zinc-900 dark:text-zinc-100">Recent Work</h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            I&apos;ve worked on various projects ranging from web apps to backend systems. Check out the <Link href="/projects" className="text-cyan-600 hover:text-cyan-500 underline decoration-cyan-500/30 underline-offset-4">projects page</Link> to see what I&apos;ve been working on.
          </p>
        </div> */}

      </div >
      <GridBoxs />
    </Container>
  );
}
