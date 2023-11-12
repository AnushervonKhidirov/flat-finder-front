'use client'
import type { FC } from 'react'

import SignUp from 'app/signup/page'
import Popup from '@components/common/popup/popup'

const SignUpPopup: FC = () => {
    return (
        <Popup title='Sign Up'>
            <SignUp />
        </Popup>
    )
}

export default SignUpPopup
