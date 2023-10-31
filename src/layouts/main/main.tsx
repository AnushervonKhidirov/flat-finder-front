import type { FC, ReactNode } from 'react'

import Content from '@components/common/content/content'

import styles from './main.module.css'

const Main: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main className={styles.main}>
            <Content>{children}</Content>
        </main>
    )
}

export default Main
