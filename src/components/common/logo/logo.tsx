import type { FC } from 'react'

import Link from 'next/link'

import styles from './logo.module.css'

const Logo: FC = () => {
    return (
        <Link href='/' className={styles.logo}>
            <span className={styles.icon}>FF</span> <span>FlatFinder</span>
        </Link>
    )
}

export default Logo
