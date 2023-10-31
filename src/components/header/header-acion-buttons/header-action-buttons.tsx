'use client'
import type { FC } from 'react'

import Button from '@commonComponents/button/Button'

import styles from './header-action-buttons.module.css'

const HeaderActionButtons: FC = () => {
    return (
        <div className={styles.action_buttons}>
            <Button>Log in</Button>
            <Button>Sign in</Button>
        </div>
    )
}

export default HeaderActionButtons
