import Head from 'next/head'
import { MicroCMSImage } from 'microcms-js-sdk'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from "next/link";

import { client } from "../libs/client";


export default function Category_list({ category }) {

    return (
        <div>
            <ul className={styles.list__category}>
                {category.map((category) => (
                    <li key={category.id}>
                        <Link href={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div >
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const categoryData = await client.get({ endpoint: "categories" });
    return {
        props: {
            category: categoryData.contents,
        },
    };
};