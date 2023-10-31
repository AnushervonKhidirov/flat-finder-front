import type { FC } from 'react'

import Content from '@commonComponents/content/content'
import HeaderMain from '@headerComponents/header-main/header-main'
import HeaderNavigation from '@headerComponents/header-navigation/header-navigation'

import styles from './header.module.css'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Content extraClasses={styles.header_content}>
                <HeaderMain />
            </Content>
            <HeaderNavigation />
        </header>
    )
}

export default Header
