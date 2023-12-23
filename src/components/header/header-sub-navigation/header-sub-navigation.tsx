'use client'
import type { FC } from 'react'
import type { SubNavigation } from '@utils/types/header'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Content from '@components/common/content/content'

import multiClasses from '@helpers/multi-classes/multi-classes'

import styles from './header-sub-navigation.module.css'

const HeaderSubNavigation: FC<{ navItems: SubNavigation[]; pagePath: string }> = ({ navItems, pagePath }) => {
    const path = usePathname()

    return (
        <div className={styles.navigation_wrapper}>
            <Content extraClasses={styles.navigation_content}>
                <nav className={styles.navigation}>
                    {navItems.map(navItem => {
                        const linkUrl = `/${pagePath}/${navItem.path}`
                        const isActive = path === linkUrl ? styles.active : ''

                        return (
                            <Link
                                href={linkUrl}
                                className={multiClasses(styles.nav_link, isActive)}
                                key={navItem.path}
                            >
                                <span className={styles.nav_icon}>{<navItem.icon />}</span>
                                <span className={styles.nav_name}>{navItem.name}</span>
                            </Link>
                        )
                    })}
                </nav>
            </Content>
        </div>
    )
}

export default HeaderSubNavigation
