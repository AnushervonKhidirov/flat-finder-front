'use client'
import type { FC, ReactNode } from 'react'
import type { Popup, PopupCloseFn } from '@utils/types/popup'

import { useEffect } from 'react'

import { Close } from '@assets/icons'
import { Headline1 } from '../headline/headline'

import styles from './popup.module.css'

const Popup: FC<Popup> = ({ title, closePopup, children }) => {
    useEffect(() => {
        function closeOnEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') closePopup()
        }

        document.addEventListener('keydown', closeOnEscape)

        return () => {
            document.removeEventListener('keydown', closeOnEscape)
        }
    }, [closePopup])

    return (
        <div className={styles.popup}>
            <PopupOverlay closePopup={closePopup} />
            <PopupContent closePopup={closePopup}>
                <Headline1>{title}</Headline1>
                {children}
            </PopupContent>
        </div>
    )
}

const PopupContent: FC<{ closePopup: PopupCloseFn; children: ReactNode }> = ({ closePopup, children }) => {
    return (
        <div className={styles.content}>
            <ClosePopup closePopup={closePopup} />
            {children}
        </div>
    )
}

const PopupOverlay: FC<{ closePopup: PopupCloseFn }> = ({ closePopup }) => {
    return <div className={styles.overlay} onClick={closePopup}></div>
}

const ClosePopup: FC<{ closePopup: PopupCloseFn }> = ({ closePopup }) => {
    return (
        <div className={styles.close_btn} onClick={closePopup}>
            <Close />
        </div>
    )
}

export default Popup
