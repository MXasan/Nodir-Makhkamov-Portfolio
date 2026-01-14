'use server';

export async function sendEmail(prevState: unknown, formData: FormData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log('Form submission:', { name, email, message });

    // In a real app, you would send an email here using a service like Resend, SendGrid, etc.

    return { message: 'Message sent successfully!' };
}
