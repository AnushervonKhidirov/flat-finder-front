import { ReactNode } from 'react'

export type Navigation = {
    name: string
    path: string
    subMenuItems: SubNavigation[]
}

export type SubNavigation = {
    name: string
    path: string
    icon: () => ReactNode
}
