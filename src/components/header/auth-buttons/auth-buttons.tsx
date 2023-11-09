'use client'
import type { FC } from 'react'
import type { IConvertedFormData } from '@utils/types/form'

import { useState } from 'react'

import Button from '@commonComponents/button/Button'
import Popup from '@components/common/popup/popup'
import Form from '@components/common/form/form'

import { inputsLogInData, inputsSignInData } from './constant'

import styles from './auth-buttons.module.css'

const AuthButtons: FC = () => {
    return (
        <div className={styles.action_buttons}>
            <LogInBtn />
            <SignInBtn />
        </div>
    )
}

const LogInBtn: FC = () => {
    const [popupOpened, setPopupOpened] = useState<boolean>(false)

    function closePopup() {
        setPopupOpened(false)
    }

    function openPopup() {
        setPopupOpened(true)
    }

    function logIn(data: IConvertedFormData) {}

    return (
        <>
            <Button onClick={() => openPopup()}>Log in</Button>

            {popupOpened && (
                <Popup closePopup={closePopup} title='Log in'>
                    <Form inputs={inputsLogInData} submitText='Log in' callback={logIn} />
                </Popup>
            )}
        </>
    )
}

const SignInBtn: FC = () => {
    const [popupOpened, setPopupOpened] = useState<boolean>(false)

    function closePopup() {
        setPopupOpened(false)
    }

    function openPopup() {
        setPopupOpened(true)
    }

    async function signInHandler(data: IConvertedFormData) {
        if (data.password !== data.repeat_password) return alert('password and repeat password should be the same!')

        const result = await fetch('api/auth/registration', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application-json',
            },
        })
    }

    return (
        <>
            <Button onClick={() => openPopup()}>Sign in</Button>

            {popupOpened && (
                <Popup closePopup={closePopup} title='Sign in'>
                    <Form inputs={inputsSignInData} submitText='Sign in' callback={signInHandler} />
                </Popup>
            )}
        </>
    )
}

export default AuthButtons
