'use client'
import type { FC } from 'react'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

import Link from 'next/link'
import HeaderSubNavigation from '../header-sub-navigation/header-sub-navigation'
import Content from '@components/common/content/content'

import multiClasses from '@helpers/multi-classes/multi-classes'
import { menuItems } from './constant'

import styles from './header-navigation.module.css'

const HeaderNavigation: FC = () => {
    const [hoveredNav, setHoveredNav] = useState<number | null>(null)
    const path = usePathname()
    const currPath = path.replace('/', '').split('/')[0]

    return (
        <div className={styles.navigation_wrapper} onMouseLeave={() => setHoveredNav(null)}>
            <Content extraClasses={styles.navigation_content}>
                <nav className={styles.navigation}>
                    {menuItems.map((item, index) => {
                        const path = `/offers/${item.path}`
                        const activeStyles = currPath === path ? styles.active : ''
                        const focusedStyles = hoveredNav === index ? styles.focused : ''

                        return (
                            <Link
                                href={path}
                                className={multiClasses(styles.nav_link, focusedStyles, activeStyles)}
                                onMouseEnter={() => setHoveredNav(index)}
                                key={item.path}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </Content>
            {hoveredNav !== null && (
                <HeaderSubNavigation
                    navItems={menuItems[hoveredNav].subMenuItems}
                    pagePath={`./offers/${menuItems[hoveredNav].path}`}
                />
            )}
        </div>
    )
}

export default HeaderNavigation
