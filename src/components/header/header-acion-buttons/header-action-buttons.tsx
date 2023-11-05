'use client'
import type { FC } from 'react'
import type { IInput } from '@utils/types/form'

import { useState } from 'react'

import Button from '@commonComponents/button/Button'
import Popup from '@components/common/popup/popup'
import Form from '@components/common/form/form'

import { inputsLogInData, inputsSignInData } from './constant'

import styles from './header-action-buttons.module.css'

const HeaderActionButtons: FC = () => {
    const [popupOpened, setPopupOpened] = useState<boolean>(false)
    const [formInputs, setFormInputs] = useState<IInput[]>([])
    const [formTitle, setFormTitle] = useState<string | null>(null)

    function closePopup() {
        setPopupOpened(false)
        setFormTitle(null)
    }

    function openPopup(title: 'Log in' | 'Sign in') {
        title === 'Log in' ? setFormInputs(inputsLogInData) : setFormInputs(inputsSignInData)

        setPopupOpened(true)
        setFormTitle(title)
    }

    return (
        <div className={styles.action_buttons}>
            <Button onClick={() => openPopup('Log in')}>Log in</Button>
            <Button onClick={() => openPopup('Sign in')}>Sign in</Button>

            {popupOpened && formTitle && (
                <Popup closePopup={closePopup} title={formTitle}>
                    <Form inputs={formInputs} submitText={formTitle} />
                </Popup>
            )}
        </div>
    )
}

export default HeaderActionButtons
