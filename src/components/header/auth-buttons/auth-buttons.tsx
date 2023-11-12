import type { FC } from 'react'

import ButtonLink from '@components/common/button-link/button-link'

import styles from './auth-buttons.module.css'

const AuthButtons: FC = () => {
    return (
        <div className={styles.action_buttons}>
            <ButtonLink href='/signin'>Sign in</ButtonLink>
            <ButtonLink href='/signup'>Sign up</ButtonLink>
        </div>
    )
}

export default AuthButtons
