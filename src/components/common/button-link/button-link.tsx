import type { FC, ReactNode } from 'react'
import Link from 'next/link'

import styles from './button-link.module.css'

type ButtonLink = {
    href: string
    children: ReactNode
}

const ButtonLink: FC<ButtonLink> = ({ href, children }) => {
    return (
        <Link href={href} className={styles.button_ink}>
            {children}
        </Link>
    )
}

export default ButtonLink
