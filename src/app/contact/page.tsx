import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
    title: 'Contact | Nodir Makhkamov',
    description: 'Get in touch with me.',
};

export default function Contact() {
    return (
        <Container>
            <div className="py-16 sm:py-24 max-w-xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-4">
                        Contact
                    </h1>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                        Have a question or want to work together? Send me a message below.
                    </p>
                </div>
                <ContactForm />
            </div>
        </Container>
    );
}
