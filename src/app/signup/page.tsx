'use client'
import type { FC } from 'react'
import type { FormDataObj } from '@utils/types/form'

import Form from '@components/common/form/form'
import { inputsData } from './constant'

const SignUp: FC = () => {
    async function signUpHandler(data: FormDataObj) {
        if (data.password !== data.repeat_password) return alert('password and repeat password should be the same!')

        const { repeat_password, ...sendData } = data

        const result = await fetch('api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(sendData),
            headers: {
                'Content-Type': 'application-json',
            },
        })

        console.log(await result.json())
    }

    return <Form inputs={inputsData} submitText='Sign up' submit={signUpHandler} />
}

export default SignUp
