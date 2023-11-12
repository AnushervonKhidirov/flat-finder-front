import type { FC, ReactNode } from 'react'

import styles from './button.module.css'

type Button = {
    onClick?: () => any
    type?: 'submit' | 'reset'
    children: ReactNode
}

const Button: FC<Button> = ({ onClick, type, children }) => {
    return (
        <button className={styles.button} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button
