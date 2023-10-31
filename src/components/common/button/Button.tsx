import type { FC, ReactNode } from 'react'

import styles from './Button.module.css'

interface IButton {
    callback?: () => any
    type?: 'submit' | 'reset'
    children: ReactNode
}

const Button: FC<IButton> = ({ callback, type, children }) => {
    return (
        <button className={styles.button} onClick={callback} type={type}>
            {children}
        </button>
    )
}

export default Button
