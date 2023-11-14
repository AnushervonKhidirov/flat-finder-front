import type { User } from './user'

export type Insert = {
    fieldCount: number
    affectedRows: number
    insertId: number
    serverStatus: number
    warningCount: number
    message: string
    protocol41: boolean
    changedRows: number
}

export type UserDB = User & {
    password: string
}
