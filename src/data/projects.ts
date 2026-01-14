export interface Project {
    title: string;
    description: string;
    href: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        title: 'Personal Brand Website',
        description: 'A minimalist personal website built with Next.js, Tailwind CSS, and MDX.',
        href: '#',
        technologies: ['Next.js', 'Tailwind CSS', 'MDX', 'TypeScript'],
    },
    {
        title: 'E-commerce Dashboard',
        description: 'A comprehensive dashboard for managing products, orders, and customers.',
        href: '#',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
    },
    {
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates.',
        href: '#',
        technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    },
];
