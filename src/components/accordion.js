import { useState, useRef } from 'react'
import styles from '../styles/accordion.module.scss'
export default function Accordion({ heading, children }) {
    const [textIsOpen, setTextIsOpen] = useState(false)

    const toggleText = () => {
        setTextIsOpen((prev) => !prev)
    }

    const refText = useRef(null)

    return (
        <div className={styles.accordion}>
            <h3 className={styles.heading}>
                <button onClick={toggleText}>
                    {heading}
                </button>
            </h3>
            <div className={textIsOpen ? styles.open : styles.close}>
                <div className={styles.info}
                    ref={refText}
                    style={{
                        '--text-height': refText.current
                            ? `${refText.current.scrollHeight}px`
                            : '0px',
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}