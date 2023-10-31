'use client'
import type { FC } from 'react'

import Link from 'next/link'

import multiClasses from '@utils/multi-classes/multi-classes'
import { menuItems } from './constant'

import styles from './header-navigation.module.css'

const HeaderNavigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            {menuItems.map(item => (
                <Link
                    href={item.path}
                    className={multiClasses([styles.nav_link])}
                    key={item.path}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}

export default HeaderNavigation
