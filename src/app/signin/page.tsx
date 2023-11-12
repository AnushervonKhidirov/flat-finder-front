'use client'
import type { FC } from 'react'

import Form from '@components/common/form/form'
import { inputsData } from './constant'

const SignIn: FC = () => {
    return <Form inputs={inputsData} submitText='Sign up' />
}

export default SignIn
