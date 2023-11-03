import type { INavigation } from '@utils/types/header'
import { Apartment, Commercial, House, Plot, Room } from '@assets/icons'

export const menuItems: INavigation[] = [
    {
        name: 'Buy',
        path: 'buy',
        subMenuItems: [
            {
                name: 'Apartment',
                path: 'apartment',
                icon: Apartment,
            },
            {
                name: 'House',
                path: 'house',
                icon: House,
            },
            {
                name: 'Commercial',
                path: 'commercial',
                icon: Commercial,
            },
            {
                name: 'Plot',
                path: 'plot',
                icon: Plot,
            },
        ],
    },
    {
        name: 'Rent',
        path: 'rent',
        subMenuItems: [
            {
                name: 'Apartment',
                path: 'apartment',
                icon: Apartment,
            },
            {
                name: 'Room',
                path: 'room',
                icon: Room,
            },
            {
                name: 'House',
                path: 'house',
                icon: House,
            },
            {
                name: 'Commercial',
                path: 'commercial',
                icon: Commercial,
            },
        ],
    },
    {
        name: 'Rent daily',
        path: 'daily_rent',
        subMenuItems: [
            {
                name: 'Apartment',
                path: 'apartment',
                icon: Apartment,
            },
            {
                name: 'Room',
                path: 'room',
                icon: Room,
            },
            {
                name: 'House',
                path: 'house',
                icon: House,
            },
        ],
    },
    {
        name: 'Mortgage',
        path: 'mortgage',
        subMenuItems: [
            {
                name: 'Apartment',
                path: 'apartment',
                icon: Apartment,
            },
            {
                name: 'House',
                path: 'house',
                icon: House,
            },
            {
                name: 'Commercial',
                path: 'commercial',
                icon: Commercial,
            },
        ],
    },
]
