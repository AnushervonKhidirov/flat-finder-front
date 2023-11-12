import type { FC, ReactNode } from 'react'
import MainSlide from '@components/main-slide/main-slide'

const OffersLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <MainSlide />
            {children}
        </>
    )
}

export default OffersLayout
