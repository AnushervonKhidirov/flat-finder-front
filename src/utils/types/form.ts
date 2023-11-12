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
