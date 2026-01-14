'use client';

import { useActionState } from 'react';
import { sendEmail } from '@/app/actions';

const initialState = {
    message: '',
};

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    return (
        <form action={formAction} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 placeholder-zinc-500 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 placeholder-zinc-500 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 placeholder-zinc-500 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                        placeholder="Your message"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            {state?.message && (
                <p className="mt-2 text-sm text-green-600 dark:text-green-400 text-center">
                    {state.message}
                </p>
            )}
        </form>
    );
}
