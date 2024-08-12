export interface News {
    uuid: string;
    title: string;
    description: string;
    image_url: string;
    keywords: string[];
    language: string;
    published_at: string;
    relevance_score?: string;
    snippet: string;
    source: string;
    categories: string[];
}