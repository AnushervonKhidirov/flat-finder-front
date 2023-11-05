import type { IPopupState } from '@utils/types/popup'
import type { RootState } from '../store'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IPopupState = {
    isOpened: false,
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        popupOpen: state => {
            state.isOpened = true
        },

        popupClose: state => {
            state.isOpened = false
        },
    },
})

export const getPopupState = (state: RootState) => state.popup.isOpened

export const { popupOpen, popupClose } = popupSlice.actions
export default popupSlice.reducer
