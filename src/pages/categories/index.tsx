import { useState, useEffect } from 'react'
import Link from 'next/link'
import {Category} from "@/types";

const CategoryList = () => {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        // Fetch categories from API
        const fetchCategories = async () => {
            const response = await fetch('/api/categories')
            const data = await response.json()
            setCategories(data)
        }
        fetchCategories()
    }, [])

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link href={`/categories/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList