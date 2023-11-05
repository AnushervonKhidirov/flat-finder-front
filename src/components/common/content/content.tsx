import type { FC, ReactNode } from 'react'

import multiClasses from '@helpers/multi-classes/multi-classes'

import styles from './content.module.css'

interface IContent {
    extraClasses?: string
    removePadding?: boolean
    children: ReactNode
}

const Content: FC<IContent> = ({ extraClasses, removePadding, children }) => {
    return (
        <div
            className={multiClasses([
                styles.content,
                removePadding ? styles.no_padding : '',
                extraClasses ? extraClasses : '',
            ])}
        >
            {children}
        </div>
    )
}

export default Content
