import React from "react";
import Link from "next/link";


const GridLayout: React.FC = () => {
    return (
        <div className="flex items-center justify-center mt-28">
            <div className="grid grid-cols-2 grid-rows-5 gap-15 w-[1000px] h-[1400px]">

                {/* 1 */}
                <div>
                    <p className="flex justify-self-start items-start flex-col font-def text-[70px] box">
                        How Can
                        <span className="font-Gravi font-bold relative flex inline-block  ">
                            Help
                            <span className="bg-[url('/variant=6.svg')] bg-cover bg-center w-full h-85 ">
                                You?
                            </span>
                        </span>
                    </p>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=13.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="font-Gravi font-bold text-4xl">Grow a YouTube Chanel</p>
                    <p className="font-medium text-xl">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="text-sm font-semibold leading-6 text-zinc-900 flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=9.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="font-Gravi font-bold text-4xl">Grow a YouTube Chanel</p>
                    <p className="font-medium text-xl">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="text-sm font-semibold leading-6 text-zinc-900 flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=15.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="font-Gravi font-bold text-4xl">Grow a YouTube Chanel</p>
                    <p className="font-medium text-xl">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="text-sm font-semibold leading-6 text-zinc-900 flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=11.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="font-Gravi font-bold text-4xl">Grow a YouTube Chanel</p>
                    <p className="font-medium text-xl">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="text-sm font-semibold leading-6 text-zinc-900 flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="row-span-3 box-puzzel flex items-center justify-center flex-col">
                    <p className="font-Gravi font-bold text-5xl">...and more!</p>

                    <Link
                        href="/projects"
                        className="text-sm font-semibold leading-6 text-zinc-900 flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default GridLayout;
