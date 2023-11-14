'use client'
import type { FC } from 'react'
import type { FormDataObj } from '@utils/types/form'

import Form from '@components/common/form/form'
import { inputsData } from './constant'

const SignIn: FC = () => {
    async function signInHandler(data: FormDataObj) {
        const result = await fetch('api/auth/signin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application-json',
            },
        })

        console.log(await result.json())
    }

    return <Form inputs={inputsData} submitText='Sign in' submit={signInHandler} />
}

export default SignIn
