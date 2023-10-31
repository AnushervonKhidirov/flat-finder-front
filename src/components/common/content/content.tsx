import type { FC, ReactNode } from 'react'

import multiClasses from '@utils/multi-classes/multi-classes'

import styles from './content.module.css'

const Content: FC<{ extraClasses?: string; children: ReactNode }> = ({ extraClasses, children }) => {
    return <div className={multiClasses([styles.content, extraClasses ? extraClasses : ''])}>{children}</div>
}

export default Content
