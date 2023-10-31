'use client'
import type { FC } from 'react'
import type { ISubNavigation } from '@utils/types/header'

import Link from 'next/link'
import Content from '@components/common/content/content'

import multiClasses from '@utils/multi-classes/multi-classes'

import styles from './header-sub-navigation.module.css'

const HeaderSubNavigation: FC<{ navItems: ISubNavigation[] }> = ({ navItems }) => {
    return (
        <div className={styles.navigation_wrapper}>
            <Content extraClasses={styles.navigation_content}>
                <nav className={styles.navigation}>
                    {navItems.map(navItem => (
                        <Link href={navItem.path} className={multiClasses([styles.nav_link])} key={navItem.path}>
                            <span className={styles.nav_icon}>{<navItem.icon />}</span>
                            <span className={styles.nav_name}>{navItem.name}</span>
                        </Link>
                    ))}
                </nav>
            </Content>
        </div>
    )
}

export default HeaderSubNavigation
