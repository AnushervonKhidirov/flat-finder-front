import type { UserDB } from './database'

export type FormInputs = {
    inputs: Input[]
    submitText: string
    submit?: (data: FormDataObj) => void
}

export type Input = {
    name: string
    type?: 'text' | 'email' | 'password' | 'number' | 'radio' | 'search' | 'tel'
    placeholder?: string
    required?: boolean
}

export type FormDataObj = {
    [key: string]: FormDataEntryValue
}

export type SignUpForm = Omit<UserDB, 'id'> & {
    repeat_password: string
}

export type SignInForm = {
    email: string
    password: string
}
