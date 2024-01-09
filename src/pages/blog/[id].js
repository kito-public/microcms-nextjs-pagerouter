// pages/blog/[id].js
import { client } from "../../libs/client";
import { extractText } from "../../libs/extract-text"
import Meta from '../../components/meta'
import styles from '@/styles/Home.module.scss'

export default function BlogId({ blog }) {
    return (
        <main>
            {blog.eyecatch ? (
                <Meta
                    pageTitle={blog.title}
                    pageDesc={blog.description}
                    pageImg={blog.eyecatch.url}
                    pageImgW={blog.eyecatch.width}
                    pageImgH={blog.eyecatch.height}
                />
            )
                : (
                    <Meta
                        pageTitle={blog.title}
                        pageDesc={blog.description}
                    />
                )
            }
            <h1>title:{blog.title}</h1>
            <p>{blog.publishedAt}</p>

            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                }}
            />
        </main>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    const description = extractText(data.content)
    return {
        props: {
            blog: data,
            description: description,
        },
    };
};