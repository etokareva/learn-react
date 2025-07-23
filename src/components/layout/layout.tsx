import type {PropsWithChildren} from 'react';
import {ScrollProgress} from '../scroll-progress/scroll-progress.tsx';
import styles from './layout.module.css';

export const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className={styles.layout}>
            <ScrollProgress/>
            <header className={styles.header}></header>
            <main className={styles.main}>{children}</main>
            <aside className={styles.aside}></aside>
            <footer className={styles.footer}></footer>
        </div>
    )
}