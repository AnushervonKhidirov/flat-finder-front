import type { ReactNode } from 'react'

export type Popup = {
    title: string
    children: ReactNode
}

export type PopupCloseFn = () => void

export type PopupState = {
    isOpened: boolean
}
