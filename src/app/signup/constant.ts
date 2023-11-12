import { Input } from '@utils/types/form'

export const inputsData: Input[] = [
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
        required: true,
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
