import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'

import Header from '@layouts/header/header'
import Main from '@layouts/main/main'

import './index.css'

export const metadata: Metadata = {
    title: 'Flat Finder',
    description: 'Here you can buy or sale apartments',
}

const RootLayout: FC<{ children: ReactNode; popup: ReactNode }> = ({ children, popup }) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                <Main>{children}</Main>
                {popup}
            </body>
        </html>
    )
}

export default RootLayout
