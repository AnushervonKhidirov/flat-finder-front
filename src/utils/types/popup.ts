import type { ReactNode } from 'react'

export interface IPopup {
    title: string
    closePopup: TCloseFn
    children: ReactNode
}

export type TCloseFn = () => void

export interface IPopupState {
    isOpened: boolean
}
