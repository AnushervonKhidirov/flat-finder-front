import type { FC, ReactNode } from 'react'

import styles from './Button.module.css'

interface IButton {
    onClick?: () => any
    type?: 'submit' | 'reset'
    children: ReactNode
}

const Button: FC<IButton> = ({ onClick, type, children }) => {
    return (
        <button className={styles.button} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button
