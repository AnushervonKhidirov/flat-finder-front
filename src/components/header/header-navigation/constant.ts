import type { INavigation } from '@utils/types/header'
import { Apartment, Commercial, House, Plot, Room } from '@assets/icons'

export const menuItems: INavigation[] = [
    {
        name: 'Buy',
        path: 'buy',
        subMenuItems: [
            {
                name: 'Apartment',
                path: 'buy/apartment',
                icon: Apartment,
            },
            {
                name: 'House',
                path: 'buy/house',
                icon: House,
            },
            {
                name: 'Commercial',
                path: 'buy/commercial',
                icon: Commercial,
            },
            {
                name: 'Plot',
                path: 'buy/plot',
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
                path: 'rent/apartment',
                icon: Apartment,
            },
            {
                name: 'Room',
                path: 'rent/room',
                icon: Room,
            },
            {
                name: 'House',
                path: 'rent/house',
                icon: House,
            },
            {
                name: 'Commercial',
                path: 'rent/commercial',
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
                path: 'daily_rent/apartment',
                icon: Apartment,
            },
            {
                name: 'Room',
                path: 'daily_rent/room',
                icon: Room,
            },
            {
                name: 'House',
                path: 'daily_rent/house',
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
                path: 'mortgage/apartment',
                icon: Apartment,
            },
            {
                name: 'House',
                path: 'mortgage/house',
                icon: House,
            },
            {
                name: 'Commercial',
                path: 'mortgage/commercial',
                icon: Commercial,
            },
        ],
    },
]
