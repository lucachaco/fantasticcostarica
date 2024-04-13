import { getBlogPosts } from '@lib/blogPosts'
export default async function Home() {
    const blogPosts = await getBlogPosts()
    console.log(blogPosts)
    return <>

    </>
}