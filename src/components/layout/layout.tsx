import type {PropsWithChildren} from 'react';
import {ScrollProgress} from '../scroll-progress/scroll-progress.tsx';

export const Layout = ({children} : PropsWithChildren) => {
    return (
        <>
            <ScrollProgress />
            <header></header>
            <main>{children}</main>
            <aside></aside>
            <footer></footer>
        </>
    )
}