import Meta from '../components/meta'
import { MicroCMSImage } from 'microcms-js-sdk'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from "next/link";

import { client } from "../libs/client";


export default function Home({ blog, category }) {

  return (
    <main className={styles.main}>

      <Meta pageTitle="kitoblog" />
      <h1 className={styles.text__blue}>kitoblog</h1>
      <ul className={styles.list__category}>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <ul className={styles.list__blog}>
        {blog.map((blog) => (
          < li key={blog.id} >
            <Link href={`/blog/${blog.id}`}>
              <div className={styles.list__blog__img}>
                {blog.eyecatch ? (
                  <Image
                    src={blog.eyecatch.url}
                    width={blog.eyecatch.width}
                    height={blog.eyecatch.height}
                  />
                )
                  : (
                    <></>
                  )
                }
              </div>
              {blog.category ? (
                <p>{blog.category.name}</p>
              )
                : (
                  <></>
                )
              }
              <h3>{blog.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={'/blog'}>続きを見る</Link>
    </main >
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog", queries: { offset: 0, limit: 6 } });
  const categoryData = await client.get({ endpoint: "categories" });
  //console.log(data.contents)
  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};