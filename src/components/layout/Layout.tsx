import type {PropsWithChildren} from 'react';

export const Layout = ({children} : PropsWithChildren) => {
    return (
        <>
            <header></header>
            <main>{children}</main>
            <aside></aside>
            <footer></footer>
        </>
    )
}