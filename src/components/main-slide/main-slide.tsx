'use client'
import type { FC } from 'react'
import type { EstateTypes } from '@utils/types/url-params'

import { usePathname } from 'next/navigation'

import { slides } from './constant'

import styles from './main-slide.module.css'

const MainSlide: FC = () => {
    const path = usePathname()
    const currPath = path.replace('/', '').split('/')[1] as EstateTypes
    const image = currPath ? slides[currPath].img.src : slides.main.img.src

    return (
        <div className={styles.content_slide}>
            <div className={styles.content_slide_img} style={{ backgroundImage: `url(${image})` }} />
            {currPath && <div className={styles.slide_title}>{slides[currPath].title}</div>}
        </div>
    )
}

export default MainSlide
