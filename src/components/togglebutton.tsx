// ToggleComponent.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/togglebutton.module.scss';

const ToggleComponent: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive((prev) => !prev);
    };

    useEffect(() => {
        if (isActive) {
            document.body.classList.add(styles.activeBody);
        } else {
            document.body.classList.remove(styles.activeBody);
        }
    }, [isActive]);

    return (
        <div>
            <button className={`btn ${isActive ? styles.activeChild : ''}`} onClick={toggleClass}>
                ボタンのトグル
            </button>
        </div>
    );
};

export default ToggleComponent;