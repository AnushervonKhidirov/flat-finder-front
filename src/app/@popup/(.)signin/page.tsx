'use client'
import type { FC } from 'react'

import SignIn from 'app/signin/page'
import Popup from '@components/common/popup/popup'

const SignInPopup: FC = () => {
    return (
        <Popup title='Sign In'>
            <SignIn />
        </Popup>
    )
}

export default SignInPopup
