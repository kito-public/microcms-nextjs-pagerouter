import Meta from '@/components/meta'
import Image from 'next/image'
import Link from "next/link";
import styles from '../../styles/about.module.scss'
import Accordion from '../../components/accordion';
import Togglebutton from '../../components/togglebutton';
export default function About() {
    return (
        <main className={styles.about}>
            <p className={styles.content}>about~</p>
            <Togglebutton />
            <Accordion heading="タイトルです">
                <p>
                    ヨハン・ランツァウ（デンマーク語：Johan RantzauあるいはJohann Rantzau、1492年11月12日 - 1565年12月12日）は、デンマークの政治家、軍人。伯爵戦争の活躍で彼の名は知られている。
                </p>
            </Accordion>
        </main>
    );
}
