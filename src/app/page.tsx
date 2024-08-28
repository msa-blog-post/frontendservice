import Link from "next/link";
import Head from "next/head";
import {NextPage} from "next";

const Home: NextPage = () => {
  return (
      <div>
        <Head>
          <title>Blog Application</title>
          <meta name="description" content="A blog application built with Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Welcome to Our Blog</h1>
          <nav>
            <ul>
              <li><Link href="/posts">Posts</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/search">Search</Link></li>
            </ul>
          </nav>
        </main>
      </div>
  )
}

export default Home