import { getBlogPosts } from '@lib/blogPosts'
export default async function Home() {
    const blogPosts = await getBlogPosts()
    return (
        <div className="row">
            {blogPosts.map((post, index) => (
                <div key={index} className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{post.title}</span>
                            <p>{post.secondary_title}</p>
                            <p className="grey-text">{new Date(post.published_date).toLocaleDateString()}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}