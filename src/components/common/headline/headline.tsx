import type { FC, ReactNode } from 'react'

import styles from './headline.module.css'

const Headline1: FC<{ children: ReactNode }> = ({ children }) => {
    return <h1 className={styles.headline}>{children}</h1>
}

const Headline2: FC<{ children: ReactNode }> = ({ children }) => {
    return <h2 className={styles.headline}>{children}</h2>
}

export { Headline1, Headline2 }
