import Link from 'next/link';
import styles from '@/styles/Home.module.scss'


export const Pagination = ({ totalCount, current = 1 }) => {
    const PER_PAGE = 3;
    console.log("current=" + current);
    const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
    const totalPage = Math.ceil(totalCount / PER_PAGE);
    //console.log(totalPage)
    return (
        <ul className={styles.pagination}>
            <li>
                {current == 1 ? (
                    <></>
                ) : (
                    <Link href={`/blog/page/${Number(current) - 1}`}>←</Link>
                )}
            </li>
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
                <li key={index}>
                    {current == number ? (
                        <p>{number}</p>
                    ) : (
                        <Link href={`/blog/page/${number}`}>{number}</Link>
                    )}
                </li>
            ))}
            <li>
                {current == totalPage ? (
                    <></>
                ) : (
                    <Link href={`/blog/page/${Number(current) + 1}`}>→</Link>
                )}
            </li>
        </ul>
    );
};