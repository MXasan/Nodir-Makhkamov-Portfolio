import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface Article {
    slug: string;
    title: string;
    description: string;
    date: string;
    content: string;
}

export async function getArticles(): Promise<Article[]> {
    const fileNames = fs.readdirSync(contentDirectory);
    const allArticlesData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get slug
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            slug,
            content: matterResult.content,
            ...(matterResult.data as { title: string; description: string; date: string }),
        };
    });

    // Sort articles by date
    return allArticlesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
    try {
        const fullPath = path.join(contentDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
            slug,
            content: matterResult.content,
            ...(matterResult.data as { title: string; description: string; date: string }),
        };
    } catch (_error) {
        return null;
    }
}
