export type User = {
    id: string
    first_name: string
    last_name?: string
    email: string
    phone?: string
    password: string
}

export type UserForm = Omit<User, 'id'> & {
    repeat_password: string
}
