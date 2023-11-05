import type { FC, ChangeEvent } from 'react'
import type { IInput } from '@utils/types/form'

import { useState } from 'react'

import styles from './input.module.css'

const Input: FC<IInput> = ({ name, type = 'text', placeholder, required }) => {
    const [value, setValue] = useState('')

    function inputHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    return (
        <input
            className={styles.input}
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={e => inputHandler(e)}
        />
    )
}

export default Input
