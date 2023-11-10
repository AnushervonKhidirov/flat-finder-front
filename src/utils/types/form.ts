export type FormInputs = {
    inputs: Input[]
    submitText: string
    callback: (data: FormData) => void
}

export type Input = {
    name: string
    type?: 'text' | 'email' | 'password' | 'number' | 'radio' | 'search' | 'tel'
    placeholder?: string
    required?: boolean
}

export type FormData = {
    [key: string]: FormDataEntryValue
}
