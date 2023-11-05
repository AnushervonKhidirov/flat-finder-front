'use client'
import { useState, type FC } from 'react'

import Button from '@commonComponents/button/Button'
import Popup from '@components/common/popup/popup'

import styles from './header-action-buttons.module.css'

const HeaderActionButtons: FC = () => {
    const [popupOpened, setPopupOpened] = useState<boolean>(false)

    function closePopup() {
        setPopupOpened(false)
    }

    return (
        <div className={styles.action_buttons}>
            <Button onClick={() => setPopupOpened(true)}>Log in</Button>
            <Button onClick={() => setPopupOpened(true)}>Sign in</Button>

            {popupOpened && <Popup closePopup={closePopup}>hello</Popup>}
        </div>
    )
}

export default HeaderActionButtons
