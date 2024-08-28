export interface User {
    id: number;
    username: string;
    email: string;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    content: string;
    status: 'DRAFT' | 'PUBLISHED';
}

export interface Comment {
    id: number;
    postId: number;
    userId: number;
    content: string;
}

export interface Category {
    id: number;
    name: string;
    description: string;
}

export interface PostDocument {
    id: string;
    title: string;
    content: string;
}