export interface IFormInputs {
    inputs: IInput[]
    submitText: string
}

export interface IInput {
    name: string
    type?: 'text' | 'email' | 'password' | 'number' | 'radio' | 'search' | 'tel'
    placeholder?: string
    required?: boolean
}

export interface IConvertedFormData {
    [key: string]: FormDataEntryValue
}
