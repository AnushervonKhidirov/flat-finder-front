import type { FC } from 'react'

import Content from '@components/common/content/content'
import HeaderMain from '@components/header-main/header-main'
import HeaderNavigation from '@components/header-navigation/header-navigation'

import styles from './header.module.css'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Content extraClasses={styles.header_content}>
                <HeaderMain />
                <HeaderNavigation />
            </Content>
        </header>
    )
}

export default Header
