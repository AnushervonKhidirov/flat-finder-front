import type { FC } from 'react'

import Logo from '@commonComponents/logo/logo'
import AuthButtons from '@headerComponents/auth-buttons/auth-buttons'

import styles from './header-main.module.css'

const HeaderMain: FC = () => {
    return (
        <div className={styles.header_main}>
            <Logo />
            <AuthButtons />
        </div>
    )
}

export default HeaderMain
