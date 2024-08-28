import { useState } from 'react'
import {PostDocument} from "@/types";

const Search = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<PostDocument[]>([])

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await fetch(`/api/search?query=${query}`)
        const data = await response.json()
        setResults(data)
    }

    return (
        <div>
            <h1>Search Posts</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter search query"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Search