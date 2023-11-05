import { IInput } from '@utils/types/form'

export const inputsLogInData: IInput[] = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        required: true,
    },
]

export const inputsSignInData: IInput[] = [
    {
        name: 'first_name',
        placeholder: 'First name',
        required: true,
    },
    {
        name: 'last_name',
        placeholder: 'Last name',
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
    },
    {
        name: 'phone',
        type: 'tel',
        placeholder: 'Phone number',
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        required: true,
    },
    {
        name: 'repeat_password',
        type: 'password',
        placeholder: 'Repeat your password',
        required: true,
    },
]
