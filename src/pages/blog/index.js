// pages/blog/page/[id].js
import Link from 'next/link';
import { Pagination } from '../../components/Pagination';
import { client } from "../../libs/client";

const PER_PAGE = 3;

// pages/blog/[id].js
export default function BlogPageId({ blog, totalCount }) {
    return (
        <div>
            <ul>
                {blog.map(blog => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
            <Pagination totalCount={totalCount} />
        </div>
    );
}


// データを取得
export const getStaticProps = async (context) => {
    const data = await client.get({ endpoint: "blog", queries: { offset: 0, limit: 3 } });
    return {
        props: {
            blog: data.contents,
            totalCount: data.totalCount,
        },
    };
};