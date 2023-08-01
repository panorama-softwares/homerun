import React from 'react';
import header from '../Header';

const Layout = ({ children }: any) => {
    return (
        <>
            <main>
                {
                    children
                }
            </main>
        </>
    )
}

export default Layout