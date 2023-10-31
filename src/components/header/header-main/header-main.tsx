import type { FC } from 'react'

import Logo from '@commonComponents/logo/logo'
import HeaderActionButtons from '@headerComponents/header-acion-buttons/header-action-buttons'

import styles from './header-main.module.css'

const HeaderMain: FC = () => {
    return (
        <div className={styles.header_main}>
            <Logo />
            <HeaderActionButtons />
        </div>
    )
}

export default HeaderMain
