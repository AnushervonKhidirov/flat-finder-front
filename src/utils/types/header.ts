import { ReactNode } from 'react'

export interface INavigation {
    name: string
    path: string
    subMenuItems: ISubNavigation[]
}

export interface ISubNavigation {
    name: string
    path: string
    icon: () => ReactNode
}
