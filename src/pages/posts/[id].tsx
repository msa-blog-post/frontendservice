import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {Post, Comment} from "@/types";


const PostDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState<Post | null>(null)
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        if (id) {
            // Fetch post details
            const fetchPost = async () => {
                const response = await fetch(`/api/posts/${id}`)
                const data = await response.json()
                setPost(data)
            }
            fetchPost()

            // Fetch comments
            const fetchComments = async () => {
                const response = await fetch(`/api/comments/post/${id}`)
                const data = await response.json()
                setComments(data)
            }
            fetchComments()
        }
    }, [id])

    if (!post) return <div>Loading...</div>

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.content}</li>
                ))}
            </ul>
        </div>
    )
}

export default PostDetail