import { useState, useEffect } from 'react'
import Link from 'next/link'
import {Post} from "@/types";


const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        // Fetch posts from API
        const fetchPosts = async () => {
            const response = await fetch('/api/posts')
            const data = await response.json()
            setPosts(data)
        }
        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link href="/posts/new">Create New Post</Link>
        </div>
    )
}

export default PostList