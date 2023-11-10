import type { FC, FormEvent } from 'react'
import type { FormInputs } from '@utils/types/form'

import Input from '../input/input'
import Button from '../button/Button'

import styles from './form.module.css'

const Form: FC<FormInputs> = ({ inputs, submitText, callback }) => {
    function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        callback(data)
    }

    return (
        <form className={styles.form} onSubmit={e => submitForm(e)}>
            {inputs.map(input => (
                <Input
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    key={input.name}
                    required={input.required}
                />
            ))}
            <Button type='submit'>{submitText}</Button>
        </form>
    )
}

export default Form
